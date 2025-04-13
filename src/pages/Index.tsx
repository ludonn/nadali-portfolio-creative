
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ExpandableSection from "@/components/ExpandableSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import InterestsSection from "@/components/InterestsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-8">
          <ExpandableSection 
            id="about"
            title="Chi Sono"
            isActive={activeSection === "about"}
            onToggle={() => setActiveSection(activeSection === "about" ? null : "about")}
          >
            <AboutSection />
          </ExpandableSection>
          
          <ExpandableSection 
            id="projects"
            title="Progetti"
            isActive={activeSection === "projects"}
            onToggle={() => setActiveSection(activeSection === "projects" ? null : "projects")}
          >
            <ProjectsSection />
          </ExpandableSection>
          
          <ExpandableSection 
            id="interests"
            title="Interessi"
            isActive={activeSection === "interests"}
            onToggle={() => setActiveSection(activeSection === "interests" ? null : "interests")}
          >
            <InterestsSection />
          </ExpandableSection>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
