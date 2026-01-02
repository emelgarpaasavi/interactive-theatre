import outsideCottageScene from "../assets/Scenes/In Front Of The Cottage.png";
import insideCottageScene from "../assets/Scenes/Inside The Cottage.png";
import curtains from "../assets/Scenes/Curtains.png";
import theThreeBears from "../assets/Actors/The Three Bears.png";
import goldilocksLeftPov from "../assets/Actors/Goldilocks Left.png";
import goldilocksRightPov from "../assets/Actors/Goldilocks Right.png";

import { dialog } from "../../util/dialog";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import DialogImage from "./DialogImage";
import DialogText from "./DialogText";
import Quiz from "./Quiz";
import End from "./End";

export default function Sequence() {
  const [dialogIndex, setDialogIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showSequence, setShowSequence] = useState(true);
  const [showEndCredits, setShowEndCredits] = useState(false);
  const sequenceControl = useAnimation();
  const moveBears = useAnimation();
  const moveLeftFacingGoldilocks = useAnimation();
  const moveRightFacingGoldilocks = useAnimation();
  const rollDownCottageScene = useAnimation();

  useEffect(() => {
    async function sequence() {
      // add movements when it's the 1st dialog
      if (dialogIndex === 0) {
        await sequenceControl.start({
          opacity: 1,
          transition: { duration: 3 },
        });

        await moveBears.start({
          x: -300,
          transition: { duration: 5 },
        });
      }

      // add movements when it's the 11th dialog
      if (dialogIndex === 10) {
        await moveBears.start({
          opacity: 0,
          x: -100,
          transition: { type: "tween", duration: 3 },
        });
      }

      // add movements when it's the 12th dialog
      if (dialogIndex === 11) {
        await moveLeftFacingGoldilocks.start({
          x: -175,
          transition: { duration: 5 },
        });
      }

      // add movements when it's the 14th dialog
      if (dialogIndex === 13) {
        await rollDownCottageScene.start({
          opacity: 1,
          y: 243,
          transition: { duration: 3 },
        });
      }

      // add movements when it's the 16th dialog
      if (dialogIndex === 15) {
        await moveLeftFacingGoldilocks.start({
          x: -230,
          transition: { duration: 5 },
        });
      }

      // add movements when it's the 24th dialog
      if (dialogIndex === 23) {
        await moveLeftFacingGoldilocks.start({
          x: -300,
          transition: { duration: 3 },
        });
      }

      // add movements when it's the 32nd dialog
      if (dialogIndex === 31) {
        await moveLeftFacingGoldilocks.start({
          opacity: 0,
        });
        await moveRightFacingGoldilocks.start({
          opacity: 1,
          x: 235,
          transition: { duration: 5 },
        });
      }

      // add movements when it's the 38th dialog
      if (dialogIndex === 37) {
        await moveRightFacingGoldilocks.start({
          rotate: 90,
          y: -10,
        });
      }

      // add movements when it's the 39th dialog
      if (dialogIndex === 38) {
        await moveBears.start({
          x: 50,
          opacity: 1,
          transition: { duration: 3 },
        });
      }

      // add movements when it's the 49th dialog
      if (dialogIndex === 48) {
        await moveBears.start({
          x: 200,
          transition: { duration: 5 },
        });
      }

      // add movements when it's the 54th dialog
      if (dialogIndex === 53) {
        await moveRightFacingGoldilocks.start({
          rotate: 0,
          y: 4,
        });
      }

      // add movements when it's the 55th dialog
      if (dialogIndex === 54) {
        await moveRightFacingGoldilocks.start({
          x: 300,
          opacity: 0,
          transition: { duration: 3 },
        });
      }
    }

    sequence();

    return () => {
      sequenceControl.stop();
      moveBears.stop();
      moveLeftFacingGoldilocks.stop();
      rollDownCottageScene.stop();
      moveRightFacingGoldilocks.stop();
    };
  }, [
    dialogIndex,
    sequenceControl,
    moveBears,
    moveLeftFacingGoldilocks,
    rollDownCottageScene,
    moveRightFacingGoldilocks,
  ]);

  function setDialog() {
    if (dialogIndex < dialog.length - 1) {
      if (
        dialogIndex === 2 ||
        dialogIndex === 14 ||
        dialogIndex === 31 ||
        dialogIndex === 44
      ) {
        setShowQuiz(true);
      } else {
        setDialogIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      setShowSequence(false);
    }
  }

  function setDisableShowQuiz() {
    setShowQuiz(false);
    setDialogIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setShowEndCredits(true)}
      >
        {showSequence && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={sequenceControl}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-center">
              <div className="relative w-[375px]">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={rollDownCottageScene}
                  className="w-full z-0 absolute bottom-[240px]"
                  src={insideCottageScene}
                  alt="Inside Of The Cottage scene"
                />
                <img
                  className="w-full z-11"
                  src={outsideCottageScene}
                  alt="In Front Of The Cottage scene"
                />
                <div>
                  <motion.img
                    initial={{ x: 200 }}
                    animate={moveBears}
                    className="w-24 absolute bottom-1"
                    src={theThreeBears}
                    alt="three bears"
                  />
                </div>

                <div>
                  <motion.img
                    animate={moveLeftFacingGoldilocks}
                    className="w-24 absolute bottom-[-5px] right-[-30px] z-12"
                    src={goldilocksLeftPov}
                    alt="goldilocks facing left"
                  />
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={moveRightFacingGoldilocks}
                    className="w-24 absolute bottom-[-5px] right-[265px] z-12"
                    src={goldilocksRightPov}
                    alt="goldilocks facing right"
                  />
                </div>

                <img className="absolute top-0" src={curtains} alt="curtains" />
                {/* Selection Quiz */}
                {showQuiz && (
                  <AnimatePresence mode="wait">
                    <Quiz
                      quizNum={dialogIndex}
                      disableShowQuiz={setDisableShowQuiz}
                    />
                  </AnimatePresence>
                )}
              </div>
            </div>

            <div className="bg-white flex mt-[50px] w-[375px] h-[200px]">
              <>
                <div>
                  <AnimatePresence mode="wait">
                    <DialogImage
                      key={dialog[dialogIndex].id}
                      img={dialog[dialogIndex].image}
                      actor={dialog[dialogIndex].actor}
                    />
                  </AnimatePresence>
                </div>
                <div className="p-[20px] w-[300px]">
                  <AnimatePresence mode="wait">
                    <DialogText
                      key={dialog[dialogIndex].id}
                      text={dialog[dialogIndex].dialog}
                      setDialog={setDialog}
                    />
                  </AnimatePresence>
                </div>
              </>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showEndCredits && (
        <AnimatePresence mode="wait">
          <End />
        </AnimatePresence>
      )}
    </>
  );
}
