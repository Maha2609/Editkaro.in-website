// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Easing function for animation
        once: true, // Whether animation should happen only once - while scrolling down
    });
});
