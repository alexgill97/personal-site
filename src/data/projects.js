import {
  htmlLogo,
  cssLogo,
  javascriptLogo,
  reactLogo,
  nextLogo,
  gatsbyLogo,
  tailwindLogo,
  sassLogo,
  jqueryLogo,
  firebaseLogo,
  postgresqlLogo,
  rubyLogo,
  expressLogo,
  nodeLogo,
  puppeteerLogo,
  cypressLogo,
  jestLogo,
  gitLogo,
  googlemapsLogo,
  mapboxLogo,
  stripeLogo,
  storybookLogo,
  mochaLogo,
  chaiLogo,
  rspecLogo,
  githubLogo,
  railsLogo,
} from "../../static/tech-logos"

import {
  project1,
  project2,
  project3,
  project4,
} from "../../static/project-screenshots/index"

const projectData = {
  project1: {
    title: "Content Connector",
    description:
      "A streamlined content production solution connecting businesses with local digital media creators. Businesses create a post outlining project details which is displayed as pins on a map which creators apply to. Creators upload previous work samples into viewable porfolios as well as pricing and experience inform",
    features: [
      "Geo location user matching",
      "Realtime messaging",
      "SEO performant user pages",
      "Interactive mapbox data display",
    ],
    images: project1,
    link: "https://github.com/alexgill97/Content-Connector",
    technologies: [
      ["NextJS", nextLogo],
      ["Firebase", firebaseLogo],
      ["SASS", sassLogo],
      ["MapBox", mapboxLogo],
    ],
  },
  project2: {
    title: "Interview Scheduler",
    description:
      "A real time scheduling utility with emphasis on test-driven development. Unit testing written using Jest and Storybook as well as end-to-end testing utilizing Cypress. The application allows users to book/edit/cancel/delete interviews",
    features: [
      "Cypress end-to-end user experience testing",
      "Jest and Storybook unit testing",
      "Single-page-application behaviour",
    ],
    images: project2,
    githubLink: "",
    visitLink: "",
    technologies: [
      ["React", reactLogo],
      ["SASS", sassLogo],

      ["Jest", jestLogo],
      ["Storybook", storybookLogo],
      ["Cypress", cypressLogo],
    ],
  },
  project3: {
    title: "Map Wiki",
    description: `Collaborative map application displaying "points" based on particular commonalities. Visitors can explore collections, and you may register to create your own maps, share your contributions into other maps, and create a list of favourite maps.`,
    features: [
      "Single-page-application behaviour",
      "Authenticated users can create and modify maps",
      "Users can favourite a desired map for future reference",
    ],
    images: project3,
    githubLink: "",
    visitLink: "",
    technologies: [
      ["SASS", sassLogo],
      ["Express", expressLogo],
      ["PostgreSQL", postgresqlLogo],
      ["Google Maps", googlemapsLogo],
    ],
  },
  project4: {
    title: "Jungle",
    description:
      "Full stack ecommerce site with user access levels and stripe payment integration",
    features: [
      "Stripe credit card payment integration",
      "Multi-level user authentication",
      "RSpec unit testing",
    ],
    images: project4,
    githubLink: "",
    visitLink: "",
    technologies: [
      ["PostgreSQL", postgresqlLogo],
      ["Rails", railsLogo],
      ["Stripe", stripeLogo],
      ["RSpec", rspecLogo],
    ],
  },
}

export default projectData
