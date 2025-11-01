import { Question } from '../types';

export const BIOLOGY_QUESTIONS_B1: Question[] = [
  // =================================================================
  // BÀI 1: KHÁI QUÁT VỀ TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG
  // =================================================================
  {
    id: 'bio_b1_mc_01',
    topicId: 'topic_bio_11_01',
    stem: 'Sinh vật có thể tồn tại, sinh trưởng, phát triển và thích nghi với môi trường sống nhờ có sự',
    options: [
      'Chuyển hóa năng lượng và cảm ứng',
      'Trao đổi chất và chuyển hóa năng lượng.',
      'Chuyển hóa năng lượng và sinh sản.',
      'Trao đổi chất và cảm ứng.'
    ],
    answerIndices: [1],
    difficulty: 'Easy',
    tags: ['Trao đổi chất', 'Chuyển hóa năng lượng', 'Đặc trưng sự sống'],
    explanation_prompt: 'Giải thích tại sao trao đổi chất và chuyển hóa năng lượng là cơ sở cho các hoạt động sống như sinh trưởng, phát triển và thích nghi.'
  },
  {
    id: 'bio_b1_mc_02',
    topicId: 'topic_bio_11_01',
    stem: 'Tất cả các cơ thể sống đều thường xuyên phải trao đổi chất và năng lượng với môi trường gọi là',
    options: [
      'tính thứ bậc.',
      'khả năng tự điều chỉnh.',
      'sự liên tục tiến hóa.',
      'hệ thống mở.'
    ],
    answerIndices: [3],
    difficulty: 'Easy',
    tags: ['Hệ thống sống', 'Hệ thống mở'],
    explanation_prompt: 'Giải thích khái niệm "hệ thống mở" trong sinh học và tại sao cơ thể sống được coi là một hệ thống mở.'
  },
  {
    id: 'bio_b1_mc_03',
    topicId: 'topic_bio_11_01',
    stem: 'Mọi cơ thể sống đều không ngừng trao đổi chất và chuyển hóa năng lượng với môi trường, khi quá trình này dừng lại thì',
    options: [
      'sinh vật sẽ không sống được.',
      'sinh vật sẽ phát triển bình thường.',
      'sinh vật sẽ sinh sản bình thường.',
      'sinh vật sẽ vận động bình thường.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Trao đổi chất', 'Sự sống'],
    explanation_prompt: 'Giải thích mối quan hệ trực tiếp giữa việc dừng trao đổi chất và cái chết của sinh vật.'
  },
  {
    id: 'bio_b1_mc_04',
    topicId: 'topic_bio_11_01',
    stem: 'Phát biểu nào sau đây là đúng khi nói về trao đổi chất và chuyển hóa năng lượng ở sinh vật?',
    options: [
      'Trao đổi chất và chuyển hóa năng lượng giúp sinh vật tồn tại và phát triển.',
      'Một số sinh vật có thể tồn tại mà không cần quá trình trao đổi chất và chuyển hóa năng lượng.',
      'Vật chất và năng lượng được sinh vật lấy vào cơ thể và tái sử dụng nhiều lần.',
      'Trao đổi chất và chuyển hóa năng lượng là hai quá trình độc lập với nhau trong cơ thể sống.'
    ],
    answerIndices: [0],
    difficulty: 'Medium',
    tags: ['Trao đổi chất', 'Chuyển hóa năng lượng'],
    explanation_prompt: 'Phân tích các phát biểu và chỉ ra tại sao trao đổi chất và chuyển hóa năng lượng là hai quá trình luôn song hành và cần thiết cho mọi sinh vật.'
  },
  {
    id: 'bio_b1_mc_05',
    topicId: 'topic_bio_11_01',
    stem: 'Trao đổi chất và chuyển hóa năng lượng ở sinh vật không có vai trò nào sau đây?',
    options: [
      'Giúp cho sinh vật thích nghi với mọi điều kiện sống của môi trường.',
      'Cung cấp năng lượng cần thiết cho mọi hoạt động sống của tế bào và cơ thể.',
      'Giúp bài tiết các chất thải và chất độc hại ra môi trường bên ngoài.',
      'Cung cấp nguyên liệu cho quá trình hình thành chất sống của cơ thể.'
    ],
    answerIndices: [0],
    difficulty: 'Medium',
    tags: ['Trao đổi chất', 'Vai trò'],
    explanation_prompt: 'Giải thích các vai trò chính của trao đổi chất và năng lượng (cung cấp năng lượng, nguyên liệu, bài tiết). Thích nghi là một quá trình phức tạp hơn, không chỉ phụ thuộc vào trao đổi chất tức thời.'
  },
  {
    id: 'bio_b1_mc_06',
    topicId: 'topic_bio_11_01',
    stem: 'Các dấu hiệu đặc trưng của trao đổi chất và chuyển hóa năng lượng ở sinh vật là',
    options: [
      'tiếp nhận các chất từ môi trường và vận chuyển các chất → Biến đổi các chất kèm theo chuyển hóa năng lượng ở cơ thể → Thải các chất vào môi trường → Điều hòa.',
      'tiếp nhận các chất từ môi trường và vận chuyển các chất → Biến đổi các chất kèm theo chuyển hóa năng lượng ở tế bào → Thải các chất vào môi trường → Điều hòa.',
      'tiếp nhận các chất từ con người và vận chuyển các chất → Biến đổi các chất kèm theo chuyển hóa năng lượng ở tế bào → Thải các chất vào môi trường → Điều hòa.',
      'tiếp nhận các chất từ môi trường và vận chuyển các chất → Biến đổi các chất kèm theo chuyển hóa năng lượng ở tế bào → Giữ lại tất cả các chất → Điều hòa.'
    ],
    answerIndices: [1],
    difficulty: 'Medium',
    tags: ['Dấu hiệu trao đổi chất'],
    explanation_prompt: 'Phân tích chuỗi quá trình đặc trưng của trao đổi chất: tiếp nhận, biến đổi (ở cấp độ tế bào), thải ra và điều hòa.'
  },
  {
    id: 'bio_b1_mc_07',
    topicId: 'topic_bio_11_01',
    stem: '“Ở thực vật, lá hấp thụ khí CO2 từ không khí, rễ hấp thụ nước từ đất sau đó vận chuyển lên lá nhờ hệ thống mạch gỗ để quang hợp” là dấu hiệu của sự',
    options: [
      'thu nhận và vận chuyển các chất.',
      'biến đổi và điều hòa các chất.',
      'bài tiết các chất thải ra ngoài.',
      'chuyển hóa năng lượng.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Trao đổi chất', 'Thu nhận và vận chuyển'],
    explanation_prompt: 'Giải thích tại sao quá trình lấy CO2 và nước được mô tả là giai đoạn "thu nhận và vận chuyển" trong trao đổi chất của thực vật.'
  },
  {
    id: 'bio_b1_mc_08',
    topicId: 'topic_bio_11_01',
    stem: '“Quá trình quang hợp hấp thụ và chuyển hóa năng lượng ánh sáng thành năng lượng trong các chất hữu cơ tổng hợp được” là dấu hiệu của sự',
    options: [
      'chuyển hóa năng lượng.',
      'bài tiết các chất thải.',
      'thu nhận các chất.',
      'biến đổi các chất.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Chuyển hóa năng lượng', 'Quang hợp'],
    explanation_prompt: 'Giải thích tại sao quang hợp là một ví dụ điển hình của quá trình chuyển hóa năng lượng (từ quang năng thành hóa năng).'
  },
  {
    id: 'bio_b1_mc_09',
    topicId: 'topic_bio_11_01',
    stem: '“Ở thực vật, năng lượng từ ánh sáng được tích luỹ trong các chất hữu cơ tổng hợp từ quang hợp, sau đó các chất hữu cơ được phân giải trong quá trình hô hấp để giải phóng năng lượng cung cấp cho các hoạt động sống” là dấu hiệu của sự',
    options: [
      'Biến đổi vật chất và chuyển hóa năng lượng.',
      'Bài tiết các chất thải vào môi trường.',
      'Thu nhận và vận chuyển các chất.',
      'Điều hòa quá trình trao đổi chất.'
    ],
    answerIndices: [0],
    difficulty: 'Medium',
    tags: ['Chuyển hóa năng lượng', 'Biến đổi vật chất', 'Quang hợp', 'Hô hấp'],
    explanation_prompt: 'Phân tích ví dụ để thấy rõ sự kết hợp giữa biến đổi vật chất (tổng hợp và phân giải chất hữu cơ) và chuyển hóa năng lượng (tích lũy và giải phóng).'
  },
  {
    id: 'bio_b1_mc_10',
    topicId: 'topic_bio_11_01',
    stem: '“Thực vật thải O2 trong quang hợp, thải CO2 trong hô hấp tế bào và bài tiết ure dư thừa qua các mô tiết ở lá” là dấu hiệu của sự',
    options: [
      'bài tiết các chất thải.',
      'chuyển hóa năng lượng.',
      'thu nhận các chất.',
      'biến đổi các chất.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Trao đổi chất', 'Bài tiết'],
    explanation_prompt: 'Giải thích rằng việc loại bỏ các chất không cần thiết hoặc dư thừa như O2 (từ quang hợp), CO2 (từ hô hấp) ra khỏi cơ thể là quá trình bài tiết.'
  },
  {
    id: 'bio_b1_mc_11',
    topicId: 'topic_bio_11_01',
    stem: 'Ở động vật, quá trình điều hòa các hoạt động trao đổi chất và chuyển hóa năng lượng được thực hiện chủ yếu thông qua',
    options: [
      'hệ thần kinh và hormone.',
      'hệ tiêu hóa và hệ tuần hoàn.',
      'hệ thần kinh và hệ tuần hoàn.',
      'hệ tiêu hóa và hệ tiết niệu.'
    ],
    answerIndices: [0],
    difficulty: 'Medium',
    tags: ['Điều hòa', 'Động vật', 'Hệ thần kinh', 'Hormone'],
    explanation_prompt: 'Giải thích vai trò của hệ thần kinh (điều khiển nhanh) và hormone (điều khiển chậm và kéo dài) trong việc điều hòa trao đổi chất ở động vật.'
  },
  {
    id: 'bio_b1_mc_12',
    topicId: 'topic_bio_11_01',
    stem: 'Ở thực vật, quá trình điều hòa các hoạt động trao đổi chất và chuyển hóa năng lượng được thực hiện chủ yếu thông qua',
    options: [
      'hệ thần kinh.',
      'mạch gỗ, mạch rây.',
      'hormone.',
      'các mô phân sinh.'
    ],
    answerIndices: [2],
    difficulty: 'Medium',
    tags: ['Điều hòa', 'Thực vật', 'Hormone'],
    explanation_prompt: 'Giải thích rằng ở thực vật, không có hệ thần kinh, việc điều hòa chủ yếu do các hormone thực vật (phytohormone) đảm nhiệm.'
  },
  {
    id: 'bio_b1_mc_13',
    topicId: 'topic_bio_11_01',
    stem: 'Quá trình trao đổi chất và chuyển hóa năng lượng được điều hòa các cơ chế điều hòa và chủ yếu dựa trên',
    options: [
      'nhu cầu của cơ thể.',
      'nhu cầu duy trì.',
      'hoạt động thể chất.',
      'hoạt động cơ bản.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Điều hòa', 'Nhu cầu cơ thể'],
    explanation_prompt: 'Giải thích nguyên tắc cơ bản của điều hòa trao đổi chất là để đáp ứng nhu cầu năng lượng và vật chất luôn thay đổi của cơ thể.'
  },
  {
    id: 'bio_b1_mc_14',
    topicId: 'topic_bio_11_01',
    stem: '“Khi gặp điều kiện khô hạn, cơ thể thực vật tổng hợp abscisic acid gây ức chế trao đổi chất và chuyển hoá năng lượng làm cây rụng lá” là dấu hiệu của sự',
    options: [
      'bài tiết.',
      'chuyển hóa năng lượng.',
      'điều hòa.',
      'biến đổi các chất.'
    ],
    answerIndices: [2],
    difficulty: 'Medium',
    tags: ['Điều hòa', 'Thực vật', 'Hormone'],
    explanation_prompt: 'Giải thích đây là một ví dụ về sự điều hòa của hormone (abscisic acid) để giúp cây thích ứng với điều kiện môi trường bất lợi.'
  },
  {
    id: 'bio_b1_mc_15',
    topicId: 'topic_bio_11_01',
    stem: 'Quá trình tổng hợp các chất phức tạp từ các chất đơn giản (đồng hóa) sẽ đi kèm với sự',
    options: [
      'tích lũy năng lượng.',
      'giải phóng năng lượng.',
      'phân giải năng lượng.',
      'bài tiết chất thải.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Đồng hóa', 'Tích lũy năng lượng'],
    explanation_prompt: 'Giải thích tại sao đồng hóa là quá trình tổng hợp, tạo liên kết hóa học mới, do đó cần năng lượng và tích lũy năng lượng trong các liên kết đó.'
  },
  {
    id: 'bio_b1_mc_16',
    topicId: 'topic_bio_11_01',
    stem: 'Quá trình phân giải các chất phức tạp thành các chất đơn giản (dị hóa) sẽ đi kèm với sự',
    options: [
      'giải phóng năng lượng.',
      'tích lũy năng lượng.',
      'phân giải năng lượng.',
      'bài tiết chất thải.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Dị hóa', 'Giải phóng năng lượng'],
    explanation_prompt: 'Giải thích tại sao dị hóa là quá trình phá vỡ các liên kết hóa học, do đó giải phóng năng lượng được tích trữ trong các liên kết đó.'
  },
  {
    id: 'bio_b1_mc_17',
    topicId: 'topic_bio_11_01',
    stem: 'Dạng năng lượng chủ yếu được sử dụng cho các hoạt động sống của tế bào và cơ thể là',
    options: [
      'ATP.',
      'ADP.',
      'AMP.',
      'NADH.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Năng lượng', 'ATP'],
    explanation_prompt: 'Giải thích vai trò của ATP là "đồng tiền năng lượng" của tế bào, cung cấp năng lượng trực tiếp cho các hoạt động sống.'
  },
  {
    id: 'bio_b1_mc_18',
    topicId: 'topic_bio_11_01',
    stem: 'Trong cơ thể quá trình nào sau đây tạo ra nhiều năng lượng ATP nhất?',
    options: [
      'hô hấp.',
      'tiêu hóa.',
      'bài tiết.',
      'quang hợp.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Năng lượng', 'ATP', 'Hô hấp tế bào'],
    explanation_prompt: 'Giải thích rằng hô hấp tế bào là quá trình phân giải chất hữu cơ để tạo ra ATP, trong khi tiêu hóa chỉ là quá trình biến đổi cơ học và hóa học thức ăn.'
  },
  {
    id: 'bio_b1_mc_19',
    topicId: 'topic_bio_11_01',
    stem: 'Cơ thể người lấy từ môi trường oxygen, nước và thức ăn để chuyển hóa thành năng lượng tích lũy ở dạng dễ sử dụng là',
    options: [
      'ADP.',
      'ATP.',
      'mỡ.',
      'glycogen.'
    ],
    answerIndices: [1],
    difficulty: 'Easy',
    tags: ['Năng lượng', 'ATP'],
    explanation_prompt: 'Giải thích rằng ATP là dạng năng lượng dễ sử dụng trực tiếp, còn mỡ và glycogen là dạng năng lượng dự trữ.'
  },
  {
    id: 'bio_b1_mc_20',
    topicId: 'topic_bio_11_01',
    stem: 'Quá trình chuyển hóa năng lượng trong sinh giới bao các giai đoạn theo thứ tự nào?',
    options: [
      'Phân giải → tổng hợp → huy động năng lượng.',
      'Tiêu thụ → phân giải → huy động năng lượng.',
      'Hấp thụ → phân giải → huy động năng lượng.',
      'Tổng hợp → phân giải → huy động năng lượng.'
    ],
    answerIndices: [3],
    difficulty: 'Medium',
    tags: ['Chuyển hóa năng lượng', 'Các giai đoạn'],
    explanation_prompt: 'Giải thích 3 giai đoạn của chuyển hóa năng lượng: Tổng hợp (tích lũy năng lượng trong chất hữu cơ), Phân giải (chuyển thành ATP), và Huy động (sử dụng ATP).'
  },
  {
    id: 'bio_b1_mc_21',
    topicId: 'topic_bio_11_01',
    stem: 'Bản chất của giai đoạn tổng hợp là',
    options: [
      'đồng hóa.',
      'dị hóa.',
      'tiêu hóa.',
      'tuần hoàn.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Đồng hóa', 'Tổng hợp'],
    explanation_prompt: 'Giải thích rằng "tổng hợp" chất phức tạp từ chất đơn giản chính là quá trình "đồng hóa".'
  },
  {
    id: 'bio_b1_mc_22',
    topicId: 'topic_bio_11_01',
    stem: 'Bản chất của giai đoạn phân giải là',
    options: [
      'đồng hóa.',
      'dị hóa.',
      'tiêu hóa.',
      'tuần hoàn.'
    ],
    answerIndices: [1],
    difficulty: 'Easy',
    tags: ['Dị hóa', 'Phân giải'],
    explanation_prompt: 'Giải thích rằng "phân giải" chất phức tạp thành chất đơn giản chính là quá trình "dị hóa".'
  },
  {
    id: 'bio_b1_mc_23',
    topicId: 'topic_bio_11_01',
    stem: 'Ở thực vật và động vật đều có chung quá trình nào sau đây để tạo ra năng lượng?',
    options: [
      'Hô hấp.',
      'Quang hợp.',
      'Tiêu hóa.',
      'Tuần hoàn.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Hô hấp', 'Tạo năng lượng'],
    explanation_prompt: 'Giải thích rằng cả thực vật và động vật đều thực hiện hô hấp tế bào để giải phóng năng lượng từ chất hữu cơ.'
  },
  {
    id: 'bio_b1_mc_24',
    topicId: 'topic_bio_11_01',
    stem: 'Năng lượng hóa học (trong các chất hữu cơ) được truyền từ bậc dinh dưỡng thấp lên bậc dinh dưỡng cao hơn theo thứ tự',
    options: [
      'sinh vật phân giải → sinh vật sản xuất → sinh vật tiêu thụ.',
      'sinh vật sản xuất → sinh vật phân giải → sinh vật tiêu thụ.',
      'sinh vật sản xuất → sinh vật tiêu thụ → sinh vật phân giải.',
      'sinh vật tiêu thụ → sinh vật sản xuất → sinh vật phân giải.'
    ],
    answerIndices: [2],
    difficulty: 'Medium',
    tags: ['Chuỗi thức ăn', 'Dòng năng lượng'],
    explanation_prompt: 'Giải thích dòng năng lượng trong hệ sinh thái: từ sinh vật sản xuất (tổng hợp năng lượng) đến sinh vật tiêu thụ (ăn sinh vật khác) và cuối cùng là sinh vật phân giải.'
  },
  {
    id: 'bio_b1_mc_25',
    topicId: 'topic_bio_11_01',
    stem: 'Sự phân giải các chất hóa học ở giai đoạn phân giải sẽ đi kèm với sự',
    options: [
      'giải phóng năng lượng.',
      'tích lũy năng lượng.',
      'tạo ra năng lượng.',
      'phân giải năng lượng'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Phân giải', 'Dị hóa', 'Năng lượng'],
    explanation_prompt: 'Giai đoạn phân giải (dị hóa) là quá trình phá vỡ liên kết, do đó nó giải phóng năng lượng đã được tích trữ.'
  },
  {
    id: 'bio_b1_mc_26',
    topicId: 'topic_bio_11_01',
    stem: 'Năng lượng được giải phóng ở giai đoạn phân giải phần lớn sẽ',
    options: [
      'tích lũy trong phân tử ATP.',
      'được sử dụng ngay lập tức.',
      'bị phân giải ngay lập tức.',
      'tích lũy trong các chất dự trữ.'
    ],
    answerIndices: [0],
    difficulty: 'Medium',
    tags: ['Phân giải', 'Năng lượng', 'ATP'],
    explanation_prompt: 'Giải thích rằng năng lượng giải phóng từ dị hóa được "bắt giữ" và lưu trữ tạm thời trong các liên kết cao năng của ATP để tế bào sử dụng.'
  },
  {
    id: 'bio_b1_mc_27',
    topicId: 'topic_bio_11_01',
    stem: 'Năng lượng mà các sinh vật sử dụng trong hầu hết các hoạt động sống là',
    options: [
      'ATP.',
      'ADP.',
      'AMP.',
      'NADPH.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Năng lượng', 'ATP'],
    explanation_prompt: 'Nhấn mạnh lại vai trò của ATP là nguồn năng lượng trực tiếp và phổ biến nhất cho mọi hoạt động sống của tế bào.'
  },
  {
    id: 'bio_b1_mc_28',
    topicId: 'topic_bio_11_01',
    stem: 'Năng lượng được sinh ra trong quá trình dị hóa ở sinh vật',
    options: [
      'một phần được dự trữ, một phần sử dung cho các hoạt động sống, còn lại thoát ra dưới dạng nhiệt.',
      'đa phần được dự trữ, số rất ít sử dung cho các hoạt động sống, còn lại thoát ra dưới dạng nhiệt.',
      'một phần được dự trữ, một phần sử dung cho các hoạt động sống, còn lại chuyển thành cơ năng',
      'một phần được dự trữ, một phần sử dung cho các hoạt động sống, còn lại chuyển thành cơ năng.'
    ],
    answerIndices: [0],
    difficulty: 'Medium',
    tags: ['Dị hóa', 'Hiệu suất năng lượng', 'Nhiệt năng'],
    explanation_prompt: 'Giải thích sự phân bố năng lượng từ dị hóa: một phần được tích trữ (ATP), một phần dùng cho hoạt động, và một phần đáng kể bị thất thoát dưới dạng nhiệt theo định luật nhiệt động học.'
  },
  {
    id: 'bio_b1_mc_29',
    topicId: 'topic_bio_11_01',
    stem: 'Trao đổi chất và chuyển hóa năng lượng luôn',
    options: [
      'không liên quan với nhau, chỉ diễn ra ở cấp độ tế bào.',
      'gắn bó mật thiết với nhau, chỉ diễn ra ở cấp độ tế bào.',
      'không liên quan, trao đổi chất trước rồi mới chuyển hóa năng lượng.',
      'gắn bó mật thiết với nhau, diễn ra ở cả cấp độ cơ thể lẫn tế bào.'
    ],
    answerIndices: [3],
    difficulty: 'Medium',
    tags: ['Trao đổi chất', 'Chuyển hóa năng lượng', 'Mối quan hệ'],
    explanation_prompt: 'Giải thích rằng trao đổi chất và chuyển hóa năng lượng là hai mặt của một quá trình thống nhất, diễn ra ở cả cấp độ cơ thể (lấy thức ăn, thở) và cấp độ tế bào (hô hấp tế bào).'
  },
  {
    id: 'bio_b1_mc_30',
    topicId: 'topic_bio_11_01',
    stem: 'Đối với sinh vật, trao đổi chất và chuyển hóa năng lượng',
    options: [
      'diễn ra ở cả cấp tế bào lẫn cơ thể.',
      'chỉ diễn ra ở cấp độ cơ thể.',
      'chỉ diễn ra ở lục lạp và ti thể.',
      'chỉ diễn ra ở cấp độ tế bào.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Trao đổi chất', 'Cấp độ tổ chức'],
    explanation_prompt: 'Nêu ví dụ về trao đổi chất ở cấp cơ thể (ăn, uống, thở) và ở cấp tế bào (tổng hợp protein, phân giải glucose).'
  },
  {
    id: 'bio_b1_mc_31',
    topicId: 'topic_bio_11_01',
    stem: 'Sau khi được hấp thụ vào tế bào, các chất dinh dưỡng sẽ được tiến hành',
    options: [
      'đồng hóa và dị hóa.',
      'hô hấp hoặc tiêu hóa.',
      'oxy hóa hoặc thủy phân.',
      'phân hủy để sinh năng lượng.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Chuyển hóa nội bào', 'Đồng hóa', 'Dị hóa'],
    explanation_prompt: 'Giải thích rằng trong tế bào, chất dinh dưỡng sẽ tham gia vào hai quá trình đối lập: đồng hóa (xây dựng) và dị hóa (phân giải).'
  },
  {
    id: 'bio_b1_mc_32',
    topicId: 'topic_bio_11_01',
    stem: 'Ở cấp tế bào, chất thải từ quá trình dị quá sẽ được vận chuyển qua cấu trúc nào để bài tiết?',
    options: [
      'màng sinh chất.',
      'chất nền ngoại bào.',
      'thành tế bào.',
      'bộ máy Golgi.'
    ],
    answerIndices: [0],
    difficulty: 'Medium',
    tags: ['Bài tiết tế bào', 'Màng sinh chất'],
    explanation_prompt: 'Giải thích vai trò của màng sinh chất trong việc kiểm soát sự vận chuyển các chất ra và vào tế bào, bao gồm cả việc bài tiết chất thải.'
  },
  {
    id: 'bio_b1_mc_33',
    topicId: 'topic_bio_11_01',
    stem: 'Ở cấp độ cơ thể, chất thải và chất dư thừa sẽ được bài tiết qua',
    options: [
      'cơ quan bài tiết.',
      'hệ tuần hoàn.',
      'hệ bài tiết.',
      'hệ hô hấp.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Bài tiết', 'Cơ quan bài tiết'],
    explanation_prompt: 'Phân biệt giữa hệ bài tiết (một hệ cơ quan) và các cơ quan bài tiết cụ thể (như thận, da, phổi).'
  },
  {
    id: 'bio_b1_mc_34',
    topicId: 'topic_bio_11_01',
    stem: 'Sinh vật tự dưỡng là sinh vật có khả năng',
    options: [
      'tự tổng hợp chất hữu cơ từ các chất hữu cơ có sẵn.',
      'phân giải xác sinh vật khác để lấy chất hữu cơ.',
      'tự tổng hợp chất hữu cơ từ các chất vô cơ.',
      'tự tổng hợp các chất vô cơ từ các chất vô cơ có sẵn.'
    ],
    answerIndices: [2],
    difficulty: 'Easy',
    tags: ['Tự dưỡng', 'Dinh dưỡng'],
    explanation_prompt: 'Định nghĩa sinh vật tự dưỡng là sinh vật có khả năng tự sản xuất chất hữu cơ (nguồn năng lượng) từ các chất vô cơ đơn giản.'
  },
  {
    id: 'bio_b1_mc_35',
    topicId: 'topic_bio_11_01',
    stem: 'Sinh vật dị dưỡng là sinh vật',
    options: [
      'tự tổng hợp chất hữu cơ từ các chất vô cơ nhờ năng lượng từ việc phân giải các chất hóa học.',
      'lấy chất hữu cơ trực tiếp từ các sinh vật tự dưỡng hoặc từ các sinh vật dị dưỡng khác.',
      'tự tổng hợp chất hữu cơ từ các chất vô cơ nhờ năng lượng hấp thụ từ ánh sáng mặt trời',
      'lấy chất hữu cơ trực tiếp từ các sinh vật khác hoàn toàn nhờ năng lượng ánh sáng mặt trời.'
    ],
    answerIndices: [1],
    difficulty: 'Easy',
    tags: ['Dị dưỡng', 'Dinh dưỡng'],
    explanation_prompt: 'Định nghĩa sinh vật dị dưỡng là sinh vật không thể tự tổng hợp chất hữu cơ mà phải lấy từ các sinh vật khác.'
  },
  {
    id: 'bio_b1_mc_36',
    topicId: 'topic_bio_11_01',
    stem: 'Sinh vật tự dưỡng trên cạn điển hình là',
    options: [
      'thực vật.',
      'nấm.',
      'động vật.',
      'tảo.'
    ],
    answerIndices: [0],
    difficulty: 'Easy',
    tags: ['Tự dưỡng', 'Thực vật'],
    explanation_prompt: 'Nêu ví dụ về sinh vật tự dưỡng, trong đó thực vật xanh là điển hình nhất trên cạn nhờ khả năng quang hợp.'
  },
  {
    id: 'bio_b1_mc_37',
    topicId: 'topic_bio_11_01',
    stem: 'Sinh vật dị dưỡng điển hình là',
    options: [
      'thực vật.',
      'vi khuẩn.',
      'tảo.',
      'động vật.'
    ],
    answerIndices: [3],
    difficulty: 'Easy',
    tags: ['Dị dưỡng', 'Động vật'],
    explanation_prompt: 'Nêu ví dụ về sinh vật dị dưỡng, trong đó động vật là nhóm điển hình nhất.'
  },
  {
    id: 'bio_b1_multi_01',
    topicId: 'topic_bio_11_01',
    stem: 'Khi nói về vai trò của trao đổi chất và chuyển hóa năng lượng, những nhận định nào sau đây là ĐÚNG?',
    options: [
      'Có vai trò quan trọng đối với mọi hoạt động của cơ thể sống, đảm bảo cho sinh vật tồn tại và phát triển.',
      'Chất hữu cơ trong thức ăn chuyển hóa thành ATP cung cấp năng lượng cho hoạt động như bơi lội, chạy bộ,...',
      'Bài tiết tất cả các chất ra ngoài môi trường nhằm đảm bảo cho hoạt động sống bình thường của cơ thể.',
      'Cơ thể bài tiết muối, urea, uric acid,.. ra ngoài môi trường.'
    ],
    answerIndices: [0, 1, 3],
    difficulty: 'Medium',
    tags: ['Trao đổi chất', 'Vai trò', 'Chọn nhiều'],
    explanation_prompt: 'Phân tích vai trò của trao đổi chất, bao gồm cung cấp năng lượng và bài tiết. Lưu ý rằng bài tiết chỉ loại bỏ chất thải và chất dư thừa, không phải "tất cả các chất".'
  },
  {
    id: 'bio_b1_multi_02',
    topicId: 'topic_bio_11_01',
    stem: 'Khi nói về vai trò của sinh vật tự dưỡng đối với sinh giới, các phát biểu nào sau đây là ĐÚNG?',
    options: [
      'Phân hủy chất hữu cơ trong đất, trả lại vật chất cho môi trường.',
      'Cung cấp oxygen đảm bảo cho hoạt động sống của hầu hết sinh vật.',
      'Chất hữu cơ do các sinh vật tự dưỡng sản xuất là nguồn thức ăn cho sinh vật dị dưỡng.',
      'Điều hoà nhiệt độ, độ ẩm thuận lợi cho sự tồn tại và phát triển của sinh vật.'
    ],
    answerIndices: [1, 2, 3],
    difficulty: 'Medium',
    tags: ['Sinh vật tự dưỡng', 'Vai trò', 'Hệ sinh thái', 'Chọn nhiều'],
    explanation_prompt: 'Phân tích vai trò của sinh vật tự dưỡng: cung cấp O2, thức ăn, và điều hòa khí hậu. Vai trò phân hủy chất hữu cơ thuộc về sinh vật phân giải.'
  },
  {
    id: 'bio_b1_multi_03',
    topicId: 'topic_bio_11_01',
    stem: 'Dựa vào sơ đồ về mối quan hệ giữa đồng hóa và dị hóa, những nhận định nào sau đây là ĐÚNG?',
    options: [
      'Quá trình tổng hợp các chất mới và tích lũy năng lượng là quá trình dị hóa.',
      'Quá trình phân giải các chất hấp thụ và giải phóng năng lượng là quá trình đồng hóa.',
      'Các chất không cần thiết cho tế bào sẽ trở thành chất bài tiết.',
      'Đồng hóa và dị hóa là hai quá trình có mối quan hệ chặt chẽ, trái ngược nhưng thống nhất với nhau.'
    ],
    answerIndices: [2, 3],
    difficulty: 'Hard',
    tags: ['Đồng hóa', 'Dị hóa', 'Mối quan hệ', 'Chọn nhiều'],
    explanation_prompt: 'Phân biệt rõ ràng: Đồng hóa là tổng hợp và tích lũy năng lượng. Dị hóa là phân giải và giải phóng năng lượng. Chúng là hai mặt đối lập nhưng thống nhất của chuyển hóa vật chất.'
  },
  {
    id: 'bio_b1_multi_04',
    topicId: 'topic_bio_11_01',
    stem: 'Khi nói về quá trình trao đổi chất ở sinh vật, các phát biểu nào sau đây là ĐÚNG?',
    options: [
      'Chuyển hóa các chất ở tế bào được thực hiện qua quá trình tổng hợp và phân giải các chất.',
      'Chuyển hóa các chất luôn đi kèm với giải phóng năng lượng.',
      'Trao đổi chất ở sinh vật gồm quá trình trao đổi chất giữa cơ thể với môi trường và chuyển hóa các chất diễn ra trong tế bào.',
      'Tập hợp tất cả các phản ứng diễn ra trong và ngoài cơ thể được gọi là quá trình trao đổi chất trong tế bào.'
    ],
    answerIndices: [0, 2],
    difficulty: 'Hard',
    tags: ['Trao đổi chất', 'Chuyển hóa nội bào', 'Chọn nhiều'],
    explanation_prompt: 'Phân biệt trao đổi chất và chuyển hóa năng lượng. Chuyển hóa có thể đi kèm tích lũy (đồng hóa) hoặc giải phóng (dị hóa) năng lượng. Trao đổi chất chỉ bao gồm các phản ứng bên trong tế bào (chuyển hóa nội bào).'
  },
  {
    id: 'bio_b1_multi_05',
    topicId: 'topic_bio_11_01',
    stem: 'Dựa vào sơ đồ chuyển hóa năng lượng trong sinh giới, những nhận định nào sau đây là ĐÚNG?',
    options: [
      'Giai đoạn chuyển năng lượng ánh sáng thành năng lượng hóa học trong chất hữu cơ là giai đoạn tổng hợp.',
      'Giai đoạn chuyển hóa chất hữu cơ thành các chất vô cơ và giải phóng năng lượng vào ATP là giai đoạn phân giải.',
      'Giai đoạn năng lượng ATP được sử dụng cho các hoạt động sống là giai đoạn huy động năng lượng.',
      'Giai đoạn phân giải (chuyển hóa chất hữu cơ thành ATP) có thể là sự phân giải carbohydrate thành các hợp chất đơn giản thông qua quá trình dị hóa.'
    ],
    answerIndices: [0, 1, 2, 3],
    difficulty: 'Hard',
    tags: ['Chuyển hóa năng lượng', 'Các giai đoạn', 'Chọn nhiều'],
    explanation_prompt: 'Xác định đúng tên và bản chất của 3 giai đoạn chuyển hóa năng lượng: Tổng hợp (quang hợp), Phân giải (hô hấp), và Huy động (sử dụng ATP). Quá trình phân giải là một dạng của dị hóa.'
  },
  {
    id: 'bio_b1_multi_06',
    topicId: 'topic_bio_11_01',
    stem: 'Khi nói về sinh vật tự dưỡng hoặc dị dưỡng, các phát biểu nào sau đây là ĐÚNG?',
    options: [
      'Thực vật là tự dưỡng, vì tích lũy năng lượng cho cơ thể bằng các chất vô cơ, nước, CO2, năng lượng ánh sáng...để tự đi nuôi cơ thể.',
      'Động vật dị dưỡng, vì chúng lấy các chất hữu cơ từ các sinh vật tự dưỡng hoặc từ những động vật khác, chúng hấp thụ, tiêu hóa các chất này để tích lũy năng lượng và nuôi cơ thể.',
      'Thực vật là tự dưỡng vì chúng không di động và tự biến đổi thức ăn.',
      'Động vật là dị dưỡng vì chúng có khả năng di động và tự biến đổi thức ăn.'
    ],
    answerIndices: [0, 1],
    difficulty: 'Medium',
    tags: ['Tự dưỡng', 'Dị dưỡng', 'Dinh dưỡng', 'Chọn nhiều'],
    explanation_prompt: 'Phân biệt tự dưỡng và dị dưỡng dựa trên nguồn cacbon và năng lượng, không phải dựa trên khả năng di động.'
  },
  {
    id: 'bio_b1_multi_07',
    topicId: 'topic_bio_11_01',
    stem: 'Những phát biểu nào sau đây là ĐÚNG khi nói đến vai trò của trao đổi chất và chuyển hóa năng lượng ở sinh vật?',
    options: [
      'Cung cấp nguyên liệu xây dựng tế bào và cơ thể.',
      'Cung cấp năng lượng cho các hoạt động sống của sinh vật.',
      'Bài tiết các chất độc hại ra khỏi cơ thể.',
      'Giúp sinh vật truyền lại các đặc điểm di truyền cho thế hệ sau.'
    ],
    answerIndices: [0, 1, 2],
    difficulty: 'Medium',
    tags: ['Trao đổi chất', 'Vai trò', 'Chọn nhiều'],
    explanation_prompt: 'Xác định các vai trò chính của trao đổi chất và chuyển hóa năng lượng. Lưu ý rằng việc truyền đặc điểm di truyền là vai trò của sinh sản.'
  },
  {
    id: 'bio_b1_multi_08',
    topicId: 'topic_bio_11_01',
    stem: 'Những phát biểu nào là dấu hiệu đặc trưng của quá trình trao đổi chất và chuyển hóa năng lượng ở sinh vật?',
    options: [
      'Giao phối và sinh sản tạo ra cá thể mới.',
      'Đào thải các chất.',
      'Biến đổi các chất và chuyển hóa năng lượng.',
      'Điều hòa hoạt động sống.',
      'Thu nhận các chất từ môi trường và vận chuyển các chất.'
    ],
    answerIndices: [1, 2, 3, 4],
    difficulty: 'Medium',
    tags: ['Trao đổi chất', 'Dấu hiệu đặc trưng', 'Chọn nhiều'],
    explanation_prompt: 'Xác định các dấu hiệu của trao đổi chất (thu nhận, biến đổi, thải, điều hòa). Giao phối và sinh sản là một đặc trưng sống khác.'
  },
  {
    id: 'bio_b1_multi_09',
    topicId: 'topic_bio_11_01',
    stem: 'Khi nói về các dấu hiệu đặc trưng của quá trình trao đổi chất và chuyển hóa năng lượng ở sinh vật, có bao nhiêu phát biểu sau đây là SAI?',
    options: [
      'Chất dinh dưỡng và năng lượng từ môi trường sẽ được thu nhận nhờ các cơ quan chuyên biệt.',
      'Chất dinh dưỡng qua hấp thụ sẽ được sử dụng hoàn toàn trực tiếp.',
      'Tế bào không sử dụng các nguyên liệu nhận được để tổng hợp chất hữu cơ tham gia kiến tạo cơ thể và dự trữ năng lượng.',
      'Các chất không được tế bào sử dụng sẽ được tái hấp thu.'
    ],
    answerIndices: [1, 2, 3],
    difficulty: 'Hard',
    tags: ['Trao đổi chất', 'Dấu hiệu đặc trưng', 'Chọn nhiều'],
    explanation_prompt: 'Phân tích các phát biểu sai: chất dinh dưỡng có thể được dự trữ (không dùng hết trực tiếp), tế bào sử dụng nguyên liệu để tổng hợp và dự trữ, không phải chất nào không dùng cũng được tái hấp thu.'
  },
  {
    id: 'bio_b1_multi_10',
    topicId: 'topic_bio_11_01',
    stem: 'Quan sát sơ đồ các giai đoạn chuyển hóa năng lượng trong sinh giới, những phát biểu nào sau đây là ĐÚNG?',
    options: [
      'Năng lượng khởi đầu cung cấp cho sinh giới (I) bắt nguồn từ năng lượng nhiệt từ mặt trời.',
      'Bản chất của giai đoạn tổng hợp là đồng hoá.',
      'Quá trình biến đổi năng lượng (I) thành năng lượng hóa học trong các chất hữu cơ sẽ đi kèm với sự phân giải năng lượng.',
      'Năng lượng (II) là năng lượng hóa học trong phân tử ATP.',
      'Ở động vật, quá trình biến đổi năng lượng hóa học trong các chất hóa học thành năng lượng (II) là quá trình hô hấp.',
      'Năng lượng được giải phóng trong dị hoá một phần sẽ được sinh vật sử dụng, phần còn lại cuối cùng cũng đều thoát ra ngoài dưới dạng năng lượng (III) là nhiệt năng.',
      'Ở thực vật, quá trình biến đổi năng lượng (I) thành năng lượng hóa học trong các chất hữu cơ là quá trình quang hợp.',
      'Ở thực vật và động vật đều có chung quá trình hô hấp để tạo ra năng lượng.'
    ],
    answerIndices: [1, 3, 4, 5, 6, 7],
    difficulty: 'Hard',
    tags: ['Chuyển hóa năng lượng', 'Các giai đoạn', 'Chọn nhiều'],
    explanation_prompt: 'Phân tích từng phát biểu: Năng lượng khởi đầu là quang năng. Quá trình tổng hợp là đồng hóa và tích lũy năng lượng, không phải phân giải.'
  },
  {
    id: 'bio_b1_multi_11',
    topicId: 'topic_bio_11_01',
    stem: 'Khi quá trình trao đổi chất và năng lượng trong cơ thể bị rối loạn, những phát biểu nào sau đây là ĐÚNG?',
    options: [
      'Các hoạt động sống của cơ thể có thể không được cung cấp đủ năng lượng.',
      'Cơ thể bị rối loạn, gặp các triệu chứng bất thường ảnh hưởng đến sức khỏe.',
      'Cơ thể có thể tự khắc phục tất cả các vấn đề rối loạn chuyển hóa nên sẽ không ảnh hưởng đến các hoạt động sống của cơ thể.',
      'Cơ thể vẫn có thể hoạt động bình thường vì các triệu chứng rối loạn chuyển hóa vốn không ảnh hưởng đến hoạt động sống.'
    ],
    answerIndices: [0, 1],
    difficulty: 'Medium',
    tags: ['Rối loạn chuyển hóa', 'Hậu quả', 'Chọn nhiều'],
    explanation_prompt: 'Giải thích rằng rối loạn chuyển hóa ảnh hưởng trực tiếp đến việc cung cấp năng lượng và hoạt động của cơ thể, gây ra các vấn đề sức khỏe. Cơ thể không thể tự khắc phục tất cả các vấn đề này.'
  },
  {
    id: 'bio_b1_multi_12',
    topicId: 'topic_bio_11_01',
    stem: 'Cho các sinh vật sau: Cây chuối, Vi khuẩn lam, Nấm da đầu, Tảo lục, Trùng giày, Con bò, Vi khuẩn trong ruột mối, Rong đuôi chó, San hô, Giun, sán. Có bao nhiêu sinh vật dị dưỡng?',
    options: [
      'Cây chuối', 'Vi khuẩn lam', 'Nấm da đầu', 'Tảo lục', 'Trùng giày', 'Con bò', 'Vi khuẩn trong ruột mối', 'Rong đuôi chó', 'San hô', 'Giun, sán'
    ],
    answerIndices: [2, 4, 5, 6, 8, 9],
    difficulty: 'Hard',
    tags: ['Dinh dưỡng', 'Dị dưỡng', 'Phân loại'],
    explanation_prompt: 'Phân loại từng sinh vật: Nấm, Trùng giày, Con bò, Vi khuẩn trong ruột mối (dị dưỡng), San hô, Giun, sán là dị dưỡng. Cây chuối, Vi khuẩn lam, Tảo lục, Rong đuôi chó là tự dưỡng.'
  },
  {
    id: 'bio_b1_multi_13',
    topicId: 'topic_bio_11_01',
    stem: 'Cho các sinh vật sau: Cây chuối, Vi khuẩn lam, Nấm da đầu, Tảo lục, Trùng giày, Con bò, Vi khuẩn trong ruột mối, Rong đuôi chó, San hô, Giun, sán. Có bao nhiêu sinh vật tự dưỡng?',
    options: [
      'Cây chuối', 'Vi khuẩn lam', 'Nấm da đầu', 'Tảo lục', 'Trùng giày', 'Con bò', 'Vi khuẩn trong ruột mối', 'Rong đuôi chó', 'San hô', 'Giun, sán'
    ],
    answerIndices: [0, 1, 3, 7],
    difficulty: 'Hard',
    tags: ['Dinh dưỡng', 'Tự dưỡng', 'Phân loại'],
    explanation_prompt: 'Phân loại từng sinh vật: Cây chuối, Vi khuẩn lam, Tảo lục, Rong đuôi chó là tự dưỡng (quang hợp). Các sinh vật còn lại là dị dưỡng.'
  }
]
