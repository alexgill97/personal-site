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
  stripeLogo,
  mochaLogo,
  chaiLogo,
  githubLogo,
} from "../../static/tech-logos"

import project1 from "../../static/project-screenshots/index"

const projectData = {
  project1: {
    title: "Content Connector",
    description:
      "A streamlined content production solution connecting businesses with local digital media creators. As a business, create an ",
    features: [],
    images: project1,
    link: "https://github.com/alexgill97/Content-Connector",
    technologies: [
      ["NextJS", nextLogo],
      ["Firebase", firebaseLogo],
      ["SASS", sassLogo],
      ["MapBox", sassLogo],
    ],
  },
  project2: {
    title: "Interview Scheduler",
    description:
      "A real time scheduling with an emphasis on test-driven development. ",
    features: [],
    images: [],
    githubLink: "",
    visitLink: "",
    technologies: [
      ["React", reactLogo],
      ["SASS", sassLogo],
      ["Axios"],
      ["PostgreSQL", postgresqlLogo],
      ["Jest", jestLogo],
      ["Storybook"],
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
      ["Google Maps API"],
    ],
  },
  project4: {
    title: "Jungle",
    description: "Full stack ecommerce site",
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
