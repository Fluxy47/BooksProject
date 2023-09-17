import React from "react";
import Main from "../assets/Main.jpg";
import { motion } from "framer-motion";
import "./styles.css";

function Landing({ singleElementControls }) {
  return (
    <motion.div
      initial={{ borderRadius: "0.75rem" }}
      animate={{ borderRadius: 0 }}
      layoutId="Main-Image4"
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
      className="hero"
    >
      <motion.div
        initial={{ left: "50%" }}
        animate={singleElementControls}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="fixed  top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          // className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="text-[#c9b2a6] text-[35px] text-center ">
            Mindset: The New Psychology of Success
          </div>
          <p className="text-[1.5em] text-center text-[#c9b2a6]">
            Unlock Your Potential: Embrace a Growth Mindset for Success.
          </p>
        </motion.div>
      </motion.div>
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
    </motion.div>
  );
}

export default Landing;
