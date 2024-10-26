// // JavaScript to add interactivity (Optional)
// document.querySelector('.hamburger-menu').addEventListener('click', () => {
//     alert("Hamburger menu clicked!");
// });
// JavaScript to toggle dropdown menu
document.getElementById('hamburger').addEventListener('click', () => {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});


