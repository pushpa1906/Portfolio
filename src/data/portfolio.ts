export const personal = {
  name: "Pushpaja Bommisetty",
  title: "Software Developer",
  email: "pushpaja.b@example.com",
  github: "https://github.com/pushpa1906",
  linkedin: "https://linkedin.com/in/pushpaja-bommisetty",

  heroText:
    "Creating modern web applications, interactive experiences, and technology solutions.",
};

export const experience = [
  {
    company: "Ceburu Systems, Inc.",
    role: "Software Development Engineer",
    duration: "Aug 2025 – May 2026",
    highlights: [
      "Developed modern web applications using React, TypeScript, JavaScript, and REST APIs.",
      "Built responsive user interfaces and reusable frontend components.",
      "Integrated frontend applications with backend services.",
      "Implemented filtering, search, import/export, and bulk operations.",
      "Contributed to enterprise software and visualization interfaces.",
      "Improved usability, performance, and software quality.",
    ],
  },

  {
    company: "University of Texas at Tyler",
    role: "Technical Specialist",
    duration: "Jan 2024 – May 2025",
    highlights: [
      "Maintained university websites and digital platforms.",
      "Improved accessibility and user experience.",
      "Created digital signage and promotional materials.",
      "Supported AV systems and event technologies.",
      "Managed secure document workflows.",
      "Provided technical support across campus.",
    ],
  },

  {
    company: "CEMS",
    role: "Machine Learning Intern",
    duration: "Jan 2022 – Aug 2022",
    highlights: [
      "Performed data preprocessing and transformation.",
      "Applied machine learning techniques.",
      "Built analytical reports and visualizations.",
      "Worked on classification and clustering projects.",
    ],
  },
];

export const projects = [
  {
    title: "ApplyFlow",
    subtitle: "Full-Stack Web Application",
    grid: "lg:col-span-4",

    description:
      "Built a full-stack job application tracking platform that combines a modern web interface with Google Sheets. Users can manage applications through searchable tables, interactive dashboards, configurable dropdowns, and CRUD operations while keeping Google Sheets as the underlying data source.",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Django REST Framework",
      "Google Sheets API",
      "Recharts",
      "REST APIs",
    ],

    highlights: [
      "Responsive dashboard with analytics",
      "Application CRUD operations",
      "Search, filtering & sorting",
      "Google Sheets integration",
      "Reusable React components",
      "Deployed on Vercel & Render",
    ],

    demo: "https://apply-flow-roan.vercel.app/",
    github: "https://github.com/pushpa1906/ApplyFlow",
  },
  {
    title: "Fake Currency Detection",
    subtitle: "Image Processing Project",
    grid: "lg:col-span-2",
    description:
      "Developed a MATLAB-based counterfeit currency detection system using image processing techniques to distinguish counterfeit Indian banknotes from genuine currency notes.",

    technologies: [
      "MATLAB",
      "Image Processing",
      "Computer Vision",
      "Digital Image Analysis",
    ],

    highlights: [
      "Grayscale conversion",
      "HSV color analysis",
      "Edge detection",
      "Segmented strip counting",
    ],
  },
  

  {
    title: "Heart Disease Prediction",
    subtitle: "Machine Learning Project",
    grid: "lg:col-span-2 lg:row-span-2",
    description:
      "Developed a predictive analytics system using supervised machine learning algorithms to assess the risk of heart disease based on patient clinical data. Performed data preprocessing, exploratory analysis, and model evaluation to improve prediction accuracy.",

    technologies: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],

    highlights: [
      "Clinical data analysis",
      "Exploratory data analysis",
      "Multiple model evaluation",
      "95% accuracy with Random Forest",
    ],
  },
  {
    title: "Health Database Management System",
    subtitle: "Database Engineering Project",
    
    grid: 
    "lg:col-span-4 lg:row-span-2 ",
    
    description:
      "Designed and implemented a normalized relational database for healthcare data management, leveraging MySQL, EER modeling, and advanced SQL queries to support analytics, reporting, and operational insights.",

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
      "Optimized reporting views",
      "Operational analytics",
    ],
  },




]

export const skillGroups = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],

  Backend: [
    "Node.js",
    "Django REST Framework",
    "REST APIs",
  ],

  Databases: [
    "MySQL",
    "SQL",
  ],

  Programming: [
    "Python",
    "TypeScript",
    "JavaScript",
    "C",
  ],

  Cloud: [
    "AWS Cloud Practitioner",
    "Azure Data Factory",
  ],

  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
  ],

  Design: [
    "Figma",
    "Canva",
    "Adobe Photoshop",
  ],
};