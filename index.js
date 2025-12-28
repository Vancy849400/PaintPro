// Projects properties
import projects from "./Projects.js";

// Function to display projects
window.displayProjects = function(filter = "all") {
    const projectGrid = document.getElementById("projectGrid");
    if (!projectGrid) return;

    projectGrid.innerHTML = ""; // Clear the grid

    projects.forEach((project, index) => {
        // Filter logic
        if (filter !== "all" && project.category !== filter) return;

        const card = document.createElement("div");
        card.className = "project-card";
        card.onclick = () => openModal(index);
        card.innerHTML = `
            <div class="project-image" style="background-image: url('${
              project.image
            }');"></div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="status-badge ${project.status}">
                    ${
                      project.status === "completed"
                        ? "✓ Completed"
                        : "⏳ In Progress"
                    }
                </span>
            </div>
        `;
        projectGrid.appendChild(card);
    });
};

// Filter function for the buttons
window.filterProjects = function(category) {
    // 1. Update active button style
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.innerText.toLowerCase() === category) btn.classList.add("active");
        if (category === "all" && btn.innerText === "All")
            btn.classList.add("active");
    });

    // 2. Re-display projects
    displayProjects(category);
};

// Initialize the display
displayProjects("all");

//Model functions
window.openModal = function(index) {
    const project = projects[index];
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalDetails = document.getElementById("modalDetails");

    if (!modal) return;

    modalImage.style.backgroundImage = `url('${project.image}')`;

    let detailsHTML = `
        <h2>${project.title}</h2>
        <span class="status-badge ${project.status}">
            ${project.status === "completed" ? "✓ Completed" : "⏳ In Progress"}
        </span>
        <p style="margin-top: 1.5rem;">${project.imageDescription}</p>
        <div class="details-grid">
    `;

    project.details.forEach((detail) => {
        detailsHTML += `
            <div class="detail-item">
                <div class="detail-label">${detail.label}</div>
                <div class="detail-value">${detail.value}</div>
            </div>
        `;
    });

    detailsHTML += `</div>`;
    modalDetails.innerHTML = detailsHTML;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scroll
};

window.closeModal = function() {
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scroll
    }
};

// Close modal when clicking outside the content area
window.addEventListener("click", (event) => {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key for better UX
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Smooth scroll function
window.smoothScroll = function(e, targetId) {
    const element = document.getElementById(targetId);

    // If we are on a different page (e.g., Projects.html) and trying to reach an ID on Home
    if (!element && (targetId === "about" || targetId === "home")) {
        window.location.href = `index.html#${targetId}`;
        return;
    }

    if (element) {
        e.preventDefault();
        const navHeight = 80;
        const targetPosition = element.offsetTop - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });

        // Accessibility: update URL hash without jump
        history.pushState(null, null, `#${targetId}`);
    }
};

// Hamburger menu toggle logic
const nav = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = nav.querySelectorAll("ul a");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        const expanded = nav.classList.contains("open");
        menuToggle.setAttribute("aria-expanded", expanded);
        document.body.classList.toggle("no-scroll", expanded);
    });
}

// Close menu when a link is clicked
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("no-scroll");
        }
    });
});

// Dynamic date
const now = new Date().getFullYear();
const nowElement = document.getElementById("now");
if (nowElement) {
    nowElement.textContent = `© ${now} Professional House Painting. All rights reserved.`;
}

// Add scroll animation for project cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 0.8s ease forwards";
        }
    });
}, observerOptions);

document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card);
});