# Thêm ảnh vào album

Album ở slide chúc mừng lấy danh sách từ `galleryPhotos` trong `src/config.ts`. Đặt ảnh mới trong thư mục này, rồi thêm một mục gồm đường dẫn, alt text và chú thích, ví dụ:

```ts
{ src: '/images/me-2.jpg', alt: 'Mẹ cùng gia đình', caption: 'Một ngày thật vui' }
```

Ảnh gia đình hiện có được tải từ kho lưu trữ của dự án và chỉ hiển thị một lần. Các mục có `src: ''` là khung chờ trang trí; thay chúng bằng đường dẫn ảnh thật khi bạn có ảnh muốn thêm. Tỷ lệ ảnh trong album là 4:3.
