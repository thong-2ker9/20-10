# Tiến độ website “Gửi Mẹ Yêu — Món quà 20/10”

## Cảnh mở quà và lời chúc chính
- [x] Khi website tải lần đầu, hiển thị trải nghiệm mở đầu toàn màn hình với tiêu đề **“Gửi Mẹ Yêu ❤️”**, dòng **“Một món quà nhỏ dành riêng cho mẹ, nhân ngày 20/10.”**, một phong thư/hộp quà/thiệp hoa thanh lịch và nút **“Mở món quà của mẹ ♡”**. Không đưa toàn bộ nội dung thư lên màn hình mở đầu. Nút có hiệu ứng hover, phóng nhẹ và phản hồi khi bấm; thao tác mở quà chuyển mượt sang lời chúc như tiết lộ một món quà riêng.
- [x] Cảnh chính hiển thị **“Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10”** và **“Mẹ là điều tuyệt vời nhất.”**. Hình ảnh hoa/thiệp là điểm nhấn; phần hình xuất hiện dần, hoa nở, cánh hoa bay nhẹ, tiêu đề và lời nhắn hiện theo nhịp dễ chịu, nhanh và không bắt chờ lâu.
- [x] Thư được trình bày như giấy ivory ấm có viền mảnh, họa tiết hoa ở góc và chất giấy nhẹ; chữ dễ đọc, khoảng cách dòng thoải mái. Hiển thị đầy đủ nguyên văn:

  “Mẹ yêu của con,

  Nhân ngày 20/10, con chúc mẹ luôn mạnh khỏe, bình an và thật nhiều niềm vui.

  Con cảm ơn mẹ vì đã luôn yêu thương, chăm sóc và dành cho con những điều tốt đẹp nhất. Có những điều con không thường xuyên nói ra, nhưng con luôn trân trọng những hy sinh và tình yêu mà mẹ dành cho gia đình.

  Con mong mẹ lúc nào cũng có thật nhiều lý do để mỉm cười, luôn được yêu thương và có những ngày thật nhẹ nhàng, hạnh phúc.

  Cảm ơn mẹ vì đã luôn là mẹ của con.

  Con yêu mẹ rất nhiều. ❤️”

  Kết thư bằng **“Con trai của mẹ ❤️”**. Có thể hiện chữ theo từng dòng nhưng toàn bộ nội dung phải truy cập/đọc được ngay, không chờ quá lâu.

## Tương tác hoa và đoạn kết
- [x] Bấm cụm hoa chính kích hoạt hiệu ứng hoa nở dịu dàng; hover hoa có phản hồi tinh tế. Bấm nút trái tim tạo cụm tim bay. Bấm phong thư trang trí nhỏ sẽ mở một lời nhắn ngắn bổ sung. Cuộn/chuyển cảnh hé lộ nội dung nhẹ nhàng, không gây nhảy bố cục.
- [x] Phần kết hiển thị **“Chúc mẹ một ngày 20/10 thật hạnh phúc!”** và **“Ngày nào con cũng mong mẹ luôn bình an, khỏe mạnh và mỉm cười thật nhiều.”**, cùng một bố cục hoa, hạt sáng và vài cánh hoa nhẹ.
- [x] Nút **“Gửi mẹ thêm một cái ôm ♡”** hoạt động; khi bấm sẽ tạo hoạt ảnh trái tim nhẹ và hiện **“Con yêu mẹ nhiều lắm! ❤️”**.

## Ảnh cá nhân và âm thanh tùy chọn
- [x] Có một vùng ảnh mẹ/gia đình nhỏ, thanh lịch, không lấn át lời chúc; không tạo ảnh giả hoặc bịa kỷ niệm. Khi chưa có ảnh, dùng khung/illustration hoa trang nhã thay vì ảnh giả. Để sẵn thư mục **`public/images/`**, hỗ trợ người dùng thêm/thay ảnh mẹ sau này (mặc định **`public/images/me.jpg`**) và giải thích rõ trong mã/README cách thêm hoặc thay ảnh; ảnh có góc bo mềm, viền/bóng nhẹ và co giãn đúng kích thước.
- [x] Chỉ hiện nút nhạc nếu tệp âm thanh cục bộ thực sự có sẵn; có trạng thái đang phát/tạm dừng rõ, chỉ bắt đầu phát sau tương tác người dùng, xử lý lỗi phát lại êm và giữ nguyên trải nghiệm khi không có nhạc. Không để trình phát hỏng khi thiếu audio.

## Mỹ thuật, chuyển động và khả năng sử dụng
- [x] Video TikTok tham khảo đã được mở và quan sát các đoạn tiêu biểu: nền tối có đốm sáng, cành/hoa hồng phát sáng, phong thư hồng, khung ảnh và lá thư. Các mô-típ được diễn giải theo hướng riêng thay vì sao chép khung quay màn hình; bảng màu blush **`#F8DDE5`**, ivory **`#FFF9F4`**, rose **`#E89AAE`**, deep rose **`#B84F6B`**, sage **`#A8B7A0`**, champagne gold **`#D8BA83`**, nâu ấm dễ đọc **`#51383D`**; phối serif thanh lịch cho lời chúc, sans-serif rõ ràng cho nội dung phụ, chữ viết tay cho thông điệp ngắn; hoa, cánh hoa, hạt sáng, phong thư, thiệp và bóng đổ hài hòa, có chủ đích.
- [x] Dùng chuyển động mượt, opacity/transform, hiện chữ có nhịp, cánh hoa trôi và hoa nở; tránh mọi thứ chuyển động cùng lúc, hiệu ứng quá mức, layout shift, nhấp nháy và hoạt ảnh JavaScript liên tục không cần thiết. Tôn trọng **`prefers-reduced-motion`**.
- [x] Responsive cho desktop, laptop, tablet và điện thoại; ưu tiên smartphone. Không tràn ngang/cắt chữ, nút đủ lớn để chạm, trang trí không che nội dung, chữ dễ đọc và ảnh tự co giãn.
- [x] Tương tác chạm và bàn phím; thông tin cốt yếu không phụ thuộc hover. Dùng semantic HTML, nhãn nút có thể hiểu được, focus bàn phím nhìn rõ, tương phản đủ tốt và Unicode/tiếng Việt có dấu hiển thị chính xác.

## Cấu trúc, tùy biến và bàn giao
- [x] Làm website thực sự chạy được bằng **Vite + React + TypeScript** và CSS tùy chỉnh; không cài dependency không cần thiết, không tạo backend/database/đăng nhập/dashboard/API không cần thiết; triển khai dạng website tĩnh phù hợp Cloudflare Pages hoặc Vercel.
- [x] Tổ chức code dễ đọc, có component React dùng lại khi phù hợp; gom lời chúc, thư, chữ ký và đường dẫn ảnh/nhạc tùy chọn vào cấu hình dễ tìm, dễ sửa. Không dùng lorem ipsum, nội dung giả, nút không hoạt động, asset hỏng hoặc TODO thay cho tính năng được yêu cầu.
- [x] Hoàn thiện trải nghiệm mở đầu, thư, tương tác hoa/tim/phong thư, lời chúc cuối và vùng thêm ảnh; chạy lệnh build khả dụng và khắc phục lỗi biên dịch/tài nguyên rõ ràng trước khi bàn giao. Website được xem ở desktop và điện thoại; các nút mở quà, hoa, lời nhắn phụ và cái ôm được thử trên Preview.


## Yêu cầu bổ sung
- [x] Sau khi người xem bấm mở quà, phát đoạn chuyển cảnh khoảng 2 giây: hoa bay tỏa từ tâm và phủ toàn màn hình, có lời dẫn ngắn, rồi mờ đi để chuyển sang slide chúc mừng. Tôn trọng `prefers-reduced-motion` bằng cách bỏ qua hoạt ảnh dài.
- [x] Hiển thị đúng ảnh gia đình do người dùng gửi trong khung kỷ niệm; giữ tỷ lệ ảnh 4:3 để không cắt mất thành viên, dùng kho tệp dự án, không chỉnh sửa ảnh gốc; alt text mô tả ảnh và trạng thái ảnh lỗi tiếp tục dùng khung hoa thay thế.


## Album ảnh trong slide chúc mừng
- [x] Slide chúc mừng có một album nhiều ảnh; dùng ảnh gia đình người dùng đã gửi một lần trong album, các thẻ còn lại là khung chờ trang nhã (không nhân bản ảnh và không tạo ảnh gia đình giả). Danh sách ảnh, mô tả alt và chú thích dễ thêm/sửa trong `gift.galleryPhotos`; ảnh mới có thể đặt ở `public/images/` và khai báo đường dẫn tại đây. Album thích ứng màn hình, không tràn ngang hay cắt chữ.
