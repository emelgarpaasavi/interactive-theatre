import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import endImage from "../assets/The End.png";
import Introduction from "./Introduction";

export default function End() {
  const [showEndCredits, setShowEndCredits] = useState(true);
  const [restart, setRestart] = useState(false);

  function handleRestart() {
    setShowEndCredits(false);
    setRestart(true);
  }

  return (
    <>
      {showEndCredits && (
        <div className="flex flex-col max-w-md text-center items-center">
          <motion.img
            initial={{ y: 10, opacity: 0 }}
            // animate: end state
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 3 },
            }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ exit: { duration: 0.1 } }}
            className="w-80 h-auto mb-18 rounded-2xl"
            src={endImage}
            alt="An image of people clapping to a stage"
          />

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            // animate: end state
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 3 },
            }}
            exit={{ x: -20, opacity: 0 }}
            className="text-white mb-18"
          >
           2026 © Emelgar Paasa VI
          </motion.p>

          <motion.button
            onClick={handleRestart}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            exit={{ x: -20, opacity: 0 }}
            whileHover={{ scale: 1.1, backgroundColor: "#BF6601" }}
            transition={{
              type: "spring",
              stiffness: 200,
              exit: { duration: 0.1 },
            }}
            className="mt-10 text-white bg-amber-500 pt-2 pb-2 pl-4 pr-4 text-xl rounded-full"
          >
            RESTART ↺
          </motion.button>
        </div>
      )}

      {restart && (
        <AnimatePresence mode="wait">
          <Introduction />
        </AnimatePresence>
      )}
    </>
  );
}
