import {
  animate,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

export default function DialogText({ text, setDialog }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const showDialogControl = useAnimation();

  useEffect(() => {
    let timer;
    async function sequence() {
      await showDialogControl.start({
        opacity: 1,
      });

      //   text animation
      await new Promise((resolve) => {
        animate(count, text.length, {
          duration: 2,
          ease: "linear",
          onComplete: resolve,
        });
      });

      timer = setTimeout(() => {
        setDialog();
      }, 1000);
    }

    sequence();

    return () => {
      showDialogControl.stop();
      clearTimeout(timer);
    };
  }, [showDialogControl]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={showDialogControl}
      className="text-xl text-left"
    >
      {displayText}
    </motion.h1>
  );
}
