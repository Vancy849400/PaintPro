// Populate projects
const projects = [{
        title: "Luxury Living Room",
        description: "Modern elegance with sophisticated color palette",
        status: "completed",
        icon: "🏠",
        fullDescription: "A complete transformation that turned this ordinary living space into a stunning showcase of modern design. The client wanted sophistication and warmth, achieved through careful color selection and expert application.",
        details: [
            { label: "Duration", value: "5 days" },
            { label: "Area Covered", value: "450 sq ft" },
            {
                label: "Colors Used",
                value: "Charcoal Gray, Soft White, Gold Accents",
            },
            {
                label: "Special Features",
                value: "Textured feature wall, Crown molding, Ceiling detail",
            },
        ],
    },
    {
        title: "Estate Exterior",
        description: "Premium weather-resistant full exterior transformation",
        status: "completed",
        icon: "🏡",
        fullDescription: "This comprehensive exterior project protected and elevated the home's curb appeal. Using premium paints designed for Zambia's climate, we ensured both beauty and durability.",
        details: [
            { label: "Duration", value: "2 weeks" },
            { label: "Area Covered", value: "2,400 sq ft" },
            {
                label: "Colors Used",
                value: "Forest Green, Cream Trim, Burgundy Accents",
            },
            {
                label: "Special Features",
                value: "Pressure washing, Crack repair, 2-coat premium system",
            },
        ],
    },
    {
        title: "Corporate Headquarters",
        description: "Professional workspace with brand-aligned colors",
        status: "completed",
        icon: "🏢",
        fullDescription: "Weekend transformation of a busy office to minimize business disruption. Created a professional environment that reflects the company's brand while maintaining productivity.",
        details: [
            { label: "Duration", value: "3 days" },
            { label: "Area Covered", value: "1,200 sq ft" },
            { label: "Colors Used", value: "Corporate Blue, Neutral Gray, White" },
            {
                label: "Special Features",
                value: "Low-VOC paint, After-hours work, Conference room accent",
            },
        ],
    },
];

const projectGrid = document.getElementById("projectGrid");
projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.onclick = () => openModal(index);
    card.innerHTML = `
            <div class="project-image">${project.icon}</div>
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

// Modal functions
function openModal(index) {
    const project = projects[index];
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalDetails = document.getElementById("modalDetails");

    modalImage.innerHTML = project.icon;

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
    const navHeight = 80;
    const targetPosition = element.offsetTop - navHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
    });
}

// Navbar scroll effect
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

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

// Hero Carousel Logic
const heroImages = [
    "./Images/impressed-young-african-american-builder-uniform-holding-roller-brush-isolated-blue-background.jpg",
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80",
];
const heroSection = document.querySelector(".hero");
const carouselNav = document.querySelector(".hero-carousel-nav");
let heroIndex = 0;
let heroInterval;

function setHeroBg(idx) {
    if (!heroSection) return;
    heroSection.style.backgroundImage = `linear-gradient(135deg, rgba(10, 14, 39, 0.85), rgba(16, 185, 129, 0.3)), url('${heroImages[idx]}')`;
    // Update dots
    if (carouselNav) {
        carouselNav.querySelectorAll(".hero-carousel-dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === idx);
        });
    }
}

function nextHeroBg() {
    heroIndex = (heroIndex + 1) % heroImages.length;
    setHeroBg(heroIndex);
}

function resetHeroInterval() {
    clearInterval(heroInterval);
    heroInterval = setInterval(nextHeroBg, 5000);
}

// Only setup carousel if heroSection and carouselNav exist
if (heroSection && carouselNav) {
    // Prevent duplicate dots if script runs multiple times
    carouselNav.innerHTML = "";
    heroImages.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.className = "hero-carousel-dot" + (i === 0 ? " active" : "");
        dot.addEventListener("click", () => {
            heroIndex = i;
            setHeroBg(heroIndex);
            resetHeroInterval();
        });
        carouselNav.appendChild(dot);
    });

    setHeroBg(0);
    heroInterval = setInterval(nextHeroBg, 5000);

    // Pause/resume on hover
    heroSection.addEventListener("mouseenter", () => clearInterval(heroInterval));
    heroSection.addEventListener("mouseleave", resetHeroInterval);
}