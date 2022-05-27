import React from "react"
import tailwind from "../../static/tech-logos/tailwind.svg"
import {
  htmlLogo,
  cssLogo,
  javascriptLogo,
  reactLogo,
  nextLogo,
  gatsbyLogo,
  tailwindLogo,
  sassLogo,
  jqueryLogo,
} from "../../static/index"

const Skills = () => {
  return (
    <section className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <div className="w-full">
        <h2 className="secondary-title">Skills</h2>
        <p class="text-secondary my-6 w-full max-w-3xl">
          Languages and technologies I have utilized throughout my developer
          journey.
        </p>

        <div className="container mt-12 grid grid-cols-3 divide-x divide-opacity-50">
          <div className="flex flex-col items-center ">
            <h4 className="">Front End</h4>
            <div className="grid grid-cols-3">
              <img src={htmlLogo} alt="" />
              <img src={javascriptLogo} alt="" />
              <img src={cssLogo} alt="" />
              <img src={gatsbyLogo} alt="" />
              <img src={tailwindLogo} alt="" />
              <img src={sassLogo} alt="" />
              <img src={htmlLogo} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h4>Back End</h4>
          </div>
          <div>
            <h4 className="flex justify-center items-center">Tools</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
