import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { bullets, bullets2 } from "../utils/constant";

function Modal({
  currentIndex,
  setSelected,
  setCurrentIndex,
  setFlexboxPosition,
}) {
  let contentToRender = null;

  switch (currentIndex) {
    case 1:
      contentToRender = (
        <div className="fixed z-10  h-screen w-full">
          <div className="flex flex-col mt-[75px] md:0">
            <h1 className="text-[2em] md:text-[3em] text-center text-white">
              {" "}
              How to Win Friends and Influence People.
            </h1>
            <p className="text-[1.5em] text-center text-white">
              Author: Dale Carnegie
            </p>
          </div>
          <section className="flex  w-[88%] relative left-1/2 -translate-x-1/2 h-[60vh] items-center">
            <p className="md:text-[1.6em] text-white text-center">
              Discover the timeless secrets of effective communication and
              relationship-building in Dale Carnegie's classic, "How to Win
              Friends and Influence People." This practical guide empowers you
              to create meaningful connections, foster trust, and positively
              impact those around you. Whether in personal or professional
              settings, Carnegie's principles offer a roadmap to success and
              fulfillment. Unleash your charisma, build confidence, and
              transform your interactions with this transformative masterpiece.
            </p>
          </section>
        </div>
      );
      break;
    case 2:
      // JSX code for case when currentIndex === 0

      contentToRender = (
        <div className="fixed z-10 h-screen w-full overflow-y-auto">
          <div className="flex flex-col mt-[75px] md:0">
            <h1 className="text-white text-center  text-[2em] pt-[20px] pb-[20px] lg:pb-[15vh]">
              Techniques in Handling People
            </h1>
            <div className="flex flex-col gap-[10vh] lg:flex-row mt-[calc(2em + 20px)] justify-center items-center">
              {" "}
              <div className="card2 w-[20em] md:w-[40vw] lg:w-[20em] h-[450px]">
                <h1 className="text-[1.5em] text-center text-[silver] font-semibold mb-[15px]">
                  Don’t criticize, condemn or complain.
                </h1>
                <p className="text-[1.5em] text-center">
                  Avoid condemning others, as it can create resentment and
                  defensiveness. Similarly, refrain from constant complaining,
                  as it can have a negative impact on relationships. Instead,
                  focus on understanding and constructive communication.
                </p>
              </div>
              <div className="card2 w-[20em] md:w-[40vw] lg:w-[20em] h-[450px]">
                <h1 className="text-[1.5em] text-center text-[silver] font-semibold mb-[15px]">
                  Give honest and sincere appreciation.
                </h1>
                <p className="text-[1.5em] text-center">
                  Show genuine appreciation for others' efforts and
                  accomplishments. Recognizing and praising their contributions
                  can boost their self-esteem and strengthen your relationship
                  with them.
                </p>
              </div>
              <div className="card2 w-[20em] md:w-[40vw] lg:w-[20em] h-[450px] ">
                <h1 className="text-[1.5em] text-center text-[silver] font-semibold mb-[15px]">
                  Arouse in the other person an eager want.
                </h1>
                <p className="text-[1.5em] text-center">
                  {" "}
                  Understand the desires and needs of others, and try to align
                  your requests or ideas with what they genuinely want. When you
                  appeal to their interests and aspirations, they are more
                  likely to be receptive and cooperative.
                </p>
              </div>
            </div>
          </div>
        </div>
      );

      break;
    case 3:
      contentToRender = (
        <div className="fixed z-10  h-screen w-full overflow-y-auto lg:overflow-hidden">
          <section className="flex flex-col justify-evenly mt-[75px] md:0">
            <h1 className="text-white text-[2em] mt-[30px] lg:mt-0 text-center">
              Six ways to Make People Like You
            </h1>
            <div className=" h-auto lg:h-[90vh] w-full flex flex-col">
              <section className="flex gap-5 flex-col lg:flex-row  md:h-[50%] w-full items-center justify-center mb-[20px]">
                <div className="card2 w-[20em] md:w-[50vw] lg:w-[20em] h-[260px] lg:h-[17em]">
                  <h1 className="text-[1.5em] text-center text-black font-semibold">
                    Become genuinely interested in other people.
                  </h1>
                  <p className="text-[1.3em] text-center">
                    Show sincere curiosity about others' lives, opinions, and
                    experiences. Listen actively and ask questions to understand
                    and engage with them on a deeper level.
                  </p>
                </div>
                <div className="card2 w-[20em] md:w-[50vw] lg:w-[20em] h-[260px] lg:h-[17em]">
                  <h1 className="text-[1.5em] text-center text-black font-semibold">
                    Smile
                  </h1>
                  <p className="text-[1.3em] text-center">
                    A simple smile can go a long way in making others feel
                    comfortable and welcomed. It conveys warmth and
                    friendliness, making people more receptive to you.
                  </p>
                </div>
                <div className="card2 w-[20em] md:w-[50vw] lg:w-[20em]  h-[260px] lg:h-[17em]">
                  <h1 className="text-[1.2em] text-center text-black font-semibold">
                    A person’s name is to that person most important sound in
                    any language:
                  </h1>
                  <p className="text-[1.3em] text-center">
                    Addressing people by their names creates a sense of
                    recognition and importance. It shows that you value and
                    respect them as individuals.
                  </p>
                </div>
              </section>
              <section className="flex gap-5 flex-col lg:flex-row  md:h-[50%] w-full items-center justify-center mb-[20px]">
                <div className="card2 w-[20em] md:w-[50vw] lg:w-[20em]  h-[260px] lg:h-[17em]">
                  <h1 className="text-[1.4em] text-center text-black font-semibold">
                    Be a good listener. Encourage others to talk about
                    themselves
                  </h1>
                  <p className="text-[1.3em] text-center">
                    ractice active listening, giving your full attention to what
                    others are saying. Encourage them to share their thoughts
                    and experiences, as it helps build rapport and trust.
                  </p>
                </div>
                <div className="card2 w-[20em] md:w-[50vw] lg:w-[20em]  h-[260px] lg:h-[17em]">
                  <h1 className="text-[1.5em] text-center text-black font-semibold">
                    Talk in terms of the other person’s interests
                  </h1>
                  <p className="text-[1.3em] text-center">
                    Tailor your conversations to topics that interest the other
                    person. By discussing subjects that matter to them, you can
                    create a positive and enjoyable interaction.
                  </p>
                </div>
                <div className="card2 w-[20em] md:w-[50vw] lg:w-[20em]  h-[260px] lg:h-[17em]">
                  <h1 className="text-[1.3em] text-center text-black font-semibold">
                    Make the other person feel important – and do it sincerely
                  </h1>
                  <p className="text-[1.3em] text-center">
                    Acknowledge and appreciate the value of others'
                    contributions and efforts. When you make people feel
                    important and valued, they are more likely to respond
                    positively to you.
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
      );
      break;
    case 4:
      contentToRender = (
        <div className="fixed z-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-center absolute  top-0 left-1/2 -translate-x-1/2 text-white text-[1.4em] md:text-[2em] font-semibold ">
            Win people to your way of thinking
          </h1>
          <div className="max-h-[60vh]  overflow-y-auto mt-[8em]">
            {/* Your scrollable content goes here */}

            <ul className="text-xl list-disc list-inside">
              {bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="mb-3 text-[1.2em] md:text-[1.4em]  text-white"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
      break;

    case 5:
      contentToRender = (
        <div className="fixed z-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-center absolute  top-0 left-1/2 -translate-x-1/2 text-white text-[1.3em] md:text-[2em] font-semibold ">
            How to Change People Without Arousing Resentment
          </h1>
          <div className="max-h-[60vh]  overflow-y-auto mt-[10em]">
            {/* Your scrollable content goes here */}

            <ul className="text-xl list-disc list-inside ">
              {bullets2.map((bullet, index) => (
                <li
                  key={index}
                  className="mb-3 text-[1.2em] md:text-[1.4em]  text-white"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
      break;
    default:
      contentToRender = null; // Or some default content if none of the cases match
  }

  const [rotation, setRotation] = useState(0);
  const [rotation2, setRotation2] = useState(0);

  const handleRightClick = () => {
    setTimeout(() => {
      setSelected(false);
    }, 1000);
    setIsShow(false);
    setRotation((prevRotation) => prevRotation + 90);

    setTimeout(() => {
      if (currentIndex < 5) {
        setCurrentIndex((prevstate) => prevstate + 1);
      }
    }, 1000);

    setTimeout(() => {
      setFlexboxPosition((prevPosition) => {
        const newPosition = prevPosition - 420;
        return Math.max(-1838, Math.min(-158, newPosition));
      });
    }, 1500);

    setTimeout(() => {
      setSelected(true);
    }, 2500);
  };

  const handleLeftClick = () => {
    setTimeout(() => {
      setSelected(false);
    }, 1000);
    setIsShow(false);
    setRotation2((prevRotation) => prevRotation - 90);
    setTimeout(() => {
      if (currentIndex > 1) {
        setCurrentIndex((prevstate) => prevstate - 1);
      }
    }, 1000);

    setTimeout(() => {
      setFlexboxPosition((prevPosition) => {
        const newPosition = prevPosition + 420;
        return Math.max(-1838, Math.min(-158, newPosition));
      });
    }, 1500);

    setTimeout(() => {
      setSelected(true);
    }, 2500);
  };

  const [isShow, setIsShow] = useState(true);
  const handleCLick = () => {
    setTimeout(() => {
      setSelected(false);
    }, 1000);
    setIsShow(false);
  };

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 bottom-0  h-full w-full  z-[60] bg-[#1C1C1F]  "
      layoutId={currentIndex}
      transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
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
      <div className="fixed top-3 left-5 flex  z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isShow ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="arrow left"
          onClick={handleCLick}
        >
          <svg
            width="60px"
            height="80px"
            viewBox="0 0 50 80"
            xmlSpace="preserve"
          >
            <polyline
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
            />
          </svg>
        </motion.div>
      </div>

      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: isShow ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={handleLeftClick}
        className="fixed left-3 top-1/2 z-20 cursor-pointer"
        height="40px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect fill="none" height="60" width="60" />
        <motion.line
          x1="25"
          y1="0"
          x2="25"
          y2="50"
          stroke="#fff"
          strokeWidth="4"
          animate={{ rotate: rotation2 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
        />

        {/* Horizontal Line */}
        <motion.line
          x1="0"
          y1="25"
          x2="50"
          y2="25"
          stroke="#fff"
          strokeWidth="4"
          animate={{ rotate: rotation2 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
        />
      </motion.svg>
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: isShow ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={handleRightClick}
        className="fixed right-3 top-1/2 z-20 cursor-pointer"
        height="40px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="40px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect fill="none" height="60" width="60" />
        <motion.line
          x1="25"
          y1="0"
          x2="25"
          y2="50"
          stroke="#fff"
          strokeWidth="4"
          animate={{ rotate: rotation }}
          transition={{ duration: 1, ease: "anticipate" }}
        />

        {/* Horizontal Line */}
        <motion.line
          x1="0"
          y1="25"
          x2="50"
          y2="25"
          stroke="#fff"
          strokeWidth="4"
          animate={{ rotate: rotation }}
          transition={{ duration: 1, ease: "anticipate" }}
        />
      </motion.svg>
    </motion.div>
  );
}

export default Modal;
