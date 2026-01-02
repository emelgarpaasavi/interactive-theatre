import {
  AnimatePresence,
  useAnimation,
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import welcomeImg from "../assets/Introduction.png";
import { useEffect } from "react";
import { useState } from "react";
import Instructions from "./Instructions";

export default function Introduction() {
  const text = "Welcome to the Goldilocks and the three Bears theatre show!";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const imageIntroControl = useAnimation();
  const showTextIntroControl = useAnimation();
  const buttonControl = useAnimation();
  const [show, setShow] = useState(true);
  const [next, setNext] = useState(false);

  useEffect(() => {
    async function sequence() {
      await imageIntroControl.start({
        y: 0,
        opacity: 1,
        transition: { duration: 3 },
      });

      await showTextIntroControl.start({
        opacity: 1,
      });

      await new Promise((resolve) => {
        animate(count, text.length, {
          duration: 3,
          ease: "linear",
          onComplete: resolve,
        });
      });

      await buttonControl.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
    // start animation
    sequence();

    return () => {
      imageIntroControl.stop();
      showTextIntroControl.stop();
      buttonControl.stop();
    };
  }, [imageIntroControl, showTextIntroControl, buttonControl]);

  return (
    <div className="flex flex-col max-w-md text-center items-center">
      <AnimatePresence mode="wait" onExitComplete={() => setNext(true)}>
        {show && (
          <>
            <motion.img
              initial={{ y: 10, opacity: 0 }}
              // animate: end state
              animate={imageIntroControl}
              exit={{ x: -20, opacity: 0 }}
              transition={{ exit: { duration: 0.1 } }}
              className="w-80 h-auto mb-18 rounded-2xl"
              src={welcomeImg}
              alt="An image of people performing in a stage"
            />

            <motion.h1
              initial={{ opacity: 0 }}
              animate={showTextIntroControl}
              exit={{ x: -20, opacity: 0 }}
              transition={{ exit: { duration: 0.1 } }}
              className="mt-10 text-xl text-white"
            >
              {displayText}
            </motion.h1>

            <motion.button
              onClick={() => {setShow(false)}}
              initial={{ y: 10, opacity: 0 }}
              animate={buttonControl}
              exit={{ x: -20, opacity: 0 }}
              whileHover={{ scale: 1.1, backgroundColor: "#BF6601" }}
              transition={{
                type: "spring",
                stiffness: 200,
                exit: { duration: 0.1 },
              }}
              className="mt-10 text-white bg-amber-500 pt-2 pb-2 pl-10 pr-10 text-xl rounded-lg"
            >
              NEXT
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {next && (
        <AnimatePresence mode="wait">
          <Instructions />
        </AnimatePresence>
      )}
    </div>
  );
}
