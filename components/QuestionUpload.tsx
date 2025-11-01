
import React, { useRef, useState } from 'react';
import Card from './Card';
import { CloudArrowUpIcon } from './icons';
import { parseAndValidateQuestions } from '../utils/questionParser';
import { Question } from '../types';
import { LoadingSpinner } from './LoadingSpinner';

interface QuestionUploadProps {
  onUpload: (questions: Question[]) => number;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export const QuestionUpload: React.FC<QuestionUploadProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setStatus('loading');
    setMessage('Đang xử lý tệp...');

    try {
      const newQuestions = await parseAndValidateQuestions(file);
      const addedCount = onUpload(newQuestions);
      setStatus('success');
      setMessage(`Thêm thành công ${addedCount} câu hỏi mới!`);
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) {
        setMessage(`Lỗi: ${error.message}`);
      } else {
        setMessage('Đã xảy ra lỗi không xác định.');
      }
    } finally {
        // Reset file input to allow re-uploading the same file
        if(fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }
  };

  const statusColors: Record<Status, string> = {
    idle: 'text-slate-500',
    loading: 'text-primary',
    success: 'text-success',
    error: 'text-danger',
  };

  return (
    <Card className="w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-4">Góp ý câu hỏi</h2>
      <p className="text-slate-600 mb-6">Bạn có muốn mở rộng bộ câu hỏi? Tải lên tệp tin câu hỏi của riêng bạn theo định dạng JSON hoặc CSV.</p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Upload Area */}
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 rounded-lg h-full">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json,.csv"
            className="hidden"
          />
          <CloudArrowUpIcon className="w-16 h-16 text-slate-400 mb-4" />
          <button
            onClick={handleUploadClick}
            className="bg-primary text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-primary/90 transition-all duration-300"
            disabled={status === 'loading'}
          >
            Chọn tệp tin
          </button>
          <p className="text-sm text-slate-500 mt-2">Hỗ trợ .json, .csv</p>
          {status !== 'idle' && (
            <div className={`mt-4 text-center font-semibold ${statusColors[status]}`}>
              {status === 'loading' ? <div className="flex items-center"><LoadingSpinner /> <span className="ml-2">{message}</span></div> : message}
            </div>
          )}
        </div>

        {/* Instructions Area */}
        <div className="prose prose-sm max-w-none text-slate-700">
          <h4 className="font-bold">Hướng dẫn định dạng</h4>
          <p>Tệp của bạn phải là một mảng các đối tượng câu hỏi. Mỗi câu hỏi phải có các trường sau:</p>
          <ul>
            <li><strong>id</strong> (string): Mã định danh duy nhất.</li>
            <li><strong>topicId</strong> (string): Mã của chủ đề liên quan.</li>
            <li><strong>stem</strong> (string): Nội dung câu hỏi.</li>
            <li><strong>options</strong> (array of strings): Các lựa chọn trả lời.</li>
            <li><strong>answerIndices</strong> (array of numbers): Chỉ số (bắt đầu từ 0) của các đáp án đúng.</li>
            <li><strong>difficulty</strong> (string): 'Easy', 'Medium', hoặc 'Hard'.</li>
          </ul>
          <p className="font-bold mt-4">Đối với tệp CSV:</p>
          <p>Các cột phải theo đúng thứ tự: <code>id,topicId,stem,options,answerIndices,difficulty,tags,explanation_prompt</code>.</p>
          <p>Các trường mảng (<code>options</code>, <code>answerIndices</code>, <code>tags</code>) phải được phân tách bằng dấu gạch đứng (<code>|</code>).</p>
          <p>Ví dụ một dòng trong CSV:</p>
          <pre className="bg-slate-100 p-2 rounded"><code>"q1","t1","Bầu trời màu gì?","Xanh|Đỏ|Vàng","0","Easy","khoa-hoc","..."</code></pre>
        </div>
      </div>
    </Card>
  );
};
