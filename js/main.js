document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sliderMenu = document.getElementById('slider-menu');
    const closeSlider = document.getElementById('close-slider');

    // Open slider menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
        sliderMenu.classList.add('active');
    });

    // Close slider menu when close button or outside area is clicked
    closeSlider.addEventListener('click', () => {
        sliderMenu.classList.remove('active');
    });

    // Close slider menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sliderMenu.contains(event.target) && !hamburger.contains(event.target)) {
            sliderMenu.classList.remove('active');
        }
    });
});
