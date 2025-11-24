// document.addEventListener('DOMContentLoaded', function() {
//     // ===============================================
//     // CẤU HÌNH HIỆU ỨNG
//     // ===============================================
//     const PETAL_COUNT = 50; 
//     const PETAL_IMAGE_URL = 'images/petal.png'; // !!! ĐẢM BẢO ĐƯỜNG DẪN NÀY LÀ ĐÚNG !!!
    
//     // Kiểm tra và tạo container, gắn vào body
//     let container = document.querySelector('.petal-container');
//     if (!container) {
//         container = document.createElement('div');
//         container.className = 'petal-container';
//         document.body.appendChild(container);
//     }

//     function createPetal() {
//         const petal = document.createElement('div');
//         petal.className = 'petal';

//         // 1. Hình ảnh cánh hoa
//         petal.style.backgroundImage = 'url("' + PETAL_IMAGE_URL + '")'; 
        
//         // 2. Vị trí ngẫu nhiên trên toàn bộ chiều rộng (0vw đến 100vw)
//         petal.style.left = Math.random() * 100 + 'vw'; // Sẵn sàng bay khắp chiều rộng
        
//         // Bắt đầu từ trên màn hình (vị trí âm)
//         petal.style.top = -Math.random() * 20 + 'vh'; 
        
//         // 3. Tốc độ và thời gian rơi (5s đến 15s)
//         const duration = Math.random() * 10 + 5; 
//         petal.style.animationName = 'fall';
//         petal.style.animationDuration = duration + 's';
//         petal.style.animationTimingFunction = 'linear';
//         petal.style.animationIterationCount = 'infinite';
//         petal.style.animationDelay = -Math.random() * duration + 's'; 

//         // 4. Hoạt ảnh xoay ngẫu nhiên
//         const swayDuration = Math.random() * 5 + 3; 
//         const swayName = Math.random() < 0.5 ? 'sway1' : 'sway2';
//         petal.style.animationName += ', ' + swayName;
//         petal.style.animationDuration += ', ' + swayDuration + 's';
//         petal.style.animationTimingFunction += ', ease-in-out';
        
//         // 5. Kích thước ngẫu nhiên (20px đến 30px)
//         const size = Math.random() * 10 + 20; 
//         petal.style.width = size + 'px';
//         petal.style.height = size + 'px';
        
//         // 6. Độ mờ ngẫu nhiên
//         petal.style.opacity = Math.random() * 0.4 + 0.5;

//         container.appendChild(petal);
//     }

//     for (let i = 0; i < PETAL_COUNT; i++) {
//         createPetal();
//     }
// });

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


