"use client";

import { Calendar, Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Frontend Engineer",
      company: "TechCorp Solutions",
      period: "2025 - Present",
      type: "work",
      description: "Spearheading the migration of enterprise web applications to Next.js and React. Managing a team of 4 engineers, optimizing bundle sizes by 40%, and improving Core Web Vitals.",
    },
    {
      role: "Full-Stack Developer",
      company: "WebSolutions Agency",
      period: "2023 - 2025",
      type: "work",
      description: "Designed, built, and launched multiple SaaS platforms using PostgreSQL, Express, React, and Node.js. Integrated multiple payment gateways and automated analytics pipelines.",
    },
    {
      role: "Freelance Developer & Designer",
      company: "Self-Employed",
      period: "2022 - 2023",
      type: "work",
      description: "Crafted custom WordPress/React storefronts, portfolio websites, and modern landing pages for diverse global clients. Handled complete SEO optimization and UI design in Figma.",
    },
    {
      role: "B.S. Computer Science & Engineering",
      company: "State University",
      period: "2019 - 2022",
      type: "education",
      description: "Graduated with Honors. Specialized in Software Engineering, Data Structures, and Database Management Systems.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-950/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            My Journey
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience & Education
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline dot icon indicator */}
              <div className="absolute -left-[17px] top-1.5 p-1.5 rounded-full bg-slate-950 border-2 border-indigo-500 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-md shadow-indigo-500/25">
                {exp.type === "work" ? (
                  <Briefcase className="w-4 h-4" />
                ) : (
                  <GraduationCap className="w-4 h-4" />
                )}
              </div>

              {/* Date tag container on desktop left-hand side */}
              <div className="hidden md:block absolute right-full top-2 mr-10 w-24 text-right text-sm font-semibold text-indigo-400">
                {exp.period}
              </div>

              {/* Card content */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-sm text-indigo-300 font-medium">{exp.company}</p>
                  </div>
                  {/* Mobile period display */}
                  <span className="md:hidden inline-flex items-center gap-1.5 text-xs text-indigo-400 font-medium bg-indigo-500/10 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
