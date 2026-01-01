"use client";
import Section from "./Section";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import WorkSliderBtn from "./WorkSliderBtn";
import { TooltipPortal } from "@radix-ui/react-tooltip";

const projects = [
  {
    num: "01",
    category: "Full Stack (Mobile app) ",
    title: "Bookstore App",
    description:
      "The mobile app is a user friendly platform for book and novel enthusiasts to recommend books and novels so that others may get to know of the various good books available",
    stack: [
      { name: "React native" },
      { name: "Expo" },
      { name: "Css 3" },
      { name: "express" },
      { name: "mongoDB" },
    ],
    image: "/assets/work/thumb2.png",
    live: undefined,
    github: "https://github.com/HCSButcher/Bookstore",
  },
  {
    num: "02",
    category: "Full Stack (Web app) ",
    title: "Smart Harvest",
    description:
      "SmartHarvest is a full-stack platform that links farmers, foodbanks, and administrators through role-based dashboards, AI-driven insights, and secure IntaSend checkout flows.",
    stack: [
      { name: "Nextjs" },
      { name: "Express" },
      { name: "tailwindcss" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/smart-harvest.png",
    live: "https://smart-harvest-9d4p.vercel.app/",
    github: "https://github.com/HCSButcher/smart_harvest.git",
  },
  {
    num: "03",
    category: "Backend (Web app) ",
    title: "HACKRIFT",
    description:
      "This is a cybersecurity LMS platform where I am currently volunteering as a backend developer and also doing API integration, state handling and minimal UI fixes ",
    stack: [
      { name: "Nextjs" },
      { name: "Express" },
      { name: "tailwindcss" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/aquila.png",
    live: "https://lms-frontend-a.vercel.app/",
    github: undefined,
  },
  {
    num: "04",
    category: "Backend (Website) ",
    title: "AlturaCyber",
    description:
      "This is a cybersecurity website where I am also currently volunteering as a backend developer where I am currently volunteering as a backend developer and also doing API integration, state handling and minimal UI fixes",
    stack: [
      { name: "Nextjs" },
      { name: "Express" },
      { name: "tailwindcss" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/altura.png",
    live: undefined,
    github: undefined,
  },
  {
    num: "05",
    category: "Fullstack (Web app) ",
    title: "Corporate Munch",
    description: "This is my startup",
    stack: [
      { name: "Nextjs" },
      { name: "Express" },
      { name: "tailwindcss" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/corporate-munch.png",
    live: undefined,
    github: undefined,
  },
  {
    num: "06",
    category: "Full Stack (Web app) ",
    title: "Course Material Repository App",
    description:
      "A centralized repository where students access learning materials uploaded by lecturers and managed by administrators",
    stack: [
      { name: "React.js" },
      { name: "Css 3" },
      { name: "express" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://project-2-1-fq45.onrender.com",
    github: "http://github.com/HCSButcher/PROJECT-2",
  },
  {
    num: "07",
    category: "Frontend (Website) ",
    title: "Personal Portfolio",
    description:
      "A personal portfolio showcasing projects, skills, and experience",
    stack: [{ name: "Next.js" }, { name: "Tailwindcss" }],
    image: "/assets/work/thumb3.png",
    live: "https://my-portfolio-chi-two-94.vercel.app",
    github: "https://github.com/HCSButcher/my-portfolio",
  },
  {
    num: "08",
    category: "Full Stack (Web app) ",
    title: "Live Chat",
    description: "A real-time chat application demonstrating WebSocket usage",
    stack: [
      { name: "Next.js" },
      { name: "Tailwindcss" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/live-chat.png",
    live: "https://simple-live-chat-hmkl.vercel.app",
    github: "https://github.com/HCSButcher/simple-live-chat.git",
  },
];

export default function Projects() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <Section id="projects">
      <div className="container mt-10 mx-auto">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          {/**left content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-1 xl:order-0 ">
            <div className="flex flex-col gap-2 ">
              <div className="text-3xl mx-2  text-white font-extrabold  text-outline ">
                {project.num}
              </div>
              <h2 className="text-xl mx-2 text-[#00ff99] font-extrabold capitalize ">
                {project.title} project
              </h2>
              <p className="mx-2 font-bold"> {project.category} </p>
              <p className="text-white/60 mx-2 ">{project.description} </p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li className="text-l mx-2 text-[#00ff99] " key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] mx-2 h-[50px] rounded-full bg-white/5 flex justify-center items-center">
                          <BsArrowUpRight className="text-3xl text-white hover:text-[#00ff99]" />
                        </TooltipTrigger>
                        <TooltipContent>Live project</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full mx-2 bg-white/5 flex justify-center items-center">
                          <BsGithub className="text-3xl text-white hover:text-[#00ff99]" />
                        </TooltipTrigger>
                        <TooltipContent>GitHub repository</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/**Right slider */}
          <div className="w-full xl:w-[50%] cursor-pointer ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md-12 xl:h-[490px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="relative mt-3 w-full flex items-center justify-center bg-pink-50/20 aspect-4/3 sm:aspect-16/10 xl:h-[460px] xl:aspect-auto  ">
                    <div className="absolute inset-0 bg-black/10 z-10 ">
                      <div className="relative  w-full h-full ">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width:768px) 100vw, 50vw"
                          className="object-contain"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-5 z-20 w-full justify-between xl:w-max "
                btnStyles="bg-[#00ff99] hover:bg-[#00ff99]-hover text-[#1c1c23] text-[22px] w-[22px] h-[25px] flex justify-center items-center transition-all  "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </Section>
  );
}
