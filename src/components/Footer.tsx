"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; 
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-950 py-16 relative overflow-hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-200/40 dark:border-slate-800/40 pb-12 mb-12">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Praveenkumar<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Quick Shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {(["home", "work", "about", "contact"] as const).map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs font-semibold uppercase tracking-wider text-slate-550 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-450 transition-colors cursor-pointer"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Social Channels */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-200/40 hover:bg-blue-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-650 dark:text-slate-450 hover:text-blue-650 dark:hover:text-blue-400 rounded-xl border border-slate-200/30 dark:border-slate-800/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-slate-200/40 hover:bg-blue-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-650 dark:text-slate-450 hover:text-blue-650 dark:hover:text-blue-400 rounded-xl border border-slate-200/30 dark:border-slate-800/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-450 dark:text-slate-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Praveenkumar P. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
          <a
            href="#"
            download
            className="font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Download Brand Resume
          </a>
        </div>
      </div>

      {/* FLOATING BACK TO TOP CONTROL */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-xl shadow-blue-600/20 dark:shadow-blue-600/10 border border-blue-500/20 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-350 cursor-pointer z-40 ${
          showScrollButton ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
