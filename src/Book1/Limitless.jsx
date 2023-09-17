import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import Lerp from "./Lerp";
import Model from "./Model";
import model from "../assets/model.png";
import Card from "./Card";
import Faster from "./Faster";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";

function Limitless() {
  const myRef = useRef(null);
  const secondRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: myRef.current,
      smooth: true,
      multiplier: 0.6,
      inertia: 0.6, // Add inertia effect. Adjust the value as needed (0.0 - 1.0).
      getDirection: true, // Enable drag behavior for direction detection.
    });

    scroll.on("call", (func, dir, obj) => {
      const { el } = obj;

      if (func === "updateBg") {
        const bg = el.getAttribute("data-bg");
        const color = el.getAttribute("data-color");
        const borderColor = el.getAttribute("data-border-color");

        if (dir === "enter") {
          myRef.current.style.transition =
            "background-color 0.5s ease-in, color 0.5s ease-in, opacity 0.3s ease-out";
          myRef.current.style.backgroundColor = bg;
          myRef.current.style.color = color;

          secondRef.current.style.transition =
            "border-color 0.5s ease-in, color 0.5s ease-in, opacity 0.3s ease-out"; // Change 'background-color' to 'border-color'
          secondRef.current.style.borderColor = borderColor; // Set the border color instead of the background color
          secondRef.current.style.color = color;
        }
      }
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div
      className="h-auto flex flex-col justify-evenly "
      ref={myRef}
      data-scroll-container
    >
      <div
        ref={secondRef}
        className="fixed w-full h-full top-0 left-0 border-[5px]  pointer-events-none z-[999]"
      />
      <Banner />
      <Lerp />
      <Model />
      <Card />
      <Faster />
    </div>
  );
}

export default Limitless;
