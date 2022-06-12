import React from "react"
import Project from "./Project"
import MapImage from "../../../static/map.png"
import { nextLogo, firebaseLogo, sassLogo } from "../../../static/index"

const projectData = {
  title: "Content Connector",
  description:
    "A streamlined content solution connecting businesses with local digital media creators.",
  images: [MapImage, MapImage, MapImage, MapImage],
  link: "https://github.com/alexgill97/Content-Connector",
  technologies: [
    ["NextJS", nextLogo],
    ["Firebase", firebaseLogo],
    ["SASS", sassLogo],
  ],
}

const Projects = () => {
  return (
    <div className="px-8 md:px-14 lg:px-24 w-full">
      <div className="mb-5 secondary-title">Projects</div>
      <div className="flex flex-col ">
        <Project
          title={projectData.title}
          description={projectData.description}
          images={projectData.images}
          link={projectData.link}
          technologies={projectData.technologies}
        />
        <Project
          title={projectData.title}
          description={projectData.description}
          images={projectData.images}
          link={projectData.link}
          technologies={projectData.technologies}
        />
        <Project
          title={projectData.title}
          description={projectData.description}
          images={projectData.images}
          link={projectData.link}
          technologies={projectData.technologies}
        />
      </div>
    </div>
  )
}

export default Projects
