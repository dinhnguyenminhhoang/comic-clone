# Dự Án: Website Đọc Truyện

## Mô Tả

Trang web Đọc Truyện là một nền tảng trực tuyến được xây dựng để cung cấp trải nghiệm đọc truyện đa dạng và thú vị cho người dùng, với mục đích giải trí và học tập. Dự án này sử dụng các công nghệ hiện đại như ReactJs (Frontend), NodeJs và ExpressJs (Backend), cùng với cơ sở dữ liệu SQL. Nền tảng cung cấp nhiều chức năng như quản lý truyện, chương, tài khoản người dùng và admin, tìm kiếm truyện, bình luận, đánh giá, và quản lý bộ sưu tập.

## Công Nghệ

- **Frontend:** Xây dựng bằng ReactJs để tạo giao diện người dùng linh hoạt, tương tác và thân thiện.

- **Backend:** Sử dụng NodeJs với framework ExpressJs để xây dựng các API, xử lý logic của server và tương tác với cơ sở dữ liệu.

- **Database:** Sử dụng cơ sở dữ liệu SQL để lưu trữ thông tin về người dùng, truyện, chương, bình luận và đánh giá.

## Chức Năng

1. **Đăng Nhập và Đăng Xuất:**
   - Người dùng và quản trị viên có thể đăng nhập vào hệ thống.
   - Hỗ trợ đăng xuất để bảo vệ thông tin cá nhân.

2. **Quản Lý Người Dùng và Quản Trị Viên:**
   - CRUD (Create, Read, Update, Delete) người dùng và quản trị viên.
   - Phân quyền truy cập cho người dùng và quản trị viên.

3. **Quản Lý Truyện và Chương:**
   - Thêm, sửa, xóa truyện và chương.
   - Tổ chức truyện thành từng chương để thuận tiện cho việc đọc.

4. **Tìm Kiếm Truyện:**
   - Cung cấp chức năng tìm kiếm để người dùng có thể dễ dàng tìm kiếm truyện theo tiêu đề, tác giả hoặc thể loại.

5. **Phân Trang Truyện:**
   - Hiển thị truyện và chương theo trang để giúp người đọc có trải nghiệm đọc thuận lợi và nhanh chóng.

6. **Bình Luận và Đánh Giá:**
   - Người đọc có thể bình luận và đánh giá truyện để chia sẻ ý kiến và tạo cộng đồng năng động.

7. **Quản Lý Bộ Sưu Tập:**
   - Người dùng có thể thêm truyện vào bộ sưu tập cá nhân để theo dõi và quản lý theo dõi.

## Hướng Dẫn Cài Đặt và Chạy Dự Án

1. **Yêu Cầu Hệ Thống:**
   - Node.js và npm: Cài đặt từ [nodejs.org](https://nodejs.org/).
   - Cơ sở dữ liệu SQL: Cài đặt và cấu hình một cơ sở dữ liệu SQL.

2. **Cài Đặt Dependencies:**
   ```bash
   npm install
