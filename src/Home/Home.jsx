import React from "react";
import black from "../assets/black.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.png";
import art from "../assets/art-high-2.png";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/navigation"); // Replace '/desired-route' with your desired route
  };
  return (
    <motion.div
      layoutId="Main-Image1"
      className=" bg-black   h-screen w-full rounded-xl"
      transition={{
        delay: 0.4,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      }}
    >
      {/* <img
        src={art}
        className="absolute top-2 right-0 w-[50vw] h-[90vh] rotate-[-15]"
      /> */}
      <section className="flex w-[50vw] ml-[4%] border-transparent absolute top-1/2 -translate-y-1/2 ">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <h1 className="text-4xl text-center font-semibold  ">
            Reading is essential for those who seek to rise above the ordinary
          </h1>
          <p className="text-center text-xl">
            Unlock your potential,Transform your life.Start here.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleClick}
            className="bg-[#1F8581] w-[130px] h-[50px] rounded-3xl text-white"
          >
            Explore
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
