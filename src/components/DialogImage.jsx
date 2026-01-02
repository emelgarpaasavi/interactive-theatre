import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useEffect } from "react";

export default function DialogImage({ img, actor }) {
  const showDialogImageControl = useAnimation();

  useEffect(() => {
    async function sequence() {
      await showDialogImageControl.start({
        opacity: 1,
      });
    }

    sequence();

    return () => {
      showDialogImageControl.stop();
    };
  }, [showDialogImageControl]);

  return (
    <>
      <motion.img
        src={img}
        initial={{ opacity: 0 }}
        animate={showDialogImageControl}
        className="w-[150px] h-[150px]"
        alt={actor}
      />
      <h1>{actor}</h1>
    </>
  );
}
