document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sliderMenu = document.getElementById('slider-menu');
    const links = document.querySelectorAll('.slider-menu nav a'); // All menu links

    // Toggle slider menu when hamburger is clicked
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the click from closing the menu immediately
        sliderMenu.classList.toggle('active'); // Toggle 'active' class to open/close the slider
    });

    // Close slider menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sliderMenu.contains(event.target) && !hamburger.contains(event.target)) {
            sliderMenu.classList.remove('active'); // Remove 'active' class to close the slider
        }
    });

    // Close slider when any link inside it is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            sliderMenu.classList.remove('active'); // Close menu after clicking a link
        });
    });
});
