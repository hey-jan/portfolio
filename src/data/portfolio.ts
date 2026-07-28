// Profile Information
export const profile = {
  name: "John Earl P. Balabat",
  role: "Full-Stack Developer / Data Analyst",
  location: "Cebu City, Cebu",
  email: "johnearl.balabat@gmail.com",
  github: "github.com/hey-jan",
  linkedin: "linkedin.com/in/john-earl-balabat",
  summary: "I am a developer focused on building applications and tools that use data to create meaningful insights and user-focused experiences. I enjoy working across both software development and data analytics, turning ideas into practical solutions, from developing interactive web applications to processing and visualizing data.",
};

// Navigation Items
export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

// Tech Stack
export const skillGroups = [
  { title: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite"] },
  { title: "Backend", items: ["Node.js", "Python", "Java", "C", "PHP", "Laravel", ".NET", "Express.js", "NestJS", "FastAPI", "GraphQL", "PostgreSQL", "MySQL", "Supabase"] },
  { title: "Data", items: ["SQL", "Python", "R", "Pandas", "Power BI", "Tableau", "Excel", "Google Sheets"] },
  { title: "Automation", items: ["n8n", "Make.com", "Zapier"] },
  { title: "AI", items: ["OpenAI", "Claude", "Gemini", "GitHub Copilot", "Cursor"] },
  { title: "Tools", items: ["Git", "GitHub", "Docker", "Supabase", "Vercel", "DigitalOcean", "VS Code", "Postman", "JIRA", "Trello", "ClickUp", "Visual Studio", "Slack", "Discord", "Teams"] },
];

// Projects
export type GalleryImage = {
  src: string;
  caption: string;
  category: string;
};

export type Project = {
  slug: string;
  title: string;
  role?: string;
  context?: string;
  description: string;
  features?: string[];
  tech: string[];
  link: string;
  github?: string;
  mainImage?: string;
  video?: string;
  gallery?: GalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "brgynexus",
    title: "BrgyNexus",
    role: "Full-Stack Developer",
    context: "Independent Project",
    description: "A comprehensive barangay management system that streamlines resident requests, staff operations, and administrative oversight. I handled the end-to-end development, from UI/UX design and system architecture to testing and deployment.",
    features: [
      "Automated document and certificate generation",
      "Real-time tracking of resident requests",
      "Interactive data visualization and analytics dashboard",
      "Secure QR code document verification",
      "Robust role-based access control and user management"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Vercel"],
    link: "https://brgynexus.vercel.app/",
    github: "https://github.com/hey-jan/brgynexus.git",
    mainImage: "/images/projects/brgynexus/landing-page-full-screen.png",
    gallery: [
      {
        src: "/images/projects/brgynexus/landing-page-full-screen.png",
        caption: "Landing Page Full Screen",
        category: "Phase 1: The Introduction",
      },
      {
        src: "/images/projects/brgynexus/resident-dashboard.png",
        caption: "Resident Dashboard",
        category: "Phase 2: The Resident Experience",
      },
      {
        src: "/images/projects/brgynexus/resident-request-document.png",
        caption: "Request Document Form",
        category: "Phase 2: The Resident Experience",
      },
      {
        src: "/images/projects/brgynexus/resident-my-requests.png",
        caption: "My Requests Tracking",
        category: "Phase 2: The Resident Experience",
      },
      {
        src: "/images/projects/brgynexus/staff-pending-requests.png",
        caption: "Staff Pending Requests",
        category: "Phase 3: The Staff Operations",
      },
      {
        src: "/images/projects/brgynexus/staff-generate-documents.png",
        caption: "Staff Generate Documents",
        category: "Phase 3: The Staff Operations",
      },
      {
        src: "/images/projects/brgynexus/certificate-of-residency.jpg",
        caption: "Generated Certificate of Residency",
        category: "Phase 4: Technical Outputs & Security",
      },
      {
        src: "/images/projects/brgynexus/staff-qr-verification.png",
        caption: "Staff QR Verification",
        category: "Phase 4: Technical Outputs & Security",
      },
      {
        src: "/images/projects/brgynexus/admin-dashboard.png",
        caption: "Admin Dashboard",
        category: "Phase 5: Administration & Analytics",
      },
      {
        src: "/images/projects/brgynexus/admin-analytics.png",
        caption: "Admin Analytics & Visualizations",
        category: "Phase 5: Administration & Analytics",
      },
      {
        src: "/images/projects/brgynexus/admin-user-management.png",
        caption: "Admin User Management",
        category: "Phase 5: Administration & Analytics",
      },
      {
        src: "/images/projects/brgynexus/admin-document-templates.png",
        caption: "Admin Document Templates",
        category: "Phase 5: Administration & Analytics",
      },
      {
        src: "/images/projects/brgynexus/admin-system-reports.png",
        caption: "Admin System Reports",
        category: "Phase 5: Administration & Analytics",
      },
      {
        src: "/images/projects/brgynexus/admin-settings.png",
        caption: "Admin System Settings",
        category: "Phase 5: Administration & Analytics",
      },
    ],
  },
  {
    slug: "visitrack",
    title: "VisiTrack",
    role: "Full-Stack Developer",
    context: "Thesis",
    description: "A real-time facial recognition attendance system built for classroom management. Led a team of four through the entire software development lifecycle—including system design, UI prototyping, and full-stack implementation. The platform allows instructors to record attendance seamlessly.",
    features: [
      "Real-time facial recognition via live webcam feeds",
      "Support for bulk student enrollment via CSV upload",
      "Automated attendance logging and report generation",
      "Instructor dashboard for class and roster management",
      "Centralized admin control over academic structures"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL", "InsightFace", "OpenCV", "Docker"],
    link: "https://visitrack-nu.vercel.app/",
    github: "https://github.com/hey-jan/visitrack.git",
    mainImage: "/images/projects/visitrack/login.png",
    gallery: [
      {
        src: "/images/projects/visitrack/login.png",
        caption: "Login",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-dashboard.png",
        caption: "Admin Dashboard",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-student-directory.png",
        caption: "Student Directory",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-program-registry.png",
        caption: "Program Registry",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-year-registry.png",
        caption: "Year Registry",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-student-profile.png",
        caption: "Student Profile",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-instructor-registry.png",
        caption: "Instructor Registry",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-instructor-profile.png",
        caption: "Instructor Profile",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-academic-classes.png",
        caption: "Academic Classes",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-class-profile.png",
        caption: "Class Profile",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/instructor-dashboard.png",
        caption: "Instructor Dashboard",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/instructor-my-classes.png",
        caption: "My Classes",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/instructor-class-attendance-log.png",
        caption: "Class Attendance Log",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/live-recognition-4-seconds.mp4",
        caption: "Live Recognition 4 Seconds",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/report1.jpg",
        caption: "PDF Report - Page 1",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/report2.jpg",
        caption: "PDF Report - Page 2",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/report3.jpg",
        caption: "PDF Report - Page 3",
        category: "Instructor",
      },
    ],
  },
];

// Work Experience
export const experience = [
  {
    company: "Right Apps Incorporated",
    role: "Software Developer Intern",
    period: "Sep 2025 - Nov 2025",
    bullets: [
      "Contributed to the development of a full-stack POS management system supporting core retail workflows.",
      "Built and maintained multiple GraphQL modules and endpoints for authentication, RBAC, and inventory.",
      "Implemented backend features using Node.js, Express, Apollo Server, and Prisma.",
      "Developed and optimized reusable UI components using Next.js and Tailwind CSS.",
    ],
  },
];

// Education
export const education = [
  {
    school: "University of Cebu Main Campus",
    period: "2022 - 2026",
    degree: "Bachelor of Science in Computer Science",
    bullets: [
      "Magna Cum Laude",
      "Consistent Dean's Lister",
    ],
  },
];

// Certificates
export const certificates = [
  {
    title: "Civil Service Eligibility - Professional",
    issuer: "Civil Service Commission",
    date: "May 05, 2026",
    link: "https://exam.csc.gov.ph/list_passers",
  },
  {
    title: "TOPCIT Level 3 Passer",
    issuer: "Test of Practical Competency in IT",
    date: "Dec 10, 2025",
    link: "https://drive.google.com/file/d/1lI_RBGvCu2DPhgjD5SZ1ucJQqwyCOkqM/view?usp=sharing",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    date: "Jun 05, 2025",
    link: "https://www.credly.com/badges/adb63693-bc90-471c-9d25-64cf109dd3ac/public_url",
  },
  {
    title: "Google AI Essentials",
    issuer: "Coursera",
    date: "Jun 02, 2025",
    link: "https://www.credly.com/badges/aef4767f-7190-42d4-a303-9c5308a8752c/public_url",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "Oct 02, 2025",
    link: "https://www.credly.com/badges/1ecd1af2-0a20-4326-a02e-cba20252d7f5/public_url",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "Jun 24, 2025",
    link: "https://www.credly.com/badges/309f390e-14fe-4258-8e3a-4de22ab8b3b5/public_url",
  },
  {
    title: "Microsoft Power BI Data Analyst Professional Certificate",
    issuer: "Coursera",
    date: "Dec 10, 2025",
    link: "https://www.credly.com/badges/877f682d-a93d-4c5e-aa96-f9ebfb655eed/public_url",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Aug 30, 2025",
    link: "https://www.credly.com/badges/33aca833-9193-4bc6-a867-efbb45c96a92/public_url",
  },
];

// Working Style
export const workingStyle = [
  "Collaboration",
  "Problem Solving",
  "Adaptability",
  "Critical Thinking",
  "Communication",
  "Attention to Detail",
];
