import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Banner from "./Center";
import SecondPage from "./SecondPage";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { TemArr2 } from "../utils/constant";
import Modal from "./Modal";
import "./styles.css";

function Main() {
  const [flexboxPosition, setFlexboxPosition] = useState(-170); // Initialize with 0 (leftmost position)

  const [currentIndex, setCurrentIndex] = useState(1);
  console.log("sakaka", currentIndex);
  const [selected, setSelected] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef(null);

  const handleRightClick = () => {
    if (currentIndex < myarr.length) {
      setCurrentIndex(currentIndex + 1);
    }
    setRotation((prevRotation) => prevRotation + 90);

    setFlexboxPosition((prevPosition) => {
      const newPosition = prevPosition - 420;
      return Math.max(-1838, Math.min(-158, newPosition));
    });

    clearTimeout(timerRef.current);

    // // Set a new timer for 1 second
    timerRef.current = setTimeout(() => {
      // Perform the functionality based on the number of clicks

      setTimeout(() => {
        setSelected(true);
      }, 500);

      setTimeout(() => {
        setSelected(false);
      }, 400);
    }, 1000);
  };

  const handleLeftClick = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }

    setRotation2((prevRotation) => prevRotation - 90);

    setFlexboxPosition((prevPosition) => {
      const newPosition = prevPosition + 420;
      return Math.max(-1838, Math.min(-158, newPosition));
    });

    clearTimeout(timerRef.current);

    // // Set a new timer for 1 second
    timerRef.current = setTimeout(() => {
      // Perform the functionality based on the number of clicks

      setTimeout(() => {
        setSelected(true);
      }, 1700);

      setTimeout(() => {
        setSelected(false);
      }, 500);

      //Reset click count after the functionality is executed
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setSelected(true);
    }, 2500);
  }, []);

  // useEffect(() => {
  //   // This useEffect runs whenever "clicking" changes
  //   if (clicking) {
  //     setTimeout(() => {
  //       setSelected(true);
  //     }, 2000);
  //   }
  // }, [clicking]);

  const myarr = [
    { id: 1, text: "Introduction" },
    { id: 2, text: "Techniques in Handling People" },
    { id: 3, text: "Six ways to Make People Like You" },
    {
      id: 4,
      text: "Win People to Your Way of Thinking",
    },
    {
      id: 5,
      text: "Be a Leader: How to Change People Without Giving Offense or Arousing Resentment",
    },
  ];

  return (
    <motion.div
      layoutId="Main-Image5"
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
      className="h-screen w-full gradient overflow-hidden rounded-xl"
    >
      <motion.div className="h-screen w-screen absolute   overflow-hidden m-0  ">
        <svg
          className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          height="60px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 50 50"
          width="60px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect fill="none" height="60" width="60" />
          <defs>
            <style>
              {`.uuid-77381f68-35b8-4bc0-824f-a852b0f84b43{fill:#fff;}`}
            </style>
          </defs>
          <g id="uuid-d633d9dd-700b-44ca-a07b-8443b15a97a4">
            <polygon
              className="uuid-77381f68-35b8-4bc0-824f-a852b0f84b43"
              points="32 14 32 18 18 18 18 32 14 32 14 18 0 18 0 14 14 14 14 0 18 0 18 14 32 14"
            />
          </g>
        </svg>

        <div className="flex justify-center items-center h-screen w-[170vw] overflow-hidden">
          <motion.svg
            whileHover={{ scale: 1.05 }}
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
              animate={{ rotate: rotation2 }}
              transition={{ duration: 1, ease: "anticipate" }}
            />
          </motion.svg>

          <motion.svg
            // animate={{ rotate: firstButton ? 90 : 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
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

          <AnimatePresence mode="sync">
            <motion.div
              className="flex  gap-[100px] absolute left-1/2 overflow-hidden"
              animate={{ x: flexboxPosition }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            >
              {myarr.map((item, index) => (
                <motion.div
                  className="card h-[390px] w-[20em] overflow-hidden"
                  key={item.id} // Add key prop to each item
                  layoutId={item.id}
                  transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] }}
                  style={{ willChange: "transform, opacity" }} // Apply will-change
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    {item.text}
                  </motion.p>
                  <div className="background">
                    <div className="tiles">
                      <div className="tile tile-1"></div>
                      <div className="tile tile-2"></div>
                      <div className="tile tile-3"></div>
                      <div className="tile tile-4"></div>

                      <div className="tile tile-5"></div>
                      <div className="tile tile-6"></div>
                      <div className="tile tile-7"></div>
                      <div className="tile tile-8"></div>

                      <div className="tile tile-9"></div>
                      <div className="tile tile-10"></div>
                    </div>

                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                  </div>{" "}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selected && (
            <Modal
              currentIndex={currentIndex}
              setSelected={setSelected}
              setCurrentIndex={setCurrentIndex}
              setFlexboxPosition={setFlexboxPosition}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Main;
