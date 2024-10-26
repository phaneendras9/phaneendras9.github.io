document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Toggle the dropdown menu
    if (hamburger && dropdownMenu) {
        hamburger.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active'); // Slide in/out
        });

        // Close the menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!dropdownMenu.contains(event.target) && !hamburger.contains(event.target)) {
                dropdownMenu.classList.remove('active'); // Close if clicked outside
            }
        });
    }
});
