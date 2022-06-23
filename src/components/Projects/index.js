import React from "react"
import Project from "./Project"

const Projects = ({ projectData }) => {
  return (
    <div id="projects" className="px-8 md:px-14 lg:px-24 w-full">
      <div className="mb-5 secondary-title">Projects</div>
      <div className="flex flex-col ">
        <Project project={projectData.project1} />
        <Project project={projectData.project2} />
        <Project project={projectData.project3} />
        <Project project={projectData.project4} />
      </div>
    </div>
  )
}

export default Projects
