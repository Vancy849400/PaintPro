//Projects properties
const projects = [{
        title: "Luxury Living Room",
        description: "Modern elegance with sophisticated color palette",
        status: "completed",
        image: "./Images/20251225_1415_image.png",
        fullDescription: "This stunning living room transformation showcases the power of a carefully chosen color scheme. Deep charcoal gray walls create an intimate, sophisticated atmosphere while crisp white crown molding and trim provide striking contrast. The space features a textured accent wall that adds depth and visual interest, complemented by subtle gold metallic accents throughout. The result is a contemporary yet warm living space that feels both luxurious and inviting, perfect for both entertaining and relaxation.",
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
        image: "./Images/Exterial image.jpg",
        fullDescription: "This comprehensive exterior renovation brought new life to a beautiful estate home. The project began with thorough surface preparation including pressure washing and crack repair to ensure longevity. We applied a premium two-coat paint system specifically formulated to withstand Zambia's intense sun and seasonal rains. The elegant forest green body is beautifully offset by cream-colored trim and sophisticated burgundy accent details on shutters and architectural features. The result is enhanced curb appeal with protection that will last for years to come.",
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
        image: "./Images/Coorporate_image.jpg",
        fullDescription: "This corporate office transformation was completed over a weekend to avoid disrupting business operations. The project focused on creating a professional environment that reflects the company's brand identity while promoting productivity. We used low-VOC paints to ensure air quality and employee comfort, with a sophisticated corporate blue as the primary color paired with neutral grays and crisp whites. The main conference room features a bold accent wall that serves as a dynamic backdrop for presentations. Modern, clean lines and careful attention to detail throughout create a workspace that employees and clients alike can appreciate.",
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
    "./Images/Vancy.jpg",
    "./Images/My Image.jpg",
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