export const personal = {
  name: "Pushpaja Bommisetty",
  title: "Software Developer",

  email: "pushpaja.bommisetty1906@gmail.com",

  github: "https://github.com/pushpa1906",

  linkedin:
    "https://www.linkedin.com/in/pushpaja-bommisetty/",

  heroText:
    "Creating modern web applications, intuitive user experiences, and technology solutions.",
};

/* =========================================================
   EXPERIENCE
========================================================= */

export const experience = [
  {
    company: "Ceburu Systems, Inc.",

    role: "Software Development Engineer",

    duration: "Aug 2025 – May 2026",

    highlights: [
      "Developed and maintained full-stack application features using React, TypeScript, JavaScript, Django REST Framework, PostgreSQL, SQL, and REST APIs.",

      "Built reusable React components and interactive network topology interfaces using React Hooks and React Flow.",

      "Integrated frontend applications with backend REST APIs and JSON-based data flows.",

      "Implemented search, filtering, bulk operations, import/export workflows, and data visualization features.",

      "Worked on network management functionality including interactive maps, device information, and browser-based terminal experiences.",

      "Improved application reliability and performance through testing, debugging, optimization, and iterative feature development.",

      "Collaborated in Agile development workflows using Git and GitHub.",
    ],
  },

  {
    company: "University of Texas at Tyler",

    role: "Web Developer",

    duration: "Jan 2024 – May 2025",

    highlights: [
      "Developed and maintained university websites using Modern Campus CMS (Omni CMS), HTML5, CSS3, and JavaScript.",

      "Created responsive and cross-browser compatible web experiences for university audiences.",

      "Improved navigation, information architecture, page layouts, content organization, and usability across university web properties.",

      "Applied WCAG 2.1 accessibility practices, semantic HTML, accessible navigation, and structured digital content.",

      "Created digital signage, presentations, graphics, and promotional materials for university programs and events.",

      "Collaborated with faculty, IT teams, and campus stakeholders on web content and digital communication improvements.",

      "Managed 1,500+ student records using ImageNow / Perceptive Content while supporting FERPA-compliant document workflows.",
    ],
  },

  {
    company:
      "Centre of Excellence in Maritime and Shipbuilding (CEMS)",

    role: "Machine Learning Intern",

    duration: "Jan 2022 – Aug 2022",

    highlights: [
      "Prepared and analyzed structured datasets using Python, Pandas, and NumPy.",

      "Performed exploratory data analysis to identify patterns and trends.",

      "Created analytical charts and visualizations using Matplotlib and Seaborn.",

      "Applied machine learning techniques including classification, clustering, and predictive modeling.",

      "Evaluated model results and gained hands-on experience with end-to-end data analysis workflows.",
    ],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

export const projects = [
  {
    title: "ApplyFlow",

    subtitle: "Job Application Tracking Platform",

    grid: "lg:col-span-4",

    description:
      "A job application tracking platform for managing applications, follow-ups, and progress through a responsive dashboard connected to Google Sheets.",

    focus: [
      "Dashboard UX",
      "Responsive UI",
      "Data Visualization",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Django REST Framework",
      "Google Sheets API",
      "Recharts",
      "Playwright",
    ],

    highlights: [
      "Application CRUD operations",
      "Search, filtering, and status tracking",
      "Automatic follow-up date management",
      "Dashboard analytics and application metrics",
      "Google Sheets data integration",
      "Responsive and reusable frontend components",
    ],

    demo:
      "https://apply-flow-roan.vercel.app/",

    github:
      "https://github.com/pushpa1906/ApplyFlow",

    visual: "applyflow",
  },

  {
    title: "TintMint",

    subtitle: "Color Palette Design Tool",

    grid: "lg:col-span-2",

    description:
      "A frontend color palette tool for generating, adjusting, previewing, saving, and exporting reusable color systems for websites and digital interfaces.",

    focus: [
      "UI/UX",
      "Color Systems",
      "Interaction Design",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Playwright",
      "LocalStorage",
    ],

    highlights: [
      "Multiple color relationship modes",
      "Palette generation and color editing",
      "Interactive interface previews",
      "Save and reuse palettes locally",
      "Export palettes as CSS, JSON, or HEX",
      "Responsive and keyboard-accessible interface",
    ],

    demo:
      "https://pushpa1906.github.io/TintMint/",

    github:
      "https://github.com/pushpa1906/TintMint",

    visual: "tintmint",
  },

  {
    title: "Reparo",

    subtitle: "Accessibility Utility",

    grid: "lg:col-span-2",

    description:
      "A lightweight accessibility utility for evaluating color contrast and palette relationships using WCAG-based checks, live feedback, and accessible color suggestions.",

    focus: [
      "Accessibility",
      "WCAG",
      "Usability",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vite",
      "Cypress",
      "axe-core",
    ],

    highlights: [
      "WCAG contrast ratio checking",
      "AA and AAA accessibility evaluation",
      "Normal and large text testing",
      "Accessible color suggestions",
      "Palette relationship analysis",
      "Keyboard and accessibility testing",
    ],

    demo:
      "https://pushpa1906.github.io/Reparo/#home",

    github:
      "https://github.com/pushpa1906/Reparo",

    visual: "reparo",
  },

  {
    title: "Health Database Management System",

    subtitle: "Database Engineering Project",

    grid: "lg:col-span-4",

    description:
      "A normalized relational database designed for healthcare data management, reporting, and operational analysis using relational modeling and advanced SQL queries.",

    focus: [
      "Database Design",
      "Data Modeling",
      "Reporting",
    ],

    technologies: [
      "MySQL",
      "SQL",
      "Database Modeling",
      "EER Diagrams",
      "Data Analysis",
    ],

    highlights: [
      "20+ normalized tables",
      "Foreign key relationships",
      "Structured healthcare data model",
      "Optimized reporting views",
      "Operational analytics queries",
    ],

    visual: "database",
  },
];

/* =========================================================
   OPTIONAL SKILL GROUP DATA

   Keep only if another component still imports skillGroups.
========================================================= */

export const skillGroups = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React Hooks",
    "React Flow",
  ],

  BackendAndAPIs: [
    "Django",
    "Django REST Framework",
    "REST APIs",
    "JSON",
    "API Integration",
    "PostgreSQL",
    "MySQL",
    "SQL",
  ],

  UIUXAndAccessibility: [
    "Figma",
    "Responsive Design",
    "Information Architecture",
    "WCAG 2.1",
    "ARIA",
    "Semantic HTML",
    "Keyboard Accessibility",
    "Color Contrast",
  ],

  WebAndCMS: [
    "Omni CMS",
    "Website Management",
    "Web Accessibility",
    "Cross-Browser Compatibility",
    "Content Management",
    "SEO Basics",
  ],

  DataAndAnalytics: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "Data Analysis",
    "Machine Learning",
  ],

  TestingAndTools: [
    "Playwright",
    "Cypress",
    "axe-core",
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Agile",
    "Debugging",
    "E2E Testing",
  ],
};