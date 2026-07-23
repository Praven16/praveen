import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium sticky navigation header */}
      <Navbar />

      {/* Main interactive landing page layout */}
      <main className="flex-grow">
        
        {/* Section 1: Hero introduction, floating visuals, stats, and core services */}
        <Hero />

        {/* Section 2: Filterable Selected Works & High fidelity case studies */}
        <Work />

        {/* Section 3: Professional Bio, skill grids, experiences, education, and credentials */}
        <About />

        {/* Section 4: Contact methods and connection intake form */}
        <Contact />

      </main>

      {/* Footer layout containing navigation shortcuts and floating controls */}
      <Footer />
    </div>
  );
}
