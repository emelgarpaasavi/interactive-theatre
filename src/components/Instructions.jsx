import leftArrow from "../assets/Icons/chevron_left_24px.svg";
import rightArrow from "../assets/Icons/chevron_right_24px.svg";
import correct from "../assets/Icons/check_24px.svg";
import wrong from "../assets/Icons/close_24px.svg";
import theThreeBears from "../assets/Actors/The Three Bears.png";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import Sequence from "./Sequence";

export default function Instructions() {
  const showInstructions = useAnimation();
  const [next, setNext] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    async function sequence() {
      await showInstructions.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }

    sequence();

    return () => {
      showInstructions.stop();
    };
  }, [showInstructions]);

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => setNext(true)}>
        {show && (
          <motion.div
            initial={{ x: 15, opacity: 0 }}
            animate={showInstructions}
            exit={{ opacity: 0 }}
            transition={{ exit: { duration: 2 } }}
          >
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <img className="w-12" src={leftArrow} alt="left arrow" />
                  <img className="w-24" src={theThreeBears} alt="three bears" />
                  <img className="w-12" src={rightArrow} alt="right arrow" />
                </div>
                <div className="flex justify-center mt-5 w-[75px] text-white bg-amber-500 pt-1 pb-1 pl-5 pr-5 text-sm rounded-lg">
                  Select
                </div>
              </div>

              <img className="w-12" src={correct} alt="check icon" />
              <img className="w-12" src={wrong} alt="wrong icon" />
            </div>

            <h1 className="mt-10 text-xl text-white">
              As the story unfolds, a selection will pop out! Select the
              appropriate answer to continue the story.
            </h1>

            <motion.button
              onClick={() => setShow(false)}
              whileHover={{ scale: 1.1, backgroundColor: "#BF6601" }}
              animate={{ y: 0,
        opacity: 1,
        transition: { duration: 1 },}}
              transition={{
                type: "spring",
                stiffness: 200,
                exit: { duration: 0.1 },
              }}
              className="mt-10 text-white bg-amber-500 pt-2 pb-2 pl-10 pr-10 text-xl rounded-lg"
            >
              START THE SHOW
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {next && (
        <AnimatePresence mode="wait">
          <Sequence />
        </AnimatePresence>
      )}
    </>
  );
}
