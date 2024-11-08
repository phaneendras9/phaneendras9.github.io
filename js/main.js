document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sliderMenu = document.getElementById('slider-menu');
    const links = document.querySelectorAll('.slider-menu nav a');
    const projectContainer = document.querySelector('.project-cards');
    const addProjectBtn = document.getElementById('addProjectBtn');

    // Password for project deletion
    const deletePassword = "Phaneendra@123";

    // Load dynamically added projects from local storage or set up an empty array
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Function to save projects to local storage
    function saveProjectsToLocalStorage() {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

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
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                sliderMenu.classList.remove('active');
            }
        });
    });

    // Function to render projects (only dynamically added projects)
    function renderProjects() {
        // Remove dynamically added project cards before re-rendering
        projectContainer.querySelectorAll('.dynamic-project').forEach(el => el.remove());

        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card', 'dynamic-project'); // Mark as dynamically added

            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="view-project-btn" target="_blank">View Project</a>
                <button class="delete-project-btn" data-index="${index}">Delete</button>
            `;
            projectContainer.appendChild(projectCard);
        });

        // Attach delete event listeners to all delete buttons for dynamically added projects
        document.querySelectorAll('.delete-project-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                deleteProject(index);
            });
        });
    }

    // Function to delete a dynamically added project with password protection
    function deleteProject(index) {
        const enteredPassword = prompt('Enter password to delete this project:');
        if (enteredPassword === deletePassword) {
            projects.splice(index, 1);
            saveProjectsToLocalStorage(); // Save updated projects to local storage
            renderProjects(); // Re-render the updated project list
            alert('Project deleted successfully.');
        } else {
            alert('Incorrect password. Project deletion canceled.');
        }
    }

    // Event listener to add a new project
    addProjectBtn.addEventListener('click', () => {
        const title = prompt('Enter Project Title');
        if (!title) return; // Cancel if title is not provided

        const description = prompt('Enter Project Description');
        if (!description) return; // Cancel if description is not provided

        const link = prompt('Enter Project Link');
        if (!link) return; // Cancel if link is not provided

        // Add the new project to projects array and save to local storage
        projects.push({ title, description, link });
        saveProjectsToLocalStorage(); // Save updated projects to local storage
        renderProjects(); // Render the updated list
    });

    renderProjects(); // Initial render on page load
});
