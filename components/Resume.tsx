"use client";
import Section from "./Section";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "./ui/tabs";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "These are but some of the projects I have been able to complete in order to better understand the various technologies I am proficient in ",
  items: [
    {
      project: " Hack it together",
      type: "Backend developer",
      description:
        "Currently volunteering in building a cyber security LMS as the backend developer  ",
    },
    {
      project: "Pixel Academy",
      type: "STEM Instructor",
      description:
        " Currently teaching students: \n -Robotics \n -IOT \n -Web Development ",
    },
    {
      project: "Kabarak University",
      type: "IT Support",
      description:
        "-Performed networking duties \n-Performed maintenance of network devices \n-Assisted in repair and maintenance of computer hardware and software ",
    },

    {
      project: "COURSE MATERIAL REPOSITORY",
      type: "Web app",
      description:
        "Full stack development (MERN stack). I used React.js as my frontend. Node.js,express as my backend and MongoDb as my database ",
    },
    {
      project: "Simple Live chat",
      type: "web app",
      description:
        " Full stack development of  A simple live chat app demonstrating use of web sockets. I used Nextjs for frontend, express as my backend and MongoDB as the database",
    },
    {
      project: "Smart Harvest",
      type: "Web App",
      description:
        "Full stack development.I used Nextjs for frontend, express as my backend and MongoDB as the database",
    },
    {
      project: "BOOKSTORE APP",
      type: "Mobile app",
      description:
        "Full stack development. I used React native as my frontend. Node.js,express as my backend and MongoDb as my database ",
    },
    {
      project: "PORTFOLIO",
      type: "Website",
      description:
        "Full stack development. I used Next.js as my frontend and used tailwind for styling . Node.js,express as my backend and MongoDb as my database ",
    },
    {
      project: "EASERENT APP",
      type: "Mobile app",
      description:
        "Back-End development. I used Node.js,express to design the backend and MongoDb as the database ",
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "Throughout my education journey, I have been able to come across the various technologies which have in turn helped me better understand the various technologies I am proficient in",
  items: [
    {
      institution: "Power Learn Project(PLP) ",
      degree: "Software Development Scholarship ",
      duration: "7/2025 - 12/2025 ",
    },
    {
      institution: "Kabarak University ",
      degree: "Bachelor of Business Management and IT ",
      duration: "9/2021 - 9/2025 ",
    },
  ],
};

export default function Resume() {
  return (
    <Section id="resume">
      <div className="text-center  ">
        <h2 className="text-3xl  mt-10 font-bold">Resume</h2>

        <div className="items-center justify-center py-8 xl:py-12 flex mx-4  ">
          <div className=" container mx-auto">
            <Tabs
              defaultValue="experience"
              className="flex flex-col   xl:flex-row gap-[60px]"
            >
              <TabsList className="flex bg-  flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              {/**content */}
              <div className=" min-h-[70vh] w-full ">
                {/**experience */}
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left  ">
                    <h3 className="text-4xl font-bold"> {experience.title} </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0  ">
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[400px] overflow-auto ">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                        {experience.items.map((Item, index) => {
                          return (
                            <li
                              className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex-col justify-center items-start text-left lg:items-start gap-1 "
                              key={index}
                            >
                              <span className=" text-2xl text-[#00ff99] ">
                                {Item.project}
                              </span>
                              <h3 className="text-xl max-w-[200px] min-h-[40px] text-left lg:items-start  ">
                                {Item.type}
                              </h3>
                              <div>
                                <p className="text-white/60 whitespace-pre-line ">
                                  {Item.description}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                    <h3 className="text-4xl font-bold">{education.title} </h3>
                    <p className="max-w-[600px ] text-white/60 mx-auto  xl:mx-0  ">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[400px] overflow-auto ">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]  ">
                        {education.items.map((item, index) => {
                          return (
                            <li
                              className="bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1  "
                              key={index}
                            >
                              <span className="text-[#00ff99] uppercase text-xl  ">
                                {item.duration}
                              </span>
                              <h3 className="text-xl min-h-[60px ] justify-center items-center lg:items-start gap-1 ">
                                {item.degree}{" "}
                              </h3>
                              <div>
                                <p className="text-white/60">
                                  {item.institution}{" "}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </Section>
  );
}
