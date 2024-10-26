document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sliderMenu = document.getElementById('slider-menu');

    // Toggle slider menu when hamburger is clicked
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the click event from closing the menu immediately
        sliderMenu.classList.toggle('active'); // Toggle the 'active' class to open/close the slider
    });

    // Close slider menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sliderMenu.contains(event.target) && !hamburger.contains(event.target)) {
            sliderMenu.classList.remove('active'); // Remove the 'active' class to close the slider
        }
    });

    // Close slider when any link inside it is clicked
    sliderMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            sliderMenu.classList.remove('active');
        }
    });
});
