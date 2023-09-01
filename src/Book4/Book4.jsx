import React, { useEffect, useRef, useState } from "react";
import Landing from "./Landing";
import Cont from "./Cont.JSX";
import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes } from "react-router-dom";

import { AnimatePresence, LayoutGroup } from "framer-motion";
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

  return (
    <div
      className="h-full flex flex-col "
      ref={scrollContainerRef}
      data-scroll-container
    >
      {/* <LayoutGroup>
        <AnimatePresence mode="wait"> */}

      <Landing />
      <Cont handleImageClick={handleImageClick} imageLoaded={imageLoaded} />
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
