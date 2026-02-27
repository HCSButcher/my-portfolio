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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    num: "01",
    category: "Full-Stack | Mobile",
    title: "Bookstore App | Jun 2025-Sep 2025",
    description: {
      overview:
        "Book lovers needed a convenient mobile solution to browse and purchase books on the go. Built a complete cross-platform mobile app with a robust backend for iOS and Android users.",
      details: [
        "Built mobile app using React Native and Expo for iOS and Android platforms",
        "Created backend API with Express.js and TypeScript for books, users, and orders",
        "Implemented JWT authentication for secure login, registration, favorites, and order history",
        "Developed book browsing with categories, search, and detailed book information",
        "Built shopping cart and checkout system for seamless book purchases",
        "Designed MongoDB schemas for books, users, orders, and reviews with proper indexing",
        "Created a user-friendly platform for book and novel enthusiasts to recommend books so that others may discover quality reading material",
      ],
      outcome:
        "Delivered a seamless mobile bookstore experience that increased book accessibility, streamlined purchasing, and provided personalized user features across both iOS and Android devices. The app successfully connected book lovers with their next great read.",
    },
    technicalDetails: {
      frontend: ["React Native", "Expo", "tailwind css"],
      backend: ["Express.js", "Javascript", "RESTful APIs"],
      database: ["MongoDB", "Mongoose", "Data Schemas"],
      auth: ["JWT", "Authentication", "Authorization"],
      features: [
        "Book Browsing",
        "Shopping Cart",
        "Favorites",
        "Order History",
        "Book Reviews",
        "Search & Categories",
      ],
      deployment: ["Expo (Mobile)", "Render (Backend)"],
    },
    image: "/assets/work/thumb2.png",
    live: undefined,
    github: "https://github.com/HCSButcher/Bookstore",
  },
  {
    num: "02",
    category: "Full-Stack | AI",
    title: "SmartHarvest | Dec 2025-Present",
    description: {
      overview:
        "SmartHarvest is an AI-powered web application connecting farmers with food banks. Farmers upload available produce while food banks receive AI insights on optimal produce selection. The platform also provides farmers with AI-driven farming recommendations and best practices.",
      details: [
        "Built full-stack application with Next.js, Express.js, and Tailwind CSS",
        "Integrated OpenAI API for intelligent produce recommendations and farming advice",
        "Implemented authentication and user management with Clerk",
        "Created separate dashboards for farmers (produce uploads) and food banks (AI insights)",
        "Developed AI algorithms to match food bank needs with available farmer produce",
        "Built recommendation system for farmers with personalized farming tips and techniques",
        "Designed responsive UI with Tailwind CSS for seamless mobile and desktop experience",
        "Implemented real-time notifications for produce matches and AI insight updates",
      ],
      outcome:
        "Delivered an innovative platform bridging the gap between farmers and food banks, reducing food waste through AI-powered matching and empowering farmers with actionable agricultural insights. The platform helps optimize food distribution and promotes sustainable farming practices.",
    },
    technicalDetails: {
      frontend: ["Next.js", "Tailwind CSS", "Clerk Auth", "React Query"],
      backend: ["Express.js", "Node.js", "RESTful APIs"],
      ai: ["OpenAI GPT", "Custom Prompt Engineering", "AI Agents"],
      database: ["MongoDB Atlas", "Mongoose ODM"],
      auth: ["Clerk", "JWT", "Role-based Access"],
      features: ["AI Matching", "Smart Recommendations", "Real-time Updates"],
      deployment: ["Vercel (Frontend)", "Render (Backend)"],
    },
    image: "/assets/work/smart-harvest.png",
    live: "https://smart-harvest-9d4p.vercel.app/",
    github: "https://github.com/HCSButcher/smart_harvest.git",
  },
  {
    num: "03",
    category: "Backend | Volunteering",
    title: "Aquila LMS | Oct 2025-Present",
    description: {
      overview:
        "Aquila Cyber needed a scalable LMS backend for online course delivery and user management. Built the entire backend from scratch with security, automation, and easy frontend integration.",
      details: [
        "Built backend with NestJS and TypeScript using modular architecture",
        "Added JWT authentication with role-based access control for students, instructors, and admins",
        "Created Nodemailer email system for verifications, resets, and notifications",
        "Designed MySQL database schemas for users, courses, enrollments, and submissions",
        "Developed RESTful APIs for all LMS features including file uploads",
        "Wrote tests with Jest/Supertest (85%+ coverage) and documented APIs with Swagger",
      ],
      outcome:
        "Delivered a secure, scalable LMS backend that automated user management and course delivery, enabling seamless frontend integration and reducing manual administrative tasks.",
    },
    technicalDetails: {
      backend: ["Express", "JavaScript", "Modular Architecture"],
      database: ["MongoDb", "Schema Design"],
      email: ["Nodemailer", "HTML Templates"],
      testing: ["Jest", "Supertest", "85%+ Coverage"],
      security: ["JWT", "Role-based Access", "Input Validation"],
      api: ["RESTful APIs", "Swagger Documentation"],
    },
    image: "/assets/work/aquila.png",
    live: "https://lms-frontend-a.vercel.app/",
    github: undefined,
  },
  {
    num: "04",
    category: "Backend | Volunteering",
    title: "Aquila Website | Jan 2026",
    description: {
      overview:
        "Aquila Cyber needed a dynamic website with real-time course listings and automated notifications for contact forms and partnership inquiries. Built a complete backend from scratch to replace static content with dynamic data and secure admin controls.",
      details: [
        "Built backend with Express.js and JavaScript using MVC architecture and RESTful APIs",
        "Designed MongoDB database schemas for courses, contact forms, and partnership inquiries",
        "Developed dynamic course management APIs serving real-time data, plus JWT-protected admin endpoints for easy updates",
        "Created Nodemailer email system with HTML templates to alert the team on form submissions",
        "Added partnership form processing that stores inquiries and emails the sales team",
        "Secured endpoints with JWT, rate limiting, and input validation",
        "Used Jest/Supertest for integration testing",
      ],
      outcome:
        "Delivered a dynamic backend with secure admin controls and automated team notifications, eliminating manual content updates and improving response time.",
    },
    technicalDetails: {
      backend: ["Express.js", "JavaScript", "MVC Pattern"],
      database: ["MongoDB", "Schema Design"],
      email: ["Nodemailer", "HTML Templates"],
      testing: ["Jest", "Supertest"],
      security: ["JWT", "Rate Limiting", "Input Validation"],
    },
    image: "/assets/work/aquilawebsite.png",
    live: undefined,
    github: undefined,
  },
  {
    num: "05",
    category: "Full-Stack | Sports",
    title: "Eldoret Badminton Club | Feb 2026-Present",
    description: {
      overview:
        "Eldoret Badminton Club needed a modern website to manage club information, events, and member communications more efficiently. Built a complete full-stack website from scratch to serve as the central hub for club activities and member engagement.",
      details: [
        "Built website using Next.js, Nest.js, TypeScript, and MongoDB",
        "Developed Nodemailer email system for announcements, event reminders, and member updates",
        "Created event management features for posting tournaments and training sessions with member registration",
        "Designed MongoDB schemas for members, events, announcements, and club information",
        "Built an admin dashboard for easy content updates, event management, and broadcast emails",
        "Implemented responsive UI with Tailwind CSS for seamless experience on all devices",
        "Added member registration and profile management for personalized club experience",
      ],
      outcome:
        "Delivered a modern club website that automated member communications, simplified event management, increased participation through online registration, and provided a professional mobile-friendly online presence. The platform now serves as the central digital hub for all club activities.",
    },
    technicalDetails: {
      frontend: ["Next.js", "Tailwind CSS", "React Hook Form"],
      backend: ["Nest.js", "TypeScript", "RESTful APIs"],
      database: ["MongoDB", "Mongoose", "Data Schemas"],
      email: ["Nodemailer", "HTML Templates", "Email Automation"],
      features: [
        "Event Management",
        "Admin Dashboard",
        "Member Portal",
        "Email Broadcasts",
      ],
      deployment: ["Vercel (Frontend)", "Render (Backend)"],
    },
    image: "/assets/work/eldoret.png",
    live: "https://eldoret-badminton.vercel.app/",
    github: undefined,
  },
  {
    num: "06",
    category: "Backend | Volunteering",
    title: "AlturaCyber | Dec 2025-Jan 2026",
    description: {
      overview:
        "Altura needed a dynamic website with automated notifications for job listings, contact forms, and partnership inquiries. Built a complete backend from scratch to replace static content with dynamic data and automated team alerts.",
      details: [
        "Built backend with Express.js and TypeScript using MVC pattern and RESTful APIs",
        "Designed MySQL database schemas for job listings, contact forms, and partnership inquiries",
        "Created Nodemailer email system with HTML templates to alert the team on form submissions",
        "Developed dynamic job listing APIs serving real-time data from the database, plus admin endpoints for easy management",
        "Added partnership form processing that stores inquiries and emails the business team",
        "Secured endpoints with input validation, rate limiting, and CORS",
        "Used Jest/Supertest for integration testing",
      ],
      outcome:
        "Delivered a dynamic backend that automated team notifications, eliminated manual updates, and improved response time to client inquiries.",
    },
    technicalDetails: {
      backend: ["Express.js", "JavaScript", "MVC Pattern"],
      database: ["MySQL", "Schema Design"],
      email: ["Nodemailer", "HTML Templates"],
      testing: ["Jest", "Supertest", "85%+ Coverage"],
      security: ["Input Validation", "Rate Limiting", "CORS"],
    },
    image: "/assets/work/altura.png",
    live: undefined,
    github: undefined,
  },
  {
    num: "07",
    category: "Full-Stack | Web App",
    title: "Corporate Munch | Dec 2025-Present",
    description: {
      overview:
        "Corporate offices needed a convenient food delivery platform tailored for business environments where multiple employees could order from different restaurants. Built a complete full-stack food delivery platform from scratch similar to Glovo but for corporate use.",
      details: [
        "Built platform using Next.js, NestJS, TypeScript, and MongoDB",
        "Added live location feature for real-time delivery address selection and saving",
        "Created restaurant listings with menus for browsing and selecting food items",
        "Developed shopping cart system allowing items from multiple restaurants with quantity adjustments",
        "Implemented checkout and delivery tracking with fee calculation and status updates",
        "Designed MongoDB schemas for users, restaurants, orders, carts, and locations with proper indexing",
      ],
      outcome:
        "Delivered a seamless food delivery platform that improved corporate ordering efficiency, provided real-time tracking, and offered a smooth user experience across devices.",
    },
    technicalDetails: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["NestJS", "TypeScript", "RESTful APIs"],
      database: ["MongoDB", "Mongoose", "Data Schemas"],
      features: [
        "Live Location",
        "Multi-Restaurant Cart",
        "Order Tracking",
        "Delivery Fee Calculation",
      ],
      deployment: ["Vercel (Frontend)", "Render (Backend)"],
    },
    image: "/assets/work/corporate_munch.png",
    live: "https://corporate-munch.vercel.app/",
    github: undefined,
  },
];

export default function Projects() {
  const [project, setProject] = useState(projects[0]);
  const [activeTab, setActiveTab] = useState("overview");

  const handleSlideChange = (swiper: SwiperType) => {
    setProject(projects[swiper.activeIndex]);
    setActiveTab("overview"); // Reset tab on project change
  };

  return (
    <Section id="projects">
      <div className="container mt-10 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r from-white to-[#00ff99] bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Content - Project Details */}
          <motion.div
            key={project.num}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full xl:w-[50%] flex flex-col order-1 xl:order-0"
          >
            <div className="bg-[#1a1a1f] rounded-2xl p-6 md:p-8 border border-white/5">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-6xl md:text-7xl font-bold text-outline opacity-20">
                    {project.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 text-[#00ff99]">
                    {project.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="mt-2 border-[#00ff99]/30 text-[#00ff99]"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Tabs for better organization */}
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 bg-[#25252b]">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-[#00ff99] data-[state=active]:text-black"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="details"
                    className="data-[state=active]:bg-[#00ff99] data-[state=active]:text-black"
                  >
                    Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="tech"
                    className="data-[state=active]:bg-[#00ff99] data-[state=active]:text-black"
                  >
                    Tech Stack
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-4">
                  <p className="text-white/80 leading-relaxed">
                    {project.description.overview}
                  </p>
                </TabsContent>

                <TabsContent value="details" className="mt-4">
                  <ul className="space-y-3">
                    {project.description.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-white/80"
                      >
                        <span className="text-[#00ff99] mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="tech" className="mt-4">
                  <div className="space-y-4">
                    {Object.entries(project.technicalDetails).map(
                      ([category, items]) => (
                        <div key={category}>
                          <h4 className="text-[#00ff99] font-semibold capitalize mb-2">
                            {category.replace(/([A-Z])/g, " $1").trim()}:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {items.map((item, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-[#25252b] text-white/80 border border-white/10"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Project Outcome */}
              <div className="mt-6 p-4 bg-[#00ff99]/5 border border-[#00ff99]/20 rounded-xl">
                <h4 className="text-[#00ff99] font-semibold mb-2">Outcome:</h4>
                <p className="text-white/80 italic">
                  "{project.description.outcome}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-6">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group w-[50px] h-[50px] rounded-full bg-white/5 hover:bg-[#00ff99] flex justify-center items-center transition-all duration-300">
                          <BsArrowUpRight className="text-2xl text-white group-hover:text-black transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          className="bg-[#00ff99] text-black border-none"
                        >
                          <p>Live Demo</p>
                        </TooltipContent>
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
                        <TooltipTrigger className="group w-[50px] h-[50px] rounded-full bg-white/5 hover:bg-[#00ff99] flex justify-center items-center transition-all duration-300">
                          <BsGithub className="text-2xl text-white group-hover:text-black transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          className="bg-[#00ff99] text-black border-none"
                        >
                          <p>GitHub Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Slider - Project Images */}
          <div className="w-full xl:w-[50%] mb-8 xl:mb-0">
            <div className="relative bg-[#1a1a1f] rounded-2xl p-4 border border-white/5">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="rounded-xl overflow-hidden"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full aspect-video bg-[#25252b] rounded-lg overflow-hidden"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain hover:scale-105 transition-transform duration-500"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </SwiperSlide>
                ))}

                <WorkSliderBtn
                  containerStyles="flex gap-2 absolute bottom-4 right-4 z-20"
                  btnStyles="w-10 h-10 bg-[#00ff99] hover:bg-[#00ff99]/80 text-black rounded-full flex justify-center items-center transition-all duration-300"
                />
              </Swiper>

              {/* Project Counter */}
              <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white/80">
                {projects.findIndex((p) => p.num === project.num) + 1} /{" "}
                {projects.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
