import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ThirdPage({
  handleNextClick,
  handlePreviousClick,
  currentFragment,
  visitedFragments,
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const finalX = shouldAnimate ? 0 : visitedFragments ? "-100vw" : 0;

  return (
    <motion.div
      className="w-screen h-screen bg-[Silver]"
      initial={{ y: "-200vh", x: "100vw" }}
      animate={{ x: shouldAnimate && 0 }}
    >
      <h1 className="text-[3em] text-center text-black pb-[50px]">
        Six ways to Make People Like You
      </h1>

      <div className="grid grid-cols-1">
        <div className="flex bg-red-500 gap-5">
          <div className="border-2 border-black w-1/3 h-[15em]">
            <h1>Become genuinely interested in other people.</h1>
            <p>
              Become genuinely interested in other people.Become genuinely
              interested in other people.Become genuinely interested in other
              people.Become genuinely interested in other people.Become
              genuinely interested in other people.
            </p>
          </div>
          <div className="border-2 border-black w-1/3">
            <h1>Become genuinely interested in other people.</h1>
            <p>
              Become genuinely interested in other people.Become genuinely
              interested in other people.Become genuinely interested in other
              people.Become genuinely interested in other people.Become
              genuinely interested in other people.
            </p>
          </div>
          <div className="border-2 border-black w-1/3">
            <h1>Become genuinely interested in other people.</h1>
            <p>
              Become genuinely interested in other people.Become genuinely
              interested in other people.Become genuinely interested in other
              people.Become genuinely interested in other people.Become
              genuinely interested in other people.
            </p>
          </div>
        </div>
        <div className="flex bg-blue-500 gap-5">
          <div className="border-2 border-black w-1/3 h-[15em]">
            <h1>Become genuinely interested in other people.</h1>
            <p>
              Become genuinely interested in other people.Become genuinely
              interested in other people.Become genuinely interested in other
              people.Become genuinely interested in other people.Become
              genuinely interested in other people.
            </p>
          </div>
          <div className="border-2 border-black w-1/3">
            <h1>Become genuinely interested in other people.</h1>
            <p>
              Become genuinely interested in other people.Become genuinely
              interested in other people.Become genuinely interested in other
              people.Become genuinely interested in other people.Become
              genuinely interested in other people.
            </p>
          </div>
          <div className="border-2 border-black w-1/3">
            <h1>Become genuinely interested in other people.</h1>
            <p>
              Become genuinely interested in other people.Become genuinely
              interested in other people.Become genuinely interested in other
              people.Become genuinely interested in other people.Become
              genuinely interested in other people.
            </p>
          </div>
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

export default ThirdPage;
