import React, { useEffect, useState } from "react";
import yellow from "../assets/yellow.jpg";
import { AnimatePresence, motion } from "framer-motion";

function Banner() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ borderRadius: "0.75rem" }}
        animate={{ borderRadius: 0 }}
        exit={{ opacity: 0 }}
        data-scroll-section
        className=" bg-black h-screen "
        layoutId="Main-Image2"
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
      >
        <motion.div
          layoutId="image"
          initial={{ x: 200, y: -200 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <img
            src={yellow}
            className="h-auto w-[500px] object-cover imgclass absolute right-0"
          />
        </motion.div>

        <div className="flex flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="4"
            className="uppercase text-[Silver] text-[3em] text-center  md:text-[4em] xl:text-[5em] tracking-wider "
          >
            Limitless
          </motion.h1>
          <motion.p
            className="text-[Silver] text-[1.5em] text-center"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            A book that makes you limitless
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Banner;
