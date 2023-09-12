import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mtext, MImage, MHeading } from "../Limitless/Animation";
import Habitsvg from "./Habitsvg";

function Modal({ selected, clickFunc2, isShow }) {
  console.log(selected);

  const bullet = [
    "Cue: The cue is the trigger or stimulus that initiates the habit loop. It can be an environmental factor, a specific time, an emotional state, or any other event that prompts the habit to start.",
    "Craving: The craving is the motivational force that follows the cue. It's the desire or urge you feel in response to the cue. Cravings are the emotional or mental associations linked to the habit that make you want to engage in the behavior.",
    "Response: The response is the actual behavior or action that you perform in response to the cue and craving. It's the habit itself, the routine you follow automatically.",
    "Reward: The reward is the positive outcome or benefit you gain from completing the habit loop. It reinforces the habit and strengthens the association between the cue, craving, and response, making it more likely for the habit to be repeated in the future.",
  ];

  let contentToRender = null;

  switch (selected.id) {
    case 1:
      contentToRender = (
        <div className="fixed z-10 h-screen w-full flex flex-col ">
          <h1 className="text-[3em] text-center text-[silver] font-bold mt-[55px] md:0">
            Atomic Habits
          </h1>
          <p className="text-[1.5em] text-center text-[silver] mb-[1.5em] md:mb-[10vh] font-bold ">
            Author: James Clear
          </p>
          <p
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
            className=" text-[1em] md:text-[1.6em] lg:text-[2em] text-[silver]  mx-[5%] font-semibold"
          >
            Atomic Habits by James Clear is a comprehensive, practical guide on
            how to change your habits and get 1% better every day. Using a
            framework called the Four Laws of Behavior Change, Atomic Habits
            teaches readers a simple set of rules for creating good habits and
            breaking bad ones. Read the full summary to glean 3 key lessons from
            Atomic Habits, learn how to build a habit in 4 simple steps, and get
            a handy reference guide for the strategies recommended throughout
            the book.
          </p>
        </div>
      );
      break;
    case 2:
      // JSX code for case when currentIndex === 0
      contentToRender = (
        <div className="fixed z-10 h-screen w-full overflow-y-auto">
          <div className="flex flex-col ">
            <h1 className="text-white text-center  text-[2em] pt-[20px] pb-[20px] lg:pb-[8vh]">
              Techniques in Handling People
            </h1>
            <div className="flex flex-col gap-[10vh] lg:flex-row  justify-center items-center">
              {" "}
              <div className="bg-[#100B2E] border-2 border-[#A5CC6B] w-[20em] md:w-[40vw] lg:w-[20em] h-[500px]">
                <h1 className="text-[1.5em] text-center text-[silver] font-semibold mb-[15px]">
                  Small habits make a big difference
                </h1>
                <p className="text-[1.3em] text-center">
                  the idea that small, incremental changes in our daily habits
                  can have a profound and transformative effect on our personal
                  and professional lives. Consistently practicing these small
                  habits reinforces positive identity and ultimately leads to
                  significant long-term improvements.
                </p>
              </div>
              <div className="bg-[#100B2E] border-2 border-[#A5CC6B] w-[20em] md:w-[40vw] lg:w-[20em] h-[500px]">
                <h1 className="text-[1.3em] text-center text-[silver] font-semibold mb-[15px]">
                  Forget about setting goals. Focus on your system instead.
                </h1>
                <p className="text-[1.2em] text-center">
                  Rather than fixating on specific outcomes or end goals,
                  individuals should prioritize developing effective systems or
                  processes. By focusing on building robust systems, one can
                  create sustainable and repeatable approaches to achieve
                  desired results. A strong system fosters continuous
                  improvement and adaptability, making it easier to navigate
                  setbacks and maintain progress over the long term.
                </p>
              </div>
              <div className="bg-[#100B2E] border-2 border-[#A5CC6B] w-[20em] md:w-[40vw] lg:w-[20em] h-[500px] ">
                <h1 className="text-[1.5em] text-center text-[silver] font-semibold mb-[15px]">
                  Build identity-based habits
                </h1>
                <p className="text-[1.3em] text-center">
                  {" "}
                  Building identity-based habits is the concept of aligning our
                  habits with our desired identity or self-image. Rather than
                  focusing solely on the behavior change itself, this approach
                  emphasizes identifying as the type of person who embodies the
                  desired habits. By anchoring habits to our sense of self and
                  values, they become more ingrained and natural.
                </p>
              </div>
            </div>
          </div>
        </div>
      );

      break;
    case 3:
      contentToRender = (
        <div className="fixed z-10  h-screen w-full ">
          <div className="flex w-full">
            <motion.div
              className=" w-2/5 h-screen hidden lg:block"
              variants={MImage}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{
                duration: 1,
                ease: [0.43, 0.13, 0.23, 0.96], // Custom easing function (easeInOut)
              }}
            >
              <div className="mt-[-100px]">
                <Habitsvg />
              </div>
            </motion.div>
            <div className=" w-full lg:w-3/5 h-screen ">
              <motion.h1
                className="text-center text-[2em] pb-[10px] text-black font-bold"
                variants={MHeading}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ delay: 0.2 }}
              >
                The habit loop
              </motion.h1>
              <motion.p
                className=" text-[1em] lg:text-[1.5em] text-black font-bold text-center mx-2 pb-[10%]"
                variants={Mtext}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ delay: 0.2 }}
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                The habit loop is a three-step process that explains how habits
                are formed and reinforced. It was popularized by Charles Duhigg
                in his book "The Power of Habit." Here's a brief explanation of
                each step:
              </motion.p>
              <div className="max-h-[70vh] lg:max-h-screen overflow-y-auto">
                <ul className="text-[1.1em] lg:text-[1.5em] list-disc list-inside">
                  {bullet.map((bullet, index) => (
                    <li
                      key={index}
                      style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                      className="mb-3 font-semibold text-[1.1em] md:text-[1.2em]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case 4:
      contentToRender = (
        <div className="fixed z-10  h-screen w-full overflow-y-auto md:overflow-hidden">
          <div className="flex flex-col pt-[30px] md:pb-[10%]">
            <h1
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
              className="text-[2em] text-center text-black font-bold"
            >
              Creating New Habits
            </h1>
            <p
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
              className="text-[1.5em] text-black font-semibold text-center"
            >
              Creating new habits is crucial for bringing consistency,
              efficiency, and structure to daily life. They drive goal
              achievement, foster positive behavior changes, and offer stability
              in uncertain times. By rewiring neural pathways, habits promote
              lasting transformations. Social connections and positive
              reinforcement enhance their impact, contributing to overall
              well-being and personal growth.
            </p>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-evenly">
            <section className="flex flex-col">
              <h1 className="text-[3em] md:text-[2em] lg:text-[3em] text-black text-center">
                Cue
              </h1>
              <div className="w-full md:w-[80%] lg:w-full bg-white h-[2px]" />
              <p className="text-[1.5em] text-center text-black">
                Make it obvious.
              </p>
            </section>
            <section className="flex flex-col">
              <h1 className="text-[3em] md:text-[2em] text-black lg:text-[3em] text-center">
                Craving
              </h1>
              <div className="w-full md:w-[80%] lg:w-full bg-white h-[2px]" />
              <p className="text-[1.5em] text-center text-black">
                Make it attractive.{" "}
              </p>
            </section>
            <section className="flex flex-col">
              <h1 className="text-[3em] md:text-[2em]  text-black lg:text-[3em] text-center">
                Response
              </h1>
              <div className="w-full md:w-[80%] lg:w-full bg-white h-[2px]" />
              <p className="text-[1.5em] text-center text-black">
                Make it easy.{" "}
              </p>
            </section>
            <section className="flex flex-col">
              <h1 className="text-[3em] md:text-[2em]  text-black lg:text-[3em] text-center">
                Reward
              </h1>
              <div className="w-full md:w-[80%] lg:w-full bg-white h-[2px]" />
              <p className="text-[1.5em] text-center text-black">
                Make it satisfying.
              </p>
            </section>
          </div>
        </div>
      );
      break;
    case 5:
      contentToRender = (
        <div className="fixed z-10  h-screen w-full overflow-y-auto md:overflow-hidden">
          <div className="flex flex-col pt-[30px] md:pb-[10%]">
            <h1
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
              className="text-[2em] text-center text-black text-bold"
            >
              Creating New Habits
            </h1>
            <p
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
              className="text-[1.5em] text-center text-black font-semibold"
            >
              Breaking habits is pivotal because our behaviors are largely
              governed by habits. Disrupting negative habits can free us from
              unproductive cycles and open the door to positive transformation.
              This enables us to consciously shape our actions, fostering
              personal development, and creating a pathway to achieving our
              goals.
            </p>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-evenly">
            <section className="flex flex-col">
              <h1 className="text-[3em] md:text-[2em] lg:text-[3em] text-black text-center">
                Cue
              </h1>
              <div className="w-full md:w-[80%] lg:w-full bg-white h-[2px]" />
              <p className="text-[1.5em] text-center text-black">
                Make it invisible.
              </p>
            </section>
            <section className="flex flex-col">
              <h1 className="text-[3em] md:text-[2em] text-black lg:text-[3em] text-center">
                Craving
              </h1>
              <div className="w-full md:w-[80%] lg:w-full bg-white h-[2px]" />
              <p className="text-[1.5em] text-center text-black">
                Make it unattractive.
              </p>
            </section>
            <section className="flex flex-col">
              <h1 className="text-[3em] md:text-[2em]  text-black lg:text-[3em] text-center">
                Response
              </h1>
              <div className="w-full md:w-[80%] lg:w-full bg-white h-[2px]" />
              <p className="text-[1.5em] text-center text-black">
                Make it difficult.
              </p>
            </section>
            <section className="flex flex-col">
              <h1 className="text-[3em] md:text-[2em]  text-black lg:text-[3em] text-center">
                Reward
              </h1>
              <div className="w-full md:w-[80%] lg:w-full bg-white h-[2px]" />
              <p className="text-[1.5em] text-center text-black">
                Make it unsatisfying.
              </p>
            </section>
          </div>
        </div>
      );
      break;
    default:
      contentToRender = null; // Or some default content if none of the cases match
  }

  return (
    <motion.div
      className="absolute  bg-opacity-50 top-0 left-0 right-0 bottom-0  h-full w-full  z-[9]"
      layoutId={selected.id}
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
      <div className="fixed z-20 flex  ">
        <motion.button
          initial={{ letterSpacing: "0.025em" }}
          whileHover={{ letterSpacing: "0.2em" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-[1.5em] border-none bg-transparent text-black font-bold "
          onClick={clickFunc2}
        >
          Back
        </motion.button>
      </div>
      <motion.img
        src={selected.src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          imageRendering: "auto",
        }}
      />
    </motion.div>
  );
}

export default Modal;
