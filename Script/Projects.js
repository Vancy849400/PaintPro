const projects = [{
        title: "Living Room",
        category: "interior",
        description: "Modern elegance with sophisticated color palette",
        status: "completed",
        image: "../Images/20250616_153143.jpg",
        imageDescription: "Contemporary living room featuring deep charcoal gray walls, crisp white crown molding, and a textured accent wall with subtle gold highlights.",
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
        category: "exterior",
        description: "Premium weather-resistant full exterior transformation",
        status: "completed",
        image: "../Images/20250621_171652.jpg",
        imageDescription: "Estate exterior painted in forest green with cream trim and burgundy accents, designed for durability and elegance.",
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
        title: "Living Room",
        category: "interior",
        description: "Modern elegance with sophisticated color palette",
        status: "completed",
        image: "../Images/20250618_141507.jpg",
        imageDescription: "Stylish living room with charcoal gray walls, white trim, and gold accents creating a warm, inviting atmosphere.",
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
        category: "exterior",
        description: "Premium weather-resistant full exterior transformation",
        status: "⏳ In Progress",
        image: "../Images/20250827_152920.jpg",
        imageDescription: "Estate exterior renovation in progress, showing preparation work and partial application of forest green paint with cream trim.",
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
];

// Data
const data = {
    team: [{
            id: 1,
            name: "Vancy Painter",
            role: "Lead Painter & Founder",
            avatar: "👨‍🎨",
            description: "With over 2+ years of experience, Vancy leads every project with precision and passion, ensuring exceptional results on every brush stroke.",
            specialties: [
                "Interior Painting",
                "Project Management",
                "Client Relations",
            ],
            experience: "2+ years",
        },
        {
            id: 2,
            name: "Sarah Muleya",
            role: "Color Consultant",
            avatar: "👩‍💼",
            description: "Expert in color theory and design trends, Sarah helps clients choose the perfect palettes that bring their vision to life beautifully.",
            specialties: ["Color Theory", "Design Consultation", "Trend Analysis"],
            experience: "3+ years",
        },
        {
            id: 3,
            name: "James Banda",
            role: "Senior Painter",
            avatar: "👨‍🔧",
            description: "Specialized in exterior painting and weather-resistant finishes, James ensures your home stays beautiful and protected year-round.",
            specialties: [
                "Exterior Painting",
                "Weather-Resistant Finishes",
                "Surface Preparation",
            ],
            experience: "4+ years",
        },
    ],
    testimonials: [{
            id: 1,
            text: "Vancy transformed our living room completely! The attention to detail and professionalism was outstanding. Highly recommended!",
            rating: 5,
            author: "Margaret Nkomo",
            avatar: "👩",
            role: "Homeowner, Lusaka",
            date: "2024-10-15",
            verified: true,
        },
        {
            id: 2,
            text: "Professional, punctual, and passionate about their work. Completed our commercial space on time and within budget. Worth every penny!",
            rating: 5,
            author: "David Chulu",
            avatar: "👨",
            role: "Business Owner",
            date: "2024-09-20",
            verified: true,
        },
        {
            id: 3,
            text: "The color consultation service was amazing! Perfect colors that match our home's aesthetic. Best decision ever!",
            rating: 5,
            author: "Amara Soko",
            avatar: "👩",
            role: "Interior Designer",
            date: "2024-08-10",
            verified: true,
        },
    ],
};

export { projects, data };