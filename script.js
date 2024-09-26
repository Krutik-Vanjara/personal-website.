// Simple greeting message and animation
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        header.style.opacity = '1'; // Fade in effect
    }, 100);
    
    console.log('Profile website loaded!');
});





