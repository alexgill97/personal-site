import React from "react"

const ProjectLarge = ({ title, description, image, link, focus }) => {
  return (
    <section className="container grid grid-cols-2 border p-5">
      {/* Right Section */}
      <div className="w-full">Info</div>

      {/* Left Section */}
      <div className="bg-input">
        <div className="">
          <img className="object-cover" src={image} alt="" />
        </div>
        <div className="">
          <div>{title}</div>
          <div>{description}</div>
          <div>
            <button>{`</> code`}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectLarge
