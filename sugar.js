/* sugar.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sugar page initialized');
    
    // Smooth appearance
    const card = document.querySelector('.bg-amber-50');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transition = 'all 1s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, 100);
    }
});
