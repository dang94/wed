document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.fh5co-nav');
    
    // Nếu không tìm thấy header, dừng lại
    if (!header) return; 

    // Ngưỡng cuộn (scroll) mà tại đó header sẽ đổi màu
    const scrollThreshold = 100; 

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            // Thêm class khi cuộn qua ngưỡng
            header.classList.add('scrolled-header');
        } else {
            // Xóa class khi trở về đầu trang
            header.classList.remove('scrolled-header');
        }
    });

    // Kích hoạt kiểm tra lần đầu khi tải trang
    window.dispatchEvent(new Event('scroll'));
});

