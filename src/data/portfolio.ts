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
  { title: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind"] },
  { title: "Backend", items: ["Node.js", "Python", "Java", "PHP", "Express.js", "NestJS", "FastAPI", "PostgreSQL", "MySQL", "GraphQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Docker", "VS Code", "JIRA", "Trello", "ClickUp"] },
];

// Projects
export type GalleryImage = {
  src: string;
  caption: string;
  category: "Admin" | "Instructor";
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  mainImage?: string;
  video?: string;
  gallery?: GalleryImage[];
};

export const projects: Project[] = [
  {
    title: "VisiTrack",
    description: "A real-time facial recognition attendance system built for classroom management. It allows instructors to record attendance through webcam or uploaded images, while admins manage students, classes, and attendance records.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "InsightFace", "OpenCV"],
    link: "https://visitrack-nu.vercel.app/",
    mainImage: "/images/projects/visitrack/login.png",
    gallery: [
      {
        src: "/images/projects/visitrack/login.png",
        caption: "Login — Secure authentication portal for all user roles",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-dashboard.png",
        caption: "Admin Dashboard — System-wide overview and analytics",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-academic-classes.png",
        caption: "Academic Classes — Manage class schedules and sections",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-class-profile.png",
        caption: "Class Profile — Detailed view of enrolled students and schedule",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-enroll-csv.png",
        caption: "Enroll via CSV — Bulk enrollment of students through CSV upload",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-import-csv.png",
        caption: "Import CSV — Import and validate student data from spreadsheets",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-instructor-management.png",
        caption: "Instructor Management — Add, edit, and manage instructor accounts",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-student-directory-programs.png",
        caption: "Student Directory — Browse students by program and year level",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/admin-settings.png",
        caption: "Admin Settings — Configure system-wide preferences",
        category: "Admin",
      },
      {
        src: "/images/projects/visitrack/instructor-dashboard.png",
        caption: "Instructor Dashboard — Overview of classes and today's attendance",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/instructor-my-classes.png",
        caption: "My Classes — View and manage assigned class sections",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/instructor-master-roster.png",
        caption: "Master Roster — Full list of enrolled students per class",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/instructor-attendance-logs.png",
        caption: "Attendance Logs — Review and export attendance records",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/instructor-account-settings.png",
        caption: "Account Settings — Instructor profile and preference management",
        category: "Instructor",
      },
      {
        src: "/images/projects/visitrack/live-recognition.jpg",
        caption: "Live Face Recognition — Real-time webcam attendance capture",
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
    period: "2022 - Present",
    degree: "Bachelor of Science in Computer Science",
    note: "Consistent Dean's Lister",
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
