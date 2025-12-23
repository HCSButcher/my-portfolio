"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
        className="relative w-[170px] h-[170px] xl:w-[400px] xl:h-[400px]"
      >
        {/* Rotating circle */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 498 498"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="249"
            cy="249"
            r="240"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 450 22 22"],
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.2,
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          className="absolute inset-4 rounded-full overflow-hidden"
        >
          <Image
            src="/assets/photo.png"
            alt="Profile photo"
            fill
            sizes="(max-width: 768px) 170px, 400px"
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
