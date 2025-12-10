import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import Background from "./Background";
import Footer from "./Footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen w-full font-sans relative overflow-hidden transition-all duration-700 bg-gradient-to-b from-black via-gray-900 to-black">
      <Background />
      <NavBar activeSection={activeSection}/>
      <div className="pt-24">
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
