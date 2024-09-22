import { universityLivingLogo ,Waycool} from "../assets/images";
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
    title: "Senior Software Engineer",
    company_name: "University Living",
    icon: universityLivingLogo,
    iconBg: "#FFFFFF",
    date: "Jul 2024 - Present",
    points: [
      "Developed and maintained REST APIs using Node.js and MongoDB for efficient data retrieval and manipulation.",
      "Integrated the Airwallex payment gateway into the University Living website, significantly reducing transaction costs from 2% to 0.5%.",
      "Implemented Zoho CRM system for a sales team of 20+ members, leading to a 30% increase in lead conversion rates.",
      "Designed and developed Redis solutions for efficient caching and real-time data processing.",
      "Implemented CleverTap integration to streamline customer engagement and retention strategies",
      "Integrated multiple payment gateways including Airwallex, Razorpay, and Stripe, ensuring secure and seamless transactions within web applications.",
      "Played a key role in developing and maintaining the Management Information System (MIS) portal, providing stakeholders with real-time insights and analytics to support data-driven decision-making.",
      "Developed and maintained GraphQL APIs to optimize data fetching."
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "University Living",
    icon: universityLivingLogo,
    iconBg: "#FFFFFF",
    date: "Sep 2022 - Jul 2024",
    points: [
      "Developed and maintained dynamic web applications using React.js and a variety of complementary technologies, ensuring optimal performance and user experience.",
      "Successfully migrated the entire University Living website from ReactJS to NextJS, enhancing site speed, SEO capabilities, and overall performance.",
      "Led the development and maintenance of critical internal portals such as LMS, CMS, and MIS, ensuring seamless operations and user accessibility.",
      "Architected and implemented APIs for multiple projects using Node.js, playing a key role in shaping the backend infrastructure of University Living.",
      "Actively participated in code reviews, offering insightful and constructive feedback to enhance the quality and efficiency of the development team’s output.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Waycool Food And Products",
    icon: Waycool,
    iconBg: "#FFFFFF",
    date: "July 2021 - Sep 2022",
    points: [
      "Developed and implemented OTP-based authorization and JWT token management for secure user authentication.",
      "Integrated PAN and GST validation using Cashfree third-party APIs to ensure compliance and data accuracy.",
      "Managed cron scheduling for automated processes across all onboarded customers, improving operational efficiency.",
      "Integrated Credit Vidya and EpayLater for efficient loan management solutions for farmers and distributors.",
      "Actively participated in code reviews, offering insightful and constructive feedback to enhance the quality and efficiency of the development team’s output.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/rishabh-gupta-au13",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/rishabh-gupta-b2835a1a6/",
  },
];

export const projects = [
  // {
  //   icon: "IoChatboxEllipsesOutline",
  //   theme: "btn-back-red",
  //   name: "Chat Pdf AI",
  //   description:
  //     "Create a personalized chatbot using your PDF as context! Built with Next.js, Pinecone, and Google Gemini, this web app transforms your document into an interactive, AI-powered chat assistant, making it easy to retrieve and engage with the content of your PDF.",
  //   githubLink: "https://github.com/JaiSharma1710/chat_pdf",
  //   link: "https://chatpdf.jaisharma.co.in/",
  // },
];
