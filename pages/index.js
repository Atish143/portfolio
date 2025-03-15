"use client"; // Ensures client-side rendering for animations & hooks

import React from "react";
import Header from "../public/component/Header";
import Hero from "../public/component/Hero";
import About from "../public/component/About";
import WorkExperience from "../public/component/WorkExperience";
import Education from "../public/component/Education";
import Projects from "../public/component/Projects";
import Contact from "../public/component/Contact";
import Skills from "../public/component/Skills"

export default function Home() {
  return (
    <div  style={{}}>
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
