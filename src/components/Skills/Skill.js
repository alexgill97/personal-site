import React from "react"

const displaySkills = skillsArr =>
  skillsArr.map(skill => <img className="h-10" src={skill} alt="" />)

const Skill = ({ skillsArr }) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h4 className="">Front End</h4>
      <div className="grid grid-cols-3">{displaySkills(skillsArr)}</div>
    </div>
  )
}

export default Skill
