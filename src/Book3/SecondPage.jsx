import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SecondPage({
  handleNextClick,
  handlePreviousClick,
  currentFragment,
  visitedFragments,
}) {
  console.log("dum:", visitedFragments);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  console.log("state:", shouldAnimate);
  const finalValue = shouldAnimate ? "-100vh" : visitedFragments ? "-100vw" : 0;

  useEffect(() => {
    if (currentFragment === "SecondPage") {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [currentFragment]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className="w-screen h-screen bg-black"
      animate={{ [visitedFragments ? "x" : "y"]: finalValue }}
      transition={{
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
      }}
    >
      <h1 className="text-[3em] text-center text-white">
        {" "}
        Techniques in Handling People
      </h1>
      <div className="flex w-full  justify-evenly">
        <div
          className="card"
          onMouseMove={handleMouseMove}
          style={{
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          }}
        >
          {" "}
          <h1 className="text-[1.5em] text-center text-black font-semibold">
            Don’t criticize, condemn or complain.
          </h1>
        </div>
        <div
          className="card"
          onMouseMove={handleMouseMove}
          style={{
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          }}
        >
          <h1 className="text-[1.5em] text-center text-black font-semibold">
            Give honest and sincere appreciation.
          </h1>
        </div>
        <div
          className="card"
          onMouseMove={handleMouseMove}
          style={{
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          }}
        >
          <h1 className="text-[1.5em] text-center text-black font-semibold">
            Arouse in the other person an eager want.
          </h1>
        </div>
      </div>
      <button
        onClick={handleNextClick}
        className="bg-white w-[100px] h-[100px]"
      >
        NExt
      </button>
      <button
        onClick={handlePreviousClick}
        className="bg-white w-[100px] h-[100px]"
      >
        PRevious
      </button>
    </motion.div>
  );
}

export default SecondPage;
