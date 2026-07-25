import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Fixed Full Screen 3D Background */}
      <Background3D />

      {/* Premium sticky navigation header */}
      <Navbar />

      {/* Main interactive landing page layout */}
      <main className="flex-grow relative z-10 pointer-events-none">
        {/* We enable pointer-events on sections inside main so links are clickable */}
        <div className="pointer-events-auto">
          <Hero />
          <Work />
          <About />
          <Contact />
        </div>
      </main>

      {/* Footer layout containing navigation shortcuts and floating controls */}
      <Footer />
    </div>
  );
}
