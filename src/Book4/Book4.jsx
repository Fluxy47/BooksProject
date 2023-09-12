import React, { useCallback, useEffect, useRef, useState } from "react";
import Landing from "./Landing";
import Cont from "./Cont.JSX";
import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimation,
} from "framer-motion";
import Modal from "./Modal";

function Book4() {
  const scrollContainerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // parallax and smooth scroll
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      multiplier: 0.6, // Adjust this value to control the parallax effect.
    });

    // const animateImageOnScroll = () => {
    //   const scrollPosition = scroll.scroll.instance.scroll.y;
    //   const maxScroll = scroll.scroll.instance.limit.y;
    //   // Calculate the movement percentage based on the scroll position
    //   const percentage = (scrollPosition / maxScroll) * -100;
    //   const nextPercentage = Math.max(Math.min(percentage, 0), -100);

    //   const images = scrollContainerRef.current.getElementsByClassName("image");
    //   for (const image of images) {
    //     image.animate(
    //       {
    //         objectPosition: `${100 + nextPercentage}% center`,
    //       },
    //       { duration: 1200, fill: "forwards" } // You can choose a suitable duration for the animation
    //     );
    //   }
    // };

    // Add the scroll event listener to Locomotive Scroll
    // scroll.on("scroll", animateImageOnScroll);

    // Clean up the Locomotive Scroll instance on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 2000);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  console.log("contL,", selectedImage);
  const handleImageClick = (layoutId, src) => {
    setSelectedImage({ layoutId, src });
  };

  const [activeElement, setActiveElement] = useState(null);
  const [element1Ref, element1InView] = useInView({ threshold: 0.2 });
  const [element2Ref, element2InView] = useInView({ threshold: 0.2 });
  const [element3Ref, element3InView] = useInView({ threshold: 0.2 });
  const [element4Ref, element4InView] = useInView({ threshold: 0.2 });

  const singleElementControls = useAnimation();

  const animationVariants = {
    element1: { left: "55%" },
    element2: { left: "40%" },
    element3: { left: "50%" },
    element4: { left: "40%" },
    default: { left: "50%" },
  };

  useEffect(() => {
    if (element1InView) {
      setActiveElement("element1");
    } else if (element2InView) {
      setActiveElement("element2");
    } else if (element3InView) {
      setActiveElement("element3");
    } else if (element4InView) {
      setActiveElement("element4");
    } else {
      setActiveElement(null);
    }
  }, [element1InView, element2InView, element3InView, element4InView]);
  useEffect(() => {
    // Check if any of the elements is in view
    const anyElementInView =
      element1InView || element2InView || element3InView || element4InView;

    // If at least one element is in view, find the active element
    const activeElement = anyElementInView
      ? element1InView
        ? "element1"
        : element2InView
        ? "element2"
        : element3InView
        ? "element3"
        : "element4"
      : "default"; // Use "default" if none of the elements is in view

    const animationVariant = animationVariants[activeElement];

    singleElementControls.start(animationVariant);
  }, [
    element1InView,
    element2InView,
    element3InView,
    element4InView,
    singleElementControls,
    animationVariants,
  ]);

  return (
    <div
      className="h-full flex flex-col "
      ref={scrollContainerRef}
      data-scroll-container
    >
      {/* <LayoutGroup>
        <AnimatePresence mode="wait"> */}

      <Landing singleElementControls={singleElementControls} />
      <Cont
        handleImageClick={handleImageClick}
        imageLoaded={imageLoaded}
        element1Ref={element1Ref}
        element2Ref={element2Ref}
        element3Ref={element3Ref}
        element4Ref={element4Ref}
      />
      <AnimatePresence>
        {selectedImage && (
          <Modal
            key="modal"
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </AnimatePresence>
    </div>
    // <div className="bg-black h-auto w-full">
    //   <div
    //     className="w-[200px] h-[200px] bg-[blue] mt-[650px] mb-[400px]"
    //     ref={element1Ref}
    //   >
    //     Trigger Element 1
    //   </div>
    //   <div
    //     className="w-[200px] h-[200px] bg-[blue] mb-[400px]"
    //     ref={element2Ref}
    //   >
    //     Trigger Element 2
    //   </div>
    //   <div
    //     className="w-[200px] h-[200px] bg-[blue] mb-[400px]"
    //     ref={element3Ref}
    //   >
    //     Trigger Element 3
    //   </div>
    //   <div
    //     className="w-[200px] h-[200px] bg-[blue] mb-[400px]"
    //     ref={element4Ref}
    //   >
    //     Trigger Element 4
    //   </div>
    //   <motion.div className="animated-element" animate={singleElementControls}>
    //     Animated Element
    //   </motion.div>
    // </div>
  );
}

export default Book4;
