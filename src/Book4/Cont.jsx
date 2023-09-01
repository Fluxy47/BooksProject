import React, { useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import Ukiyo from "ukiyojs";
import { AnimatePresence, motion } from "framer-motion";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";

function Cont({ handleImageClick, imageLoaded }) {
  const myRef = useRef(null);
  useEffect(() => {
    if (imageLoaded) {
      const images = myRef.current.getElementsByClassName("image2");
      new Ukiyo(images);
    }
  }, [imageLoaded]);

  const blurhash = "LEHV6nWB2yk8pyo0adR*.7kCMdnj";
  const width = "100%";
  const height = "70vh";

  return (
    <div className="h-auto w-full bg-[#C9B2A6] z-50 " data-scroll-section>
      <div
        className=" grid grid-cols-1  md:grid-cols-3  w-full h-auto "
        ref={myRef}
      >
        <section className="md:col-start-1 flex flex-col ">
          <motion.div
            className="  rounded-[25px] h-[50vh] mb-[40vh]  w-full md:w-[60vw] lg:w-auto  mt-[2em]"
            layoutId="1"
            onClick={() => handleImageClick("1", book1)}
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            data-custom="1"

            //md:mt-[60em]
          >
            {imageLoaded ? (
              <motion.img
                src={book1}
                className="image2 h-[70vh] w-full rounded-[25px] object-cover"
                //mt-[70em] mb-[70em]
              />
            ) : (
              <Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                width="100%"
                height="70vh"
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            )}
          </motion.div>
        </section>
        <section className="md:col-start-2 flex flex-col  items-center ">
          <motion.div
            className="h-[50vh] md:w-[60vw] lg:w-auto w-full mb-[60vh] md:mt-[210vh] rounded-[25px]"
            layoutId="3"
            onClick={() => handleImageClick("3", book2)}
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            data-custom="2"
          >
            {imageLoaded ? (
              <motion.img
                src={book2}
                className="image2 h-[70vh] w-full rounded-[25px]"
                //mt-0 mb-[110em]
              />
            ) : (
              <Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                width="100%"
                height="70vh"
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            )}
          </motion.div>
        </section>
        <section className="md:col-start-3 flex flex-col  ">
          <motion.div
            className="h-[50vh] md:w-[60vw] lg:w-auto w-full  md:mt-[100vh] mb-[40vh] md:mb-[150vh] rounded-[25px]"
            layoutId="2"
            onClick={() => handleImageClick("2", book3)}
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            data-custom="3"
          >
            {imageLoaded ? (
              <motion.img
                src={book3}
                className="image2 h-[70vh] w-[100vw] rounded-[25px]"
                //mt-[40em] mb-[30em]
              />
            ) : (
              <Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                width="100%"
                height="70vh"
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            )}
          </motion.div>
          <motion.div
            className="h-[50vh]  md:w-[60vw] lg:w-auto  w-full mb-[40vh] rounded-[25px]"
            layoutId="4"
            onClick={() => handleImageClick("4", book4)}
            style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.5)" }}
            data-custom="4"
          >
            {imageLoaded ? (
              <motion.img
                src={book4}
                className="image2 h-[70vh] w-[100vw] rounded-[25px]"
              />
            ) : (
              <Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                width="100%"
                height="70vh"
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            )}
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Cont;
