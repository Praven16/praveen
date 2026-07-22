"use client";

import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12 relative overflow-hidden mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 border border-indigo-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              Praveen.dev
            </span>
          </div>

          {/* Copyright text */}
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Praveen. All rights reserved. Crafted with Next.js, Tailwind CSS and React.
          </p>

          {/* Scroll back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-indigo-600 hover:text-white text-slate-400 rounded-xl border border-white/5 transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>

        </div>
      </div>
    </footer>
  );
}
