"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquareCheck } from "lucide-react";

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
    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="glow-blob glow-secondary -bottom-20 -left-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Get In Touch
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Contact Me
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">
              {"Let's discuss your next project"}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {"Have an idea, project, or full-time position you'd like to collaborate on? Drop me a message and I'll get back to you within 24 hours."}
            </p>

            <div className="space-y-4 pt-4">
              {/* Contact Item */}
              <div className="flex items-center gap-4 p-4 glass-panel rounded-xl">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email Me</div>
                  <a href="mailto:praveen@example.com" className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                    praveen@example.com
                  </a>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-center gap-4 p-4 glass-panel rounded-xl">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Call Me</div>
                  <a href="tel:+123456789" className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-center gap-4 p-4 glass-panel rounded-xl">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Location</div>
                  <div className="text-sm font-semibold text-slate-900">
                    San Francisco, CA, USA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-slate-200/60 space-y-6">
              
              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm resize-none"
                  placeholder="Hey Praveen, let's work on..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 px-6 text-sm font-semibold rounded-xl text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  status === "sending"
                    ? "bg-indigo-600/50 cursor-not-allowed"
                    : status === "success"
                    ? "bg-emerald-600 hover:bg-emerald-500"
                    : "bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
                }`}
              >
                {status === "sending" ? (
                  <>Sending...</>
                ) : status === "success" ? (
                  <>
                    <MessageSquareCheck className="w-5 h-5 animate-bounce" />
                    Message Sent Successfully!
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
