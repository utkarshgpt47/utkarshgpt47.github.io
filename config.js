// Website Configuration
const config = {
    // Personal Information
    personal: {
        name: "Utkarsh Gupta",
        title: "AI • Analytics • Automation",
        tagline: "Transforming Data into Intelligent Decisions",
        email: "utkarshgpt47@gmail.com",
        location: "India",
    },

    // About Section
    about: {
        bio: `With 6 years of experience in Analytics, I've partnered with leading B2C, D2C, and B2B product-based companies to drive data-driven transformation. My expertise spans the entire analytics spectrum—from strategic planning to hands-on implementation of AI-powered automation solutions.

I specialize in helping organizations unlock the full potential of their data through intelligent automation, advanced analytics, and AI-driven insights. Whether you're looking to optimize operations, build predictive models, or implement end-to-end analytics solutions, I bring a proven track record of delivering measurable business impact.

Ready to transform your data into your competitive advantage? Let's collaborate on your next innovation.`,
        image: "images/my_photo.jpeg",
    },

    // Skills — with levels for animated bars
    skills: {
        technical: [
            { name: "SQL", level: 95 },
            { name: "Python", level: 90 },
            { name: "Artificial Intelligence", level: 85 },
            { name: "Machine Learning", level: 85 },
            { name: "Process Automation", level: 90 },
            { name: "Data Analytics", level: 95 },
            { name: "AI Agents", level: 80 },
            { name: "Data Visualization", level: 88 },
            { name: "ETL & Data Pipelines", level: 85 },
            { name: "Predictive Modeling", level: 82 }
        ],
        professional: [
            "Data-Driven Strategy & Planning",
            "Business Intelligence",
            "Team Leadership & Management",
            "Analytics Consulting",
            "Stakeholder Management",
            "Process Optimization"
        ]
    },

    // Projects
    projects: [
        {
            title: "AI-Powered Analytics Platform",
            description: "End-to-end analytics solution leveraging AI for automated insights and predictive modeling, reducing analysis time by 70%.",
            technologies: ["Python", "AI", "SQL", "Automation"],
            github: "",
            demo: "",
            image: "images/project1.png"
        },
        {
            title: "Automated Reporting System",
            description: "Intelligent automation framework that generates custom reports and dashboards, serving 100+ stakeholders daily.",
            technologies: ["Python", "Automation", "Analytics", "SQL"],
            github: "",
            demo: "",
            image: "images/project2.png"
        },
        {
            title: "Customer Analytics Engine",
            description: "Advanced analytics solution for B2C companies, delivering actionable insights on customer behavior and lifetime value.",
            technologies: ["SQL", "Python", "Analytics", "AI"],
            github: "",
            demo: "",
            image: "images/project3.png"
        }
    ],

    // Services — now with SVG icon keys
    services: [
        {
            iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><path d="M7 9l3 3-3 3M13 15h4"></path></svg>',
            title: "AI & Machine Learning",
            description: "Build intelligent systems that learn from your data and automate complex decision-making processes."
        },
        {
            iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
            title: "Advanced Analytics",
            description: "Transform raw data into actionable insights with custom analytics solutions tailored to your business needs."
        },
        {
            iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
            title: "Process Automation",
            description: "Streamline operations and eliminate manual tasks through intelligent automation and AI agents."
        },
        {
            iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
            title: "Data Strategy & Planning",
            description: "Develop comprehensive data strategies that align with your business goals and drive measurable outcomes."
        }
    ],

    // Social Links
    social: {
        github: "https://github.com/utkarshgpt47",
        linkedin: "https://linkedin.com/in/utkarshgpt47",
        twitter: "",
        medium: "",
        website: ""
    },

    // Google Analytics
    analytics: {
        measurementId: "G-N578PJ8HFR"
    },

    // Call to Action
    cta: {
        primary: "Schedule a Consultation",
        secondary: "View My Work"
    }
};
