// ========================================
// TESTIMONIALS CAROUSEL
// Auto-rotate with smooth transitions
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    var testimonials = document.querySelectorAll('.testimonial-item');
    var dots = document.querySelectorAll('.carousel-dots .dot');
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    var currentIndex = 0;
    var autoPlayInterval;

    if (testimonials.length === 0) return;

    function showTestimonial(index) {
        // Wrap index
        if (index >= testimonials.length) index = 0;
        if (index < 0) index = testimonials.length - 1;

        testimonials.forEach(function (item) { item.classList.remove('active'); });
        dots.forEach(function (dot) { dot.classList.remove('active'); });

        testimonials[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');

        currentIndex = index;
    }

    function nextTestimonial() {
        showTestimonial(currentIndex + 1);
    }

    function prevTestimonial() {
        showTestimonial(currentIndex - 1);
    }

    // Controls
    if (nextBtn) nextBtn.addEventListener('click', function () {
        nextTestimonial();
        resetAutoPlay();
    });

    if (prevBtn) prevBtn.addEventListener('click', function () {
        prevTestimonial();
        resetAutoPlay();
    });

    // Dots
    dots.forEach(function (dot, index) {
        dot.addEventListener('click', function () {
            showTestimonial(index);
            resetAutoPlay();
        });
    });

    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextTestimonial, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    startAutoPlay();

    // Pause on hover
    var carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', function () {
            clearInterval(autoPlayInterval);
        });
        carousel.addEventListener('mouseleave', function () {
            startAutoPlay();
        });
    }

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;

    if (carousel) {
        carousel.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        var diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextTestimonial();
            } else {
                prevTestimonial();
            }
            resetAutoPlay();
        }
    }
});
