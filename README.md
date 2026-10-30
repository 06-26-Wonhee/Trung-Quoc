# Hoa Ngữ Học Viện (Chinese Learning Hub) 🇨🇳🇻🇳

Trang web học tập, ôn luyện và kiểm tra tiếng Trung toàn diện (HSK 1 - HSK 2) được xây dựng hoàn toàn bằng **HTML5, CSS3 và JavaScript thuần (Vanilla JS)**, chạy mượt mà trực tiếp trên mọi trình duyệt hiện đại mà không cần cài đặt máy chủ hay thư viện bổ trợ.

---

## 🌟 Tính Năng Nổi Bật

### 1. 🏠 Giao Diện Trang Chủ Hiện Đại & Thân Thiện
- Thiết kế chuẩn phong cách Hán ngữ hiện đại kết hợp tông màu đỏ son phương đông (`Crimson Red`) và vàng hoàng gia (`Imperial Gold`).
- Thẻ thống kê thời gian thực: Tổng số từ vựng, số lượng từ HSK 1, HSK 2 và số từ yêu thích đã lưu.
- Menu chuyển đổi mượt mà giữa các phân hệ: **Trang chủ**, **Học từ vựng**, **Luyện tập**, **Kiểm tra**, và **Thêm từ & Dữ liệu**.
- Nút bật/tắt âm thanh hiệu ứng (Web Audio API) và tùy chỉnh tốc độ giọng đọc phát âm (0.75x, 0.9x, 1.0x).

### 2. 📚 Mục Học Từ Vựng (Vocabulary Explorer & 3D Flashcards)
- Kho từ vựng có sẵn **120+ từ HSK 1 và HSK 2 chất lượng cao**, mỗi từ bao gồm:
  - Chữ Hán to rõ, Pinyin kèm dấu thanh điệu chuẩn.
  - Nghĩa tiếng Việt và từ loại (Danh từ, Động từ, Tính từ, v.v.).
  - Câu ví dụ thực tế kèm Pinyin và bản dịch tiếng Việt.
- **Tích hợp Web Speech API**: Bấm nút loa để nghe giọng đọc tiếng Trung phổ thông (`zh-CN`) chuẩn xác cho cả từ vựng và câu ví dụ.
- **Bộ lọc thông minh**: Lọc theo Tất cả, HSK 1, HSK 2, hoặc các từ đã đánh dấu sao yêu thích (⭐).
- **Thanh tìm kiếm tức thì**: Tìm kiếm nhanh theo Chữ Hán, Pinyin hoặc Nghĩa tiếng Việt.
- **Chế độ Thẻ ghi nhớ 3D (Flashcards)**: Hiệu ứng lật thẻ 3D mượt mà để tự kiểm tra trí nhớ, kèm tính năng trộn thẻ (Shuffle).
- **Cửa sổ Modal chi tiết**: Nhấp vào từ để xem bảng phóng to chữ và phát âm.

### 3. 🎯 Trung Tâm Luyện Tập Đa Dạng (8 Dạng Bài Tập)
1. **Trắc nghiệm từ vựng (Vocabulary Quiz)**:
   - Tự động sinh câu hỏi ngẫu nhiên từ kho từ: Hán tự ➔ Nghĩa, Nghĩa ➔ Hán tự, Hán tự ➔ Pinyin, và Nghe phát âm ➔ Chọn từ.
   - Chấm điểm tức thì kèm hiệu ứng âm thanh sống động (chime khi đúng, buzz khi sai).
2. **Nhìn hình phán đoán đúng sai (Image True/False)**:
   - Hình ảnh minh họa vector SVG màu sắc sắc nét (tách trà, quả táo, bơi lội, sách vở, bác sĩ, máy bay, trời mưa, mèo con, v.v.).
   - Đọc câu miêu tả tiếng Trung và chọn ĐÚNG (正确) hoặc SAI (错误) kèm giải thích chi tiết.
3. **Đọc câu hỏi chọn câu trả lời đúng (Reading Comprehension)**:
   - Các mẩu truyện/đoạn văn ngắn chuẩn phong cách HSK.
   - Có nút bật/tắt Pinyin & bản dịch để người học tự thử thách khả năng đọc chữ Hán.
   - Nút phát âm Web Speech API đọc toàn bộ đoạn văn.
4. **Chọn bộ từ điền vào đoạn văn (Cloze Passage Test)**:
   - Đoạn văn với các chỗ trống `(1)`, `(2)`, `(3)`... và Ngân hàng từ vựng bên dưới.
   - Nhấp chọn ô trống rồi nhấp từ tương ứng để điền; kiểm tra đối chiếu và xem bản dịch trọn vẹn.
5. **Nhìn phiên âm viết Hán tự (Pinyin to Hanzi)**:
   - Hiển thị Pinyin và nghĩa tiếng Việt.
   - Hỗ trợ cả gõ trực tiếp qua bàn phím VÀ bảng phím ký tự ảo giúp người dùng trên điện thoại hoặc máy tính chưa cài bộ gõ tiếng Trung vẫn làm bài thuận tiện.
6. **Sắp xếp từ thành câu hoàn chỉnh (Sentence Unscramble)**:
   - Các khối từ bị xáo trộn vị trí, nhấp để xếp vào khay câu trả lời hoặc thu hồi về ngân hàng từ.
   - Phân tích điểm ngữ pháp tiếng Hán cụ thể sau khi nộp câu.
7. **Dịch câu Việt sang Trung (Translation Practice)**:
   - Cho câu tiếng Việt, chọn câu tiếng Trung chuẩn ngữ pháp nhất; chỉ ra các bẫy ngữ pháp thường gặp (như thứ tự từ chỉ thời gian, phân biệt `不` vs `没`, cấu trúc `离`).
8. **Hoàn thành hội thoại 2 lượt trả lời (2-turn Dialogue Completion)**:
   - Mô phỏng đoạn chat giao tiếp thực tế với đối tác người bản xứ qua 2 vòng hỏi - đáp phản hồi logic.

### 4. 📝 Kiểm Tra Năng Lực & Thi Thử HSK (Mock Exam)
- Bài thi tổng hợp 15 câu chọn lọc bao gồm cả từ vựng, ngữ pháp, đọc hiểu và dịch câu.
- Đồng hồ đếm ngược 15 phút.
- Bảng điều hướng câu hỏi để chuyển nhanh giữa các câu.
- Báo cáo kết quả chi tiết theo thang điểm 100, xác định Đạt (≥ 60 điểm) hay Cần cố gắng, giải thích từng câu sai.

### 5. ➕ Thêm Từ Vựng Cá Nhân & Quản Lý Dữ Liệu
- Form thêm từ vựng mới: Tự nhập chữ Hán, Pinyin, Nghĩa, Cấp độ HSK, Câu ví dụ.
- Dữ liệu được lưu vĩnh viễn trong `localStorage` của trình duyệt.
- **Xuất dữ liệu (Export JSON)**: Tải file sao lưu về máy.
- **Nhập dữ liệu (Import JSON)**: Khôi phục danh sách từ vựng từ file đã sao lưu.
- **Khôi phục dữ liệu gốc**: Reset về kho từ vựng mẫu ban đầu bất kỳ lúc nào.

---

## 🚀 Hướng Dẫn Chạy Trang Web

Trang web hoàn toàn sử dụng HTML, CSS và JavaScript thuần, bạn có thể mở và dùng ngay theo 2 cách sau:

### Cách 1: Mở trực tiếp bằng trình duyệt (Nhanh nhất)
1. Truy cập vào thư mục:
   `C:\Users\ADMIN\.gemini\antigravity\scratch\chinese-learning-web\`
2. Nhấp đúp chuột vào tệp `index.html` (hoặc chuột phải chọn **Open with** ➔ **Google Chrome** / **Microsoft Edge** / **Firefox**).
3. Trang web sẽ khởi chạy ngay lập tức với đầy đủ tính năng!

### Cách 2: Chạy qua Live Server (nếu dùng VS Code hoặc IDE)
- Mở thư mục `chinese-learning-web` trong VS Code hoặc IDE yêu thích.
- Bấm **Go Live** với tiện ích Live Server để chạy tại địa chỉ `http://127.0.0.1:5500/index.html`.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
chinese-learning-web/
├── index.html          # Khung giao diện HTML5 chính
├── README.md           # Hướng dẫn chi tiết
├── css/
│   └── style.css       # Toàn bộ CSS phong cách Hán ngữ hiện đại, responsive
└── js/
    ├── data.js         # Kho từ vựng mẫu HSK 1 - 2 và ngân hàng 8 dạng bài tập
    ├── speech.js       # Bộ xử lý Web Speech API (phát âm) & Web Audio API (âm thanh)
    ├── exercises.js    # Logic vận hành 8 phân hệ bài tập tương tác
    └── app.js          # Quản lý trạng thái, chuyển tab, lưu trữ LocalStorage, thi thử
```
