# Gửi Mẹ Yêu — món quà 20/10

Một website thiệp số tương tác bằng Vite, React và TypeScript. Trang chạy tĩnh, không cần backend, tài khoản hay dịch vụ API.

## Chạy thử

Cần Node.js 22.12 trở lên và pnpm 11. Trong thư mục dự án, chạy `pnpm install`, sau đó `pnpm dev`. Mở Preview của Manus để xem trang. Lệnh `pnpm build` tạo bản tĩnh trong `dist/`.

## Album ảnh của Mẹ

Slide chúc mừng có album nhiều khung. Cả bốn khung đã được đặt ảnh gia đình trong `public/images/` (tệp `.png`); khung nào lỗi sẽ tự hiện khung hoa thay thế.

Để thêm ảnh cho bản tĩnh, chép tệp vào `public/images/` rồi thêm một mục vào `galleryPhotos` trong `src/config.ts`, ví dụ:

```ts
{ src: '/images/me-2.jpg', alt: 'Mẹ cùng gia đình', caption: 'Một ngày thật vui' }
```

Có thể thêm bao nhiêu mục cũng được; mỗi mục nên có `src`, `alt` và `caption`. Trong môi trường Manus, bạn cũng có thể tải tệp mới vào kho lưu trữ của dự án rồi dùng đúng đường dẫn `/manus-storage/...` được trả về. Ảnh giữ tỷ lệ gốc 4:3; nếu một ảnh lỗi, khung hoa thay thế sẽ hiện.

## Sửa lời chúc

Các tiêu đề, đoạn thư, chữ ký, lời nhắn phụ và lời chúc cuối đều nằm trong đối tượng `gift` ở `src/config.ts`.

## Nhạc nền tùy chọn

Đặt tệp âm thanh tại `public/music.mp3`; nút nhạc chỉ xuất hiện khi tệp hợp lệ và chỉ phát sau khi người xem bấm nút. Có thể đổi `musicSrc` trong `src/config.ts`. Nếu không có tệp, nút nhạc sẽ được ẩn.
"# 20-10" 
