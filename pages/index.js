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
    <div style={{width:'100%' , height:'100%'}}>
      <Header />
      <div style={{width:'100%' , height:'100%'}}>
      <Hero />
      </div>
      <div style={{width:'100%' , height:'100%'}}>
      <About />
      </div>
      <div style={{width:'100%' , height:'100%'}}>
      <WorkExperience />
      </div>
      <div style={{width:'100%' , height:'100%'}}>
      <Education />
      </div>
      <div style={{width:'100%' , height:'100%'}}>
      <Skills />
      </div>
      <div style={{width:'100%' , height:'100%'}}>
      <Projects />
      </div>
      <div style={{width:'100%' , height:'100%'}}>
      <Contact />
      </div>
    </div>
  );
}
