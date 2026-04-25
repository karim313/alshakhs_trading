/* oil.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Oil page initialized');
    
    // Interactive features
    const features = document.querySelectorAll('.grid > div');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.classList.add('shadow-2xl', '-translate-y-2');
        });
        feature.addEventListener('mouseleave', () => {
            feature.classList.remove('shadow-2xl', '-translate-y-2');
        });
    });
});
