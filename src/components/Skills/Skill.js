import React from "react"

const displaySkills = skillsArr =>
  skillsArr.map(skill => (
    <div className="flex flex-col items-center  xl:h-30 select-none  w-20">
      <img className="h-full w-full " src={skill[1]} alt={skill[0]} />
      <h5 className="mt-2">{skill[0]}</h5>
    </div>
  ))

const Skill = ({ skillTitle, skillsArr }) => {
  return (
    <div className="flex flex-col items-center p-6 ">
      <h4 className="">{skillTitle}</h4>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-10 mt-6 content-center">
        {displaySkills(skillsArr)}
      </div>
    </div>
  )
}

export default Skill
