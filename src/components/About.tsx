"use client";

import { Calendar, Briefcase, GraduationCap, Award, Cpu, Sparkles, Check } from "lucide-react";

export default function About() {
  const skillCategories = [
    {
      title: "UX Design",
      skills: ["User Research", "Information Architecture", "User Flow", "Wireframing", "Prototyping"],
    },
    {
      title: "UI Design",
      skills: ["Visual Design", "Design Systems", "Responsive Design", "Interaction Design"],
    },
    {
      title: "Development",
      skills: ["Flutter", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Brand Design",
      skills: ["Logo", "Packaging", "Posters"],
    },
  ];

  const tools = ["Figma", "FigJam", "Photoshop", "Illustrator", "After Effects"];

  const experience = [
    {
      role: "Lead UI/UX & Frontend Designer",
      company: "Healthcare Solutions Inc. (Bengaluru)",
      period: "2024 - Present",
      description: "Spearheaded user research and UX architecture for patient-portal dashboards. Reduced record-keeping overhead by 35% through custom design systems. Handled direct implementation in React and Flutter.",
    },
    {
      role: "Senior Product Designer",
      company: "SaaS Dynamics",
      period: "2022 - 2024",
      description: "Shipped 12+ dashboard interfaces and designed cohesive responsive web application designs. Created modular interactive elements reducing developer handoff lag by 40%.",
    },
    {
      role: "Freelance Designer & Flutter Dev",
      company: "Remote Global Contracts",
      period: "2020 - 2022",
      description: "Delivered digital branding guidelines, packing layouts, and cross-platform mobile apps for eco-friendly consumer goods and technology startups.",
    },
  ];

  const education = [
    {
      degree: "B.Des in Interaction Design & Computer Science",
      school: "National Institute of Design / Tech University",
      period: "2016 - 2020",
      details: "Focused on human-computer interaction, cognitive design systems, and frontend structures. Graduated with Honors.",
    },
  ];

  const certifications = [
    {
      name: "NN/g UX Certification",
      issuer: "Nielsen Norman Group",
      id: "Credential ID: NNg-84912",
    },
    {
      name: "Human-Computer Interaction",
      issuer: "Interaction Design Foundation",
      id: "Credential ID: IxDF-77291",
    },
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Google Career Academy",
      id: "Credential ID: GOOG-UX-841",
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-200/20 dark:border-slate-800/20 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            About Me
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Design Philosophy
          </p>
          <div className="mt-4 h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto" />
        </div>

        {/* Layout Grid: Portrait & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column: Premium Designer Portrait Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-premium overflow-hidden bg-gradient-to-tr from-blue-600 to-indigo-500 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl p-4 flex flex-col justify-end group">
              {/* Graphic background rings */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-indigo-900/50 to-slate-950/80 z-0" />
              
              {/* Portrait abstract outline SVG (very premium detail) */}
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                <svg className="w-[80%] h-[80%] stroke-white fill-none stroke-[1.5]" viewBox="0 0 100 100">
                  {/* Abstract designer head/shoulders geometric wireframe */}
                  <circle cx="50" cy="35" r="20" />
                  <path d="M15,85 C15,65 30,55 50,55 C70,55 85,65 85,85" />
                  <line x1="30" y1="35" x2="70" y2="35" />
                  <line x1="50" y1="15" x2="50" y2="55" />
                </svg>
              </div>

              {/* Floating Tools Badges on Avatar Frame */}
              <div className="absolute top-6 left-6 z-25 bg-slate-900/80 backdrop-blur-md text-[10px] text-white px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg animate-float">
                <span>Figma</span>
              </div>
              <div className="absolute bottom-24 right-4 z-25 bg-slate-900/80 backdrop-blur-md text-[10px] text-white px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-lg animate-float-delayed">
                <span>Flutter</span>
              </div>

              {/* Portrait Caption */}
              <div className="relative z-20 text-white space-y-1">
                <h4 className="font-extrabold text-lg">Praveenkumar P</h4>
                <p className="text-xs text-slate-300">UI/UX Designer & Frontend Developer</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Designing Meaningful Digital Products Through Strategy & Creativity.
            </h3>
            
            <p className="text-sm sm:text-base text-slate-650 dark:text-slate-400 leading-relaxed">
              I am a visual thinker and builder. With over 4 years of experience, I bridge the gap between initial user interviews and operational code structures. I specialize in designing intuitive systems across healthcare, high-performance SaaS dashboards, custom mobile platforms, and packaging guidelines.
            </p>

            <p className="text-sm sm:text-base text-slate-650 dark:text-slate-400 leading-relaxed">
              My approach focuses on pixel precision, compliance, and strict typography rules. Whether constructing wireframe screens or coding Flutter frameworks, I prioritize user speed and minimal cognitive friction.
            </p>

            {/* Toolbox list */}
            <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-600" />
                Primary Design Software
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tl, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 hover:border-blue-500/30 transition-all duration-300 shadow-sm"
                  >
                    {tl}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Layout Grid: Skills Matrix */}
        <div className="w-full mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Skill Architecture
            </h3>
            <p className="text-xs text-slate-500 mt-1">Core proficiencies mapped across design and build stages</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className="glass-panel p-6 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4 pb-2 border-b border-slate-200/50 dark:border-slate-800/50">
                    {cat.title}
                  </h4>
                  <div className="space-y-2.5">
                    {cat.skills.map((sk, skIdx) => (
                      <div key={skIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{sk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layout Grid: Timeline Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pt-8 border-t border-slate-200/20 dark:border-slate-800/20">
          
          {/* LEFT: Career Timeline */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Career Timeline</h3>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 space-y-10 ml-3">
              {experience.map((exp, i) => (
                <div key={i} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[30px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-blue-600 group-hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:bg-white" />
                  </span>

                  {/* Experience Card */}
                  <div className="glass-panel p-6 border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-500/20 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white">{exp.role}</h4>
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-550 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 px-2.5 py-1 rounded-full">
                        <Calendar className="w-3 h-3 text-blue-500" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Education & Certifications */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Education timeline */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
              </div>

              <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 ml-3">
                {education.map((edu, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute -left-[30px] top-1.5 w-4.5 h-4.5 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-indigo-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    </span>
                    <div className="glass-panel p-5 border border-slate-200/50 dark:border-slate-800/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{edu.period}</span>
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-xs text-slate-500 mt-1">{edu.school}</p>
                      <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed mt-2.5">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications cards */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="glass-panel p-5 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-center hover:border-blue-500/20 transition-all duration-300"
                  >
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{cert.name}</h4>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1">
                      <span>{cert.issuer}</span>
                      <span className="font-mono text-slate-400">{cert.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
