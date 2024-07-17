import Navbar from "./components/Navbar.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Hero from "./components/Hero.tsx";
import { useRef } from "react";

export default function App() {
  const tabContactRef = useRef<HTMLDivElement | null>(null);
  const tabSkillsRef = useRef<HTMLDivElement | null>(null);
  const tabProjectsRef = useRef<HTMLDivElement | null>(null);
  const tabAboutRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Navbar
        tabContactRef={tabContactRef}
        tabAboutRef={tabAboutRef}
        tabSkillsRef={tabSkillsRef}
        tabProjectsRef={tabProjectsRef}
      />
      <Hero />
      <About tabAboutRef={tabAboutRef} />
      <Skills tabSkillsRef={tabSkillsRef} />
      <Projects tabProjectsRef={tabProjectsRef} />
      <Contact tabContactRef={tabContactRef} />
    </>
  );
}
