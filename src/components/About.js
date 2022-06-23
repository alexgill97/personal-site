import React from "react"
import resumePDF from "../documents/Resume.pdf"

const About = () => {
  return (
    <div id="about" className="container px-8 mt-36 md:px-14 lg:px-24 w-full">
      <div className="w-full">
        <h2 className="secondary-title">About</h2>
        <div className="mt-10 flex flex-col space-y-6 text-slate-300">
          <p className="tracking-wide leading-relaxed">
            After being tasked with a programming project in my professional
            life, it launched me into the pursuit that has you reading my
            personal website today! My previous experience in digital media
            constantly pushed me to generate innovative solutions to
            ever-changing needs and provided a strong mental foundation for the
            world of web development. A serial self-starter and bonafide
            internet kid; the acquisition of knowledge and execution of ideas is
            a familiar process for me.
          </p>
          <p className="tracking-wide leading-relaxed">
            As a person, I'm quietly confident, inherently curious, and
            dedicated to a growth-centric mindset. When I'm not at my computer,
            you might find me: weaving through streets with a camera in hand,
            sweating it out with friends and strangers at a jiu-jitsu gym, or
            watching my favorite basketball team the Toronto Raptors.
          </p>
          <p>
            Alongside an incalculable number of hours of self-learning, I
            completed an immersive web development program with Lighthouse Labs
            and am confident in my ability to contribute to valuable products.
          </p>

          <div className="mt-5 place-self-end flex flex-col text-right">
            <a
              href={resumePDF}
              target="_blank"
              className="px-4 py-2 text-lg text-white bg-badge mr-8"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
