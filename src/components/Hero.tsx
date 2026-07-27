"use client";

import { ArrowRight, Download, Mail, Smartphone, PenTool, Box, ChevronRight, ChevronDown, Check } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Background3D from "@/components/Background3D";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; 
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "40+" },
    { label: "Happy Clients", value: "20+" },
    { label: "Specialty", value: "UI/UX & Brand" },
  ];

  const services = [
    {
      title: "UI/UX Design",
      icon: Smartphone,
      description: "Designing interface architectures and operational mockups for advanced products.",
      deliverables: ["UX Research", "User Journey", "Wireframes", "Prototypes", "Mobile Apps", "Web Apps"],
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      title: "Brand Design",
      icon: PenTool,
      description: "Developing consistent corporate identities and high-impact visual design standards.",
      deliverables: ["Logo Design", "Brand Identity", "Packaging", "Posters", "Social Media"],
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      title: "3D Design",
      icon: Box,
      description: "Modeling high-fidelity product representations, assets, and advertising structures.",
      deliverables: ["Product Rendering", "Packaging Mockups", "3D Visualization", "Marketing Assets"],
      gradient: "from-blue-700 to-indigo-500",
    },
  ];

  return (
    <section id="home" className="w-full relative pt-32 pb-24 overflow-hidden">
      {/* 3D Canvas Background for Landing Page only */}
      <Background3D />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* HERO SECTION CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* LEFT COLUMN: Texts and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left relative z-10 pointer-events-auto">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Freelance & Contract Roles
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Designing Digital <br />
              <span className="text-gradient-blue font-black">Experiences</span> <br />
              That Users Love.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              UI/UX Designer & Frontend Developer creating intuitive web, mobile, and brand experiences that drive engagement and business success.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("work")}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer text-sm w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#"
                download
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold rounded-full border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 cursor-pointer text-sm w-full sm:w-auto"
              >
                Download Resume
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 transition-all duration-300 cursor-pointer text-sm w-full sm:w-auto"
              >
                Let&apos;s Talk
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-5 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-100 hover:bg-blue-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-100 hover:bg-blue-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:praveenkumar.designer@gmail.com"
                className="p-3 bg-slate-100 hover:bg-blue-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Floating accent elements over the 3D background */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end select-none pointer-events-none">
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              
              {/* Floating Element 1: Color Swatch Palette Card */}
              <div className="absolute top-[-20px] left-[-10px] glass-panel p-3 shadow-xl z-20 w-36 animate-float pointer-events-auto">
                <div className="text-[10px] font-semibold text-slate-500 mb-1.5">Color Tokens</div>
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-blue-600 border border-white dark:border-slate-800" title="Primary #2563EB" />
                  <div className="w-5 h-5 rounded-full bg-indigo-500 border border-white dark:border-slate-800" title="Secondary" />
                  <div className="w-5 h-5 rounded-full bg-cyan-400 border border-white dark:border-slate-800" title="Accent" />
                  <div className="w-5 h-5 rounded-full bg-slate-900 dark:bg-white border border-white dark:border-slate-800" title="Muted" />
                </div>
              </div>

              {/* Floating Element 2: Figma Style Collaborative Cursor */}
              <div className="absolute bottom-[30px] right-[-20px] bg-blue-600 text-white font-mono text-[10px] py-1.5 px-2.5 rounded-full rounded-tl-none shadow-lg z-30 flex items-center gap-1.5 animate-float-delayed pointer-events-auto">
                <svg className="w-3 h-3 fill-current rotate-90" viewBox="0 0 24 24">
                  <path d="M21 3L3 10.53v.98l6.84 2.81 2.81 6.84h.98L21 3z" />
                </svg>
                <span>Praveen</span>
              </div>

              {/* Floating Element 3: Code Editor Block */}
              <div className="absolute bottom-[-15px] left-[20px] glass-panel px-3 py-2 shadow-xl z-20 font-mono text-[9px] text-slate-600 dark:text-slate-400 w-44 animate-float-slow pointer-events-auto">
                <div className="flex items-center justify-between mb-1.5 text-slate-400">
                  <span>Next.js CSS</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div><span className="text-blue-500">.rounded-premium</span> &#123;</div>
                <div className="pl-3">border-radius: <span className="text-amber-500">20px</span>;</div>
                <div>&#125;</div>
              </div>

            </div>
          </div>
        </div>

        {/* Bouncing Scroll Down Indicator */}
        <div className="flex justify-center my-12 relative z-20 pointer-events-auto">
          <button
            onClick={() => scrollTo("work")}
            className="group flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            aria-label="Scroll Down"
          >
            <span>Scroll Down</span>
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1.5 transition-colors group-hover:border-blue-500">
              <div className="w-1.5 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-bounce" />
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* STATS AREA */}
        <div className="w-full glass-panel py-8 px-6 sm:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-32 border border-slate-200/50 dark:border-slate-800/50 relative z-20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* SERVICES SECTION */}
        <div className="w-full relative z-10 pt-8">
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Core Expertise
            </h2>
            <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Design & Development Services
            </p>
            <div className="mt-4 h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div
                key={i}
                className="glass-panel-interactive p-8 flex flex-col h-full border border-slate-200/50 dark:border-slate-800/50"
              >
                {/* Header Icon */}
                <div className={`p-4 bg-blue-500/10 rounded-2xl w-fit text-blue-600 dark:text-blue-400 mb-6 border border-blue-500/20`}>
                  <svc.icon className="w-6 h-6" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {svc.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                  {svc.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-6 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    What I Deliver
                  </div>
                  {svc.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-350">
                      <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
