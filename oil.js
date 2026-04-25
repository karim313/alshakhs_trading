/* oil.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Oil page initialized');
    
    // Header Scroll Effect
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-emerald-950/80', 'backdrop-blur-lg', 'border-b', 'border-white/10', 'py-4', 'shadow-2xl');
                header.classList.remove('py-6');
            } else {
                header.classList.remove('bg-emerald-950/80', 'backdrop-blur-lg', 'border-b', 'border-white/10', 'py-4', 'shadow-2xl');
                header.classList.add('py-6');
            }
        });
    }

    // Scroll Animation for Cards
    const cards = document.querySelectorAll('.grid > div');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });

    // Handle video loop for exactly 11 seconds if fragment doesn't work perfectly in all browsers
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('timeupdate', function() {
            if (this.currentTime >= 11) {
                this.currentTime = 0;
                this.play();
            }
        });
    }
});
