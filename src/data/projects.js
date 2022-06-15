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
  githubLogo,
} from "../../static/tech-logos"

import project1 from "../../static/project-screenshots/index"

const projectData = {
  project1: {
    title: "Content Connector",
    description:
      "A streamlined content production solution connecting businesses with local digital media creators. As a business, create a post outlining project details such as budget, description and media type. Posts are displayed as pins on a map for creators to apply to. Creators upload previous work into their viewable porfolios as well as pricing and experience info ",
    features: [
      "Geo location user matching",
      "Realtime messaging",
      "SEO performant user pages",
      "Mapbox",
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
      "A real time scheduling utility with an emphasis on test-driven development. Unit testing written using Jest and Storybook as well as end-to-end testing utilizing Cypress. The application allows users to book/edit/cancel/delete interviews",
    features: ["End-to-end testing"],
    images: [],
    githubLink: "",
    visitLink: "",
    technologies: [
      ["React", reactLogo],
      ["SASS", sassLogo],
      ["PostgreSQL", postgresqlLogo],
      ["Jest", jestLogo],
      ["Storybook", storybookLogo],
      ["Cypress", cypressLogo],
    ],
  },
  project3: {
    title: "Map Wiki",
    description: `Collaborative map application displaying "points" based on particular commonalities. Visitors can explore collections, and you may register to create your own maps, share your contributions into other maps, and create a list of favourite maps.`,
    features: [
      "Single-Page-Application behaviour",
      "Authenticated users can create and modify maps",
      "each point contains: a title, description",
      "Users can favourite a desired map for future reference",
    ],
    images: [],
    githubLink: "",
    visitLink: "",
    technologies: [
      ["EJS"],
      ["SASS", sassLogo],
      ["Express", expressLogo],
      ["PostgreSQL", postgresqlLogo],
      ["Google Maps API", googlemapsLogo],
    ],
  },
  project4: {
    title: "Jungle",
    description:
      "Full stack ecommerce site with user access levels and stripe payment integration",
    features: [],
    images: [],
    githubLink: "",
    visitLink: "",
    technologies: [
      ["Ruby", rubyLogo],
      ["PostgreSQL", postgresqlLogo],
      ["Stripe", stripeLogo],
    ],
  },
}

export default projectData
