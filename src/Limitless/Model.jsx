import React from "react";
import model from "../assets/model.png";
import { motion } from "framer-motion";
import { Mtext, MHeading, MImage } from "./Animation";
import { useScroll } from "../utils/UseScroll";

function Model() {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="h-auto w-full  lg:mt-0 mb-[20vh] md:mb-[50px]    "
      ref={element}
      data-scroll-section
    >
      <div className="flex w-full">
        <motion.div
          className=" w-2/5 h-screen hidden lg:block"
          variants={MImage}
          animate={controls}
          transition={{
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96], // Custom easing function (easeInOut)
          }}
        >
          <img src={model} className="w-full h-[80%] " />
        </motion.div>
        <div className=" w-full lg:w-3/5">
          <motion.h1
            className="text-center text-[2em] pb-0 "
            variants={MHeading}
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            The 3M Model
          </motion.h1>
          <motion.p
            variants={Mtext}
            animate={controls}
            className="text-center  font-semibold mb-[10px]"
          >
            Jim Kwik advises addressing three areas to live a limitless life and
            unlock your brain's potential: Mindset, Motivation, and Method.
            Overcoming limitations in these areas leads to achieving your full
            potential.
          </motion.p>
          <motion.p
            variants={Mtext}
            animate={controls}
            transition={{ delay: 0.2 }}
            className="text-center text-[1.1em] text-[silver] mb-[10px]"
          >
            The <strong className="text-white">Mindset</strong>, representing
            our beliefs about ourselves and the world, plays a significant role
            in our achievements. A growth mindset, open to learning and
            embracing challenges, can lead to higher levels of success as it
            believes in the development of talent. On the other hand, a fixed
            mindset avoids challenges and views effort as futile, limiting its
            potential for achievement. Our mindsets heavily influence our
            progress, and overcoming limiting beliefs is vital to reaching our
            full potential.
          </motion.p>
          <motion.p
            variants={Mtext}
            animate={controls}
            transition={{ delay: 0.4 }}
            className="text-center text-[1.1em] text-[silver] mb-[10px]"
          >
            <strong className="text-white">Motivation</strong> is the driving
            force behind our actions, providing us with a sense of purpose and
            reason. Without a clear purpose, actions become meaningless and lack
            energy and drive. Simon Sinek's "Start with Why" emphasizes the
            importance of articulating our beliefs (our "why") to attract others
            and create meaning in what we do. Goals are what we want to achieve,
            while purpose is the reason behind those goals, guiding our
            decisions and behavior, and giving our actions true meaning.
            Aligning our values and thinking with a strong purpose leads to more
            rewarding outcomes.
          </motion.p>
          <motion.p
            variants={Mtext}
            animate={controls}
            transition={{ delay: 0.6 }}
            className="text-center text-[1.1em] text-[silver]"
          >
            <strong className="text-white">Method</strong> represents the
            specific strategies and tactics used to achieve our goals and
            manifest our purpose. Even with the right mindset and motivation,
            having a well-defined method is essential for effective goal
            accomplishment. It involves learning and implementing a step-by-step
            plan that leads us towards our objectives. The combination of
            Mindset, Motivation, and Method creates a "limitless mind," as
            described by Kwik.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default Model;

{
  /* <motion.p
            className=" text-[1em] lg:text-[1.2em] text-white text-center mx-2"
            variants={Mtext}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ delay: 0.2 }}
          >
            The 3 M Model, as introduced by Jim Kwik in "Limitless: Upgrade Your
            Brain, Learn Anything Faster, and Unlock Your Exceptional Life," is
            a framework that encompasses three key elements: Mindset,
            Motivation, and Methods. Here's a brief explanation of each
            component:
          </motion.p>
          <motion.p
            className="text-[1em] md:text-[1.2em] text-white text-center mx-2"
            variants={Mtext}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ delay: 0.3 }}
          >
            Mindset: Mindset refers to the beliefs and attitudes you hold about
            your abilities and potential for growth. It involves cultivating a
            positive outlook, embracing challenges as opportunities for growth,
            and adopting a belief that you can develop your skills and
            intelligence. By cultivating a growth mindset, you can overcome
            self-doubt, expand your comfort zone, and open yourself to new
            possibilities.
          </motion.p>
          <motion.p
            className="text-[1em] md:text-[1.2em] text-white text-center mx-2"
            variants={Mtext}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ delay: 0.4 }}
          >
            Motivation: Motivation is the driving force behind your actions and
            persistence. It involves understanding your purpose, identifying
            your goals, and finding the intrinsic motivation to pursue them. By
            connecting your learning endeavors to a meaningful "why" and fueling
            your passion, you can stay committed, persevere through challenges,
            and maintain the necessary drive to achieve your desired outcomes.
          </motion.p> */
}
