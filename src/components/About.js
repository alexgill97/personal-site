import React from "react"

const About = () => {
  return (
    <section className="container px-8 mt-36 md:px-14 lg:px-24 w-full">
      <div className="w-full">
        <h2 className="secondary-title">About</h2>
        <div className="mt-10 flex flex-col space-y-6">
          <p className="tracking-wide leading-relaxed">
            After being tasked with a programming project in my professional
            life, it would launch me into a pursuit that has you reading my
            personal website today! My previous work in digital media and
            marketing made the dynamic and challenging environment posed by web
            development feel natural.
          </p>
          <p>
            Alongside an incalculable amount of hours of self-learning, I
            completed an immersive web development program with Lighthouse Labs
            and am confident in my ability to contribute to valuable products.
          </p>

          <div className="mt-5 place-self-end flex flex-col align-middle ">
            <h5>Resume</h5>
            <div>
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
