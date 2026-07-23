"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, Eye, CheckCircle, Target, Users, BookOpen, Layers, Award, Activity, Sparkles, ExternalLink } from "lucide-react";

interface CaseStudy {
  overview: string;
  problem: string;
  research: string;
  solution: string;
  finalDesign: string;
  outcome: string;
  sections?: {
    businessGoal?: string;
    personas?: { name: string; role: string; bio: string; needs: string[] }[];
    userFlow?: string[];
    designSystem?: { name: string; hex: string }[];
    results?: string[];
    keyLearnings?: string[];
    gallery?: { title: string; desc: string; type: string }[];
  };
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "UI/UX" | "Brand Design" | "3D Design";
  filterCategory: "uiux" | "brand" | "3d";
  tags: string[];
  caseStudy: CaseStudy;
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<"all" | "uiux" | "brand" | "3d">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: "medtrack",
      title: "MedTrack – Patient Care Dashboard",
      description: "An enterprise medical software portal simplifying clinical charts and workflow tracking for healthcare providers.",
      image: "/saas-dashboard.png",
      category: "UI/UX",
      filterCategory: "uiux",
      tags: ["UX Research", "Figma Design", "Next.js", "Design System"],
      caseStudy: {
        overview: "MedTrack is an enterprise-scale dashboard designed for clinicians to coordinate patient care, view diagnostics, and track prescriptions in real-time. The goal was to replace legacy software that led to high fatigue rates among hospital staff.",
        problem: "Clinicians spent over 4 hours daily keying patient notes. Visual clutter led to medical charts being misread, and a lack of real-time scheduling resulted in average patient wait times of 48 minutes.",
        research: "We conducted 24 in-depth interviews with doctors and nurses across 3 clinical networks. We observed that 70% of clinical errors happened during shift handovers due to fragmented communications.",
        solution: "A unified patient dashboard with a strict 3-level information hierarchy. We optimized prescription workflows, built a unified timeline view for shift handovers, and integrated real-time emergency alert modules.",
        finalDesign: "The high-fidelity dashboard features deep-blue accessibility-compliant typography, clear status indicators for patient priority levels, and responsive panel side-drawers for quick chart edits.",
        outcome: "A successful pilot deployment showed clinical entry overhead decreased by 35%, and shift handover communication speed increased by 50%. Most importantly, average patient wait times dropped from 48 to 18 minutes.",
        sections: {
          businessGoal: "Transform patient charting from a manual chore into a data-driven visual hub. Reduce administrative drag so doctors spend more time with patients.",
          personas: [
            {
              name: "Dr. Sarah Jenkins",
              role: "Chief of Medicine",
              bio: "Manages 40+ staff members and coordinates high-priority trauma huddles daily. Requires speed and zero cognitive noise.",
              needs: [
                "Instant search for patient records.",
                "Visual overview of department capacity.",
                "Voice-to-text dictation integration."
              ]
            }
          ],
          userFlow: [
            "1. Clinician logs in and views prioritized alert queue.",
            "2. Selects high-priority patient to expand clinical charts.",
            "3. Edits prescription and checks for allergen conflicts automatically.",
            "4. Confirms prescription, syncing data instantly to the hospital pharmacy."
          ],
          designSystem: [
            { name: "Brand Navy", hex: "#0f172a" },
            { name: "Primary Blue", hex: "#2563eb" },
            { name: "Emergency Red", hex: "#ef4444" },
            { name: "Neutral Slate", hex: "#64748b" }
          ],
          results: [
            "35% administration overhead reduction.",
            "4.8/5 clinician satisfaction score.",
            "Zero critical prescription conflicts missed during pilot."
          ],
          keyLearnings: [
            "Clinical environments require massive contrast ratios due to varying ward lighting conditions.",
            "Designing with real doctor clinical abbreviations (rather than placeholder lorem ipsum) is vital for accurate prototype testing."
          ]
        }
      }
    },
    {
      id: "ecopack",
      title: "EcoPack – Circular Retail Identity",
      description: "A comprehensive logo redesign, typography system, and organic packaging templates for a sustainable e-commerce brand.",
      image: "/e-commerce.png",
      category: "Brand Design",
      filterCategory: "brand",
      tags: ["Brand Guidelines", "Packaging", "Logo Design", "Illustrator"],
      caseStudy: {
        overview: "EcoPack manufactures zero-plastic, compostable shipping materials for premium digital-native direct-to-consumer businesses. The project goal was to build a brand identity that looked premium and ecological, moving away from default 'earthy' green cliches.",
        problem: "EcoPack's original brand identity was perceived as cheap and craft-like, making it difficult to win contracts with high-end luxury cosmetic and fashion retailers.",
        research: "We analyzed competitors in the shipping supply chain and surveyed 120 e-commerce operations managers. Premium brands wanted their shipping boxes to feel like a high-end gift opening experience while remaining strictly ecological.",
        solution: "We designed a logo using a clean circular emblem representing infinite recyclability. We selected a color palette of deep cobalt blue, warm clay white, and charcoal gray, combined with minimalist editorial typography (serif headings and clean sans-serif body).",
        finalDesign: "Visual blueprints of packaging boxes featuring debossed circular logo stamps, vegetable-ink patterns printed inside the boxes, and detailed brand identity guidelines.",
        outcome: "Following the brand relaunch, EcoPack secured 14 new corporate retail accounts within three months, leading to a 280% increase in wholesale volume.",
        sections: {
          gallery: [
            { title: "Circular Monogram", desc: "A geometric emblem representing infinite material loops.", type: "Logo Design" },
            { title: "Eco Box Mockups", desc: "Minimalist compostable cardboard packaging featuring vegetable-dye branding.", type: "Packaging" },
            { title: "Circular Future Posters", desc: "Minimalist advertisements emphasizing zero plastic shipping.", type: "Posters" },
            { title: "Brand Identity Manual", desc: "Guidelines detailing grid structures, typography scales, and logo clearance rules.", type: "Guidelines" }
          ]
        }
      }
    },
    {
      id: "helix",
      title: "Helix Pro – 3D Tech Visuals",
      description: "Advanced product renderings and lighting studies for minimalist noise-cancelling headphones and marketing campaigns.",
      image: "/crypto-wallet.png",
      category: "3D Design",
      filterCategory: "3d",
      tags: ["3D Rendering", "Octane Render", "Cinema 4D", "Product Design"],
      caseStudy: {
        overview: "Helix Pro is a high-end consumer audio brand specializing in minimalist ANC headphones. The mandate was to create realistic, premium 3D assets and animated advertising visuals for their global product launch page.",
        problem: "Traditional product photography was expensive, slow to adjust for design updates, and struggled to highlight micro-details of the carbon-fiber joints and woven acoustic cups.",
        research: "We analyzed high-end technology presentations (Apple, Beats, Sony) and set target shaders to mimic brushed aluminum, high-density foam, and premium matte carbon fiber.",
        solution: "We modeled the headphones in CAD-precise detail and imported them into Cinema 4D. We set up an advanced studio lighting rig with dual-diffuser softboxes and custom rim-lighting to outline the product's silhouette against dark, atmospheric backdrops.",
        finalDesign: "A series of 8 high-resolution 3D renders showcasing the headphones from multiple dynamic angles, including exploded assembly views of the acoustic drivers and headband hinges.",
        outcome: "The assets were used as the primary hero media on the landing page, contributing to over 15,000 pre-orders and winning a CSS Design Award for best product showcase site.",
        sections: {
          gallery: [
            { title: "Studio Render Angle A", desc: "Highlighting the anodized aluminum adjustments and matte black cups.", type: "Product Renders" },
            { title: "Luxury Retail Box Mock", desc: "Unboxing layout presenting folded headphones inside molded sustainable insert tray.", type: "Packaging Mockup" },
            { title: "Acoustic Driver Assembly", desc: "3D exploded diagram showing mechanical layers and speaker drivers.", type: "3D Visualization" },
            { title: "Promotional Banner Design", desc: "High-contrast dynamic layout for billboard ads and homepage banners.", type: "Marketing Assets" }
          ]
        }
      }
    }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="work" className="py-24 relative border-t border-slate-200/20 dark:border-slate-800/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Portfolio Showcase
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Works
          </p>
          <div className="mt-4 h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {(["all", "uiux", "brand", "3d"] as const).map((filter) => {
            const labels = { all: "All", uiux: "UI/UX", brand: "Brand Design", "3d": "3D Design" };
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-100 hover:bg-slate-250 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-350 border-slate-200/50 dark:border-slate-800/50"
                }`}
              >
                {labels[filter]}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel-interactive flex flex-col rounded-2xl overflow-hidden group border border-slate-200/50 dark:border-slate-800/50"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-300" />
                
                {/* Category Badge overlay */}
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="space-y-3">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Mini Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold text-slate-500 dark:text-slate-450 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Case Study CTA Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 bg-slate-100/50 hover:bg-blue-600 dark:bg-slate-900/50 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white rounded-xl transition-all duration-300 cursor-pointer border border-slate-200/30 dark:border-slate-800/30"
                >
                  <Eye className="w-4 h-4" />
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CASE STUDY DETAIL OVERLAY MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity duration-300">
          
          {/* Modal Container */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 w-full max-w-5xl h-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col animate-reveal">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20">
                  {selectedProject.category}
                </span>
                <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate max-w-xs sm:max-w-md">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-grow overflow-y-auto p-6 sm:p-8 md:p-10 space-y-12">
              
              {/* 1. Hero Image / Cover */}
              <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200/30 dark:border-slate-800/30">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-black">{selectedProject.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-200/90 mt-1">{selectedProject.category} Case Study</p>
                </div>
              </div>

              {/* 2. Overview, Business Goal, Team Info */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                <div className="lg:col-span-8 space-y-4">
                  <h4 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    Project Overview
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedProject.caseStudy.overview}
                  </p>
                </div>
                
                <div className="lg:col-span-4 glass-panel p-5 border border-slate-200/50 dark:border-slate-800/50 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Meta</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium">Timeline</div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">4 Weeks</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium">Platform</div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {selectedProject.category === "UI/UX" ? "Web & Mobile SaaS" : selectedProject.category === "Brand Design" ? "Direct-to-Consumer Packaging" : "3D Media Assets"}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium">Tools Employed</div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {selectedProject.tags.slice(1, 4).join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-slate-200/40 dark:border-slate-800/40" />

              {/* 3. Problem & Solution Split Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-rose-500" />
                    The Problem
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    The Solution
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>
              </div>

              <hr className="border-slate-200/40 dark:border-slate-800/40" />

              {/* UI/UX CASE STUDY SPECIFIC DETAILS */}
              {selectedProject.category === "UI/UX" && selectedProject.caseStudy.sections && (
                <div className="space-y-12">
                  
                  {/* Goal and Persona */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">Business Objective</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {selectedProject.caseStudy.sections.businessGoal}
                      </p>
                    </div>

                    {selectedProject.caseStudy.sections.personas && (
                      <div className="glass-panel p-5 space-y-3 border border-slate-200/50 dark:border-slate-800/50">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Primary Persona</h5>
                        <div>
                          <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                            {selectedProject.caseStudy.sections.personas[0].name}
                          </div>
                          <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold uppercase">
                            {selectedProject.caseStudy.sections.personas[0].role}
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {selectedProject.caseStudy.sections.personas[0].bio}
                        </p>
                        <div className="space-y-1.5 pt-1">
                          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-450">Critical Needs:</div>
                          {selectedProject.caseStudy.sections.personas[0].needs.map((nd, idx) => (
                            <div key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                              <span>{nd}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <hr className="border-slate-200/40 dark:border-slate-800/40" />

                  {/* User Flow & Wireframes Description */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-7 space-y-4">
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        User Flow Journey
                      </h4>
                      <div className="space-y-2 pt-2">
                        {selectedProject.caseStudy.sections.userFlow?.map((flow, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl text-xs text-slate-700 dark:text-slate-300 font-mono border border-slate-200/30 dark:border-slate-800/30"
                          >
                            {flow}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-5 space-y-4">
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                        <Layers className="w-5 h-5 text-indigo-500" />
                        Wireframe Guidelines
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        To prioritize data visualization and reduce visual noise, we mapped wireframes onto a strict 4px grid. Inputs were placed in standard card structures, keeping scrolling to a minimum while maintaining maximum density.
                      </p>
                      <div className="w-full h-32 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center justify-center relative overflow-hidden font-mono text-[9px] text-slate-400 text-center p-4">
                        <div className="border border-dashed border-slate-300 dark:border-slate-800 w-full h-full flex items-center justify-center rounded">
                          [ Low-Fidelity Layout Matrix ]
                          <br />
                          Header: 64px | Main Grid: 3-Col layout
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-200/40 dark:border-slate-800/40" />

                  {/* Design System & High Fidelity Description */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-5 space-y-4">
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-blue-500" />
                        UI Design System
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Color tokens were tested against WCAG contrast rules to deliver AA and AAA compliance. Primary active states utilize a premium royal blue, supported by slate grey and warm base cards.
                      </p>
                      <div className="flex gap-2">
                        {selectedProject.caseStudy.sections.designSystem?.map((color, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full aspect-square rounded-lg border border-slate-200/60 dark:border-slate-800/60" style={{ backgroundColor: color.hex }} />
                            <span className="text-[8px] font-bold text-slate-500 truncate max-w-full">{color.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-7 space-y-4">
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                        <Eye className="w-5 h-5 text-cyan-500" />
                        High Fidelity Interfaces
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {selectedProject.caseStudy.finalDesign}
                      </p>
                      <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-800/50 flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                          <Activity className="w-5 h-5 animate-pulse" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white">Figma Prototype Active</div>
                          <div className="text-[10px] text-slate-500 truncate">Interact with our high fidelity flow online.</div>
                        </div>
                        <a
                          href="https://figma.com"
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-200/40 dark:border-slate-800/40" />

                  {/* Results & Key Learnings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-500" />
                        Project Results
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.caseStudy.sections.results?.map((res, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                            <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                            <span>{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-indigo-500" />
                        Key Learnings
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.caseStudy.sections.keyLearnings?.map((learn, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-450 bg-slate-100/50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200/30 dark:border-slate-800/30">
                            <span className="font-bold text-blue-500 mr-1.5">{idx + 1}.</span>
                            <span>{learn}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* BRAND DESIGN / 3D DESIGN CASE STUDY SPECIFIC DETAILS */}
              {(selectedProject.category === "Brand Design" || selectedProject.category === "3D Design") && selectedProject.caseStudy.sections?.gallery && (
                <div className="space-y-8">
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    Asset Showcase & Guidelines
                  </h4>
                  
                  {/* Custom Masonry/Grid Showcase Gallery */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedProject.caseStudy.sections.gallery.map((item, idx) => (
                      <div
                        key={idx}
                        className="glass-panel p-6 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between hover:border-blue-500/20 transition-all duration-300"
                      >
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full">
                            {item.type}
                          </span>
                          <h5 className="text-base font-bold text-slate-900 dark:text-white mt-3">
                            {item.title}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                            {item.desc}
                          </p>
                        </div>

                        {/* Visual asset placeholder card representation */}
                        <div className="mt-6 w-full h-36 bg-slate-100 dark:bg-slate-950 border border-slate-200/30 dark:border-slate-850 rounded-xl relative overflow-hidden flex flex-col justify-center items-center text-[10px] text-slate-500 font-mono">
                          {selectedProject.category === "Brand Design" ? (
                            <div className="w-16 h-16 rounded-full border-4 border-dashed border-slate-350 dark:border-slate-800 flex items-center justify-center text-center animate-spin-slow">
                              [ {item.type[0]}{item.type[1]} ]
                            </div>
                          ) : (
                            <div className="w-[80%] h-16 border-2 border-dashed border-slate-350 dark:border-slate-800 flex items-center justify-center bg-blue-600/5 rounded">
                              [ Shader: Brushed Aluminum ]
                            </div>
                          )}
                          <span className="mt-3 text-[8px] text-slate-400 uppercase">Visual Asset Rendering</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="border-slate-200/40 dark:border-slate-800/40" />

                  {/* Impact Summary */}
                  <div className="space-y-4">
                    <h4 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      Outcome & Business Impact
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedProject.caseStudy.outcome}
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/50 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 text-xs font-semibold rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 transition-opacity cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
