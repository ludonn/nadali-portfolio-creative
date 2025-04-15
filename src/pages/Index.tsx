
import { useState, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ExpandableSection from "@/components/ExpandableSection";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const InterestsSection = lazy(() => import("@/components/InterestsSection"));

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
            title="About"
            isActive={activeSection === "about"}
            onToggle={() => setActiveSection(activeSection === "about" ? null : "about")}
          >
            <Suspense fallback={<LoadingSpinner className="py-12" />}>
              <AboutSection />
            </Suspense>
          </ExpandableSection>
          
          <ExpandableSection 
            id="projects"
            title="Projects"
            isActive={activeSection === "projects"}
            onToggle={() => setActiveSection(activeSection === "projects" ? null : "projects")}
          >
            <Suspense fallback={<LoadingSpinner className="py-12" />}>
              <ProjectsSection />
            </Suspense>
          </ExpandableSection>
          
          <ExpandableSection 
            id="interests"
            title="What I'm interested in"
            isActive={activeSection === "interests"}
            onToggle={() => setActiveSection(activeSection === "interests" ? null : "interests")}
          >
            <Suspense fallback={<LoadingSpinner className="py-12" />}>
              <InterestsSection />
            </Suspense>
          </ExpandableSection>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
