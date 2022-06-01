import React from "react"
import resumeIcon from "../../static/resume.svg"

const Contact = () => {
  return (
    <section className="container max-h-screen my-10 flex justify-between items-center mx-auto p-8 md:px-14 lg:px-24 w-full">
      <div className="w-full">
        <h2 className="secondary-title">Contact</h2>
        <p class="text-secondary my-6 w-full max-w-3xl">
          Feel free to to contact me any time, through any method below.
        </p>

        <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-10">
          <div class="space-y-12">
            <div>
              <label class="text-white block mb-6 text-xl font-bold">
                Name
              </label>
              <input class="w-full border border-input-border bg-input px-4 py-4" />
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                class="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label class="text-white block mb-6 text-xl font-bold">
                Message
              </label>
              <textarea
                type="email"
                class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
              ></textarea>
            </div>
            <button class="px-6 py-2 bg-theme text-white font-bold">
              Send it!
            </button>
          </div>

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
