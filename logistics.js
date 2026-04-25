/* logistics.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Logistics page initialized');
    
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

    // Add staggered entrance to all interactive cards
    const items = document.querySelectorAll('.grid > div');
    
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(item);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
