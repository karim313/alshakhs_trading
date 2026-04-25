/* flour.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Flour page initialized');
    
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

    // Add staggered entrance to elements
    const items = document.querySelectorAll('main section:nth-child(2) > div > div');
    
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`;
        
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
});
