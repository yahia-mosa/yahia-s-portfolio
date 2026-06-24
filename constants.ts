import { ExperienceItem, Project, USPItem, Course } from './types';

export const PERSONAL_INFO = {
  name: "Yahia Mohamed Ahmed",
  title: "Full-Stack .NET Developer | ASP.NET Core | React | AI Integration | Clean Architecture",
  tagline: "Architecting Scalable, AI-Integrated Systems — From Concept to Deployment",
  location: "Cairo, Egypt",
  intro: "I am a results-oriented Full-Stack .NET Developer specializing in the design and development of scalable, high-performance systems and AI-powered applications.",
  email: "yahiamosa2004@gmail.com",
  phone: "01110666420",
  whatsapp: "https://wa.me/201110666420",
  socials: {
    linkedin: "https://linkedin.com/in/yahia-mohamedd",
    github: "https://github.com/yahia-mosa",
    twitter: "https://twitter.com/yahia"
  },
  resume: "https://drive.google.com/file/d/1B9FW1MKniaLD_-q6OI1l_2VaMKCdiaVT/view?usp=drive_link"
};

export const EXECUTIVE_SUMMARY = `I am a results-oriented Full-Stack .NET Developer specializing in the design and development of scalable, high-performance systems and AI-powered applications. My expertise spans modern frontend development, robust backend architecture, and seamless artificial intelligence integration.

I architect and deliver end-to-end solutions that align technical excellence with real-world business requirements. My approach emphasizes clean architecture principles, system scalability, security best practices, and production-grade reliability.

From initial concept to deployment, I build secure, maintainable, and intelligent digital systems engineered for long-term performance and growth.`;

export const ABOUT_SUMMARY = `Full-Stack .NET Developer with hands-on experience in designing, developing, and deploying scalable web applications using ASP.NET Core, .NET MVC, Web API, React, SQL Server, and Entity Framework Core. Experienced in building secure, database-driven applications, implementing RESTful APIs, and creating responsive user interfaces with modern front-end technologies.

Strong background in software engineering principles, including Clean Architecture, SOLID principles, design patterns, and object-oriented programming, enabling the development of maintainable and high-quality solutions. Skilled in integrating Artificial Intelligence and Machine Learning models into real-world applications, with experience in healthcare-focused systems involving disease prediction and intelligent decision support.

Familiar with DevOps and cloud-oriented practices, including Docker containerization, Git version control, CI/CD concepts, and application deployment workflows. Adept at problem-solving, debugging, and collaborating within Agile development environments to deliver efficient and user-focused software products.

Passionate about continuous learning, emerging technologies, and building innovative solutions that create real business value. Seeking opportunities to contribute technical expertise, software development skills, and a growth mindset to high-impact engineering teams while continuing to expand knowledge in full-stack development, cloud technologies, and AI-powered applications.`;

export const SKILLS_DATA = {
  software_engineering: ["Clean Architecture", "OOP", "SOLID", "Design Patterns", "System Design"],
  backend: [".NET", "ASP.NET Core", "REST APIs", "SQL Server", "MySQL"],
  frontend: ["React", "React Native", "Next.js", "TypeScript"],
  ai_data: ["Machine Learning", "Deep Learning", "NLP", "Predictive Modeling", "Model Deployment"],
  cloud_devops: ["AWS", "Google Cloud", "Docker", "CI/CD"],
  databases: ["SQL Server", "PostgreSQL", "MySQL", "Firebase"],
  tools: ["Git", "Postman", "VS Code", "Figma", "Agile"]
};

export const USP_ITEMS: USPItem[] = [
  {
    id: 1,
    title: "System-First Approach",
    description: "I design complete systems, not just isolated components, ensuring every part of the stack works in perfect harmony.",
    icon: "Target"
  },
  {
    id: 2,
    title: "AI & Clean Architecture",
    description: "Combining robust software engineering patterns with seamless AI model integration (98%+ accuracy).",
    icon: "Brain"
  },
  {
    id: 3,
    title: "Enterprise Scalability",
    description: "Structuring systems for long-term growth and maintainability using industry-standard enterprise patterns.",
    icon: "Zap"
  },
  {
    id: 4,
    title: "Full-Stack Synergy",
    description: "Seamlessly integrating mobile apps, backend APIs, and intelligent models into a cohesive production-ready system.",
    icon: "Globe"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    role: "Full-Stack .NET Web Developer Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI), Ministry of Communications and Information Technology (MCIT)",
    period: "Sep 2025 – Jun 2026",
    description: "Government-sponsored intensive training program focused on full-stack .NET development, modern web technologies, and enterprise software engineering practices.",
    details: [
      "Built full-stack web applications using ASP.NET Core, .NET Core MVC, Web API, C#, SQL Server, HTML5, CSS3, and JavaScript.",
      "Applied Docker containerization and Git/GitHub version control practices, delivering a capstone project integrating back-end APIs with front-end MVC architecture.",
      "Completed intensive training in C#, .NET Core Web API, MVC, SQL Server, Docker, Git, Prompt Engineering, Unit Testing, and Functional Documentation.",
      "Developed Business English, freelancing, and portfolio-building skills.",
      "Delivered freelance web development and database design projects through LinkedIn Services:",
      "  Developed a responsive personal portfolio website with a Bento-style layout, animations, and SEO optimization (React, Tailwind CSS, JavaScript).",
      "  Built a premium 'Coming Soon' landing page for Flavora with a countdown timer, email subscription, and interactive animations (React, Tailwind CSS, Framer Motion).",
      "  Designed a fully normalized (3NF) database for an e-commerce clothing platform, including ERD documentation, SQL scripts, constraints, and indexing strategies (MySQL, PostgreSQL, SQL)."
    ],
    techStack: ["ASP.NET Core", ".NET Core MVC", "Web API", "C#", "SQL Server", "Docker", "Git", "React", "Tailwind CSS", "Framer Motion", "MySQL", "PostgreSQL"],
    impact: "This comprehensive training program equipped me with enterprise-grade full-stack .NET development skills, practical DevOps experience, and real-world freelance project delivery capabilities."
  },
  {
    id: 3,
    role: "Bachelor of Computer Science & Engineering",
    company: "King Salman International University",
    period: "Sept 2021 - Sept 2025",
    description: "Final Grade: Very Good. Focused on core computer science principles, software engineering, and artificial intelligence."
  },
  {
    id: 2,
    role: "Full-Stack Web Development Training",
    company: "Telecom Egypt (WE)",
    period: "Jul 2023 - Oct 2023",
    description: "Comprehensive hands-on training focused on building scalable, responsive, and database-driven web applications using modern frontend and backend technologies, with strong emphasis on React.js for dynamic UI development.",
    details: [
      "Developed dynamic single-page applications (SPAs) using React.js.",
      "Built reusable React components and managed application state efficiently.",
      "Integrated React frontend with Laravel backend APIs.",
      "Designed and implemented relational database schemas using MySQL.",
      "Applied Object-Oriented Programming (OOP) principles.",
      "Implemented authentication systems and role-based access control.",
      "Developed full CRUD operations with validation and secure data handling.",
      "Built responsive UI using Bootstrap and modern UI/UX best practices.",
      "Followed MVC architecture and clean coding standards."
    ],
    techStack: ["React.js", "PHP", "Laravel", "MySQL", "Bootstrap", "RESTful APIs", "Git"],
    impact: "This training strengthened my ability to design and develop complete end-to-end web applications, combining modern frontend engineering (React) with secure and scalable backend development."
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 1,
    title: "Artificial Intelligence Fundamentals",
    provider: "IBM SkillsBuild",
    year: "Nov 2025",
    description: "Foundational mastery of AI concepts, neural networks, and their practical application in solving complex engineering problems.",
    tags: ["AI", "Neural Networks", "IBM"],
    link: "https://drive.google.com/file/d/1_SOuADe-zwqrj-TfAePLSLhFuqIX0AOf/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    provider: "IBM SkillsBuild",
    year: "Oct 2025",
    description: "Comprehensive training in modern web standards, focusing on high-performance frontend and backend delivery.",
    tags: ["Web", "Full-Stack", "IBM"],
    link: "https://drive.google.com/file/d/1UFnTYjoE57_qiOXdfxUmX9LqEkFqlw6Y/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Data Structures & OOP with C++",
    provider: "Udemy – OCSALY Academy",
    year: "Sep 2025",
    description: "In-depth coverage of fundamental data structures and object-oriented programming paradigms using modern C++.",
    tags: ["C++", "OOP", "Data Structures"],
    link: "https://drive.google.com/file/d/13RfcMl_9fdlia_JOfiN3oTtbUH01-mrj/view?usp=drive_link"
  },
  {
    id: 4,
    title: "JavaScript Full Stack Development",
    provider: "Udemy – Sayman Creative Institute",
    year: "Sep 2025",
    description: "End-to-end JavaScript development covering frontend, backend, and API integration for full-stack applications.",
    tags: ["JavaScript", "Full-Stack", "Node.js"],
    link: "https://drive.google.com/file/d/1QaxZofLU8yxpMfNYnAqErXWGJlx28dAp/view?usp=drive_link"
  },
  {
    id: 5,
    title: "Web Development (CSS, Bootstrap, React)",
    provider: "Udemy – PROPER DOT INSTITUTE",
    year: "Sep 2025",
    description: "Practical training in modern responsive web design and component-based frontend development with React.",
    tags: ["CSS", "Bootstrap", "React"],
    link: "https://drive.google.com/file/d/1KuONKoCTIz0nsoDiJn2vF2G39okFvaiF/view?usp=drive_link"
  },
  {
    id: 55,
    title: "CSS, JavaScript And Python Complete Course",
    provider: "Udemy – PROPER DOT INSTITUTE",
    year: "Sep 2025",
    description: "Comprehensive course covering CSS, JavaScript, and Python fundamentals for full-stack development.",
    tags: ["CSS", "JavaScript", "Python"],
    link: "https://drive.google.com/file/d/1iejB9FeFUqj9XPew5d1o2BPvFg_V7TSm/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Natural Language Processing",
    provider: "DeepLearning.AI (Coursera)",
    year: "Mar 2025",
    description: "Advanced techniques for processing and understanding human language using state-of-the-art deep learning models.",
    tags: ["NLP", "Deep Learning", "AI"],
    link: "https://drive.google.com/file/d/1DW608k8E4iLX3JN2aQAv4Dfo_NpgPiK-/view?usp=drive_link"
  },
  {
    id: 7,
    title: "Introduction to Cybersecurity",
    provider: "Cisco Networking Academy",
    year: "Feb 2025",
    description: "Essential knowledge in securing enterprise systems, protecting data flows, and understanding threat landscapes.",
    tags: ["Security", "Networking", "Cisco"],
    link: "https://drive.google.com/file/d/1j2eqHDYg6XvQUhajphC9QUB4pZRHlJ9y/view?usp=drive_link"
  },
  {
    id: 8,
    title: "Data Mining Methods",
    provider: "Univ. of Colorado Boulder (Coursera)",
    year: "Dec 2024",
    description: "Algorithms and statistical techniques for extracting valuable insights from large and complex datasets.",
    tags: ["Data Mining", "Algorithms", "Coursera"],
    link: "https://drive.google.com/file/d/1x47vEPBF8PQ8Yx6zP3PCtu8MGB6PBBXZ/view?usp=drive_link"
  },
  {
    id: 9,
    title: "Advanced Database Technologies",
    provider: "Univ. of Colorado Boulder (Coursera)",
    year: "Nov 2024",
    description: "Advanced relational and non-relational database design, query optimization, and performance engineering.",
    tags: ["Databases", "SQL", "Coursera"],
    link: "https://drive.google.com/file/d/1DbVZtNczrE_zo8YA_rtEMUFtNUHw1hk7/view?usp=drive_link"
  },
  {
    id: 10,
    title: "Cyber Security",
    provider: "Arab Institute for Advanced Technology (AOI Academy)",
    year: "Aug 2024",
    description: "Comprehensive cybersecurity training covering network security, threat analysis, and digital defense strategies.",
    tags: ["Cyber Security", "AOI"],
    link: "https://drive.google.com/file/d/1bKkhnKawCpfqV668jcnvX7yQMW0qiqgQ/view?usp=drive_link"
  },
  {
    id: 11,
    title: "Full Stack Web Development (PHP & Laravel)",
    provider: "Telecom Egypt (WE) — 198 Hours",
    year: "Sep 2023",
    description: "Intensive 198-hour professional training in server-side development using PHP and the Laravel framework.",
    tags: ["PHP", "Laravel", "Full-Stack"],
    link: "https://drive.google.com/file/d/1PQe-wxdqcqiX1j6NoJtmTko0yDHA78Yw/view?usp=drive_link"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "AI-Powered Integrated Healthcare Assistant",
    description: "An intelligent healthcare system (ITIDA Sponsored) for early disease prediction and real-time monitoring.",
    problem: "Healthcare providers needed a way to support early disease prediction and patient monitoring with high accuracy.",
    solution: "Developed an integrated healthcare system predicting diabetes and heart disease with 98%+ accuracy. Included Firebase auth, real-time data management, AI chatbot, and medication reminders.",
    architectureApproach: "Designed an end-to-end AI-integrated system combining machine learning, a scalable backend, and a React Native mobile application, supporting hardware integration for health devices.",
    impact: "Successfully integrated high-accuracy AI models into a production-ready mobile ecosystem with real-time health tracking and intelligent assistance.",
    tags: ["Python", "TensorFlow", "React Native", "Firebase", "REST APIs", "ML", "Hardware Integration"],
    imageUrl: "/healthcare-assistant.png"
  },
  {
    id: 2,
    title: "SalesPulse AI – CRM Platform",
    description: "Scalable full-stack CRM and sales intelligence platform with AI-driven forecasting.",
    problem: "Businesses struggled to manage sales pipelines and marketing performance without actionable AI-driven insights.",
    solution: "Built a modular CRM with ASP.NET Core 8 and React, integrating Google Gemini API for sales forecasting, customer insights, and chatbot assistance.",
    architectureApproach: "Followed Clean Architecture principles, implementing JWT auth, role-based access control, and real-time dashboards. Deployed using Docker and SQL Server.",
    impact: "Reflected the ability to design enterprise-grade business systems with integrated AI intelligence and production-ready deployment.",
    tags: ["React", "TypeScript", "ASP.NET Core 8", "EF Core", "SQL Server", "JWT", "Docker", "Gemini API"],
    githubUrl: "https://github.com/yahia-mosa/SalesPulseAI",
    imageUrl: "/screenshots/salespulse/dashboard.png",
    screenshots: [
      "/screenshots/salespulse/dashboard.png",
      "/screenshots/salespulse/login.png",
      "/screenshots/salespulse/customers.png",
      "/screenshots/salespulse/sales_pipeline.png",
      "/screenshots/salespulse/forecasting.png",
      "/screenshots/salespulse/chat_assistant.png"
    ]
  },
  {
    id: 3,
    title: "MoneyMate – AI Finance Platform",
    description: "AI-powered financial management platform for tracking income, expenses, and budgeting goals.",
    problem: "Users struggled to keep track of transactions and misses budget goals without intelligent, predictive insights.",
    solution: "Designed a user-centric finance app with .NET 8 and React, integrating Gemini API for predictive budgeting and multilingual support (RTL included).",
    architectureApproach: "Implemented secure JWT authentication, a structured database design, and clear separation of concerns for scalability and performance optimization.",
    impact: "Highlights capabilities in building secure, scalable, and intelligent digital financial solutions with global accessibility.",
    tags: ["React", ".NET 8", "SQL Server", "JWT", "EF Core", "REST APIs", "Gemini API"],
    imageUrl: "/screenshots/moneymate/dashboard.png",
    screenshots: [
      "/screenshots/moneymate/dashboard.png",
      "/screenshots/moneymate/transactions.png",
      "/screenshots/moneymate/budget.png",
      "/screenshots/moneymate/assistant.png",
      "/screenshots/moneymate/profile.png"
    ]
  },
  {
    id: 4,
    title: "Bites – Food Ordering Platform",
    description: "Modern full-stack food ordering web application featuring real-time order tracking via SignalR WebSockets with customer and admin interfaces.",
    problem: "Restaurants needed a comprehensive digital solution for online food ordering with real-time order tracking and efficient management capabilities.",
    solution: "Built a complete food ordering system with customer features like menu browsing, shopping cart, and order tracking, plus an admin dashboard for managing products, categories, and orders with live notifications.",
    architectureApproach: "Implemented a full-stack architecture using .NET 10 Web API backend with Entity Framework Core and SQL Server, React 19 frontend with Redux Toolkit for state management, and SignalR for real-time WebSocket communication. Integrated Stripe for payment processing and ASP.NET Identity with JWT for secure authentication.",
    impact: "Delivered a production-ready food ordering platform with real-time capabilities, demonstrating expertise in full-stack development, real-time communication, and modern web technologies.",
    tags: [".NET 10", "ASP.NET Core", "Entity Framework Core", "SQL Server", "React 19", "Redux Toolkit", "SignalR", "Stripe", "JWT", "TailwindCSS"],
    githubUrl: "https://github.com/yahia-mosa/Bites",
    imageUrl: "/screenshots/bites/dashboard.png",
    screenshots: [
      "/screenshots/bites/dashboard.png",
      "/screenshots/bites/menu.png",
      "/screenshots/bites/cart.png",
      "/screenshots/bites/order-tracking.png",
      "/screenshots/bites/admin-dashboard.png",
      "/screenshots/bites/login.png"
    ]
  }
];
