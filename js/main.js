document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sliderMenu = document.getElementById('slider-menu');
    const links = document.querySelectorAll('.slider-menu nav a');

    // Toggle slider menu when hamburger is clicked
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation();
        sliderMenu.classList.toggle('active');
    });

    // Close slider menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sliderMenu.contains(event.target) && !hamburger.contains(event.target)) {
            sliderMenu.classList.remove('active');
        }
    });

    // Close slider and apply smooth scrolling when any link inside it is clicked
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link jump
            const targetId = link.getAttribute('href'); // Get href attribute value
            const targetSection = document.querySelector(targetId); // Select the target section

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
                sliderMenu.classList.remove('active'); // Close the slider
            }
        });
    });

    // Existing code for project addition and deletion can stay here
});
