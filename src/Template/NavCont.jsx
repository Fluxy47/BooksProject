import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { TemArr } from "../utils/constant";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";
import { Blurhash } from "react-blurhash";

function NavCont() {
  const [selected, setSelected] = useState(null);
  const [SelcAnimation, setSelcAnimation] = useState(false);
  const [xOffset, setXOffset] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const clickFunc = (item) => {
    setSelected(item);
    setSelcAnimation(true);
    setIsShow(true);
  };

  const clickFunc2 = () => {
    setTimeout(() => {
      setSelected(null);
    }, 1000);
    setIsShow(false);
    setSelcAnimation(false);
  };

  const trackRef = useRef(null);
  const mouseDownAtRef = useRef(0);
  const prevPercentageRef = useRef(0);

  const handleOnDown = (e) => {
    mouseDownAtRef.current = e.clientX;
  };

  const handleOnUp = () => {
    mouseDownAtRef.current = 0;
    prevPercentageRef.current = trackRef.current.dataset.percentage;
  };

  const handleOnMove = (e, isTouch = false) => {
    if (mouseDownAtRef.current === 0) return;

    const mouseDelta = parseFloat(mouseDownAtRef.current) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    // Calculate the percentage of drag movement
    const percentage = (mouseDelta / maxDelta) * -100;

    // Define the maximum allowed percentage value for dragging right (30% to the right)
    const maxPercentage = 0;

    // Calculate the next percentage position with the restriction
    const nextPercentageUnconstrained =
      parseFloat(prevPercentageRef.current) + percentage;

    // Define the minimum allowed percentage value for dragging left (-50% to the left)
    const minPercentage = -70;

    // Calculate the next percentage position with both restrictions
    const nextPercentage = Math.min(
      Math.max(nextPercentageUnconstrained, minPercentage),
      maxPercentage
    );

    trackRef.current.dataset.percentage = nextPercentage;
    setXOffset(nextPercentage);
    // prevPercentageRef.current =
    //   parseFloat(trackRef.current.dataset.percentage) || 0;
  };

  useEffect(() => {
    if (!isNaN(prevPercentageRef.current)) {
      // Animate the flexbox container using xOffset state
      trackRef.current.animate(
        {
          transform: `translate(${xOffset}%, -50%)`,
        },
        { duration: 2200, fill: "forwards", easing: "ease-in-out" } // Smooth animation
      );

      const images = trackRef.current.getElementsByClassName("image");
      for (const image of images) {
        // Animate the images using xOffset state
        image.animate(
          {
            objectPosition: `${100 + xOffset}% center`,
          },
          { duration: 2200, fill: "forwards", easing: "ease-in-out" } // Smooth animation
        );
      }
    }
  }, [xOffset]);

  useEffect(() => {
    // Attach drag events to the entire document
    document.addEventListener("mousedown", handleOnDown);
    document.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
    document.addEventListener("mouseup", handleOnUp);
    document.addEventListener("touchend", (e) => handleOnUp(e.touches[0]));
    document.addEventListener("mousemove", handleOnMove);
    document.addEventListener("touchmove", (e) =>
      handleOnMove(e.touches[0], true)
    );

    return () => {
      // Remove the drag events when the component unmounts
      document.removeEventListener("mousedown", handleOnDown);
      document.removeEventListener("touchstart", (e) =>
        handleOnDown(e.touches[0])
      );
      document.removeEventListener("mouseup", handleOnUp);
      document.removeEventListener("touchend", (e) => handleOnUp(e.touches[0]));
      document.removeEventListener("mousemove", handleOnMove);
      document.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0], true)
      );
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showText, setShowText] = useState(false);
  const [isHoveredLongEnough, setIsHoveredLongEnough] = useState(false);
  const [hoverStartTime, setHoverStartTime] = useState(null);

  const initialMount = useRef(true);

  const handleHover = (index) => {
    console.log("room:", index);
    setHoverStartTime(new Date().getTime());
    setHoveredIndex(index);
    setShowText(true);
  };

  const handleHoverEnd = () => {
    const hoverDuration = new Date().getTime() - hoverStartTime;
    if (hoverStartTime && hoverDuration >= 2000) {
      setIsHoveredLongEnough(true);
    }
    setHoveredIndex(null);
  };

  useEffect(() => {
    console.log("this runs");
    if (isHoveredLongEnough) {
      // Do something when the user hovers for 2 seconds or more
      setShowText(true);
      console.log("done");

      // Reset isHoveredLongEnough to false after the animation is displayed
    }
  }, [isHoveredLongEnough]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const blurhash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";
  const width = 400;
  const height = 300;

  const handleImageLoad = () => {
    // Update the state to indicate that the image has loaded
    setImageLoaded(true);
  };

  return (
    <motion.div
      layoutId="Main-Image3"
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.4, delay: 0.4 }}
      className="h-screen w-screen absolute bg-gradient-to-b from-[#361b34] to-[#03051a] overflow-hidden m-0 rounded-[25px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.5 }}
        ref={trackRef}
        className="flex w-[320vmin] gap-[4vmin] absolute left-1/2 top-1/2 overflow-hidden"
        style={{ transform: "translate(0%,-50%)" }}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        {TemArr.map((item, index) => {
          const layoutId = SelcAnimation ? "SecondAnimation" : item.id;

          return (
            <motion.div
              style={{
                position: SelcAnimation ? "fixed" : "relative",
                zIndex: SelcAnimation ? 10 : 1,
                imageRendering: "auto",
              }}
              layout
              key={item.id}
              layoutId={layoutId}
              onClick={() => clickFunc(item)}
              animate={{ y: SelcAnimation ? -100 : 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.div
                className="border-2 border-white"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverEnd}
              >
                {!imageLoaded && (
                  <Blurhash
                    hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                    width="40vmin"
                    height="56vmin"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                )}
                <motion.img
                  className="image"
                  style={{
                    imageRendering: "auto",
                    display: imageLoaded ? "block" : "none",
                  }}
                  src={item.src}
                  onLoad={handleImageLoad}
                />
                <AnimatePresence mode="sync">
                  {hoveredIndex === index && showText && (
                    <motion.div
                      className="absolute top-0 left-0 bg-black h-full w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.4,
                        ease: "easeInOut", // Replace "easeOut" with the desired ease function
                      }}
                    >
                      <motion.div
                        className="text-[1.5em] absolute z-[400] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                      >
                        {item.text}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
      <AnimatePresence>
        {selected && (
          <Modal clickFunc2={clickFunc2} isShow={isShow} selected={selected} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default NavCont;
