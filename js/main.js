// Existing code for hamburger menu and slider
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

    // Project section functionality
    const projectContainer = document.querySelector('.project-cards');
    const addProjectBtn = document.getElementById('addProjectBtn');

    // Sample data for projects (can be replaced with dynamic data)
    const projects = [
        { title: 'Project 1', description: 'Description of project 1', link: 'project1.html' },
        { title: 'Project 2', description: 'Description of project 2', link: 'project2.html' },
    ];

    // Function to render projects
    function renderProjects() {
        projectContainer.innerHTML = ''; // Clear current projects
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

    // Function to delete a project
    function deleteProject(index) {
        projects.splice(index, 1);
        renderProjects();
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
