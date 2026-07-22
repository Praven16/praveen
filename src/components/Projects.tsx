"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";

export default function Projects() {
  const projects = [
    {
      title: "SaaS Metrics Dashboard",
      description: "A premium business intelligence dashboard featuring real-time financial tracking, customizable graphs, and automated monthly reporting tools.",
      image: "/saas-dashboard.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Prisma"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Decentralized Crypto Wallet",
      description: "A Web3 crypto wallet application featuring secure token swap functionality, detailed token transaction history, and live market price tracking.",
      image: "/crypto-wallet.png",
      tags: ["React.js", "Ether.js", "Tailwind CSS", "Solidity", "Web3"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Glassmorphic E-Commerce Shop",
      description: "A minimalist luxury e-commerce shop presenting detailed visual product cards, a seamless virtual cart, and complete Stripe checkout integration.",
      image: "/e-commerce.png",
      tags: ["Next.js", "Stripe API", "Tailwind CSS", "MongoDB", "Redux"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Accent decorative blob */}
      <div className="glow-blob glow-accent top-1/4 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            My Portfolio
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Projects
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 rounded-full mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-panel-interactive flex flex-col rounded-2xl overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-indigo-600 transition-colors ml-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
