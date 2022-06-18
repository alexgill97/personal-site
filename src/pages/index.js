import React from "react"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import About from "../components/About"

import skillsData from "../data/skills"
import projectData from "../data/projects"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="h-screen w-screen overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Skills skillsData={skillsData} />
      <Projects projectData={projectData} />
      <About />
      <Contact />
    </div>
  )
}
