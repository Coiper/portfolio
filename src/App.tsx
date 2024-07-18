import Navbar from "./components/Navbar.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Hero from "./components/Hero.tsx";
import React, { useRef } from "react";

export default function App() {
  const tabContactRef = useRef<HTMLDivElement>(null);
  const tabSkillsRef = useRef<HTMLDivElement>(null);
  const tabProjectsRef = useRef<HTMLDivElement>(null);
  const tabAboutRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Navbar
        tabContactRef={tabContactRef as React.RefObject<HTMLDivElement>}
        tabAboutRef={tabAboutRef as React.RefObject<HTMLDivElement>}
        tabSkillsRef={tabSkillsRef as React.RefObject<HTMLDivElement>}
        tabProjectsRef={tabProjectsRef as React.RefObject<HTMLDivElement>}
      />
      <Hero />
      <About tabAboutRef={tabAboutRef as React.RefObject<HTMLDivElement>} />
      <Skills tabSkillsRef={tabSkillsRef as React.RefObject<HTMLDivElement>} />
      <Projects
        tabProjectsRef={tabProjectsRef as React.RefObject<HTMLDivElement>}
      />
      <Contact
        tabContactRef={tabContactRef as React.RefObject<HTMLDivElement>}
      />
    </>
  );
}
