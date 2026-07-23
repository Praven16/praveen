"use client";

import { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, Check, ExternalLink, Globe } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-200/20 dark:border-slate-800/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Get In Touch
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect With Me
          </p>
          <div className="mt-4 h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Brief details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Let's Build Something Amazing Together.
              </h3>
              <p className="text-sm sm:text-base text-slate-650 dark:text-slate-400 leading-relaxed">
                I'm available for freelance projects, full-time opportunities, and collaborations. Whether you have a complex dashboard that needs structural research, or you are looking for a brand system that stands out, let's start the conversation.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              
              {/* Email */}
              <div className="flex items-center gap-4 p-4 glass-panel border border-slate-200/50 dark:border-slate-800/50">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-450 font-bold uppercase tracking-wider">Email Me</div>
                  <a
                    href="mailto:praveenkumar.designer@gmail.com"
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-650 dark:hover:text-blue-400 transition-colors"
                  >
                    praveenkumar.designer@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 glass-panel border border-slate-200/50 dark:border-slate-800/50">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-450 font-bold uppercase tracking-wider">Based In</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Bengaluru, Karnataka, India
                  </div>
                </div>
              </div>

            </div>

            {/* Social Channels Grids */}
            <div className="space-y-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Professional Handles</div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-xs font-semibold text-slate-750 dark:text-slate-300 hover:border-blue-500/30 transition-all duration-300 shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
                    LinkedIn
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-xs font-semibold text-slate-750 dark:text-slate-300 hover:border-blue-500/30 transition-all duration-300 shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-extrabold text-[13px] text-blue-600 shrink-0 font-sans">Bē</span>
                    Behance
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-xs font-semibold text-slate-750 dark:text-slate-300 hover:border-blue-500/30 transition-all duration-300 shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-blue-600 shrink-0" />
                    GitHub
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-xs font-semibold text-slate-750 dark:text-slate-300 hover:border-blue-500/30 transition-all duration-300 shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                    Dribbble
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 sm:p-10 border border-slate-200/50 dark:border-slate-800/50 space-y-6 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-slate-850 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600/50 transition-all text-sm shadow-sm"
                    placeholder="Enter name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-slate-850 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600/50 transition-all text-sm shadow-sm"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-slate-850 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600/50 transition-all text-sm shadow-sm"
                  placeholder="e.g. Design Consulting / Project Inquiry"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl text-slate-850 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-600/50 transition-all text-sm resize-none shadow-sm"
                  placeholder="Tell me about your product requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 px-6 text-sm font-bold rounded-full text-white tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  status === "sending"
                    ? "bg-blue-600/50 cursor-not-allowed"
                    : status === "success"
                    ? "bg-emerald-600 hover:bg-emerald-500"
                    : "bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
                }`}
              >
                {status === "sending" ? (
                  <>Sending Message...</>
                ) : status === "success" ? (
                  <>
                    <Check className="w-5 h-5" />
                    Success! Message Sent
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
