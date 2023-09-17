import { useEffect, useState } from "react";
import Limitless from "./Book1/Limitless";

import NavCont from "./Book2/NavCont";
import Home from "./Main/Home";

import Main from "./Book3/Main";
import Navigation from "./Main/Navigation";
import Book4 from "./Book4/Book4";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Navigation"); // Replace '/desired-route' with your desired route
  };
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentURL = location.pathname;
    setIsVisible(currentURL !== "/Navigation" && currentURL !== "/");
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-gradient-to-bl from-[#5C3333] to-[#03051a]">
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
          >
            {" "}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6C4D37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line color="red" x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </motion.div>

          <Routes location={location} key={location.key}>
            <Route
              path="/Navigation"
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
              path="/Limitless"
              element={
                <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                  <Limitless />
                </motion.div>
              }
            />
            <Route
              path="/Atomic-Habit"
              element={
                <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                  <NavCont />{" "}
                </motion.div>
              }
            />

            <Route
              path="/How-to-Win-Friends-and-Influence-People"
              element={
                <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                  <Main />
                </motion.div>
              }
            />
            <Route
              path="/Mindset:The-New-Psychology-of-Success"
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
