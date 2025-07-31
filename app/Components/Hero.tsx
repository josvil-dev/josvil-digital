import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative flex w-full flex-col overflow-hidden bg-gray-200 min-h-[calc(100dvh-128px)]"
      id="hero"
    >
       <Image 
          src="/jos.jpg"
          alt="Hello grains"
          fill
          className="object-cover"
          priority
          />
          <div className="grainy-white"></div>
      <div className="absolute inset-0 z-10 bg-black opacity-75 "></div>
      <div className="relative z-20 mx-auto flex grow flex-col justify-center gap-6 px-6 py-24 md:gap-0 md:pb-6 md:pt-0 max-w-[1200px]">
        <motion.h1
          className="mt-auto text-left text-[50px] leading-[1.05] tracking-[-0.04em] text-white md:text-[72px] md:leading-[1] lg:text-left xl:text-[96px]"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Hi,I am Josvil, Full Stack developer
        </motion.h1>
        <div className="mt-auto flex flex-col justify-between gap-6 py-6 md:py-0 lg:flex-row">
          <motion.p
            className="text-[24px] leading-[1.12] text-white md:w-3/4 md:text-[28px] xl:w-3/5 xl:text-[32px]"
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
          >
            I specialize in creating digital experiences that combine beautiful
            design with powerful functionality.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-end justify-start gap-2 lg:justify-start"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href="/get-started"
              className="w-full md:w-auto text-center px-6 py-2 text-md text-black font-mono bg-white rounded-2xl hover:bg-blue-700"
            >
              My Work
            </a>
            <a
              href="/get-started"
              className="w-full md:w-auto text-center px-6 py-2 text-lg font-mono text-white bg-orange-800  rounded-2xl hover:bg-blue-700"
            >
              Contact
            </a>
            <a
              href="/demo-request"
              className="w-full md:w-auto text-center px-6 py-2 text-lg text-white bg-transparent border-2 border-white rounded-2xl hover:bg-white hover:text-black"
            >
              My Resume
            </a>
          </motion.div>
        </div>
        
      </div>
      
    </section>
  );
};

export default Hero;
