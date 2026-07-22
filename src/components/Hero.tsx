"use client";

import { ArrowRight, Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/icons";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glowing blobs */}
      <div className="glow-blob glow-primary -top-20 -left-20" />
      <div className="glow-blob glow-secondary bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Available for Freelance & Full-time Roles
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Hi, I'm{" "}
              <span className="text-gradient">
                Praveen
              </span>
              <br />
              <span className="text-slate-200">Creative Web Developer</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              I design and build premium web applications with modern technologies like React, Next.js, and Tailwind CSS. Specializing in crafting fluid, user-centered digital interfaces that stand out.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 cursor-pointer"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all duration-300 cursor-pointer"
              >
                Let's Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 hover:bg-indigo-500/15 hover:text-indigo-400 text-slate-400 rounded-xl border border-white/5 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 hover:bg-indigo-500/15 hover:text-indigo-400 text-slate-400 rounded-xl border border-white/5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 bg-white/5 hover:bg-indigo-500/15 hover:text-indigo-400 text-slate-400 rounded-xl border border-white/5 transition-all duration-300"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 hover:bg-indigo-500/15 hover:text-indigo-400 text-slate-400 rounded-xl border border-white/5 transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Decorative Mock Terminal */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end animate-float">
            <div className="w-full max-w-md glass-panel rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-slate-400 font-mono">Praveen.tsx</span>
                <div className="w-12" />
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-sm leading-relaxed text-slate-300">
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-indigo-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  name: <span className="text-emerald-300">"Praveen"</span>,
                </div>
                <div className="pl-4">
                  role: <span className="text-emerald-300">"Full-Stack Web Dev"</span>,
                </div>
                <div className="pl-4">
                  skills: [
                </div>
                <div className="pl-8 text-indigo-400">
                  "React", "Next.js", "TypeScript",
                </div>
                <div className="pl-8 text-indigo-400">
                  "NodeJS", "TailwindCSS", "PostgreSQL"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  passion:{" "}
                  <span className="text-emerald-300">"Building Stunning UX"</span>,
                </div>
                <div className="pl-4">
                  status: <span className="text-amber-300">"Coding 24/7"</span>
                </div>
                <div>&#125;;</div>
                <div className="mt-4 text-slate-500">
                  // Keep exploring to see projects!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
