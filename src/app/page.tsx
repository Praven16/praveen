import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar */}
      <Navbar />

      {/* Main page content sections */}
      <main className="flex-grow">
        {/* Hero Landing */}
        <Hero />

        {/* Detailed Bio & Skills */}
        <About />

        {/* Portfolio Showcase Grid */}
        <Projects />

        {/* Career & Education Journey */}
        <Experience />

        {/* Connect Form Section */}
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
