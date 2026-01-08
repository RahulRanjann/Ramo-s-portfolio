// ============================================
// PORTFOLIO DATA CONSTANTS
// ============================================

// ============ IMAGE URLS ============
export const IMAGES = {
  profile: "public\raman.png",
  projects: {
    cybersecurity: "/cybersecurity-scan-interface.jpg",
    crypto: "/crypto-dashboard.jpg",
    messaging: "/secure-messaging-app.jpg",
    ai: "/ai-sentiment-analysis.jpg",
    portfolio: "/minimalist-portfolio-design.jpg",
    management: "/project-management-interface.jpg",
  },
  placeholder: "/placeholder.svg",
};

// ============ PERSONAL INFO ============
export const PERSONAL_INFO = {
  name: "Rahul",
  fullName: "Rahul Ranjan",
  role: "Full Stack Developer",
  tagline: "SOFTWARE DEVELOPER | CS STUDENT",
  email: "rahulranjan@example.com",
  phone: "+91 XXXXXXXXXX",
  location: "Bangalore, India",
  profileImage: "/raman.png",
  resumeLink: "/resume.pdf",
  github: "https://github.com/rahulranjann",
  linkedin: "https://www.linkedin.com/in/rahul-ranjan-591321277/",
  instagram: "https://www.instagram.com/rahulranjan257/",
};

// ============ HOME PAGE DATA ============
export const HOME_DATA = {
  greeting: "Hi, I'm",
  name: "Rahul",
  tagline: "SOFTWARE DEVELOPER | CS STUDENT",
  description: "Architecting intelligent digital environments. Specialized in high-performance computing, neural networks, and premium user experiences.",
  systemBadge: "SYSTEM_ONLINE_V.03",
  cta: {
    primary: {
      text: "VIEW_PROJECTS",
      icon: "terminal",
      href: "#projects",
    },
    secondary: {
      text: "CONNECT",
      icon: "hub",
      href: "#contact",
    },
  },
};

// ============ ABOUT PAGE DATA ============
export const ABOUT_DATA = {
  name: "Rahul Ranjan",
  id: "ID: 8492-AX-29",
  avatar: "/raman.png",
  systemInfo: "< System.Rahul > v1.0.0",
  stats: {
    experience: { value: "2+", label: "Years Exp" },
    projects: { value: "7+", label: "Projects" },
  },
  bio: [
    {
      command: ">> INITIATING ORIGIN STORY...",
      text: "Full Stack Developer focused on user-centered, impactful products. Blending tech and design to solve real problems. Born in 2000 in India with a mission-driven approach to using code and tech for positive change and innovation."
    },
    {
      command: ">> ACCESSING ACADEMIC RECORDS...",
      text: "Currently building scalable web apps, automating digital workflows, and exploring AI-driven tooling. Passionate about product design, automation, and continuous learning."
    },
    {
      command: ">> CURRENT MISSION OBJECTIVES...",
      text: "Currently operating as a Software Developer specializing in React and Node.js ecosystems. My objective is to engineer seamless user experiences that feel less like software and more like an extension of thought."
    }
  ],
  skills: [
    { name: 'PYTHON / BACKEND', level: 95, color: 'primary' },
    { name: 'JAVASCRIPT / REACT', level: 90, color: 'purple' },
    { name: 'SYS OPS / DEVOPS', level: 75, color: 'green' },
    { name: 'UI / UX DESIGN', level: 85, color: 'orange' }
  ],
};

// ============ EXPERIENCE DATA ============
export const EXPERIENCES = [
  {
    title: "SDE",
    company: "Lets Transport",
    period: "2025.05 - PRESENT",
    location: "Bangalore",
    status: "ACTIVE",
    description: [
      "Built ad-optimization automations using Google Ads API.",
      "Created scraping pipelines and upload workflows.",
      "Improved digital ad revenue through automation.",
    ],
    skills: ["React", "Node.js", "Google Ads API", "Automation"],
    isActive: true,
    icon: "work",
    bgIcon: "code",
  },
  {
    title: "QA Engineer",
    company: "Zinc",
    period: "2025.01 - 2025.05",
    location: "Bangalore",
    status: "Completed",
    description: [
      "Automated testing for ADA platform.",
      "Created AI 'talk to ADA' parent interface.",
      "Focused on quality assurance and automation testing.",
    ],
    skills: ["Testing", "Automation", "QA"],
    isActive: false,
    icon: "bug_report",
    bgIcon: "verified",
  },
  {
    title: "Full Stack Developer",
    company: "Lets Transport",
    period: "2024.05 - 2024.08",
    location: "Bangalore",
    status: "Completed",
    description: [
      "Built website that boosted traffic by 40% and profit by 7%.",
      "Automated scraping and upload workflows.",
      "Implemented responsive design and performance optimization.",
    ],
    skills: ["React", "Next.js", "MongoDB", "Node.js"],
    icon: "terminal",
    bgIcon: "deployed_code",
  },
  {
    title: "Full Stack Developer",
    company: "Pine&Lime",
    period: "2024.03 - 2024.05",
    location: "Gurgaon",
    status: "Completed",
    description: [
      "Delivered full-featured e-commerce application.",
      "Implemented authentication and product management systems.",
      "Built responsive UI with Tailwind CSS.",
    ],
    skills: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    icon: "shopping_cart",
    bgIcon: "storefront",
  },
  {
    title: "Full Stack Developer",
    company: "GoMilestone",
    period: "2023.12 - 2024.01",
    location: "Gurgaon",
    status: "Completed",
    description: [
      "Developed responsive, scalable company website.",
      "Used HTML, CSS, JavaScript and Bootstrap 5.",
      "Optimized for cross-browser compatibility.",
    ],
    skills: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    icon: "language",
    bgIcon: "public",
  },
];

// ============ EDUCATION DATA ============
export const EDUCATION_DATA = [
  {
    degree: "B.Tech. in Computer Science",
    institution: "Manipal Institute of Technology, Manipal",
    year: "2022 - 2025",
    status: "In Progress",
    icon: "school",
    bgIcon: "neurology",
    highlights: [
      "Focus on Full Stack Development and Machine Learning",
      "Studying advanced algorithms, web technologies, and distributed systems"
    ],
    skills: ["Full Stack", "ML", "Web Tech"]
  },
  {
    degree: "Diploma in ITEMS",
    institution: "Rajokari Institute of Technology, Delhi",
    year: "2019 - 2022",
    status: "Completed",
    icon: "workspace_premium",
    bgIcon: "code_blocks",
    highlights: [
      "Strong foundation in mathematics and computer science",
      "Focus on programming fundamentals"
    ],
    skills: ["Programming", "Math", "CS Fundamentals"]
  },
  {
    degree: "Full Stack Development",
    institution: "Self-Taught & Industry Experience",
    year: "2023 - Present",
    status: "Ongoing",
    icon: "code",
    bgIcon: "deployed_code",
    description: "Continuous learning through real-world projects, open-source contributions, and hands-on experience with modern web technologies.",
    skills: ["React", "Node.js", "Cloud Technologies"],
    isCertification: true
  }
];

// ============ EDUCATION STATS ============
export const EDUCATION_STATS = [
  { label: "Degrees", value: "1", suffix: "" },
  { label: "Years Learning", value: "5", suffix: "+" },
  { label: "Certifications", value: "10", suffix: "+" },
  { label: "Skills Acquired", value: "20", suffix: "+" },
];

// ============ PROJECTS DATA ============
export const PROJECTS = [
  {
    title: "GitHub Profile Finder",
    status: "DEPLOYED",
    statusType: "active",
    badge: "MK-I",
    description: "React app using GitHub API to surface profiles with bio, repos, and followers. Features dynamic fetching with clean, intuitive UI.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80",
    tech: ["React", "GitHub API", "JavaScript"],
    actionIcon: "rocket_launch",
    actionText: "LAUNCH",
    links: { live: "#", github: "https://github.com/rahulranjann" }
  },
  {
    title: "Go Milestone",
    status: "LIVE",
    statusType: "active",
    badge: "MK-II",
    description: "Official company site with Google Maps integration and phone country codes. Hosted on GitHub Pages with responsive design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tech: ["HTML5", "CSS3", "JavaScript", "Maps API"],
    actionIcon: "public",
    actionText: "VIEW",
    links: { live: "#", github: "https://github.com/rahulranjann" }
  },
  {
    title: "TourTravel",
    status: "DEPLOYED",
    statusType: "active",
    badge: "MK-III",
    description: "Travel booking site with authentication and ticketing via Firebase. Real-time chat support integrated with Tawk.to.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
    tech: ["React", "Firebase", "Tawk.to"],
    actionIcon: "flight_takeoff",
    actionText: "EXPLORE",
    links: { live: "#", github: "https://github.com/rahulranjann" }
  },
  {
    title: "E-Commerce Platform",
    status: "DEPLOYED",
    statusType: "active",
    badge: "MK-IV",
    description: "Full-featured e-commerce application with product management, authentication, and shopping cart. Built with modern React.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tech: ["React", "Firebase", "Tailwind CSS"],
    actionIcon: "shopping_cart",
    actionText: "SHOP",
    links: { live: "#", github: "https://github.com/rahulranjann" }
  },
  {
    title: "Digital Ads Automation",
    status: "INTERNAL",
    statusType: "prototype",
    badge: "MK-V",
    description: "Automation system for Google Ads optimization using Google Ads API. Improved digital ad revenue through intelligent workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tech: ["Node.js", "Google Ads API", "Python"],
    actionIcon: "analytics",
    actionText: "ANALYZE",
    links: { live: "#", github: "https://github.com/rahulranjann" }
  },
  {
    title: "Web Scraping Pipeline",
    status: "INTERNAL",
    statusType: "prototype",
    badge: "MK-VI",
    description: "Automated scraping and data upload workflows for Lets Transport. Streamlined data processing with efficient architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tech: ["Python", "Web Scraping", "Automation"],
    actionIcon: "bolt",
    actionText: "RUN",
    links: { live: "#", github: "https://github.com/rahulranjann" }
  },
];

// ============ PROJECT FILTERS ============
export const PROJECT_FILTERS = [
  { id: "all", label: "ALL_PROJECTS" },
  { id: "full-stack", label: "FULL_STACK" },
  { id: "automation", label: "AUTOMATION" },
  { id: "ui-ux", label: "UI/UX" },
];

// ============ SKILLS DATA ============
export const SKILLS_DATA = [
  {
    name: "React",
    icon: "code_blocks",
    version: "v18",
    category: "frameworks",
    description: "Component-based UI architecture and state management.",
    proficiency: 95
  },
  {
    name: "JavaScript",
    icon: "javascript",
    version: "ES6+",
    category: "languages",
    description: "Dynamic interface logic and asynchronous event handling.",
    proficiency: 95
  },
  {
    name: "TypeScript",
    icon: "integration_instructions",
    version: "v5.0",
    category: "languages",
    description: "Static typing layer for enhanced code reliability and scale.",
    proficiency: 92
  },
  {
    name: "Node.js",
    icon: "dns",
    version: "LTS",
    category: "frameworks",
    description: "Server-side runtime environment for scalable network applications.",
    proficiency: 85
  },
  {
    name: "Python",
    icon: "terminal",
    version: "v3.11",
    category: "languages",
    description: "Data analysis, AI integration, and backend scripting protocols.",
    proficiency: 80
  },
  {
    name: "MongoDB",
    icon: "database",
    version: "v6",
    category: "tools",
    description: "NoSQL database for flexible, scalable data storage.",
    proficiency: 85
  },
  {
    name: "AWS",
    icon: "cloud",
    version: "Cloud",
    category: "tools",
    description: "Cloud infrastructure, serverless compute, and storage solutions.",
    proficiency: 80
  },
  {
    name: "Docker",
    icon: "deployed_code",
    version: "Stable",
    category: "tools",
    description: "Containerization and isolated deployment environments.",
    proficiency: 75
  }
];

// ============ SKILL CATEGORIES ============
export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All', icon: 'apps' },
  { id: 'languages', label: 'Languages', icon: 'code' },
  { id: 'frameworks', label: 'Frameworks', icon: 'grid_view' },
  { id: 'tools', label: 'Tools', icon: 'build' }
];

// ============ SOCIAL LINKS ============
export const SOCIAL_LINKS = {
  github: "https://github.com/rahulranjann",
  linkedin: "https://www.linkedin.com/in/rahul-ranjan-591321277/",
  instagram: "https://www.instagram.com/rahulranjan257/",
  twitter: "https://twitter.com"
};

export const SOCIAL_LINKS_LIST = [
  {
    icon: "fa-brands fa-github",
    materialIcon: "code",
    title: "GitHub",
    desc: "github.com/rahulranjann",
    link: "https://github.com/rahulranjann",
  },
  {
    icon: "fa-brands fa-linkedin",
    materialIcon: "work",
    title: "LinkedIn",
    desc: "in/rahulranjann",
    link: "https://www.linkedin.com/in/rahul-ranjan-591321277/",
  },
  {
    icon: "fa-brands fa-instagram",
    materialIcon: "photo_camera",
    title: "Instagram",
    desc: "@rahulranjann",
    link: "https://www.instagram.com/rahulranjan257/",
  },
];

// ============ CONTACT DATA ============
export const CONTACT_DATA = {
  title: "Let's Build Something Amazing",
  subtitle: "Ready to collaborate on your next project? Drop me a message and let's discuss how we can work together.",
  description: "Need a Hero? Let's build the future. Currently available for freelance missions and full-time deployment. Secure channel is open.",
  email: "rahulranjan@example.com",
  phone: "+91 XXXXXXXXXX",
  location: "Bangalore, India",
  availability: "Available for freelance work",
};

// ============ NAVBAR DATA ============
export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'person' },
  { id: 'education', label: 'Education', icon: 'school' },
  { id: 'skills', label: 'Skills', icon: 'code' },
  { id: 'projects', label: 'Projects', icon: 'work' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];

// ============ FOOTER DATA ============
export const FOOTER_DATA = {
  copyright: `© ${new Date().getFullYear()} Rahul Ranjan. All rights reserved.`,
  tagline: "Built with React & Passion",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============ STATS DATA ============
export const STATS = {
  linesOfCode: 1.5,
  missions: 42,
  bugsFix: 99.9,
  experience: { years: 2, label: "years" },
  projects: { count: "7+", label: "deployed" },
  contributions: { default: "20+", label: "approx" },
  skillMatrix: [
    { name: "TypeScript / React", percent: 98 },
    { name: "Python / Django", percent: 85 },
    { name: "System Architecture", percent: 90 },
  ],
};
