import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Typewriter } from "react-simple-typewriter";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Rishabh{" "}
        </span>
        👋
      </h1>

      <h2 className="subhead-text">
        A{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          <Typewriter
            words={[
              "Backend Developer",
              "Fullstack Developer",
              "Coding Professional",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </span>
      </h2>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Noida, India, specializing in Working with
          NodeJs, ReactJs, NextJs,MongoDB and MySql.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-8 md:gap-12">
          {skills.map((skill) => (
            <a
              target="_blank"
              href={skill.link}
              className="block-container w-20 h-20"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            With three years of hands-on experience in the MERN stack, I have
            developed a strong foundation in both front-end and back-end
            development. My expertise lies in building scalable web
            applications, with a particular focus on backend architecture, API
            development, and database management. Throughout my career, I've had
            the privilege to work alongside talented professionals, which has
            allowed me to continuously enhance my skills and stay updated with
            the latest industry trends. I'm passionate about solving complex
            problems and delivering high-quality software solutions that drive
            business success.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`${experience.company_name}_${index}`}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
