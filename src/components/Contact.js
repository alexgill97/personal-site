import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
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
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    console.log(form)
    form.current.reset()
  }

  return (
    <section className="container mt-16 max-h-screen flex justify-between items-center mx-auto p-8 md:px-14 lg:px-24 w-full">
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
            <button class="px-6 py-2 bg-theme text-white font-bold">
              Send it!
            </button>
          </form>

          <div class="mt-12">
            <p class="text-secondary">647-989-1997</p>
            <a
              href="mailto:alex.gillespie@live.com"
              class="text-secondary underline mt-3 block"
            >
              alex.gillespie@live.com
            </a>

            <div class="flex mt-20 space-x-6">
              <a href="#">
                <resumeIcon />
              </a>
              <a
                href="https://github.com/alexgill97"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="px-8 py-4 bg-black text-white font-bold mt-3 flex items-center space-x-3">
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
              <a href="#">
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
