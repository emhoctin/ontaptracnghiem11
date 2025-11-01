
import { Question } from '../types';

export const BIOLOGY_QUESTIONS_B6: Question[] = [
  
  {
    "id": "bio_b6_mc_01",
    "topicId": "topic_bio_11_06",
    "stem": "Hô hấp ở thực vật là gì?",
    "options": [
      "Quá trình phân giải các hợp chất hữu cơ (C₆H₁₂O₆) của tế bào sống thành các chất vô cơ đơn giản (CO₂ và H₂O), đồng thời giải phóng năng lượng dưới dạng ATP cung cấp cho các hoạt động sống của cơ thể thực vật.",
      "Quá trình phân giải các hợp chất hữu cơ (C₆H₁₂O₆) của tế bào sống thành các chất vô cơ đơn giản O₂ và H₂O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể thực vật.",
      "Quá trình phân giải các hợp chất hữu cơ (C₆H₁₂O₆) của tế bào sống thành các chất vô cơ đơn giản CO₂ và O₂, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể thực vật.",
      "Quá trình khử các hợp chất hữu cơ thành CO₂ và H₂O, đồng thời giải phóng năng lượng cần thiết cho các hoạt động sống của cơ thể thực vật."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Easy",
    "tags": [
      "Khái niệm",
      "Hô hấp tế bào"
    ],
    "explanation_prompt": "Hô hấp là quá trình ôxi hóa sinh học các chất hữu cơ, chủ yếu là glucose (C₆H₁₂O₆), thành các chất vô cơ đơn giản như CO₂ và H₂O, đồng thời giải phóng năng lượng (ATP và nhiệt)."
  },
  {
    "id": "bio_b6_mc_02",
    "topicId": "topic_bio_11_06",
    "stem": "Nhiệt độ tối thiểu cây bắt đầu hô hấp biến thiên trong khoảng nào?",
    "options": [
      "(-5°C) - (5°C), tùy theo loại cây ở các vùng sinh thái khác nhau.",
      "(5°C) - (10°C), tùy theo loại cây ở các vùng sinh thái khác nhau.",
      "(0°C) - (10°C), tùy theo loại cây ở các vùng sinh thái khác nhau.",
      "(10°C) - (20°C), tùy theo loại cây ở các vùng sinh thái khác nhau."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Medium",
    "tags": [
      "Nhân tố ảnh hưởng",
      "Nhiệt độ"
    ],
    "explanation_prompt": "Nhiệt độ tối thiểu cho hô hấp ở thực vật thường dao động trong khoảng 0°C đến 10°C, tùy thuộc vào loài và vùng sinh thái, phản ánh nhiệt độ mà enzyme hô hấp bắt đầu hoạt động."
  },
  {
    "id": "bio_b6_mc_03",
    "topicId": "topic_bio_11_06",
    "stem": "Trong phương trình tổng quát của quá trình hô hấp, không có thành phần nào?",
    "options": [
      "Glucose.",
      "Nhiệt.",
      "ADP.",
      "Nước."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Phương trình",
      "Hô hấp"
    ],
    "explanation_prompt": "Phương trình tổng quát của hô hấp là C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Q (ATP + Nhiệt). ADP là nguyên liệu để tổng hợp ATP, không phải là thành phần xuất hiện trong phương trình tổng quát."
  },
  {
    "id": "bio_b6_mc_04",
    "topicId": "topic_bio_11_06",
    "stem": "Từ một glucose qua phân giải hiếu khí, thì tạo ra bao nhiêu năng lượng (net)?",
    "options": [
      "20 - 22 ATP.",
      "30 - 32 ATP.",
      "40 - 42 ATP.",
      "50 - 52 ATP."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Sản phẩm",
      "Năng lượng"
    ],
    "explanation_prompt": "Quá trình phân giải hiếu khí hoàn toàn 1 phân tử glucose tạo ra tổng cộng 30-32 phân tử ATP (net), tùy thuộc vào cơ chế vận chuyển electron vào ti thể."
  },
  {
    "id": "bio_b6_mc_05",
    "topicId": "topic_bio_11_06",
    "stem": "Quá trình đường phân xảy ra tại vị trí nào?",
    "options": [
      "Ti thể.",
      "Tế bào chất.",
      "Bộ máy golgi.",
      "Nhân tế bào."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Hô hấp tế bào",
      "Đường phân"
    ],
    "explanation_prompt": "Đường phân (Glycolysis) là giai đoạn đầu tiên của hô hấp tế bào, diễn ra trong bào tương (tế bào chất) của tế bào."
  },
  {
    "id": "bio_b6_mc_06",
    "topicId": "topic_bio_11_06",
    "stem": "Chu trình Krebs xảy ra tại vị trí nào?",
    "options": [
      "Chất nền ti thể.",
      "Chất nền lục lạp.",
      "Tế bào chất.",
      "Màng trong ti thể."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Easy",
    "tags": [
      "Hô hấp tế bào",
      "Chu trình Krebs"
    ],
    "explanation_prompt": "Chu trình Krebs (chu trình axit citric) là giai đoạn thứ hai của hô hấp hiếu khí, xảy ra ở chất nền (matrix) của ti thể."
  },
  {
    "id": "bio_b6_mc_07",
    "topicId": "topic_bio_11_06",
    "stem": "Chuỗi chuyền electron hô hấp xảy ra tại vị trí nào?",
    "options": [
      "Chất nền ti thể.",
      "Chất nền lục lạp.",
      "Tế bào chất.",
      "Màng trong ti thể."
    ],
    "answerIndices": [
      3
    ],
    "difficulty": "Easy",
    "tags": [
      "Hô hấp tế bào",
      "Chuỗi chuyền electron"
    ],
    "explanation_prompt": "Chuỗi chuyền electron hô hấp là giai đoạn cuối cùng, xảy ra tại màng trong của ti thể, nơi có các phức hệ enzyme vận chuyển electron."
  },
  {
    "id": "bio_b6_mc_08",
    "topicId": "topic_bio_11_06",
    "stem": "Kết thúc quá trình đường phân, từ 1 phân tử glucose, tế bào thu được sản phẩm nào?",
    "options": [
      "1 phân tử pyruvic acid, 2 phân tử ATP và 2 phân tử NADH.",
      "2 phân tử pyruvic acid, 6 phân tử ATP và 2 phân tử NADH.",
      "2 phân tử pyruvic acid, 2 phân tử ATP và 2 phân tử NADH.",
      "2 phân tử 2 pyruvic acid, 2 phân tử ATP và 4 phân tử NADH."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Đường phân",
      "Sản phẩm"
    ],
    "explanation_prompt": "Từ 1 phân tử glucose, quá trình đường phân tạo ra 2 phân tử pyruvic acid, 4 ATP tổng cộng (nhưng lãi ròng là 2 ATP) và 2 phân tử NADH."
  },
  {
    "id": "bio_b6_mc_09",
    "topicId": "topic_bio_11_06",
    "stem": "Quá trình phân giải hiếu khí ở thực vật gồm các giai đoạn theo trật tự nào sau đây?",
    "options": [
      "Đường phân → chu trình Krebs → chuỗi chuyền electron hô hấp.",
      "Đường phân → lên men.",
      "Đường phân → oxi hóa pyruvic acid → chu trình Krebs → chuỗi chuyền electron hô hấp.",
      "Chuỗi chuyền electron hô hấp → chu trình Krebs → đường phân."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Medium",
    "tags": [
      "Hô hấp hiếu khí",
      "Trình tự"
    ],
    "explanation_prompt": "Quá trình hô hấp hiếu khí bao gồm 4 giai đoạn: Đường phân (trong tế bào chất), Oxi hóa Pyruvic acid thành Acetyl-CoA (phản ứng chuyển tiếp), Chu trình Krebs, và Chuỗi chuyền electron hô hấp (3 giai đoạn cuối trong ti thể)."
  },
  {
    "id": "bio_b6_mc_10",
    "topicId": "topic_bio_11_06",
    "stem": "Phân giải kị khí (lên men) từ pyruvic acid tạo ra sản phẩm nào?",
    "options": [
      "Rượu ethanol.",
      "Lactic acid.",
      "Rượu ethanol hoặc lactic acid.",
      "Đồng thời rượu ethanol và lactic acid."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Phân giải kị khí",
      "Lên men"
    ],
    "explanation_prompt": "Phân giải kị khí (lên men) từ pyruvic acid có thể là lên men rượu (tạo ethanol và CO₂) hoặc lên men lactic (tạo lactic acid), tùy thuộc vào loại sinh vật và enzyme."
  },
  {
    "id": "bio_b6_mc_11",
    "topicId": "topic_bio_11_06",
    "stem": "Muốn tăng cường độ hô hấp, thì cần làm gì?",
    "options": [
      "Giảm hàm lượng nước trong tế bào và cơ thể thực vật.",
      "Tăng hàm lượng nước trong tế bào và cơ thể thực vật.",
      "Giảm oxygen trong hô hấp.",
      "Tăng cacbonic trong hô hấp."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Nhân tố ảnh hưởng",
      "Nước"
    ],
    "explanation_prompt": "Hàm lượng nước tỉ lệ thuận với cường độ hô hấp vì nước là dung môi và là thành phần tham gia vào nhiều phản ứng hóa học trong quá trình hô hấp."
  },
  {
    "id": "bio_b6_mc_12",
    "topicId": "topic_bio_11_06",
    "stem": "Phương trình tổng quát của hô hấp được viết đúng là",
    "options": [
      "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O + Q (ATP + Nhiệt).",
      "6CO₂ + C₆H₁₂O₆ → 6H₂O + 6O₂ + Q (ATP + Nhiệt).",
      "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Q (ATP + Nhiệt).",
      "C₆H₁₀O₆ + 6O₂ + 6H₂O → 6CO₂ + 12H₂O + Q (ATP + Nhiệt)."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Phương trình",
      "Hô hấp"
    ],
    "explanation_prompt": "Phương trình tổng quát của hô hấp hiếu khí là: Glucose (C₆H₁₂O₆) + Oxygen (6O₂) → Carbon dioxide (6CO₂) + Nước (6H₂O) + Năng lượng (Q: ATP + Nhiệt)."
  },
  {
    "id": "bio_b6_mc_13",
    "topicId": "topic_bio_11_06",
    "stem": "Quá trình lên men và hô hấp hiếu khí có giai đoạn chung là",
    "options": [
      "chuỗi chuyền electron.",
      "chu trình Crep.",
      "đường phân.",
      "tổng hợp Acetyl – CoA."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Hô hấp hiếu khí",
      "Lên men",
      "Giai đoạn chung"
    ],
    "explanation_prompt": "Đường phân là giai đoạn đầu tiên, xảy ra ở tế bào chất và là điểm khởi đầu chung cho cả hô hấp hiếu khí và phân giải kị khí (lên men)."
  },
  {
    "id": "bio_b6_mc_14",
    "topicId": "topic_bio_11_06",
    "stem": "Nguyên liệu của quá trình hô hấp ở thực vật là:",
    "options": [
      "CO₂ ; H₂O ; Q (ATP+ nhiệt).",
      "C₆H₁₂O₆ và O₂.",
      "CO₂ và O₂.",
      "H₂O; O₂ và Q (ATP và nhiệt)."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Nguyên liệu",
      "Hô hấp"
    ],
    "explanation_prompt": "Nguyên liệu cho hô hấp hiếu khí là các chất hữu cơ (chủ yếu là C₆H₁₂O₆) và Oxygen (O₂)."
  },
  {
    "id": "bio_b6_mc_15",
    "topicId": "topic_bio_11_06",
    "stem": "Sản phẩm của quá trình hô hấp ở thực vật là gì?",
    "options": [
      "CO₂ ; H₂O ; Q (ATP+ nhiệt).",
      "C₆H₁₂O₆ và O₂.",
      "CO₂ và O₂.",
      "H₂O; O₂ và Q (ATP và nhiệt)."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Easy",
    "tags": [
      "Sản phẩm",
      "Hô hấp"
    ],
    "explanation_prompt": "Sản phẩm của quá trình hô hấp hiếu khí là Carbon dioxide (CO₂), Nước (H₂O) và Năng lượng (Q: ATP và nhiệt)."
  },
  {
    "id": "bio_b6_mc_16",
    "topicId": "topic_bio_11_06",
    "stem": "Quá trình phân giải các hợp chất hữu cơ thành các chất vô cơ đơn giản đồng thời giải phóng năng lượng dưới dạng ATP cung cấp cho các hoạt động sống của thực vật được gọi là gì?",
    "options": [
      "Quang hợp ở thực vật.",
      "Phân giải hiếu khí ở thực vật.",
      "Hô hấp ở thực vật.",
      "Quá trình lên men ở thực vật."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Khái niệm"
    ],
    "explanation_prompt": "Đây là định nghĩa đầy đủ nhất về Hô hấp ở thực vật, trong đó phân giải hiếu khí và lên men là các con đường hô hấp."
  },
  {
    "id": "bio_b6_mc_17",
    "topicId": "topic_bio_11_06",
    "stem": "Hô hấp ở thực vật có vai trò",
    "options": [
      "cung cấp năng lượng cần thiết cho các hoạt động sống của tế bào, cơ thể.",
      "cung cấp O₂ giúp điều hòa không khí và năng lượng nhiệt giúp ổn định nhiệt độ cơ thể.",
      "cung cấp sản phẩm trung gian, đồng thời giải phóng CO₂ giúp khử độc cho cơ thể.",
      "hấp thu CO₂, giải phóng O₂ giúp điều hòa không khí."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Easy",
    "tags": [
      "Vai trò"
    ],
    "explanation_prompt": "Vai trò quan trọng nhất của hô hấp là giải phóng và cung cấp năng lượng ATP cho các hoạt động sống của tế bào và cơ thể."
  },
  {
    "id": "bio_b6_mc_18",
    "topicId": "topic_bio_11_06",
    "stem": "Hô hấp ở thực vật có vai trò cung cấp năng lượng cần thiết cho các hoạt động sống của tế bào, cơ thể như",
    "options": [
      "duy trì nhiệt độ thuận lợi cho các hoạt động sống.",
      "sinh tổng hợp các chất hữu cơ, vận chuyển và trao đổi các chất.",
      "giúp thực vật có khả năng chịu lạnh.",
      "giúp bay hơi một số hợp chất dẫn dụ côn trùng tham gia quá trình thụ phấn."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Medium",
    "tags": [
      "Vai trò",
      "Ứng dụng"
    ],
    "explanation_prompt": "ATP được tạo ra từ hô hấp được sử dụng cho các quá trình tiêu tốn năng lượng như sinh tổng hợp các đại phân tử, vận chuyển chất chủ động qua màng, và các hoạt động trao đổi chất khác."
  },
  {
    "id": "bio_b6_mc_19",
    "topicId": "topic_bio_11_06",
    "stem": "Ý nào dưới đây không phải là vai trò của hô hấp ở thực vật?",
    "options": [
      "Cung cấp năng lượng cần thiết cho các hoạt động sống của tế bào, cơ thể.",
      "Giúp thực vật duy trì nhiệt độ thuận lợi cho các hoạt động sống của cơ thể.",
      "Cung cấp nguyên liệu để tổng hợp các chất hữu cơ khác trong cơ thể.",
      "Hấp thu CO₂, giải phóng O₂ giúp điều hòa không khí."
    ],
    "answerIndices": [
      3
    ],
    "difficulty": "Easy",
    "tags": [
      "Vai trò"
    ],
    "explanation_prompt": "Hấp thu CO₂ và giải phóng O₂ là vai trò của Quang hợp. Hô hấp hấp thụ O₂ và thải CO₂."
  },
  {
    "id": "bio_b6_mc_20",
    "topicId": "topic_bio_11_06",
    "stem": "Ở thực vật, hình thức hô hấp nào là chủ yếu?",
    "options": [
      "Hô hấp kị khí.",
      "Phân giải kị khí.",
      "Hô hấp hiếu khí.",
      "Lên men."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Hình thức hô hấp"
    ],
    "explanation_prompt": "Hô hấp hiếu khí là hình thức hô hấp chủ yếu vì nó hiệu quả nhất, giải phóng nhiều năng lượng nhất (30-32 ATP) và cung cấp đủ năng lượng cho các hoạt động sống của thực vật."
  },
  {
    "id": "bio_b6_mc_21",
    "topicId": "topic_bio_11_06",
    "stem": "Ở thực vật, cơ quan hô hấp hiếu khí mạnh nhất diễn ra ở đâu?",
    "options": [
      "Rễ.",
      "Thân.",
      "Lá.",
      "Cành."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Medium",
    "tags": [
      "Cơ quan hô hấp"
    ],
    "explanation_prompt": "Rễ là cơ quan cần nhiều năng lượng ATP nhất để thực hiện quá trình hút khoáng chủ động, đặc biệt là ở vùng rễ non."
  },
  {
    "id": "bio_b6_mc_22",
    "topicId": "topic_bio_11_06",
    "stem": "Nội dung nào sau đây nói không đúng về mối quan hệ giữa hô hấp và môi trường ngoài?",
    "options": [
      "Nhiệt độ tăng đến nhiệt độ tối ưu thì cường độ hô hấp tăng (do tốc độ các phản ứng enzyme tăng).",
      "Cường độ hô hấp tỉ lệ thuận với hàm lượng nước.",
      "Cường độ hô hấp tỉ lệ nghịch với nồng độ CO₂.",
      "Cường độ hô hấp tỉ lệ nghịch với nồng độ O₂."
    ],
    "answerIndices": [
      3
    ],
    "difficulty": "Medium",
    "tags": [
      "Nhân tố ảnh hưởng"
    ],
    "explanation_prompt": "Cường độ hô hấp tỉ lệ thuận với nồng độ O₂ (trong giới hạn nhất định) vì O₂ là nguyên liệu chính cho hô hấp hiếu khí. Nếu nồng độ O₂ giảm quá thấp, hô hấp sẽ giảm mạnh."
  },
  {
    "id": "bio_b6_mc_23",
    "topicId": "topic_bio_11_06",
    "stem": "Có thể sử dụng dung dịch nào sau đây để phát hiện quá trình hô hấp ở thực vật thải ra khí CO₂?",
    "options": [
      "NaCl.",
      "Ca(OH)₂.",
      "KCl.",
      "H₂SO₄."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Thí nghiệm",
      "Phát hiện CO₂"
    ],
    "explanation_prompt": "Khí CO₂ được thải ra từ quá trình hô hấp có khả năng phản ứng với dung dịch Ca(OH)₂ (nước vôi trong) tạo ra kết tủa CaCO₃ làm đục dung dịch: CO₂ + Ca(OH)₂ → CaCO₃ ↓ + H₂O."
  },
  {
    "id": "bio_b6_mc_24",
    "topicId": "topic_bio_11_06",
    "stem": "Trong các ý sau, có bao nhiêu ý đúng khi nói về hô hấp ở thực vật? (1) Nguyên liệu ban đầu là glucose. (2) Sản phẩm ban đầu là khí oxygen. (3) Hô hấp kị khí diễn ra khi xung quanh tế bào sống thiếu oxygen. (4) Hàm lượng nước trong tế bào sống càng nhiều thì hô hấp càng mạnh. (5) Nhiệt độ xung quanh tế bào sống càng thấp thì hô hấp càng mạnh. (6) Chu trình Krebs diễn ra tại nhân tế bào.",
    "options": [
      "2.",
      "3.",
      "4.",
      "5."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Medium",
    "tags": [
      "Tổng hợp",
      "Kiến thức cơ bản"
    ],
    "explanation_prompt": "Các ý đúng là: (1) Đúng, (3) Đúng, (4) Đúng. Ý (2) Sai (O₂ là nguyên liệu). Ý (5) Sai (Hô hấp giảm khi nhiệt độ thấp). Ý (6) Sai (Chu trình Krebs diễn ra ở chất nền ti thể). Tổng cộng có 3 ý đúng."
  },
  {
    "id": "bio_b6_mc_25",
    "topicId": "topic_bio_11_06",
    "stem": "Hô hấp hiếu khí có ưu thế hơn so với hô hấp kị khí ở điểm nào sau đây?",
    "options": [
      "Tích lũy được nhiều năng lượng hơn.",
      "Hô hấp hiếu khí tạo ra sản phẩm là CO₂ và H₂O, nước sẽ cung cấp cho sinh vật khác sống.",
      "Quá trình hô hấp hiếu khí cần có sự tham gia của O₂ còn kị khí không cần O₂.",
      "Hô hấp hiếu khí xảy ra ở mọi loài sinh vật còn hô hấp kị khí chỉ xảy ra ở 1 số loài sinh vật nhất định."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Easy",
    "tags": [
      "Hô hấp hiếu khí",
      "Lợi thế"
    ],
    "explanation_prompt": "Hô hấp hiếu khí tạo ra khoảng 30-32 ATP (net) từ 1 phân tử glucose, trong khi hô hấp kị khí (lên men) chỉ tạo ra 2 ATP, do đó hô hấp hiếu khí hiệu quả năng lượng hơn rất nhiều."
  },
  {
    "id": "bio_b6_mc_26",
    "topicId": "topic_bio_11_06",
    "stem": "Nối tên các giai đoạn trong hô hấp sao cho phù hợp với số năng lượng chúng tạo ra. 1. Đường phân; 2. Chu trình Krebs; 3. Chuỗi chuyền electron hô hấp. a. 26-28 ATP; b. 2 ATP; c. 2 ATP và 4 CO₂.",
    "options": [
      "1-a, 2-b, 3-c.",
      "1-b, 2-c, 3-a.",
      "1-c, 2-a, 3-b.",
      "1-c, 2-b, 3-a."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Medium",
    "tags": [
      "Hô hấp hiếu khí",
      "Năng lượng"
    ],
    "explanation_prompt": "1. Đường phân tạo ra **2 ATP** (net) → 1-b. 2. Chu trình Krebs (2 vòng) tạo ra **2 ATP và 4 CO₂** → 2-c. 3. Chuỗi chuyền electron hô hấp tạo ra phần lớn năng lượng: **26-28 ATP** → 3-a."
  },
  {
    "id": "bio_b6_mc_27",
    "topicId": "topic_bio_11_06",
    "stem": "Tại sao sau mỗi lần trời mưa, các bác nông dân thường phải cày, xới đất quanh gốc cây trồng?",
    "options": [
      "Tránh cho cây không bị xói mòn đất.",
      "Làm cho cây lấy được chất dinh dưỡng từ đất.",
      "Làm cho đất tơi xốp, tạo điều kiện cho hô hấp ở rễ.",
      "Làm cho cây phát triển bộ rễ, giúp cây đứng vững."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Ứng dụng",
      "Hô hấp rễ"
    ],
    "explanation_prompt": "Sau khi mưa, đất bị nén chặt và úng nước làm giảm O₂ trong đất, gây khó khăn cho hô hấp rễ. Cày xới giúp đất tơi xốp, tăng cường độ thoáng khí, cung cấp O₂ cho rễ hô hấp hiếu khí."
  },
  {
    "id": "bio_b6_mc_28",
    "topicId": "topic_bio_11_06",
    "stem": "Tại sao nồng độ O₂ trong không khí lại ảnh hưởng đến quá trình hô hấp ở thực vật?",
    "options": [
      "Vì O₂ là nguyên liệu của quá trình hô hấp, tham gia vào quá trình oxi hóa các chất hữu cơ.",
      "Vì O₂ là phân tử dễ hòa tan trong nước nên giúp cây có thể hô hấp khi ở trong môi trường nước.",
      "Vì O₂ là chất nhận electron cuối cùng của chuỗi chuyền electron hô hấp trong hô hấp hiếu khí.",
      "Vì O₂ là sản phẩm của quá trình hô hấp, tham gia vào quá trình oxi hóa các chất hữu cơ."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Medium",
    "tags": [
      "Nhân tố ảnh hưởng",
      "O₂"
    ],
    "explanation_prompt": "Trong hô hấp hiếu khí, O₂ đóng vai trò thiết yếu là chất nhận electron và H⁺ cuối cùng trong chuỗi chuyền electron hô hấp, giúp chuỗi phản ứng giải phóng năng lượng hoạt động và tạo ra lượng lớn ATP."
  },
  {
    "id": "bio_b6_mc_29",
    "topicId": "topic_bio_11_06",
    "stem": "Tại sao khi nhiệt độ môi trường tăng cao (trên 55°C) thì hô hấp không diễn ra?",
    "options": [
      "Vì do nhiệt độ cao ảnh hưởng đến quá trình tạo sản phẩm của quá trình hô hấp.",
      "Vì do nhiệt độ cao làm mất hoạt tính của enzym hô hấp.",
      "Vì nhiệt độ cao ảnh hưởng đến quá trình oxi hóa các chất hữu cơ trong cơ thể.",
      "Vì do nhiệt độ cao sẽ làm cường độ hô hấp tăng ảnh hưởng đến chất lượng của hạt, quả."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Nhân tố ảnh hưởng",
      "Nhiệt độ"
    ],
    "explanation_prompt": "Hô hấp là quá trình xúc tác bởi enzyme. Khi nhiệt độ vượt quá ngưỡng tối đa (thường khoảng 40-50°C), enzyme bị biến tính (mất hoạt tính), làm quá trình hô hấp ngừng lại."
  },
  {
    "id": "bio_b6_mc_30",
    "topicId": "topic_bio_11_06",
    "stem": "Tại sao trong bảo quản hạt và nông sản người ta lại sử dụng phương pháp làm giảm cường độ hô hấp đến mức tối thiểu?",
    "options": [
      "Vì hô hấp làm tăng thời gian bảo quản hạt và nông sản.",
      "Vì hô hấp làm giảm hàm lượng chất hữu cơ trong cơ thể thực vật.",
      "Vì hô hấp giúp tạo năng lượng cung cấp cho các hoạt động của cơ thể thực vật.",
      "Vì hô hấp tạo nhiệt nên duy trì được nhiệt độ thuận lợi trong quá trình bảo quản."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Bảo quản nông sản",
      "Hô hấp"
    ],
    "explanation_prompt": "Hô hấp phân giải chất hữu cơ (protein, lipid, carbohydrate) tích lũy trong nông sản. Giảm hô hấp sẽ giảm thiểu sự tiêu hao chất hữu cơ, giữ được chất lượng và kéo dài thời gian bảo quản."
  },
  {
    "id": "bio_b6_mc_31",
    "topicId": "topic_bio_11_06",
    "stem": "Rau, củ, quả được bảo quản trong ngăn mát sẽ tươi lâu hơn, lý do nào sau đây không đúng?",
    "options": [
      "Giảm nhiệt độ của thực phẩm, làm chậm lại quá trình sinh lý, sinh hóa và trao đổi chất của sản phẩm.",
      "Khi nhiệt độ giảm sẽ dẫn đến tăng cường hô hấp do đó làm giảm chất lượng rau, củ, quả.",
      "Khi nhiệt độ giảm ảnh hưởng đến đến hoạt tính của enzyme, hô hấp không diễn ra.",
      "Nhiệt độ lạnh thực phẩm hạn chế quá trình hô hấp nên không ít ảnh hưởng đến chất lượng sản phẩm."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Medium",
    "tags": [
      "Bảo quản nông sản",
      "Nhiệt độ"
    ],
    "explanation_prompt": "Lý do (B) là không đúng. Khi nhiệt độ giảm (xuống dưới mức tối ưu), cường độ hô hấp sẽ giảm xuống, từ đó kéo dài thời gian bảo quản."
  },
  {
    "id": "bio_b6_mc_32",
    "topicId": "topic_bio_11_06",
    "stem": "Chúng ta thường thấy rau trong siêu thị được bảo quản trong túi nylon đục lỗ và để trong tủ mát, cơ sở khoa học của việc làm này là:",
    "options": [
      "để giảm sự hô hấp của rau, duy trì chất lượng của rau.",
      "để ổn định sự thoát hơi nước của rau, giữ cho rau tươi hơn.",
      "để tăng quá trình hô hấp của rau, giúp rau bảo quản được lâu hơn.",
      "để tăng quá trình hô hấp của rau giúp rau không bị mất nước."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Medium",
    "tags": [
      "Bảo quản nông sản",
      "Ứng dụng"
    ],
    "explanation_prompt": "Tủ mát làm giảm nhiệt độ → giảm cường độ hô hấp. Túi nilon đục lỗ giúp thoát $CO₂$ (sản phẩm hô hấp, nồng độ cao ức chế hô hấp) và hơi nước, đồng thời giữ lại độ ẩm cần thiết, giúp giảm hô hấp và duy trì chất lượng rau."
  },
  {
    "id": "bio_b6_mc_33",
    "topicId": "topic_bio_11_06",
    "stem": "Tại sao lúa nước sống được trong môi trường đất ngập nước?",
    "options": [
      "Vì ở lúa có mạng lưới mô khí thông từ lá đến rễ hình thành con đường thông khí liên tục để cung cấp O₂ cho rễ.",
      "Vì ở lúa thực hiện quá trình hô hấp qua lá là chủ yếu nên trong môi trường ngập nước cây vẫn phát triển tốt.",
      "Vì ở lúa có các mô và cơ quan phình to hình thành các túi khí dự trữ O₂ cung cấp cho rễ.",
      "Vì ở lúa có hệ rễ khí sinh nhô ra khỏi mặt nước để lấy O₂ từ không khí."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Medium",
    "tags": [
      "Thích nghi",
      "Môi trường ngập nước"
    ],
    "explanation_prompt": "Lúa nước có cấu tạo đặc biệt với hệ thống mô khí (aerenchyma) tạo thành các khoang rỗng thông nhau, giúp vận chuyển O₂ từ lá xuống rễ để duy trì hô hấp hiếu khí cho rễ trong điều kiện thiếu O₂ của đất ngập nước."
  },
  {
    "id": "bio_b6_mc_34",
    "topicId": "topic_bio_11_06",
    "stem": "Tại sao cây mắm, cây đước có thể sống được trong môi trường đất ngập nước (rừng ngập mặn)?",
    "options": [
      "Vì ở cây mắm, cây đước có mạng lưới mô khí thông từ lá đến rễ hình thành con đường thông khí liên tục để cung cấp O₂ cho rễ.",
      "Vì ở cây mắm, cây đước thực hiện quá trình hô hấp qua lá là chủ yếu nên trong môi trường ngập nước cây vẫn phát triển tốt.",
      "Vì ở cây mắm, cây đước có các mô và cơ quan phình to hình thành các túi khí dự trữ O₂ cung cấp cho rễ.",
      "Vì ở cây mắm, cây đước có hệ rễ khí sinh nhô ra khỏi mặt nước để lấy O₂ từ không khí."
    ],
    "answerIndices": [
      3
    ],
    "difficulty": "Medium",
    "tags": [
      "Thích nghi",
      "Môi trường ngập nước"
    ],
    "explanation_prompt": "Cây mắm, cây đước (thực vật ngập mặn) thích nghi với môi trường ngập nước bằng cách phát triển rễ hô hấp (rễ khí sinh) mọc ngược lên trên mặt đất ngập, giúp trao đổi khí O₂ trực tiếp với không khí."
  },
  {
    "id": "bio_b6_mc_35",
    "topicId": "topic_bio_11_06",
    "stem": "Những loại thực phẩm nào sau đây thường được bảo quản bằng phương pháp bảo quản khô?",
    "options": [
      "Các loại quả.",
      "Các loại rau, củ.",
      "Các loại hạt ngũ cốc.",
      "Các loại rau, củ, quả."
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Bảo quản nông sản"
    ],
    "explanation_prompt": "Bảo quản khô là phương pháp làm giảm hàm lượng nước trong nông sản đến mức tối thiểu (độ ẩm dưới 13-14%), làm giảm mạnh cường độ hô hấp, chủ yếu áp dụng cho các loại hạt ngũ cốc như lúa, ngô, đỗ,..."
  },
  {
    "id": "bio_b6_mc_36",
    "topicId": "topic_bio_11_06",
    "stem": "Để tăng hiệu quả hô hấp ở cây trồng người ta thường sử dụng các biện pháp nào sau đây? 1) Trồng cây đúng thời vụ. 2) Cung cấp đầy đủ nước và các chất dinh dưỡng. 3) Cày, xới đảm bảo cho đất được tơi xốp và thoáng khí. 4) Xây dựng hệ thống cấp và thoát nước đảm bảo việc tưới tiêu hợp lí. 5) Cung cấp nồng độ CO₂ cho cây trồng.",
    "options": [
      "1, 2, 4, 5.",
      "2, 3, 4, 5.",
      "1, 2, 3, 5.",
      "1, 2, 3, 4."
    ],
    "answerIndices": [
      3
    ],
    "difficulty": "Medium",
    "tags": [
      "Ứng dụng",
      "Tăng cường hô hấp"
    ],
    "explanation_prompt": "Các biện pháp (1), (2) tối ưu hóa điều kiện sống, (3) tăng O₂ trong đất, (4) tránh ngập úng gây hô hấp kị khí. Tất cả đều gián tiếp hoặc trực tiếp làm tăng cường độ hô hấp hiếu khí. Biện pháp (5) chủ yếu liên quan đến quang hợp."
  },
  {
    "id": "bio_b6_mc_37",
    "topicId": "topic_bio_11_06",
    "stem": "Quan sát hình mối liên hệ giữa quang hợp và hô hấp và cho biết có bao nhiêu phát biểu sai? 1) Quang hợp và hô hấp là hai quá trình có mối liên hệ mật thiết và phụ thuộc lẫn nhau. 2) Sản phẩm của quang hợp là nguyên liệu của quá trình hô hấp và ngược lại. 3) Quá trình hô hấp ở thực vật xảy ra trong bào quan lục lạp. 4) Quá trình quang hợp ở thực vật xảy ra tại bào quan ti thể. 5) Nguyên liệu của quá trình quang hợp là sản phẩm của quá trình hô hấp.",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Medium",
    "tags": [
      "Mối liên hệ",
      "Quang hợp và Hô hấp"
    ],
    "explanation_prompt": "Có 2 phát biểu sai là (3) và (4). Hô hấp xảy ra ở ti thể, còn quang hợp xảy ra ở lục lạp. Các phát biểu còn lại đều đúng, mô tả mối quan hệ giữa hai quá trình."
  },
  {
    "id": "bio_b6_tf_01",
    "topicId": "topic_bio_11_06",
    "stem": "Mỗi phát biểu sau đây đúng hay sai khi nói về vai trò của hô hấp ở thực vật? a) Hô hấp cung cấp năng lượng cần thiết để duy trì các hoạt động sống của tế bào và cơ thể thực vật. b) Acetyl – CoA là một trong những sản phẩm trung gian của quá trình hô hấp ở thực vật được dùng để tổng hợp acid béo, các sắc tố... c) Đối với quá trình hút khoáng ở cây thì hô hấp tạo ATP giúp vận chuyển khoáng chủ động vào cây, tạo môi trường áp suất thẩm thấu cao trong dịch bào, giúp cây hút khoáng dễ dàng. d) Hô hấp có vai trò quan trọng trong quá trình hút nước và khoáng ở cây vì, hô hấp tạo ra CO₂, CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻, H⁺ tham gia cơ chế hút bám trao đổi với các ion khoáng bám trên bề mặt keo đất.",
    "options": [
      "Có 1 ý sai.",
      "Có 2 ý sai.",
      "Có 3 ý sai.",
      "Tất cả các ý đều đúng."
    ],
    "answerIndices": [
      3
    ],
    "difficulty": "Hard",
    "tags": [
      "Vai trò",
      "Tổng hợp"
    ],
    "explanation_prompt": "Tất cả 4 ý đều đúng. Hô hấp không chỉ tạo ATP mà còn tạo ra các sản phẩm trung gian (như Acetyl-CoA) và các axit (như H⁺ từ H₂CO₃) có vai trò quan trọng trong sinh tổng hợp và cơ chế hút khoáng của rễ."
  },
  {
    "id": "bio_b6_tf_02",
    "topicId": "topic_bio_11_06",
    "stem": "Ở lúa mì, độ ẩm 11 – 12%, hạt lúa mì có cường độ hô hấp khoảng 1,5mgCO₂ /kg hạt/h; cường độ hô hấp tăng 4 – 5 lần khi độ ẩm hạt tăng thêm 14 – 15% và cường độ hô hấp có thể tăng hàng nghìn lần khi độ ẩm hạt khoảng 30 – 35%. Mỗi nhận định sau đây đúng hay sai về ví dụ trên? a) Hàm lượng nước trong hạt ảnh hưởng trực tiếp đến cường độ hô hấp. b) Để tăng cường độ hô hấp thì cần phải tăng hàm lượng nước trong tế bào và cơ thể thực vật. c) Khi hạt lúa mì đang ở trạng thái ngủ, nghỉ thì hàm lượng nước cao nhất. d) Khi ở độ ẩm 25 – 27%, hạt lúa mì có cường độ hô hấp khoảng 6 – 7,5 mgCO₂/kg hạt/h.",
    "options": [
      "Có 1 ý sai.",
      "Có 2 ý sai.",
      "Có 3 ý sai.",
      "Tất cả các ý đều đúng."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Medium",
    "tags": [
      "Nhân tố ảnh hưởng",
      "Nước",
      "Vận dụng"
    ],
    "explanation_prompt": "Có 1 ý sai là (c): Hạt đang ở trạng thái ngủ, nghỉ là khi hàm lượng nước thấp nhất (khoảng 10-14%), làm cường độ hô hấp rất yếu, giúp bảo quản. Ý (d) Vận dụng: Độ ẩm tăng 14-15% (từ 11-12% lên 25-27%) thì cường độ hô hấp tăng 4-5 lần (1.5 x 4 = 6, 1.5 x 5 = 7.5), nên d đúng."
  },
  {
    "id": "bio_b6_tf_03",
    "topicId": "topic_bio_11_06",
    "stem": "Quan sát hình 6.2 (biểu đồ nhiệt độ ảnh hưởng đến hô hấp), cho biết mỗi nhận định sau đúng hay sai khi nói về nhiệt độ ảnh hưởng đến hô hấp ở thực vật? a) Nhiệt độ tối ưu cho quá trình hô hấp ở thực vật trong khoảng 30 – 35°C. b) Khi nhiệt độ tăng, cường độ hô hấp tăng dần và đạt giá trị cao nhất tại nhiệt độ 40°C. c) Trong khoảng nhiệt độ 0 – 35°C, cứ tăng 10°C thì cường độ hô hấp tăng khoảng 2 – 2,5 lần (Hệ số Q₁₀). d) Nhiệt độ ảnh hưởng đến hoạt động của enzyme hô hấp, từ đó ảnh hưởng đến cường độ hô hấp.",
    "options": [
      "Có 1 ý sai.",
      "Có 2 ý sai.",
      "Có 3 ý sai.",
      "Tất cả các ý đều đúng."
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Medium",
    "tags": [
      "Nhân tố ảnh hưởng",
      "Nhiệt độ"
    ],
    "explanation_prompt": "Có 1 ý sai là (b): Cường độ hô hấp đạt giá trị cao nhất tại nhiệt độ tối ưu, thường là 30-35°C, không phải luôn là 40°C (40°C có thể là nhiệt độ tối đa, nơi enzyme bắt đầu giảm hoạt tính). Ý (c) là đặc điểm của hệ số Q₁₀ (cứ tăng 10°C thì tốc độ phản ứng tăng 2-3 lần), là đúng trong khoảng nhiệt độ thích hợp."
  },
  {
    "id": "bio_b6_tf_04",
    "topicId": "topic_bio_11_06",
    "stem": "Quan sát hình 6.3 (sơ đồ mối quan hệ Quang hợp và Hô hấp), cho biết mỗi nhận định sau đây đúng hay sai khi nói về mối quan hệ giữa quang hợp và hô hấp ở thực vật? a) Sản phẩm của quá trình quang hợp là nguyên liệu của quá trình hô hấp và ngược lại. b) Quang hợp và hô hấp là hai quá trình ngược nhau và trong tế bào chỉ xảy ra một trong hai quá trình. c) Quang hợp tạo ra năng lượng, tạo chất hữu cơ, oxygen làm nguyên liệu cho hô hấp; hô hấp tích lũy năng lượng, tạo ra H₂O, CO₂ làm nguyên liệu cho quang hợp. d) Mối quan hệ giữa quang hợp và hô hấp ảnh hưởng đến lượng chất hữu cơ tích luỹ trong cây và quyết định đến năng suất cây trồng.",
    "options": [
      "Có 1 ý sai.",
      "Có 2 ý sai.",
      "Có 3 ý sai.",
      "Tất cả các ý đều đúng."
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Medium",
    "tags": [
      "Mối liên hệ",
      "Quang hợp và Hô hấp"
    ],
    "explanation_prompt": "Có 2 ý sai là (b) và (c). Ý (b) sai vì cả hai quá trình đều xảy ra song song trong tế bào. Ý (c) sai vì Quang hợp tích lũy năng lượng và Hô hấp giải phóng năng lượng."
  },
  {
    "id": "bio_b6_tf_05",
    "topicId": "topic_bio_11_06",
    "stem": "Mỗi phát biểu sau đây đúng hay sai khi nói về hô hấp ở thực vật? a) Hô hấp hiếu khí và lên men đều xảy ra giai đoạn đường phân. b) Nếu không có oxygen, 1 phân tử glucose qua hô hấp tạo được 2 ATP. c) Hô hấp ở hạt đang nảy mầm diễn ra mạnh hơn ở hạt khô. d) Để hạt khô nhanh nảy mầm, người ta thường ngâm và ủ hạt trước khi gieo trồng để tăng độ ẩm và nhiệt độ → tăng hô hấp tạo nhiều ATP cung cấp năng lượng.",
    "options": [
      "Có 1 ý sai.",
      "Có 2 ý sai.",
      "Có 3 ý sai.",
      "Tất cả các ý đều đúng."
    ],
    "answerIndices": [
      3
    ],
    "difficulty": "Easy",
    "tags": [
      "Tổng hợp",
      "Ứng dụng"
    ],
    "explanation_prompt": "Tất cả 4 ý đều đúng. Ý (a) Đường phân là giai đoạn chung. Ý (b) Hô hấp kị khí (lên men) tạo 2 ATP net. Ý (c) Hạt nảy mầm có hàm lượng nước cao, hô hấp mạnh hơn hạt khô. Ý (d) Việc ngâm ủ nhằm tăng độ ẩm và nhiệt độ để kích thích hô hấp, cung cấp ATP cho quá trình nảy mầm."
  },
  {
    "id": "bio_b6_sa_01",
    "topicId": "topic_bio_11_06",
    "stem": "Hô hấp ở thực vật diễn ra theo mấy con đường?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Con đường hô hấp"
    ],
    "explanation_prompt": "Hô hấp ở thực vật diễn ra theo 2 con đường chính: Hô hấp hiếu khí (phân giải hiếu khí) và Hô hấp kị khí (phân giải kị khí hay lên men)."
  },
  {
    "id": "bio_b6_sa_02",
    "topicId": "topic_bio_11_06",
    "stem": "Quá trình phân giải hiếu khí ở thực vật thường được chia thành mấy giai đoạn chính?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Hô hấp hiếu khí",
      "Giai đoạn"
    ],
    "explanation_prompt": "Quá trình phân giải hiếu khí thường được chia thành 3 giai đoạn chính: Đường phân, Chu trình Krebs, và Chuỗi chuyền electron hô hấp. (Hoặc 4, nếu tính Oxi hóa Pyruvic acid là một giai đoạn riêng biệt)."
  },
  {
    "id": "bio_b6_sa_03",
    "topicId": "topic_bio_11_06",
    "stem": "Kết thúc giai đoạn đường phân (net), tế bào thu được bao nhiêu phân tử ATP?",
    "options": [
      "0",
      "2",
      "4",
      "30-32"
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Easy",
    "tags": [
      "Đường phân",
      "ATP"
    ],
    "explanation_prompt": "Quá trình đường phân tạo ra 4 ATP nhưng tiêu tốn 2 ATP ban đầu, nên lãi ròng (net) là 2 phân tử ATP."
  },
  {
    "id": "bio_b6_sa_04",
    "topicId": "topic_bio_11_06",
    "stem": "Có mấy nhân tố môi trường ngoài ảnh hưởng trực tiếp đến cường độ hô hấp ở thực vật?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Easy",
    "tags": [
      "Nhân tố ảnh hưởng"
    ],
    "explanation_prompt": "Có 4 nhân tố môi trường ngoài ảnh hưởng trực tiếp đến hô hấp là: Hàm lượng nước, Nhiệt độ, Nồng độ O₂, và Nồng độ CO₂."
  },
  {
    "id": "bio_b6_sa_05",
    "topicId": "topic_bio_11_06",
    "stem": "Khi nói về vai trò hô hấp ở thực vật, trong các ý sau, có bao nhiêu ý đúng? 1. Tổng hợp các chất và tích lũy năng lượng cho tế bào. 2. Cung cấp năng lượng ATP phục vụ các hoạt động sống của tế bào. 3. Tạo các sản phẩm trung gian cho các quá trình tổng hợp các chất. 4. Góp phần duy trì ổn định nhiệt độ tế bào và cơ thể.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Medium",
    "tags": [
      "Vai trò"
    ],
    "explanation_prompt": "Các ý đúng là: 2. Cung cấp ATP (vai trò chính); 3. Tạo sản phẩm trung gian (tiền chất cho sinh tổng hợp); 4. Giải phóng nhiệt (duy trì nhiệt độ). Ý 1 sai vì hô hấp là quá trình phân giải, giải phóng năng lượng, không phải tích lũy năng lượng dưới dạng chất hữu cơ."
  },
  {
    "id": "bio_b6_sa_06",
    "topicId": "topic_bio_11_06",
    "stem": "Khi nói về quá trình đường phân 1 phân tử glucose, có bao nhiêu ý đúng? 1. Chất (1) là NAD⁺, chất (2) là NADH. 2. Chất (3) và chất (5) là phân tử ATP. 3. Chất (4) là phân tử ADP. 4. Số ATP được tạo ra là 32 ATP.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndices": [
      2
    ],
    "difficulty": "Medium",
    "tags": [
      "Đường phân",
      "Sản phẩm"
    ],
    "explanation_prompt": "Giả sử sơ đồ mô tả: 1. Đúng (NAD⁺ nhận H⁺ và e⁻ tạo NADH). 2. Đúng (ATP được tạo ra). 3. Đúng (ADP là nguyên liệu nhận P tạo ATP). 4. Sai (Đường phân chỉ tạo 2 ATP net, 32 ATP là tổng hô hấp hiếu khí). Có 3 ý đúng."
  },
  {
    "id": "bio_b6_sa_07",
    "topicId": "topic_bio_11_06",
    "stem": "Trong các chất sau có bao nhiêu chất là sản phẩm của một chu trình Krebs hoàn chỉnh (từ 1 Acetyl-CoA)? (1) ATP; (2) pyruvic acid; (3) NADH; (4) FADH₂; (5) CO₂.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndices": [
      3
    ],
    "difficulty": "Medium",
    "tags": [
      "Chu trình Krebs",
      "Sản phẩm"
    ],
    "explanation_prompt": "Sản phẩm của 1 chu trình Krebs (từ 1 Acetyl-CoA) gồm: 1 ATP (hoặc GTP), 3 NADH, 1 FADH₂, 2 CO₂. Pyruvic acid là nguyên liệu đầu vào trước khi vào ti thể. Có 4 chất là sản phẩm (1), (3), (4), (5)."
  },
  {
    "id": "bio_b6_sa_08",
    "topicId": "topic_bio_11_06",
    "stem": "Sơ đồ bên phải mô tả một giai đoạn trong hô hấp hiếu khí (trong hình chữ Pyruvate chính là pyruvic acid). Trong sơ đồ này, có bao nhiêu ý đúng? (Sơ đồ mô tả từ Pyruvic acid → Chu trình Krebs). 1. Chất [1] và [3] là FADH₂, chất [4] là NADH. 2. [N] là chu trình Krebs diễn ra ở màng trong ti thể. 3. Chất [2] là Acetyl – coA, chất [5] là ATP. 4. Kết thúc quá trình này (Chu trình Krebs) tích lũy được 2 ATP (tính cho 1 glucose).",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Hard",
    "tags": [
      "Chu trình Krebs",
      "Sơ đồ"
    ],
    "explanation_prompt": "Ý đúng là (3) và (4). 3. Chất [2] là Acetyl-CoA, chất [5] là ATP/GTP. 4. Chu trình Krebs tạo 2 ATP/GTP (cho 2 Acetyl-CoA từ 1 glucose). Ý 1 sai ([1], [3] là NADH, [4] là FADH₂). Ý 2 sai ([N] là Chu trình Krebs diễn ra ở Chất nền ti thể). Có 2 ý đúng."
  },
  {
    "id": "bio_b6_sa_09",
    "topicId": "topic_bio_11_06",
    "stem": "Sơ đồ bên phải thể hiện một trong những con đường lên men kị khí ở thực vật. (Sơ đồ mô tả Pyruvate → Lactic Acid/Ethanol). Khi nói về sơ đồ này, có bao nhiêu ý đúng? 1. Quá trình này là quá trình lên men ethanol. 2. [M] là ATP, [N] là FADH₂. 3. [H] là pyruvic acid (pyruvate). 4. Quá trình này xảy ra ở tế bào chất.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndices": [
      1
    ],
    "difficulty": "Medium",
    "tags": [
      "Lên men",
      "Sơ đồ"
    ],
    "explanation_prompt": "Ý đúng là (3) và (4). 3. Pyruvate là sản phẩm của đường phân. 4. Lên men xảy ra ở tế bào chất. Ý 1 có thể sai (nếu là lên men lactic). Ý 2 sai ([M] là ATP, [N] là NADH)."
  },
  {
    "id": "bio_b6_sa_10",
    "topicId": "topic_bio_11_06",
    "stem": "Trong các ý sau, có bao nhiêu ý đúng khi nói về nhân tố ảnh hưởng đến hô hấp ở thực vật? 1. Cây sống trên cạn bị ngập úng lâu ngày, rễ cây hút quá nhiều nước nên bị chết. 2. Ở hạt khô, nếu được tăng độ ẩm thì sẽ tăng cường độ hô hấp của hạt. 3. Nhiệt độ môi trường không khí luôn tỉ lệ nghịch với cường độ hô hấp. 4. Tất cả các loài thực vật khi bị ngập úng lâu ngày đều chết.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndices": [
      0
    ],
    "difficulty": "Medium",
    "tags": [
      "Nhân tố ảnh hưởng",
      "Tổng hợp"
    ],
    "explanation_prompt": "Chỉ có 1 ý đúng là (2) (tăng độ ẩm sẽ tăng cường độ hô hấp của hạt, kích thích nảy mầm). Ý 1 sai (rễ chết do thiếu O₂ gây hô hấp kị khí). Ý 3 sai (trong khoảng nhiệt độ tối ưu, hô hấp tỉ lệ thuận với nhiệt độ). Ý 4 sai (một số cây như lúa, cây ngập mặn có khả năng thích nghi)."
  }

]
