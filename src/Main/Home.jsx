import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/navigation"); // Replace '/desired-route' with your desired route
  };
  return (
    <motion.div
      initial={{ borderRadius: "0.75rem" }}
      animate={{ borderRadius: 0 }}
      layoutId="Main-Image1"
      className=" bg-black   h-screen w-full rounded-xl"
      transition={{
        delay: 0.4,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-grad  text-2xl absolute top-11 left-14"
      >
        Home
      </motion.h1>
      <motion.img
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          delay: 1.2,
          ease: [0.6, 0.01, 0.05, 0.95],
          duration: 0.7,
        }}
        src="https://ik.imagekit.io/fluxy/DesignProject/art-2.png?tr=w-1200"
        className="absolute top-2 right-0 w-[50vw] hidden lg:block h-[90vh] -rotate-1 pointer-events-none"
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="flex  w-[100vw] lg:w-[50vw] lg:ml-[4%] ml-0  absolute top-1/2 -translate-y-1/2 "
      >
        <div className="flex flex-col gap-y-4  items-center justify-center">
          <h1 className="text-4xl lg:text-4xl md:text-5xl text-center font-semibold  ">
            Reading is{" "}
            <span
              href="#"
              data-letters="essential"
              className="link link--kukuri"
            >
              essential
            </span>{" "}
            for those who seek to rise above the{" "}
            <span
              href="#"
              data-letters=" Ordinary"
              className="link link--kukuri"
            >
              Ordinary
            </span>
          </h1>
          <p className="text-center lg:text-xl md:text-2xl">
            Unlock your potential,Transform your life.Start here.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleClick}
            className="bg-[#1F8581] w-[130px] h-[50px] rounded-3xl text-white font-semibold"
          >
            Explore
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Home;
