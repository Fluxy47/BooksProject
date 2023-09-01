import React from "react";
import { limitarr } from "../utils/constant";
import { useScroll } from "../utils/UseScroll";
import { Mtext } from "./Animation";
import { motion } from "framer-motion";

function Lerp() {
  const [element, controls] = useScroll();
  return (
    <section
      className="w-full h-auto border-2 border-[red]"
      ref={element}
      data-scroll-section
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className=" w-full h-[5px] bg-transparent  "
        data-scroll
        data-bg="black"
        data-color="white"
        data-border-color="yellow"
        data-scroll-repeat="true"
        data-scroll-call="updateBg"
      />
      <div className="flex flex-col h-full w-full">
        <motion.div
          // variants={Mtext}
          // animate={controls}
          transition={{ delay: 0.3 }}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
          className="text-center  text-[2em] md:text-[3.5em] pb-[200px] lg:pb-[250px] text-[#C0C0C0]"
        >
          have you ever dreamed of being a superhero?
        </motion.div>{" "}
        <motion.div
          // variants={Mtext}
          // animate={controls}
          transition={{ delay: 0.3 }}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
          data-scroll-delay="1.3"
          className="text-center text-[2em] md:text-[3.5em] pb-[150px] lg:pb-[250px] text-[#C0C0C0]"
        >
          In &quot;Limitless&quot; by Jim Kwik, unlock your hidden powers.
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className=" w-full h-[5px] bg-transparent  "
          data-scroll
          data-bg="#21130d"
          data-color="white"
          data-border-color="brown"
          data-scroll-repeat="true"
          data-scroll-call="updateBg"
        />
        <motion.div
          // variants={Mtext}
          // animate={controls}
          transition={{ delay: 0.3 }}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
          data-scroll-delay="1.6"
          className="text-center text-[2em] md:text-[3.5em] pb-[200px] lg:pb-[250px] text-[#C0C0C0]"
        >
          Discover untapped potential within
        </motion.div>
        <motion.div
          // variants={Mtext}
          // animate={controls}
          transition={{ delay: 0.3 }}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
          data-scroll-delay="1"
          className="text-center text-[2em] md:text-[3.5em] pb-[200px] lg:pb-[250px] text-[#C0C0C0]"
        >
          Break free from limits, become the hero of your life
        </motion.div>
        <motion.div
          // variants={Mtext}
          // animate={controls}
          transition={{ delay: 0.3 }}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
          data-scroll-delay="1"
          className="text-center text-[2em] md:text-[3.5em] pb-[200px] lg:pb-[250px] text-[#C0C0C0]"
        >
          Ignite memory, learning, and focus.
        </motion.div>
        <motion.div
          // variants={Mtext}
          // animate={controls}
          transition={{ delay: 0.3 }}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
          data-scroll-delay="1"
          className="text-center text-[2em] md:text-[3.5em] pb-[200px] lg:pb-[250px] text-[#C0C0C0]"
        >
          Rewrite your story, embark on a journey
        </motion.div>
        <motion.div
          transition={{ delay: 0.3 }}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
          data-scroll-delay="1"
          className="text-center text-[2em] md:text-[3.5em] text-[#C0C0C0] pb-[20%]"
        >
          Embrace greatness in &quot;Limitless&quot; by Jim Kwik.
        </motion.div>
        <div
          className="   w-full h-[5px] bg-transparent  "
          data-scroll
          data-bg="#47002D"
          data-border-color="purple"
          data-color="white"
          data-scroll-repeat="true"
          data-scroll-call="updateBg"
        />
      </div>

      {/* {limitarr.map((item, idx) => (
        <motion.div
          variants={Mtext}
          animate={controls}
          transition={{ delay: 0.3 }}
          key={idx}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
          data-scroll-delay={item.delay}
          className="text-center text-[4em] mb-[250px] text-white"
        >
          {item.text}
        </motion.div>
      ))} */}
    </section>
  );
}

export default Lerp;
