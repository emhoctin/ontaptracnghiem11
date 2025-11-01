
import { Question, Difficulty } from '../types';

// Type guard to check if an object is a valid Question
const isQuestion = (obj: any): obj is Question => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'string' &&
    typeof obj.topicId === 'string' &&
    typeof obj.stem === 'string' &&
    Array.isArray(obj.options) &&
    obj.options.every((opt: any) => typeof opt === 'string') &&
    Array.isArray(obj.answerIndices) &&
    obj.answerIndices.every((i: any) => typeof i === 'number') &&
    ['Easy', 'Medium', 'Hard'].includes(obj.difficulty) &&
    Array.isArray(obj.tags) && // Optional but check if exists
    typeof obj.explanation_prompt === 'string' // Optional but check if exists
  );
};

const parseAndValidateJson = (text: string): Question[] => {
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error('Tệp JSON không hợp lệ. Vui lòng kiểm tra cú pháp.');
  }

  if (!Array.isArray(data)) {
    throw new Error('Tệp JSON phải chứa một mảng các câu hỏi.');
  }

  for (let i = 0; i < data.length; i++) {
    if (!isQuestion(data[i])) {
      throw new Error(`Câu hỏi ở vị trí ${i} trong tệp JSON có cấu trúc không hợp lệ.`);
    }
  }

  return data as Question[];
};

const parseAndValidateCsv = (text: string): Question[] => {
    const lines = text.trim().split(/\r?\n/);
    if (lines.length < 2) {
        throw new Error('Tệp CSV phải có ít nhất một dòng tiêu đề và một dòng dữ liệu.');
    }

    const header = lines[0].split(',').map(h => h.trim());
    const expectedHeader = ['id', 'topicId', 'stem', 'options', 'answerIndices', 'difficulty', 'tags', 'explanation_prompt'];
    if (JSON.stringify(header) !== JSON.stringify(expectedHeader)) {
        throw new Error(`Tiêu đề CSV không hợp lệ. Phải là: ${expectedHeader.join(',')}`);
    }

    const questions: Question[] = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        if (values.length !== expectedHeader.length) {
            throw new Error(`Dòng ${i + 1} có số lượng cột không khớp với tiêu đề.`);
        }
        
        try {
            const questionObj: Question = {
                id: values[0].trim(),
                topicId: values[1].trim(),
                stem: values[2].trim().replace(/^"|"$/g, ''),
                options: values[3].split('|').map(opt => opt.trim().replace(/^"|"$/g, '')),
                answerIndices: values[4].split('|').map(idx => parseInt(idx.trim(), 10)).filter(num => !isNaN(num)),
                difficulty: values[5].trim() as Difficulty,
                tags: values[6] ? values[6].split('|').map(tag => tag.trim()) : [],
                explanation_prompt: values[7] ? values[7].trim().replace(/^"|"$/g, '') : '',
            };

            if (!isQuestion(questionObj)) {
                 throw new Error(`Dữ liệu ở dòng ${i + 1} có cấu trúc hoặc kiểu dữ liệu không hợp lệ.`);
            }
             // Additional check for answerIndices range
            questionObj.answerIndices.forEach(idx => {
                if (idx < 0 || idx >= questionObj.options.length) {
                    throw new Error(`Chỉ số đáp án ở dòng ${i + 1} nằm ngoài phạm vi lựa chọn.`);
                }
            });


            questions.push(questionObj);
        } catch (e) {
             if (e instanceof Error) {
                throw new Error(`Lỗi xử lý dòng ${i + 1}: ${e.message}`);
            }
            throw new Error(`Lỗi không xác định khi xử lý dòng ${i + 1}.`);
        }
    }

    return questions;
};

export const parseAndValidateQuestions = (file: File): Promise<Question[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target?.result as string;
      try {
        if (file.type === 'application/json' || file.name.endsWith('.json')) {
          resolve(parseAndValidateJson(text));
        } else if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
          resolve(parseAndValidateCsv(text));
        } else {
          reject(new Error('Định dạng tệp không được hỗ trợ. Vui lòng sử dụng .json hoặc .csv.'));
        }
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error('Không thể đọc tệp.'));
    };

    reader.readAsText(file);
  });
};
