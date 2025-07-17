import { useState } from "react";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectMain from "./components/projectsSection/ProjectMain";
import ContactMain from "./components/contactSection/ContactMain";
import FooterMain from "./components/footer/FooterMain";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  return (
    <main className="font-body pt-2">
      <NavbarMain setCurrentSection={setCurrentSection} />
      {currentSection === "home" && (
        <>
          <HeroMain />
          <HeroGradient />
          <div className="hidden lg:block">
            <SubHeroSection />
          </div>
        </>
      )}
      {currentSection === "about" && <AboutMeMain />}
      {currentSection === "skills" && (
        <>
          <SkillsMain />
          <SubSkills />
        </>
      )}
      {currentSection === "experience" && <ExperienceMain />}
      {currentSection === "projects" && <ProjectMain />}
      {currentSection === "contact" && <ContactMain />}
      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;
