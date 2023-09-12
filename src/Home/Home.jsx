import React from "react";
import black from "../assets/black.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.png";

function Home() {
  return (
    <div className="w-full  h-screen overflow-hidden ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-white absolute left-0 w-[50vw] h-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex fixed top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  items-center justify-center w-full "
      >
        <h1 className="text-black md:text-center text-[1.28em] md:text-[2.5em] font-semibold pointer-events-none">
          Reading is essen
        </h1>
        <h1 className="text-white md:text-center text-[1.3em] md:text-[2.5em] font-semibold pointer-events-none">
          tial for those who
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex fixed top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  items-center justify-center w-full "
      >
        <h1 className="text-black md:text-center text-[1.28em] md:text-[2.5em] font-semibold ml-[-5px] pointer-events-none">
          seek to rise abo
        </h1>
        <h1 className="text-white md:text-center text-[1.28em] md:text-[2.5em] font-semibold pointer-events-none">
          ve the ordinary
        </h1>
      </motion.div>

      <motion.div
        layoutId="Main-Image1"
        initial={{ width: "100vw" }}
        animate={{ width: "50vw" }}
        className="absolute bg-black  right-0 h-screen w-[50vw] rounded-xl"
        transition={{
          delay: 0.4,
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        }}
      />
    </div>
  );
}

export default Home;
