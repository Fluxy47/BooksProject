import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Ukiyo from "ukiyojs";
function Testp() {
  const myRef = useRef(null);
  const imageRef = useRef([]);
  useEffect(() => {
    imageRef.current.forEach((imageElement) => {
      new Ukiyo(imageElement);
    });

    new LocomotiveScroll({
      el: myRef.current,
      smooth: true, // Enable smooth scrolling
      multiplier: 0.6,
      // Add any additional configuration options as needed
    });
  }, []);

  return (
    <div className="bg-white" ref={myRef} data-scroll-container>
      <h1 className="text-center text-[6em] mb-[10em]">ukiyo testing</h1>
      <img
        ref={(element) => (imageRef.current[0] = element)}
        className="image ml-[40em]"
        src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
      <h1 className="text-center text-[6em] mb-[30em]">ukiyo testing</h1>
    </div>
  );
}

export default Testp;
