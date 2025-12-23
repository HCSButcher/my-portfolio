"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import Social from "./Social";
import Photo from "./Photo";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section
      id="home"
      className="
    min-h-[calc(100vh-96px)]
    xl:pt-[96px]
   pt-[10px]
    scroll-mt-[96px]
  "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="container mx-auto min-h-full ">
          <div className=" flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-3">
            <div className=" mx-5 text-center xl:text-left order-2 xl:order-0">
              <span className=" text-xl">
                Fullstack (MERN)Software Developer <br />
                Expertise in{" "}
                <span className="text-[#00ff99] ">Nest.js and Next.js </span>
              </span>
              <h1 className="text-5xl xl:text-7xl mb-0 xl:mb-0 ">
                Hello I am <br />
                <span className="text-[#00ff99] ">Trevor Oduol</span>
              </h1>
              <p className="max-w-[600px] mx-5 xl:mx-1  mb-1 xl:mb-2 xl:mt-2 text-left text-white/80 text-xl  ">
                I am a full stack MERN software developer with expertise in
                Nest.js and Next.js. I excel at crafting elegant digital
                software experiences and enthusiastic about solving real world
                problems
              </p>
              {/*btn and socials*/}
              <div className="flex flex-col xl:flex-row items-center gap-2 xl:mt-5">
                <Link href="/MY_RESUME.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase  rounded-full flex items-center"
                  >
                    <span>Download CV</span>
                  </Button>
                </Link>
                <div className=" mt-0 xl:mt-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 text-xl h-9 border-[#00ff99] rounded-full flex justify-center items-center text-[#00ff99] text-base hover:bg-[#00ff99] hover:text-black hover:transition-all duration-500 "
                  />
                </div>
              </div>
            </div>
            {/**photo */}
            <div className="order-1 xl:order-0 top-5 mb-1 xl:mb-0">
              <Photo />
            </div>
          </div>
          <Stats />
        </div>
      </motion.div>
    </section>
  );
}
