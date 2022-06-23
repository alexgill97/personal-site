import React from "react"
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav className=" flex flex-nowrap justify-between items-center mx-auto px-8 py-5 md:px-24 lg:px-24 w-full z-10">
      <div>
        <div className="text-3xl font-bold">Alex Gillespie</div>
      </div>
      <div className="md:flex space-x-12 items-center text-lg z-10">
        <Link
          className="cursor-pointer"
          to="about"
          offset={-20}
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>

        <Link
          className="cursor-pointer"
          to="skills"
          offset={-20}
          spy={true}
          smooth={true}
          duration={500}
        >
          Skills
        </Link>

        <Link
          className="cursor-pointer"
          to="projects"
          offset={-20}
          spy={true}
          smooth={true}
          duration={500}
        >
          Projects
        </Link>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <button className="px-6 py-2 bg-blue-700 font-bold">
            <span>Contact</span>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
