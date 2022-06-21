import React from "react"
import Slider from "../Slider"

const Project = ({ project }) => {
  return (
    <section className="container flex flex-col md:flex-row min-h-fit h-full border overflow-contain p-5 my-4">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-fit mb-16 md:mr-6 md:mb-0">
        <h4 className="text-sm text-slate-400 mb-4">Info</h4>
        <div className="h-3/4">
          <h5 className="text-lg mb-2">Key Features:</h5>
          <ul className="divide-y divide-slate-200/25 px-5 text-sm">
            {project.features.map(feature => (
              <li className="py-2 text-slate-200">{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3">
          <h5>Technologies Used:</h5>
          <div className=" md:mt-5 h-20 grid grid-cols-3 lg:grid-cols-4 ">
            {project.technologies.map(technology => (
              <div
                key={technology[0]}
                className="h-20 md:44 flex flex-col align-center justify-center"
              >
                <img className="h-1/2 mb-1" src={technology[1]} />
                <p className="text-center ">{technology[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-badge w-full lg:w-3/4 h-full">
        <div className="w-full h-80">
          <Slider images={project.images} />
        </div>
        <div className="h-1/2 p-5 flex flex-col items-center content-center justify-center justify-items-center	">
          <div className="text-lg mb-2">{project.title}</div>
          <div className="text-sm text-slate-300 text-center">
            {project.description}
          </div>
          <div className="flex justify-around mt-4">
            <button className="px-2 py-1 mr-3 border text-white font-bold flex items-center space-x-3">
              <a href={project.link} target="_blank">{`</> Code`}</a>
            </button>
            {/* <button className="ml-3">{`Visit`}</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
