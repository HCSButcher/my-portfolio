import Section from "./Section";
import {
  FaHtml5,
  FaGithub,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { Tabs, TabsContent } from "./ui/tabs";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiReact,
  SiNestjs,
  SiTypescript,
  SiExpo,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { ScrollArea } from "./ui/scroll-area";
import { TooltipTrigger } from "./ui/tooltip";
const skills = [
  {
    icon: <SiNextdotjs />,
    name: "next.js",
  },
  {
    icon: <SiNestjs />,
    name: "Nest.js",
  },
  {
    icon: <SiReact />,
    name: "react.js",
  },
  {
    icon: <SiTypescript />,
    name: "Typescript",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    icon: <SiTailwindcss />,
    name: "tailwindCss",
  },
  {
    icon: <SiExpress />,
    name: "express",
  },
  {
    icon: <SiMongodb />,
    name: "mongoDb",
  },
  {
    icon: <SiMysql />,
    name: "Mysql",
  },
  {
    icon: <FaHtml5 />,
    name: "html 5",
  },
  {
    icon: <FaCss3 />,
    name: "css 3",
  },
  {
    icon: <FaJs />,
    name: "javascript",
  },
  {
    icon: <FaGithub />,
    name: "Github",
  },
  {
    icon: <FaFigma />,
    name: "figma",
  },

  {
    icon: <SiExpo />,
    name: "expo",
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-5xl  mx-auto">
        <h2 className="text-3xl mt-10 mb-2 font-bold text-center ">Skills</h2>
        <div className="h-[300px] mt-3 mx-4 xl:h-screen overflow-auto ">
          <ul className=" mx-4 mt-3 gap-4 xl:grid-cols-5  grid grid-cols-3 ">
            {skills.map((skill, index) => {
              return (
                <li
                  className=" flex rounded-xl flex-col items-center bg-[#232329] hover:bg-[#00ff99] hover:text-[#232329] cursor-pointer  h-[80px] w-[120] text-[#00ff99] "
                  key={index}
                >
                  <span className=" mt-4 text-xl">{skill.icon} </span>
                  <span className="capitalize"> {skill.name} </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
