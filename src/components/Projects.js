import React from "react"
import Project from "./Project"
import MapImage from "../../static/map.png"

const Projects = () => {
  return (
    <div className="px-40 ">
      <div className="mb-5 secondary-title">Projects</div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="col-span-2">
          <Project image={MapImage} title={1} />
        </div>
        <div className="border-2 border-rose-600 ">
          <Project image={MapImage} title={2} />
        </div>
        <div className="border-2 border-rose-600">
          <Project image={MapImage} title={3} />
        </div>
        <div className="col-span-2">
          <Project image={MapImage} title={4} />
        </div>
      </div>
      <div className="flex justify-end">
        <a
          href="https://github.com/alexgill97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="px-8 py-4 bg-black text-white font-bold mt-12 flex items-center space-x-3">
            <div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                  fill="white"
                />
                <path
                  d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                  fill="white"
                />
              </svg>
            </div>
            <span>Github</span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Projects
