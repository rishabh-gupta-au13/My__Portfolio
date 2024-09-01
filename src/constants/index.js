import { universityLivingLogo } from "../assets/images";
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  shadcn,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
    link: "https://expressjs.com/",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    link: "https://git-scm.com/",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    link: "https://github.com/",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    link: "https://www.mongodb.com/",
  },
  {
    imageUrl: shadcn,
    name: "Shadcn",
    type: "Frontend",
    link: "https://ui.shadcn.com/",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
    link: "https://mui.com/material-ui/",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
    link: "https://nextjs.org/",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    link: "https://nodejs.org/en",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    link: "https://react.dev/",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
    link: "https://redux.js.org/",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
    link: "https://sass-lang.com/",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    link: "https://tailwindcss.com/",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
    link: "https://www.typescriptlang.org/",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "University Living",
    icon: universityLivingLogo,
    iconBg: "#FFFFFF",
    date: "Jul 2024 - Present",
    points: [
      "Developing a cutting-edge GenAI Bot for University Living using Vercel's latest Generative UI, enhancing user interaction and experience.",
      "Integrated the Airwallex payment gateway into the University Living website, significantly reducing transaction costs from 2% to 0.5%.",
      "Designed and implemented an Image Classification System using GenAI, reducing manual work by 95% and increasing operational efficiency.",
      "Migrated University Living's Roaster internal portal from vanilla JavaScript to Next.js App Router, improving performance and maintainability.",
      "Engineered the entire backend infrastructure for University Living's AI Chat Bot using Node.js, ensuring robust and scalable performance.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "University Living",
    icon: universityLivingLogo,
    iconBg: "#FFFFFF",
    date: "Jun 2022 - Jul 2024",
    points: [
      "Developed and maintained dynamic web applications using React.js and a variety of complementary technologies, ensuring optimal performance and user experience.",
      "Successfully migrated the entire University Living website from ReactJS to NextJS, enhancing site speed, SEO capabilities, and overall performance.",
      "Led the development and maintenance of critical internal portals such as LMS, CMS, and MIS, ensuring seamless operations and user accessibility.",
      "Architected and implemented APIs for multiple projects using Node.js, playing a key role in shaping the backend infrastructure of University Living.",
      "Actively participated in code reviews, offering insightful and constructive feedback to enhance the quality and efficiency of the development team’s output.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/JaiSharma1710",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/jaisharma1710",
  },
];

export const projects = [
  {
    icon: "IoChatboxEllipsesOutline",
    theme: "btn-back-red",
    name: "Chat Pdf AI",
    description:
      "Create a personalized chatbot using your PDF as context! Built with Next.js, Pinecone, and Google Gemini, this web app transforms your document into an interactive, AI-powered chat assistant, making it easy to retrieve and engage with the content of your PDF.",
    githubLink: "https://github.com/JaiSharma1710/chat_pdf",
    link: "https://chatpdf.jaisharma.co.in/",
  },
];
