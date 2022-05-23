import React from "react"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto px-8 py-5 md:px-24 lg:px-24 w-full">
      <section>
        <div className="text-5xl font-bold">Alex Gillespie</div>
      </section>
      <section className="hidden md:flex space-x-12 items-center">
        <a href="#work">My Work</a>

        <a href="#resume">Resume</a>

        <a href="#message">
          <button className="px-6 py-2 bg-blue-700 font-bold">Connect</button>
        </a>
      </section>
    </nav>
  )
}

export default Navbar
