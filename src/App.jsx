import { useEffect, useRef, useState } from "react";

import Limitless from "./Limitless/Limitless";

import NavCont from "./Template/NavCont";
import Home from "./Home/Home";

import Main from "./Book3/Main";
import Navigation from "./Home/Navigation";
import Book4 from "./Book4/Book4";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { motion } from "framer-motion";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/navigation"); // Replace '/desired-route' with your desired route
  };
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentURL = location.pathname;
    setIsVisible(currentURL !== "/navigation" && currentURL !== "/");
  }, [location.pathname]);
  return (
    <main className="min-h-screen bg-[#292929]">
      <LayoutGroup>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            onClick={handleClick}
            style={{ display: !isVisible ? "none" : "block" }}
            className="nav-toggle"
          />

          <Routes location={location} key={location.key}>
            <Route
              path="/navigation"
              element={
                <motion.div>
                  <Navigation />
                </motion.div>
              }
            />
            <Route
              path="/"
              element={
                <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                  <Home />{" "}
                </motion.div>
              }
            />
            <Route
              path="/limitless"
              element={
                <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                  <Limitless />
                </motion.div>
              }
            />
            <Route
              path="/temp"
              element={
                <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                  <NavCont />{" "}
                </motion.div>
              }
            />

            <Route
              path="/book"
              element={
                <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                  <Main />
                </motion.div>
              }
            />
            <Route
              path="/main"
              element={
                <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                  <Book4 />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </LayoutGroup>
    </main>
  );
}

export default App;
