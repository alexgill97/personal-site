import React from "react"

const ProjectLarge = ({ title, description, image, link, focus }) => {
  return (
    <section className="container h-3/4">
      <div className="">
        <img className="object-cover" src={image} alt="" />
      </div>
      <div className="">
        <div>{title}</div>
        <div>
          <button>{`</> code`}</button>
        </div>
      </div>
    </section>
  )
}

export default ProjectLarge
