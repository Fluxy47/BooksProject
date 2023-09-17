import React, { useCallback, useEffect, useRef, useState } from "react";
import Landing from "./Landing";
import Cont from "./Cont";
import LocomotiveScroll from "locomotive-scroll";

import { useInView } from "react-intersection-observer";
import { AnimatePresence, useAnimation } from "framer-motion";
import Modal from "./Modal";

function Book4() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // parallax and smooth scroll
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.4,
      easing: 0.1,
      lerp: 0.1,
    });
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
  );
}

export default Book4;
