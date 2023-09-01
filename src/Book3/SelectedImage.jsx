import { useState } from "react";
import { motion } from "framer-motion";

const SelectedImage = ({ src }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen((prevState) => !prevState);
  };

  return (
    <motion.div
      animate={{
        width: isFullScreen ? "100vw" : "auto",
        height: isFullScreen ? "100vh" : "auto",
      }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6 }}
      style={{
        position: isFullScreen ? "fixed" : "static",
        top: 0,
        left: 0,
        zIndex: isFullScreen ? 1 : 0,
        pointerEvents: isFullScreen ? "auto" : "none",
      }}
      onClick={toggleFullScreen}
    >
      <motion.img className="image3" src={src} />
    </motion.div>
  );
};
export default SelectedImage;
