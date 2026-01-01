import Section from "./Section";
import {
  FaHtml5,
  FaGithub,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiExpress,
  SiReact,
  SiNestjs,
  SiTypescript,
  SiExpo,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { icon: <SiNextdotjs />, name: "next.js" },
  { icon: <SiNestjs />, name: "Nest.js" },
  { icon: <SiReact />, name: "react.js" },
  { icon: <SiTypescript />, name: "Typescript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiTailwindcss />, name: "tailwindCss" },
  { icon: <SiExpress />, name: "express" },
  { icon: <SiMongodb />, name: "mongoDb" },
  { icon: <SiPostgresql />, name: "postgresql" },
  { icon: <SiPrisma />, name: "prisma" },
  { icon: <SiMysql />, name: "Mysql" },
  { icon: <FaHtml5 />, name: "html 5" },
  { icon: <FaCss3 />, name: "css 3" },
  { icon: <FaJs />, name: "javascript" },
  { icon: <FaGithub />, name: "Github" },
  { icon: <FaFigma />, name: "figma" },
  { icon: <SiExpo />, name: "expo" },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl mt-10 mb-2 font-bold text-center">Skills</h2>

        <div className="h-[300px] mt-3 mx-4 xl:h-screen overflow-auto">
          <ul
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              xl:grid-cols-5
              gap-6
              mt-4
            "
          >
            {skills.map((skill, index) => (
              <li
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#232329]
                  hover:bg-[#00ff99]
                  hover:text-[#232329]
                  cursor-pointer
                  h-[100px]
                  w-full
                  text-[#00ff99]
                "
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="capitalize text-sm">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
