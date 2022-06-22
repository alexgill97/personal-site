import React from "react"
import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav className="flex flex-nowrap justify-between items-center mx-auto px-8 py-5 md:px-24 lg:px-24 w-full">
      <div>
        <div className="text-3xl font-bold">Alex Gillespie</div>
      </div>
      <div className="hidden md:flex space-x-12 items-center text-lg">
        <Link to="about" smooth="true">
          <a href="">About</a>
        </Link>
        <a href="#skills">Skills</a>
        <a href="#work">Projects</a>

        <a href="#message">
          <button className="px-6 py-2 bg-blue-700 font-bold">Contact</button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
