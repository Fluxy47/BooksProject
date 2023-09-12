import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Modal({ selectedImage, setSelectedImage }) {
  const { layoutId, src } = selectedImage;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };
  const number = Number(layoutId);

  const bullets = [
    " Become aware of your mindset(s",
    "Reflect on the impact of fixed vs growth mindsets",
    " Know that you can choose and change your mindset.",
  ];

  let contentToRender = null;

  switch (number) {
    case 1:
      contentToRender = (
        <motion.div
          className="fixed z-[70] h-screen w-full"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          // transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col mt-[20px]">
            <h1 className="text-[2em] md:text-[3em] text-center text-black font-semibold">
              {" "}
              Mindset: The New Psychology of Success
            </h1>
            <p className="text-[1.5em] text-center text-black font-semibold  mb-[1.5em] md:mb-[5em]">
              Author: Carol Dweck
            </p>
            <p
              className="text-[1.3em] md:text-[1.6em] lg:text-[2em] text-black text-center mx-3 font-semibold"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {" "}
              In this book, Carol Dweck draws on 20 years of research to explain
              how you can recognize, understand and change a fundamental mindset
              to impact all aspects of your life.It deals with Your mindset—how
              you see yourself—shapes how you respond to people and events, to
              affect your outcomes.
            </p>
          </div>
        </motion.div>
      );
      break;
    case 2:
      contentToRender = (
        <div className="fixed z-10 flex h-screen w-full items-center justify-center ">
          <h1 className="text-center absolute  top-0 left-1/2 -translate-x-1/2 text-black text-[2em] md:text-[2em] lg:text-[3em] font-semibold ">
            Growth Mindeset
          </h1>
          <div className="flex  max-h-screen   w-full items-center justify-center gap-[5px] md:gap-[40px] lg:gap-[10vh] overflow-x-auto pt-[15vh]">
            <div className="lg:hidden min-w-[200vw] md:min-w-[90vw] h-[400px]" />
            <div className="bg-[#440204] min-w-full md:min-w-[50%] lg:min-w-0  lg:w-[28%]   h-[500px]">
              {" "}
              <h1 className="text-[1.5em] lg:text-[2.2em] text-center text-black  font-bold">
                Definition & Approach to Success
              </h1>
              <p className="mx-2 text-[1.5em] text-center text-[#323232] font-semibold">
                People with a growth mindset focus on learning and stretching
                themselves. There’s nothing wrong with building self-confidence
                and belief. The danger comes when you feel you’re entitled to
                success because you’re special, or when you define your
                self-worth by your achievements.
              </p>
            </div>
            <div className="bg-[#440204] min-w-full lg:min-w-0 md:min-w-[50%] lg:w-[28%] h-[500px]">
              <h1 className="text-[1.5em] lg:text-[2.2em] text-center text-black font-semibold">
                Definition & Approach to Failure
              </h1>
              <p className="mx-2  text-[1.5em] text-center  text-[#323232] font-semibold">
                People with a growth mindset may also feel upset, but they see
                the mistake as an incident and a problem to be overcome (“I
                failed this time”). They try to identify their shortfalls,
                confront the challenges, and seek alternative routes to success.
              </p>
            </div>{" "}
            <div className="bg-[#440204] min-w-full lg:min-w-0 md:min-w-[50%] lg:w-[28%] h-[500px]">
              <h1 className="text-[1.5em] lg:text-[2.2em] text-center text-black  font-semibold">
                Attitude toward Effort
              </h1>
              <p className="mx-2  text-[1.5em] text-center text-[#323232] font-semibold">
                People with a growth mindset are driven by their passion for
                excellence, and end up winning as a result of their growth.
              </p>
            </div>
          </div>
        </div>
      );

      break;
    case 3:
      contentToRender = (
        <div className="fixed z-10 flex h-screen w-full items-center justify-center ">
          <h1 className="text-center absolute  top-0 left-1/2 -translate-x-1/2 text-black text-[2em] md:text-[2em] lg:text-[3em] font-semibold ">
            Growth Mindeset
          </h1>
          <div className="flex  max-h-screen   w-full items-center justify-center gap-[5px] md:gap-[40px] lg:gap-[10vh] overflow-x-auto pt-[15vh]">
            <div className="lg:hidden min-w-[200vw] md:min-w-[90vw] h-[400px]" />
            <div className="bg-[#BF8F4C] min-w-full md:min-w-[50%] lg:min-w-0  lg:w-[28%]   h-[450px]">
              {" "}
              <h1 className="text-[1.5em] lg:text-[2.2em] text-center text-black  font-bold">
                Definition & Approach to Success
              </h1>
              <p className="mx-2 text-[1.5em] text-center text-[#323232] font-semibold">
                People with a fixed mindset believe their abilities are fixed,
                thus they prefer to stay in their comfort zone and focus on
                validating and proving themselves.
              </p>
            </div>
            <div className="bg-[#BF8F4C] min-w-full lg:min-w-0 md:min-w-[50%] lg:w-[28%] h-[450px]">
              <h1 className="text-[1.5em] lg:text-[2.2em] text-center text-black font-semibold">
                Definition & Approach to Failure
              </h1>
              <p className="mx-2  text-[1.5em] text-center  text-[#323232] font-semibold">
                When things go wrong, everyone feels bad to some degree. People
                with a fixed mindset allows the failure to define them
                permanently (“I’m a failure), give up, or try to protect their
                image by hiding their deficiencies, finding blame or excuses.{" "}
              </p>
            </div>{" "}
            <div className="bg-[#BF8F4C] min-w-full lg:min-w-0 md:min-w-[50%] lg:w-[28%] h-[450px]">
              <h1 className="text-[1.5em] lg:text-[2.2em] text-center text-black  font-semibold">
                Attitude toward Effort
              </h1>
              <p className="mx-2  text-[1.5em] text-center text-[#323232] font-semibold">
                People with a fixed mindset tend to resist putting in effort
                because (a) they believe the need to work harder means they’re
                not “special” enough, and (b) they’re silently worried that
                their best effort will turn out to be inadequate.
              </p>
            </div>
          </div>
        </div>
      );

      break;
    case 4:
      contentToRender = (
        <motion.div
          className="fixed z-10 left-1/2 top-[10%] -translate-x-1/2 flex flex-col items-center min-h-screen overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-black">
            CHANGING MINDSETS
          </h1>

          <p className="lg:text-2xl text-[1em] font-semibold w-[80%] mx-auto text-black">
            The key message in the book is not that fixed mindsets are bad and
            growth mindsets are good; it’s about creating awareness of the 2
            mindsets and their impact, so you can make a conscious choice on
            if/what to change in your best interest.
          </p>

          <ul className="text-xl list-disc list-inside">
            {bullets.map((bullet, index) => (
              <li key={index} className="mb-3 text-[1em] text-black">
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      );
      break;

    default:
      contentToRender = null; // Or some default content if none of the cases match
  }

  const [isShow, setIsShow] = useState(true);
  const handleCLick = () => {
    setTimeout(() => {
      setSelectedImage(null);
    }, 1000);
    setIsShow(false);
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0  h-full w-full  z-[60]"
      layoutId={layoutId}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isShow ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {contentToRender}
        </motion.div>
      </AnimatePresence>
      <div className="fixed flex z-[71] ">
        <motion.button
          initial={{ letterSpacing: "0.025em" }}
          whileHover={{ letterSpacing: "0.2em" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-[1.5em]  border-none bg-transparent text-black font-bold "
          onClick={handleCLick}
        >
          Back
        </motion.button>
      </div>

      <motion.img
        src={src}
        className="h-screen w-full"
        style={{
          objectFit: "cover",
          imageRendering: "auto",
        }}
      />
    </motion.div>
  );
}

export default Modal;
