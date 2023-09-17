import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../utils/UseScroll";
import { CText, Mtext } from "./Animation";

function Faster() {
  const [element, controls] = useScroll();

  return (
    <div ref={element} className="w-screen h-auto" data-scroll-section>
      <motion.h1
        variants={CText}
        animate={controls}
        className="text-center text-[3em] pb-[40px]"
      >
        The FASTER Method
      </motion.h1>

      <motion.div
        variants={Mtext}
        animate={controls}
        transition={{ delay: 0.2 }}
        className="flex gap-2 flex-col lg:flex-row items-center w-full"
      >
        <div className="  w-full md:w-[70vw] lg:w-1/3 lg:h-[400px] mb-[100px] bg-[#A30000]">
          <h1 className="text-[3em] text-center ml-10 font-semibold">F</h1>
          <p className="font-semibold text-center text-[1.3em] mx-3">
            Forget about your limitations. These are the preconceived notions
            you believe about yourself. Do your best to keep your self-talk
            positive. Remember this: If you fight for your limitations, you get
            to keep them. Your capabilities are not fixed, and it is possible to
            learn anything.
          </p>
        </div>
        <div className="w-full md:w-[70vw] lg:w-1/3 lg:h-[400px]  mb-[100px] bg-[#A30000]">
          <h1 className="text-[3em] text-center ml-10">A</h1>
          <p className="font-semibold text-center text-[1.3em] mx-3">
            Traditional education has trained many people that learning is a
            passive experience. You sit quietly in class, you do not talk to
            your neighbour, and you consume the information. But learning is not
            a spectator sport. The human brain does not learn as much by
            consumption as it does by creation.
          </p>
        </div>
        <div className=" w-full md:w-[70vw] lg:w-1/3 lg:h-[400px]  mb-[100px] bg-[#A30000]">
          <h1 className="text-[3em] text-center ml-10">S</h1>
          <p className="font-semibold text-[1.3em] mx-3">
            All learning is state-dependent. Your state is a current snapshot of
            your emotions. It is highly influenced by your thoughts (psychology)
            and the physical condition of your body (physiology). Your feelings
            or lack thereof about a subject in a specific situation affect the
            learning process and ultimately the results
          </p>
        </div>
      </motion.div>
      <motion.section
        variants={Mtext}
        animate={controls}
        transition={{ delay: 0.2 }}
        className="flex gap-2 flex-col lg:flex-row w-full items-center mb-[10%]"
      >
        <div className=" w-full md:w-[70vw] lg:w-1/3 lg:h-[400px] mb-[100px] bg-[#A30000]">
          <h1 className="text-[3em] text-center ml-10">T</h1>
          <p className="font-semibold text-center text-[1.3em] mx-3">
            If you want to cut your learning curve dramatically, learn with the
            intention of teaching the information to someone else. When you
            teach something, you get to learn it twice: once on your own and
            then again through educating another person.
          </p>
        </div>
        <div className=" w-full  md:w-[70vw] lg:w-1/3 lg:h-[400px] mb-[100px] bg-[#A30000]">
          <h1 className="text-[3em] text-center ml-10">E</h1>
          <p className="font-semibold text-center text-[1.3em] mx-3">
            We enter important things on our schedule, but most of us do not
            schedule our personal growth and development. If it is not on your
            calendar, there is a good chance it’s not getting done. It’s too
            easy for the day to slip by with you ‘’forgetting’’ to work out your
            body and brain.
          </p>
        </div>
        <div className=" w-full md:w-[70vw] lg:w-1/3 lg:h-[400px] mb-[100px]  bg-[#A30000] ">
          <h1 className="text-[3em] text-center ml-10 ">R</h1>
          <p className="font-semibold text-center text-[1.3em] mx-3">
            Reviewing multiple times and Going over the material at intervals
            increases our brain’s ability to remember it which can be done by
            taking few minutes to review what you read before you began reading,
            in this way your brain will give greater value to the reviewed
            material and will prepare your mind for what is to come next.{" "}
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default Faster;

{
  /* <h1 className="text-[3em] ml-10 font-semibold">F</h1>
<p className="font-semibold text-[1em]">
  The key to sharpen your focus is to eliminate that which
  distracts you. There are three things you want to forget (at
  least temporarily). The key to sharpen your focus is to
  eliminate that which distracts you. There are three things you
  want to forget (at least temporarily). The key to sharpen your
  focus is to eliminate that which distracts you.
</p>

<h1 className="text-[3em] ml-10">T</h1>
              <p className="font-semibold text-[1em]">
                If you want to cut your learning curve dramatically, learn with
                the intention of teaching the information to someone else. When
                you teach something, you get to learn it twice: once on your own
                and then again through educating another person.
              </p>

<h1 className="text-[3em] ml-10">A</h1>
<p className="font-semibold text-[1em]">
  Traditional education has trained many people that learning is a
  passive experience. You sit quietly in class, you do not talk to
  your neighbour, and you consume the information. But learning is
  not a spectator sport. The human brain does not learn as much by
  consumption as it does by creation.
</p>

<h1 className="text-[3em] ml-10">E</h1>
<p className="font-semibold text-[1em]  ">
  The simplest and most powerful personal performance tool is your
  calendar. We enter important things on our schedule, but most of
  us do not schedule our personal growth and development. If it is
  not on your calendar, there is a good chance it’s not getting
  done. It’s too easy for the day to slip by with you
  ‘’forgetting’’ to work out your body and brain.
</p>

<h1 className="text-[3em] ml-10">S</h1>
              <p className="font-semibold text-[1em]">
                All learning is state-dependent. Your state is a current
                snapshot of your emotions. It is highly influenced by your
                thoughts (psychology) and the physical condition of your body
                (physiology). Your feelings or lack thereof about a subject in a
                specific situation affect the learning process and ultimately
                the results
              </p>

<h1 className="text-[3em] ml-10">R</h1>
<p className="font-semibold ">
  One of the best ways to reduce the effects of the forgetting
  curve is to actively recall what you learned with spaced
  repetition. You are better able to retain information by
  reviewing in multiple spread -out sessions. Going over the
  material at intervals increases our brain’s ability to remember
  it. To leverage this principle, before you begin your reading
  session take a moment, if only a few minutes, to actively
  retrieve what you learned the session before. Your brain will
  give greater value to the reviewed material and prime your mind
  for what is to come.{" "}
</p> */
}
