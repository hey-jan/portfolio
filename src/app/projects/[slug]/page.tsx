import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} | Portfolio` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 flex flex-col items-center relative fade-in">
      {/* Header and Toggle */}
      <div className="max-w-4xl w-full flex justify-between items-center mb-8">
        <Link href="/#projects" className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2 group">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-300"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back
        </Link>
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="main-card max-w-4xl w-full flex flex-col overflow-hidden bg-card border border-border p-8 md:p-12 shadow-2xl">
        
        {/* Hero Section */}
        <div className="flex flex-col mb-12 border-b border-border pb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-tight">{project.title}</h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm font-semibold text-text-primary mb-6">
            {project.role && (
              <span className="flex items-center gap-1.5">
                {project.role}
              </span>
            )}
            {project.context && (
              <>
                <span className="hidden md:inline text-border">•</span>
                <span className="text-text-secondary font-medium flex items-center gap-1.5">
                  {project.context}
                </span>
              </>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-accent text-text-primary text-xs font-bold rounded-lg border border-transparent shadow-sm">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary text-sm !px-4 !py-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Visit Live Site
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm font-semibold border-2 border-text-primary text-text-primary rounded-lg hover:bg-text-primary hover:text-background transition-all flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                View Source Code
              </a>
            )}
          </div>
        </div>

        {/* Project Description & Features */}
        <div className="space-y-10 mb-16">
          <section>
            <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              Project Overview
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed text-justify">
              {project.description}
            </p>
          </section>

          {project.features && (
            <section>
              <h2 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                Key Features
              </h2>
              <div className="bg-accent/30 p-6 md:p-8 rounded-xl border border-border">
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-[1.5px] bg-border shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>

        {/* Gallery Walkthrough */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-6 pt-12 border-t border-border">
            <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
              Project Walkthrough
            </h2>
            <p className="text-text-secondary text-sm mb-8">Click on any image to expand the gallery and browse through the application's core features.</p>
            
            <ProjectGallery gallery={project.gallery} />
          </div>
        )}

      </div>
    </main>
  );
}
