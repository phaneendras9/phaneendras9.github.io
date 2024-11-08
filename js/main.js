document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sliderMenu = document.getElementById('slider-menu');
    const links = document.querySelectorAll('.slider-menu nav a');
    const projectContainer = document.querySelector('.project-cards');
    const addProjectBtn = document.getElementById('addProjectBtn');

    // Sample data for projects
    const projects = [
        { title: 'Project 1', description: 'Description of project 1', link: 'project1.html' },
        { title: 'Project 2', description: 'Description of project 2', link: 'project2.html' },
    ];

    // Define a password for deletion (should be securely handled in a real application)
    const deletePassword = "Phaneendra@123";

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

    // Smooth scroll and close slider when any link inside it is clicked
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

    // Function to render projects
    function renderProjects() {
        projectContainer.innerHTML = '';
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button class="view-project-btn" onclick="window.location.href='${project.link}'">View Project</button>
                <button class="delete-project-btn" onclick="deleteProject(${index})">Delete</button>
            `;
            projectContainer.appendChild(projectCard);
        });
    }

    // Function to delete a project with password protection
    function deleteProject(index) {
        const enteredPassword = prompt('Enter password to delete this project:');
        if (enteredPassword === deletePassword) {
            projects.splice(index, 1);
            renderProjects();
            alert('Project deleted successfully.');
        } else {
            alert('Incorrect password. Project deletion canceled.');
        }
    }

    // Event listener to add a new project
    addProjectBtn.addEventListener('click', () => {
        const title = prompt('Enter Project Title');
        const description = prompt('Enter Project Description');
        const link = prompt('Enter Project Link');
        if (title && description && link) {
            projects.push({ title, description, link });
            renderProjects();
        }
    });

    renderProjects(); // Initial render
});
