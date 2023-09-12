import React, { useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import Ukiyo from "ukiyojs";
import { AnimatePresence, motion } from "framer-motion";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import { useInView } from "react-intersection-observer";

function Cont({
  handleImageClick,
  imageLoaded,
  element1Ref,
  element2Ref,
  element3Ref,
  element4Ref,
}) {
  const myRef = useRef(null);
  useEffect(() => {
    const images = myRef.current.getElementsByClassName("image2");
    new Ukiyo(images);
  }, []);

  return (
    <div className="h-auto w-full  z-50 " data-scroll-section>
      <div
        className=" grid grid-cols-1  lg:grid-cols-3  w-full h-auto "
        ref={myRef}
      >
        <section className="lg:col-start-1 flex flex-col items-center">
          <motion.div
            className="rounded-[25px] h-[50vh]  mb-[40vh]  w-full md:w-[80vw] lg:w-[30vw]  mt-[2em]"
            layoutId="1"
            onClick={() => handleImageClick("1", book1)}
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            data-custom="1"

            //md:mt-[60em]
          >
            <motion.img
              ref={element1Ref}
              src="https://ik.imagekit.io/fluxy/DesignProject/book1.jpg?tr=w-800"
              className="image2 h-[70vh]  w-full  rounded-[25px] object-cover"
              //mt-[70em] mb-[70em]
            />
          </motion.div>
        </section>
        <section className="lg:col-start-2 flex flex-col  items-center ">
          <motion.div
            className="h-[50vh] md:w-[80vw] lg:w-[30vw] w-full mb-[60vh] lg:mt-[210vh] rounded-[25px]"
            layoutId="3"
            onClick={() => handleImageClick("3", book2)}
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            data-custom="2"
          >
            <motion.img
              ref={element3Ref}
              src="https://ik.imagekit.io/fluxy/DesignProject/book2.jpg?tr=w-800"
              className="image2 h-[70vh] w-full rounded-[25px]"
              //mt-0 mb-[110em]
            />
          </motion.div>
        </section>
        <section className="lg:col-start-3 flex flex-col items-center ">
          <motion.div
            className="h-[50vh] md:w-[80vw] lg:w-[30vw] w-full  lg:mt-[100vh] mb-[40vh] lg:mb-[150vh] rounded-[25px]"
            layoutId="2"
            onClick={() => handleImageClick("2", book3)}
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            data-custom="3"
          >
            <motion.img
              ref={element2Ref}
              src="https://ik.imagekit.io/fluxy/DesignProject/book3.jpg?tr=w-800"
              className="image2 h-[70vh] w-[100vw] rounded-[25px]"
              //mt-[40em] mb-[30em]
            />
          </motion.div>
          <motion.div
            className="h-[50vh]  md:w-[80vw] lg:w-[30vw]  w-full mb-[40vh] rounded-[25px]"
            layoutId="4"
            onClick={() => handleImageClick("4", book4)}
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            data-custom="4"
          >
            <motion.img
              ref={element4Ref}
              src="https://ik.imagekit.io/fluxy/DesignProject/book4.jpg?tr=w-800"
              className="image2 h-[70vh] w-[100vw] rounded-[25px]"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Cont;
