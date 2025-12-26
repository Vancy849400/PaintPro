// Projects properties
import projects from "./Projects.js";

// Populate project grid
const projectGrid = document.getElementById("projectGrid");

if (projectGrid) {
    projects.forEach((project, index) => {
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
                        <div class="project-footer">
                            <span class="status-badge ${project.status}">
                                ${
                                  project.status === "completed"
                                    ? "✓ Completed"
                                    : "⏳ In Progress"
                                }
                            </span>
                        </div>
                    </div>
                `;
        projectGrid.appendChild(card);
    });
}

// Modal functions
function openModal(index) {
    const project = projects[index];
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalDetails = document.getElementById("modalDetails");

    modalImage.style.backgroundImage = `url('${project.image}')`;
    modalImage.innerHTML = "";

    let detailsHTML = `
                <h2>${project.title}</h2>
                <span class="status-badge ${project.status}">
                    ${
                      project.status === "completed"
                        ? "✓ Completed"
                        : "⏳ In Progress"
                    }
                </span>
                <p style="margin-top: 1.5rem;">${project.fullDescription}</p>
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
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        closeModal();
    }
};

// Smooth scroll function
function smoothScroll(e, target) {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
        const navHeight = 80;
        const targetPosition = element.offsetTop - navHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
}

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