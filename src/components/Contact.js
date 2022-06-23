import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { githubLogo } from "../../static/tech-logos"
import { useState } from "react"

const Contact = () => {
  const [sent, setSent] = useState(false)

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_jmyk20c",
        "template_1e2d949",
        form.current,
        "S5ybjaYXpP2uBS91R"
      )
      .then(
        result => {
          setSent(true)
          setTimeout(() => {
            setSent(false)
          }, 5000)
        },
        error => {
          console.log(error.text)
        }
      )

    form.current.reset()
  }

  return (
    <section
      id="contact"
      className="container pb-10 mt-64 flex justify-between items-center px-8 md:px-14 lg:px-24 w-full"
    >
      <div className="w-full">
        <h2 className="secondary-title">Contact</h2>
        <p class="text-secondary my-6 w-full max-w-3xl">
          Feel free to to contact me at any time, through a method below.
        </p>

        <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-10">
          <form ref={form} onSubmit={sendEmail} class="space-y-12">
            <div>
              <label class="text-white block mb-6 text-xl font-bold">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                class="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                class="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold">
                Message
              </label>
              <textarea
                name="message"
                class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
              />
            </div>

            <div
              className={
                sent ? "px-6 py-2 text-white font-bold bg-green-600" : "hidden"
              }
            >
              Inquiry Sent!
            </div>

            <button
              class={
                sent ? "hidden" : "px-6 py-2 bg-theme text-white font-bold"
              }
            >
              Send
            </button>
          </form>

          <div class="mt-12">
            <p class="text-secondary text-xl">647-989-1997</p>
            <a
              href="mailto:alex.gillespie@live.com"
              class="text-secondary text-xl underline mt-3 block"
            >
              alex.gillespie@live.com
            </a>

            <div class="h-42 flex mt-20 space-x-6">
              <a href="#">
                <img src={<resumeIcon />} alt="" />
              </a>
              <a
                href="https://github.com/alexgill97"
                target="_blank"
                rel="noopener noreferrer"
              >
                <a class="px-8 py-4 bg-black text-white font-bold mt-3 flex items-center space-x-3">
                  <div>
                    <img src={githubLogo} />
                  </div>
                  <span>Github</span>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
