import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import About from "@/components/sections/About";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import AmbientBackground from "@/components/visuals/AmbientBackground";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <TechnicalSkills />
        <Achievements />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
