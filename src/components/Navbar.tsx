"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Load theme and listen to scrolls
  useEffect(() => {
    // Determine initial theme
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const scrollPosition = window.scrollY + 120;
      const sections = navItems.map((item) => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset slightly to account for fixed navbar height
      const yOffset = -80; 
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollTo("home")}
          >
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              Praveenkumar<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-all cursor-pointer relative py-1 hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-800/50 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile menu action bar */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-800/50 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                activeSection === item.id
                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => scrollTo("contact")}
              className="w-full py-3 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
