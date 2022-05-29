import React from "react"
import Skill from "./Skill"
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
  firebaseLogo,
  postgresqlLogo,
  rubyLogo,
  expressLogo,
  nodeLogo,
  puppeteerLogo,
  cypressLogo,
  jestLogo,
  gitLogo,
  stripeLogo,
  mochaLogo,
  chaiLogo,
} from "../../../static/index"

const frontEndSkills = [
  ["HTML", htmlLogo],
  ["CSS", cssLogo],
  ["Javascript", javascriptLogo],
  ["NextJS", nextLogo],
  ["React", reactLogo],
  ["Gatsby", gatsbyLogo],
  ["Tailwind", tailwindLogo],
  ["SASS", sassLogo],
  ["jQuery", jqueryLogo],
]

const backEndSkills = [
  ["Firebase", firebaseLogo],
  ["NodeJS", nodeLogo],
  ["Ruby", rubyLogo],
  ["PostgreSQL", postgresqlLogo],
  ["Express", expressLogo],
  ["Puppeteer", puppeteerLogo],
]
const utilitiesSkills = [
  ["Git", gitLogo],
  ["Cypress", cypressLogo],
  ["Jest", jestLogo],
  ["Docker", javascriptLogo],
  ["Stripe", stripeLogo],
  ["Mocha", mochaLogo],
  ["Chai", chaiLogo],
]

const Skills = () => {
  return (
    <section className="container md:h-screen flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <div className="w-full">
        <h2 className="secondary-title">Skills</h2>
        <p class="text-secondary my-6 w-full max-w-3xl">
          Languages and technologies I have utilized throughout my developer
          journey.
        </p>

        <div className="container mt-12 md:grid grid-cols-3 divide-x divide-opacity-50">
          <Skill skillTitle={"Front End"} skillsArr={frontEndSkills} />
          <Skill skillTitle={"Back End"} skillsArr={backEndSkills} />
          <Skill skillTitle={"Utilities"} skillsArr={utilitiesSkills} />
        </div>
      </div>
    </section>
  )
}

export default Skills
