"use client";

import { Award, Briefcase, Cpu, ShieldCheck } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Briefcase, label: "Experience", value: "3+ Years" },
    { icon: Award, label: "Projects Completed", value: "30+" },
    { icon: ShieldCheck, label: "Client Satisfaction", value: "100%" },
  ];

  const skillCategories = [
    {
      title: "Frontend Stack",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5/CSS3", "Redux Toolkit"],
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      title: "Dev Tools & Services",
      skills: ["Git & GitHub", "Docker", "Figma", "Vercel", "AWS (S3)", "Postman"],
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            About Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Who is Praveen?
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-2xl font-bold text-slate-100">
              Passionate Developer Building Modern Web Apps
            </h3>
            
            <p className="text-slate-400 leading-relaxed">
              I am a dedicated full-stack web developer who loves building performant, pixel-perfect user interfaces and solid backend APIs. With a strong eye for design and meticulous attention to performance, I bridge the gap between creative visual designs and high-fidelity code.
            </p>
            
            <p className="text-slate-400 leading-relaxed">
              My philosophy is centered around creating clean, scalable code architectures and ensuring an optimized user experience across all screen sizes.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl text-center flex flex-col items-center">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 mb-2">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-indigo-400 w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-100">My Toolbox</h3>
            </div>

            <div className="space-y-6">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5">
                  <h4 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider mb-4">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-indigo-500/10 hover:text-indigo-300 text-slate-300 border border-white/5 transition-colors text-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
