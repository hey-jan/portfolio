"use client";

import { useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

// --- Data ---
const profile = {
  name: "John Earl P. Balabat",
  role: "Full-Stack Developer / Data Analyst",
  location: "Cebu City, Cebu",
  email: "johnearl.balabat@gmail.com",
  github: "github.com/hey-jan",
  linkedin: "linkedin.com/in/john-earl-balabat",
  summary: "I am a developer focused on building applications and tools that use data to create meaningful insights and user-focused experiences. I enjoy working across both software development and data analytics, turning ideas into practical solutions, from developing interactive web applications to processing and visualizing data.",
};

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const skillGroups = [
  { title: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind"] },
  { title: "Backend", items: ["Node.js", "Python", "Java", "PHP", "Express.js", "NestJS", "FastAPI", "PostgreSQL", "MySQL", "GraphQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Docker", "VS Code", "JIRA", "Trello", "ClickUp"] },
];

const projects = [
  {
    title: "VisiTrack",
    description: "A real-time facial recognition attendance system built for classroom management. It allows instructors to record attendance through webcam or uploaded images, while admins manage students, classes, and attendance records.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "InsightFace", "OpenCV"],
    link: "https://visitrack-nu.vercel.app/",
  },
];

const experience = [
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

const education = [
  {
    school: "University of Cebu Main Campus",
    period: "2022 - Present",
    degree: "Bachelor of Science in Computer Science",
    note: "Consistent Dean's Lister",
  },
];

const certificates = [
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

// --- Components ---

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge mr-2 mb-2">{children}</span>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-12 fade-in">
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6">About</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {profile.summary}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I continuously improve my skills in programming, problem-solving, and system design, with a strong emphasis on writing clean, efficient, and reliable code. I am especially interested in projects that combine development and data, allowing me to build complete solutions that are both functional and insightful.
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-8">Core Focus</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y2="22.08" y1="12.01" /></svg>
                  </div>
                  <h4 className="text-sm font-bold">Software Development</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">Building scalable, performant web applications using modern frameworks like Next.js and Node.js.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                  </div>
                  <h4 className="text-sm font-bold">Data Analytics</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">Transforming complex datasets into actionable insights through visualization and structured analysis.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                  </div>
                  <h4 className="text-sm font-bold">Problem Solving</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">Designing practical, purposeful tools that solve real-world operational challenges for users.</p>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-6">Working Style</h3>
              <div className="flex flex-wrap gap-3">
                {["Collaboration", "Problem Solving", "Adaptability", "Critical Thinking", "Communication", "Attention to Detail"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-accent text-text-secondary text-xs font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        );
      case "skills":
        return (
          <div className="space-y-8 fade-in">
            <h2 className="text-2xl font-bold text-text-primary">Tech Stack</h2>
            {skillGroups.map((group) => (
              <div key={group.title} className="p-6 border border-border rounded-xl">
                <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-accent text-text-secondary text-xs font-medium rounded-lg border border-transparent hover:border-border transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case "projects":
        return (
          <div className="space-y-8 fade-in">
            <h2 className="text-2xl font-bold text-text-primary">Projects</h2>
            {projects.map((project) => (
              <div key={project.title} className="p-6 border border-border rounded-xl hover:border-text-secondary transition-colors">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                  View Project
                </a>
              </div>
            ))}
          </div>
        );
      case "experience":
        return (
          <div className="space-y-12 fade-in">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-8">Experience</h2>
              <div className="relative space-y-12">
                {/* Continuous Vertical Line */}
                <div className="absolute left-[7.5px] top-2 bottom-2 w-[1px] bg-border"></div>

                {/* Experience Items */}
                {experience.map((exp) => (
                  <div key={exp.company} className="relative pl-10 group cursor-default">
                    <div className="absolute w-4 h-4 bg-card border-2 border-border rounded-full left-0 top-1.5 z-10 group-hover:border-text-primary group-hover:bg-text-primary transition-all duration-300"></div>
                    <div className="mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                      <span className="text-xs font-mono text-text-secondary self-end sm:self-auto sm:order-last">{exp.period}</span>
                      <h3 className="text-lg font-bold group-hover:text-text-primary transition-colors leading-tight">{exp.role}</h3>
                    </div>
                    <p className="text-sm font-medium text-text-secondary mb-4">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-text-secondary flex gap-3 leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-[1.5px] bg-border shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Education Items */}
                {education.map((edu) => (
                  <div key={edu.school} className="relative pl-10 group cursor-default">
                    <div className="absolute w-4 h-4 bg-card border-2 border-border rounded-full left-0 top-1.5 z-10 group-hover:border-text-primary group-hover:bg-text-primary transition-all duration-300"></div>
                    <div className="mb-1 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                      <span className="text-xs font-mono text-text-secondary self-end sm:self-auto sm:order-last">{edu.period}</span>
                      <h3 className="text-lg font-bold group-hover:text-text-primary transition-colors leading-tight">{edu.degree}</h3>
                    </div>
                    <p className="text-sm font-medium text-text-secondary mb-2">{edu.school}</p>
                    <span className="text-[10px] font-bold bg-accent text-text-primary px-2 py-0.5 rounded inline-block border border-border">{edu.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "certificates":
        return (
          <div className="space-y-6 fade-in">
            <h2 className="text-2xl font-bold text-text-primary">Certificates</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {certificates.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 border border-border rounded-xl hover:border-text-primary transition-all group"
                >
                  <h3 className="text-sm font-bold mb-1 group-hover:text-text-primary">{cert.title}</h3>
                  <p className="text-xs text-text-secondary mb-2">{cert.issuer}</p>
                  <p className="text-[10px] font-mono text-text-secondary">{cert.date}</p>
                </a>
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="space-y-8 fade-in">
            <h2 className="text-2xl font-bold text-text-primary">Get in Touch</h2>
            <p className="text-text-secondary leading-relaxed">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="space-y-6">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 group py-2 border-b border-border/50 last:border-0 hover:translate-x-1 transition-transform">
                <div className="text-text-primary group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-secondary block">Email</span>
                  <span className="text-sm font-medium">{profile.email}</span>
                </div>
              </a>
              <a href={`https://${profile.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 group py-2 border-b border-border/50 last:border-0 hover:translate-x-1 transition-transform">
                <div className="text-text-primary group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-secondary block">LinkedIn</span>
                  <span className="text-sm font-medium">{profile.linkedin.replace("linkedin.com/in/", "")}</span>
                </div>
              </a>
              <a href={`https://${profile.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 group py-2 border-b border-border/50 last:border-0 hover:translate-x-1 transition-transform">
                <div className="text-text-primary group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-secondary block">GitHub</span>
                  <span className="text-sm font-medium">{profile.github.replace("github.com/", "")}</span>
                </div>
              </a>
            </div>
            <div className="pt-8 border-t border-border">
              <a
                href="/resume.pdf"
                download
                className="btn-primary flex items-center gap-2 w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                Download Resume
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 flex flex-col items-center relative">
      {/* Theme Toggle Positioning */}
      <div className="max-w-4xl w-full flex justify-end mb-4">
        <ThemeToggle />
      </div>
      {/* Header Profile Section */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-center gap-6 mb-8">
        <div className="w-32 h-32 bg-accent rounded-md flex items-center justify-center overflow-hidden shrink-0 shadow-lg border border-border">
          <Image
            src="/profile.png"
            alt={profile.name}
            width={256}
            height={256}
            quality={100}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">{profile.name}</h1>
          <p className="text-text-secondary font-medium mb-1">{profile.role}</p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            {profile.location}
          </div>
        </div>
      </div>

      {/* Main Container Card */}
      <div className="main-card max-w-4xl w-full flex flex-col md:flex-row min-h-[600px] overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 border-r border-border p-6 bg-card shrink-0">
          <nav className="flex flex-col gap-2 sticky top-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Dropdown Nav */}
        <div className="md:hidden p-4 border-b border-border bg-card sticky top-0 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full p-3 bg-accent rounded-lg font-medium text-sm text-left flex justify-between items-center outline-none focus:ring-2 focus:ring-text-primary transition-all"
          >
            {navItems.find(item => item.id === activeSection)?.label || "Menu"}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isMobileMenuOpen ? "rotate-180" : ""}`}><path d="m6 9 6 6 6-6"/></svg>
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-[calc(100%-0.5rem)] left-4 right-4 bg-card border border-border rounded-lg shadow-xl z-20 overflow-hidden flex flex-col fade-in">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`p-3 text-sm text-left hover:bg-accent transition-colors ${
                    activeSection === item.id 
                      ? "font-bold text-text-primary bg-accent/50 border-l-2 border-text-primary" 
                      : "text-text-secondary border-l-2 border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Area */}
        <div id="content-area" className="flex-1 p-8 md:p-12 bg-card overflow-y-auto max-h-[800px]">
          {renderContent()}
        </div>
      </div>

      <footer className="mt-12 mb-8 flex flex-col items-center justify-center gap-4">
        <p className="text-xs text-text-secondary text-center">
          © {new Date().getFullYear()} {profile.name}. Built with <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="font-medium text-text-primary hover:underline transition-all">Next.js</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="font-medium text-text-primary hover:underline transition-all">Tailwind CSS</a>.
        </p>
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.getElementById('content-area')?.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-[10px] uppercase tracking-widest font-bold text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform duration-300"><path d="m18 15-6-6-6 6"/></svg>
          Back to Top
        </button>
      </footer>
    </main>
  );
}
