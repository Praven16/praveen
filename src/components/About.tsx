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
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            About Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Who is Praveen?
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-2xl font-bold text-slate-800">
              Passionate Developer Building Modern Web Apps
            </h3>
            
            <p className="text-slate-600 leading-relaxed">
              I am a dedicated full-stack web developer who loves building performant, pixel-perfect user interfaces and solid backend APIs. With a strong eye for design and meticulous attention to performance, I bridge the gap between creative visual designs and high-fidelity code.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              My philosophy is centered around creating clean, scalable code architectures and ensuring an optimized user experience across all screen sizes.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl text-center flex flex-col items-center">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 mb-2">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-indigo-600 w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-800">My Toolbox</h3>
            </div>

            <div className="space-y-6">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl border border-slate-200/60">
                  <h4 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-4">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 border border-slate-200 transition-colors text-sm cursor-default"
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
