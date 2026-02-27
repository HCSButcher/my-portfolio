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
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Briefcase,
  Code,
  Database,
  Mail,
  TestTube,
  Zap,
  Shield,
  Users,
  Wifi,
  HardDrive,
  Network,
} from "lucide-react";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Professional experience spanning backend development, education, IT support, and administrative roles.",
  items: [
    {
      company: "AquilaCyber",
      role: "Back-end Developer (Remote)",
      duration: "Oct 2025 - Present",
      location: "Remote",
      achievements: [
        {
          category: "Backend Architecture",
          icon: <Code className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Built scalable backend services from scratch using Express.js and NestJS, implementing RESTful APIs with WebSocket connections for real-time threat monitoring and live data streaming.",
        },
        {
          category: "Database Design & Integration",
          icon: <Database className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Designed and optimized database schemas in MySQL and MongoDB, successfully migrating the application from dummy/test data to live database connections, ensuring 100% accurate real-time information display across all UI components.",
        },
        {
          category: "Email Automation",
          icon: <Mail className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Developed comprehensive email notification systems using Nodemailer with custom HTML templates, handling user verification, password resets, security alerts, and automated transactional emails.",
        },
        {
          category: "Testing & Quality Assurance",
          icon: <TestTube className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Established robust testing frameworks using Jest and Supertest, writing unit tests, integration tests, and API endpoint validation achieving 85%+ code coverage and ensuring system reliability.",
        },
        {
          category: "UI Integration & Optimization",
          icon: <Zap className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Enhanced user experience by implementing loading skeletons, spinners, and conditional rendering during data fetch operations, eliminating dummy data placeholders and ensuring smooth transitions between loading and content states.",
        },
        {
          category: "API Development",
          icon: <Code className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Created RESTful endpoints from scratch with proper error handling, input validation, middleware implementation for authentication, logging, and request/response formatting.",
        },
        {
          category: "Performance Optimization",
          icon: <Zap className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Optimized database queries, implemented indexing strategies, and added pagination/filtering, reducing API response times by 40% and improving overall system throughput.",
        },
        {
          category: "Security Implementation",
          icon: <Shield className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Integrated JWT authentication, rate limiting, input sanitization, and security best practices to protect against common vulnerabilities.",
        },
        {
          category: "Code Quality",
          icon: <Code className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Participated in code reviews, followed clean code principles, and maintained comprehensive API documentation using Swagger/OpenAPI.",
        },
      ],
    },
    {
      company: "Pixel Academy",
      role: "STEM Instructor",
      duration: "Sept 2025 - Present",
      location: "Nakuru, Kenya",
      achievements: [
        {
          category: "Internet of Things (IoT)",
          icon: <Wifi className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Teaching students IoT concepts, sensor integration, and connected device programming.",
        },
        {
          category: "Web Development",
          icon: <Code className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Instructing students in modern web development technologies and best practices.",
        },
        {
          category: "Robotics",
          icon: <HardDrive className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Guiding students through robotics fundamentals, programming, and hands-on building projects.",
        },
      ],
    },
    {
      company: "Kabarak University",
      role: "IT Support",
      duration: "May 2025 – Aug 2025",
      location: "Nakuru, Kenya",
      achievements: [
        {
          category: "Network Infrastructure",
          icon: <Network className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Performed networking duties including trunking, cable layering, and setting up network cabinets.",
        },
        {
          category: "Device Maintenance",
          icon: <HardDrive className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Performed maintenance of network devices, computer hardware and software repairs, cable replacements, and termination.",
        },
        {
          category: "System Optimization",
          icon: <Zap className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Conducted cable tracing and identification, computer optimization, software updates, and package installations.",
        },
        {
          category: "Hardware Support",
          icon: <HardDrive className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Assisted in repair and maintenance of computer hardware, including component replacements and troubleshooting.",
        },
      ],
    },
    {
      company: "Lumia Digital",
      role: "Clerical Assistant",
      duration: "May 2021 – Aug 2025",
      location: "Kisumu, Kenya",
      achievements: [
        {
          category: "Data Management",
          icon: <Database className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Performed data entry and all cyber services with accuracy and efficiency.",
        },
        {
          category: "Customer Support",
          icon: <Users className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Assisted customers with basic computer operations and troubleshooting.",
        },
        {
          category: "Administrative",
          icon: <Briefcase className="w-4 h-4 text-[#00ff99]" />,
          description:
            "Maintained order and document organization, ensuring smooth office operations.",
        },
      ],
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
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-8 sm:mt-10 bg-gradient-to-r from-white to-[#00ff99] bg-clip-text text-transparent px-4"
        >
          Resume
        </motion.h2>

        <div className="items-center justify-center py-6 sm:py-8 xl:py-12 flex mx-4">
          <div className="container mx-auto">
            <Tabs
              defaultValue="experience"
              className="flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-[60px]"
            >
              <TabsList className="flex flex-row xl:flex-col w-full max-w-full xl:max-w-[380px] mx-auto xl:mx-0 gap-3 sm:gap-4 xl:gap-6 bg-transparent overflow-x-auto xl:overflow-visible pb-2 xl:pb-0">
                <TabsTrigger
                  value="experience"
                  className="flex-1 xl:w-full data-[state=active]:bg-[#00ff99] data-[state=active]:text-black text-sm sm:text-base xl:text-lg py-2 sm:py-3 px-4 whitespace-nowrap"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="flex-1 xl:w-full data-[state=active]:bg-[#00ff99] data-[state=active]:text-black text-sm sm:text-base xl:text-lg py-2 sm:py-3 px-4 whitespace-nowrap"
                >
                  Education
                </TabsTrigger>
              </TabsList>

              {/* Content */}
              <div className="min-h-[70vh] w-full">
                {/* Experience Tab */}
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-4 sm:gap-6 xl:gap-[30px] text-center xl:text-left">
                    <div className="px-2 sm:px-4">
                      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 xl:mb-4">
                        {experience.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/60 max-w-[600px] mx-auto xl:mx-0">
                        {experience.description}
                      </p>
                    </div>

                    <ScrollArea className="h-[400px] sm:h-[500px] xl:h-[600px] overflow-auto px-2 sm:px-4">
                      <div className="space-y-4 sm:space-y-5 xl:space-y-6">
                        {experience.items.map((job, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#232329] rounded-lg sm:rounded-xl p-4 sm:p-5 xl:p-6 border border-white/5 hover:border-[#00ff99]/30 transition-all duration-300"
                          >
                            {/* Job Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start xl:flex-row xl:items-center justify-between mb-3 sm:mb-4 gap-3 sm:gap-4">
                              <div className="text-left">
                                <h4 className="text-xl sm:text-2xl xl:text-2xl font-bold text-[#00ff99] break-words">
                                  {job.company}
                                </h4>
                                <p className="text-sm sm:text-base xl:text-lg text-white/80 break-words">
                                  {job.role}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-2 sm:gap-3 justify-start sm:justify-end">
                                <Badge
                                  variant="outline"
                                  className="border-[#00ff99]/30 text-white/80 text-xs sm:text-sm px-2 sm:px-3 py-1"
                                >
                                  <Calendar className="w-3 h-3 mr-1 text-[#00ff99] flex-shrink-0" />
                                  <span className="truncate max-w-[120px] sm:max-w-none">
                                    {job.duration}
                                  </span>
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="border-[#00ff99]/30 text-white/80 text-xs sm:text-sm px-2 sm:px-3 py-1"
                                >
                                  <MapPin className="w-3 h-3 mr-1 text-[#00ff99] flex-shrink-0" />
                                  <span className="truncate max-w-[120px] sm:max-w-none">
                                    {job.location}
                                  </span>
                                </Badge>
                              </div>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-3 sm:space-y-3 xl:space-y-4 mt-3 sm:mt-4">
                              {job.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex gap-2 sm:gap-3 text-left"
                                >
                                  <div className="mt-1 shrink-0">
                                    {achievement.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <span className="font-semibold text-[#00ff99] text-sm sm:text-base">
                                      {achievement.category}:
                                    </span>
                                    <span className="text-white/60 text-xs sm:text-sm xl:text-base ml-1 break-words">
                                      {achievement.description}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* Education Tab - UNCHANGED but made responsive */}
                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-4 sm:gap-6 xl:gap-[30px] text-center xl:text-left">
                    <div className="px-2 sm:px-4">
                      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 xl:mb-4">
                        {education.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/60 max-w-[600px] mx-auto xl:mx-0">
                        {education.description}
                      </p>
                    </div>

                    <ScrollArea className="h-[400px] overflow-auto px-2 sm:px-4">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-[30px]">
                        {education.items.map((item, index) => (
                          <li
                            key={index}
                            className="bg-[#232329] py-4 sm:py-5 xl:py-6 px-4 sm:px-6 xl:px-10 rounded-lg sm:rounded-xl flex-col justify-center items-center text-center xl:text-left gap-1 hover:border hover:border-[#00ff99]/30 transition-all duration-300"
                          >
                            <span className="text-[#00ff99] text-sm sm:text-base xl:text-xl uppercase block mb-1 sm:mb-2">
                              {item.duration}
                            </span>
                            <h3 className="text-base sm:text-lg xl:text-xl font-semibold mb-1">
                              {item.degree}
                            </h3>
                            <p className="text-white/60 text-xs sm:text-sm xl:text-base">
                              {item.institution}
                            </p>
                          </li>
                        ))}
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
