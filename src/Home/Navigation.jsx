import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

const itemVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function Navigation() {
  const [showText, setShowText] = useState(true);
  const [animationId, setAnimationId] = useState(null);
  console.log(animationId);
  const navigate = useNavigate();

  const animationClick = (e) => {
    const customData = e.currentTarget.getAttribute("data-custom");
    setAnimationId(() => customData);
  };

  const handleClick = () => {
    navigate("/");

    setShowText(false);
  };
  const handleClick2 = () => {
    navigate("/limitless");

    setShowText(false);
  };
  const handleClick3 = () => {
    navigate("/temp");
    setShowText(false);
  };
  const handleClick4 = () => {
    navigate("/main");
    setShowText(false);
  };
  const handleClick5 = () => {
    navigate("/book");
    setShowText(false);
  };

  const exitAnimation = animationId === 1 ? null : { opacity: 0 };

  return (
    <div className="h-full w-full overflow-hidden">
      <AnimatePresence>
        <section className="flex md:absolute left-0  flex-col md:h-screen overflow-hidden md:w-[30%] items-start md:justify-between pb-[25%] md:pb-0">
          {" "}
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit={animationId === 1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.9, delay: 1.3, type: "tween" }}
            data-custom="1"
            onClick={(e) => animationClick(e)}
          >
            <Tilt>
              <motion.div
                layoutId="Main-Image2"
                onClick={handleClick2}
                transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
                className=" w-[100vw] md:w-[30vw] h-[30vh]  cursor-pointer bg-black rounded-[25px] mt-5 mb-[20vh] md:mb-0"
              />
              <motion.h1
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-[1.5em] tracking-wide z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                Limitless Book
              </motion.h1>
            </Tilt>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.9, delay: 1.3, type: "tween" }}
            data-custom="2"
            onClick={(e) => animationClick(e)}
          >
            <Tilt>
              <motion.div
                layoutId="Main-Image3"
                onClick={handleClick3}
                className="w-[100vw] md:w-[30vw] h-[30vh] bg-gradient-to-b from-[#361b34] to-[#03051a] flex-none cursor-pointer rounded-[25px]  md:mb-0"
                transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
              />
              <motion.h1
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-[1.5em] tracking-wide z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                Atomic habits
              </motion.h1>
            </Tilt>
          </motion.div>
        </section>
        <section className="relative   overflow-hidden md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 flex flex-col md:flex-row w-full items-center justify-center  pb-[25%] md:pb-0">
          <motion.div
            className=" m-0 p-0 "
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, type: "tween" }}
            data-custom="3"
            onClick={(e) => animationClick(e)}
          >
            <Tilt>
              <motion.div
                layoutId="Main-Image1"
                onClick={handleClick}
                className="relative z-20 h-[40vh] md:w-[40vw] w-[100vw]  lg:ml-0 md:mt-[40px] lg:mt-0 bg-black cursor-pointer rounded-[25px] "
              />
              <motion.h1
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-[2em] tracking-wide z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                Home
              </motion.h1>
            </Tilt>
          </motion.div>
        </section>{" "}
        <section className="md:absolute overflow-hidden right-0 flex flex-col  md:h-screen md:w-[30%] md:justify-between">
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.9, delay: 1.5, type: "tween" }}
            data-custom="4"
            onClick={(e) => animationClick(e)}
          >
            <Tilt>
              <motion.div
                onClick={handleClick4}
                layoutId="Main-Image4"
                transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
                className="w-[100vw] md:w-[30vw] h-[30vh] bg-[#0044cc] flex-none cursor-pointer rounded-[25px] mt-5 mb-[20vh] md:mb-0"
              />
              <motion.h1
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-[1em] tracking-wide z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                Mindset: The New Psychology of Success
              </motion.h1>
            </Tilt>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.9, delay: 1.7, type: "tween" }}
            data-custom="5"
            onClick={(e) => animationClick(e)}
          >
            <Tilt>
              <motion.div
                onClick={handleClick5}
                layoutId="Main-Image5"
                className=" w-[100vw] md:w-[30vw] h-[30vh] gradient1  flex-none cursor-pointer rounded-[25px] "
              />
              <motion.h1
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white text-[1em] tracking-wide z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                How to Win Friends and Influence People.
              </motion.h1>
            </Tilt>
          </motion.div>
        </section>
      </AnimatePresence>
    </div>
  );
}

export default Navigation;

{
  /* <div className="flex justify-center  h-screen">
        <div className="grid grid-cols-3 mt-[-40px] ml-[-20px] w-[30em] h-[35em]">
          <div className="flex justify-between md:w-[100vw] lg:w-[1200px] relative  md:right-[8.5em] lg:right-[22.5em] top-[60px]">
            <motion.div
              variants={itemVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.9, delay: 1.3, type: "tween" }}
            >
              <Tilt>
                <motion.div
                  layoutId="Main-Image2"
                  onClick={handleClick2}
                  className=" md:w-[250px] lg:w-[350px] h-[200px] flex-none cursor-pointer bg-black rounded-[25px]"
                />
              </Tilt>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.9, delay: 1.3, type: "tween" }}
            >
              <Tilt>
                <motion.div
                  layoutId="Main-Image3"
                  onClick={handleClick3}
                  className=" md:w-[250px] lg:w-[350px] h-[200px] bg-gradient-to-b from-[#361b34] to-[#03051a] flex-none cursor-pointer rounded-[25px]"
                  transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
                />
              </Tilt>
            </motion.div>
          </div>
          <motion.div
            className="z-50 m-0 p-0 col-span-3"
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, type: "tween" }}
            onClick={handleClick}
          >
            <Tilt>
              <motion.div
                layoutId="Main-Image1"
                className="h-[300px] md:w-[80%] lg:w-full md:ml-[50px] lg:ml-0 md:mt-[40px] bg-black cursor-pointer rounded-[25px]"
              />
            </Tilt>
          </motion.div>
          <div className="flex bg-red-500 justify-between  md:w-[100vw] lg:w-[1200px] relative md:right-[8.5em] lg:right-[22.5em]  lg:bottom-[50px] ">
            <motion.div
              variants={itemVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.9, delay: 1.5, type: "tween" }}
            >
              <Tilt>
                <motion.div
                  onClick={handleClick4}
                  layoutId="Main-Image4"
                  transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
                  className=" md:w-[250px] lg:w-[350px] h-[200px] bg-[#030632] flex-none cursor-pointer rounded-[25px]"
                />
              </Tilt>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.9, delay: 1.7, type: "tween" }}
            >
              <Tilt>
                <motion.div
                  onClick={handleClick5}
                  layoutId="Main-Image5"
                  className="md:w-[250px] lg:w-[350px] bg-black h-[200px] flex-none cursor-pointer rounded-[25px] "
                />
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div> */
}
