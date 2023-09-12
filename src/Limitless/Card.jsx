import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScroll } from "../utils/UseScroll";
import { CText, CText2, CCards } from "./Animation";

function Card() {
  const [clickedIndexes, setClickedIndexes] = useState([]);
  const [element, controls] = useScroll();

  const handleClick = (index) => {
    const indexInArray = clickedIndexes.indexOf(index);

    if (indexInArray !== -1) {
      // If the clicked card is already in the clickedIndexes array,
      // remove it to maintain the effect on the previous cards
      const updatedIndexes = [...clickedIndexes];
      updatedIndexes.splice(indexInArray, 1);
      setClickedIndexes(updatedIndexes);
    } else {
      // If the clicked card is not in the clickedIndexes array,
      // add it to apply the effect on the clicked card
      setClickedIndexes([...clickedIndexes, index]);
    }
  };
  const cards = [
    {
      item: 1,
      heading: "Dynamos geniuses  ",
      text: "Dynamos are typically the big picture creatives. They thrive on coming up with new ideas. Their enthusiasm for a new project is contagious and they frequently look at situations in fresh, innovative ways.They are adept at seeing the possibilities and bringing them to life. Of course, they can also seem to have their head in the clouds, their thoughts wandering instead of paying attention to the task at hand.",
    },
    {
      item: 2,
      heading: "Blaze geniuses ",
      text: "Blaze geniuses are leaders. They tend to be highly charismatic and their strength is in connections. These are the people who bring teams together, not simply because they are likable, but because they can identify the strengths in others and put them to work towards their goals.Blaze geniuses learn through talking, so while it may seem like idle chatter to some, to blazes, this is how they problem-solve.",
    },
    {
      item: 3,
      heading: "Tempo geniuses",
      text: "Slow and steady wins the race is an apt way to describe individuals with tempo genius. They are grounded, focused on the task at hand until they understand it or are ready to make a decision. Preferring a step-by-step approach, these are the people who will meet their deadlines no matter how long it takes or what obstacles stand in their way — and they’ll ensure the entire team stays focused as well.",
    },
    {
      item: 4,
      heading: "Steel geniuses ",
      text: "The steel and the tempo are both detail oriented and meticulous. But where the tempo still does well within a hands-on group, the steel genius prefers to work alone. They learn through reading and love absorbing as much information as possible. Steels want to understand the mechanics of everything. Their need to understand how things work can often lead to them taking too much time to finish tasks",
    },
  ];

  return (
    <motion.div
      ref={element}
      data-scroll-section
      className="w-full h-full mb-[20vh] "
    >
      <motion.h1
        className="text-center text-[3em] text-white pb-4"
        variants={CText}
        animate={controls}
        transition={{ delay: 0.3 }}
      >
        Discover Your genius
      </motion.h1>
      <motion.p
        className="text-[1.2em] text-center text-white pb-4"
        variants={CText2}
        animate={controls}
        transition={{ delay: 0.3 }}
      >
        There are 4 types of geniuses and chances are you are a mixture of more
        then one
      </motion.p>
      <motion.div
        variants={CCards}
        animate={controls}
        className="flex flex-col lg:flex-row w-full  justify-center items-center"
      >
        <div className="flex flex-col lg:flex-row w-full justify-center gap-5 items-center lg:w-[90%]  border-2 border-[yellow]">
          {cards.map((item, index) => {
            const isClicked = clickedIndexes.includes(index);

            const contentStyle = {
              filter: `blur(${isClicked ? "0" : "10"}px)`,
              transition: "filter 0.5s ease-in-out",
            };

            return (
              <motion.div
                animate={{
                  background: isClicked ? "transparent" : "#F98948",
                }}
                transition={{ duration: 10, delay: 0.2 }}
                key={index}
                className=" md:w-[50%] h-[400px] bg-[#F98948] cursor-pointer border-2 border-[red]"
                // style={{
                //   background: isClicked ? "transparent" : "rgb(31, 41, 55)",
                // }}
                onClick={() => handleClick(index)}
              >
                <motion.div
                  className="bg-[#3D0000] h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isClicked ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  style={contentStyle}
                >
                  <h1 className="text-[1.7em]  text-center font-semibold">
                    {item.heading}
                  </h1>
                  <p className="text-[1.3em] lg:text-[1em] text-center">
                    {item.text}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div
        className="   w-full h-[5px] bg-transparent mb-[10em] "
        data-scroll
        data-bg="#550000"
        data-color="white"
        data-border-color="red"
        data-scroll-repeat="true"
        data-scroll-call="updateBg"
      />
    </motion.div>
  );
}

export default Card;
