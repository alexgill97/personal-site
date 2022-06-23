import React from "react"
import Skill from "./Skill"

const Skills = ({ skillsData }) => {
  return (
    <section
      id="skills"
      className="px-8 lg:h-screen mt-36 md:px-14 lg:px-24 w-full"
    >
      <div className="w-full">
        <h2 className="secondary-title">Skills</h2>
        <p class="text-secondary my-6 w-full max-w-3xl">
          Languages and technologies I have utilized throughout my developer
          journey.
        </p>

        <div className="container mt-12 grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x md:divide-opacity-50">
          <Skill
            skillTitle={"Front End"}
            skillsArr={skillsData.frontEndSkills}
          />
          <Skill skillTitle={"Back End"} skillsArr={skillsData.backEndSkills} />
          <Skill
            skillTitle={"Utilities"}
            skillsArr={skillsData.utilitiesSkills}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
