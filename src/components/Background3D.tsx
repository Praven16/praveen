"use client";

import dynamic from "next/dynamic";

const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/5 dark:bg-slate-100/5 backdrop-blur-xs rounded-3xl">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-xs text-slate-500 font-mono">Loading 3D Visualizer...</p>
    </div>
  )
});

export default function Background3D() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <ThreeCanvas modelPath="/model.glb" isBackground={true} />
      {/* Readability masking gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/92 via-slate-50/60 to-transparent dark:from-slate-950/95 dark:via-slate-950/65 dark:to-transparent z-0" />
    </div>
  );
}
