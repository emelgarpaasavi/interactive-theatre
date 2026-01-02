import leftArrow from "../assets/Icons/chevron_left_24px.svg";
import rightArrow from "../assets/Icons/chevron_right_24px.svg";
import correct from "../assets/Icons/check_24px.svg";
import wrong from "../assets/Icons/close_24px.svg";
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { choices } from "../../util/quiz-selection";
import { checkAnswer } from "../../util/check-answer";
export default function Quiz({ quizNum, disableShowQuiz }) {
  const [choiceIndex, setChoiceIndex] = useState(0);
  const [showResult, setShowResult] = useState({
    wrong: false,
    correct: false,
  });

  function handlePrevChoice() {
    if (choiceIndex === 0) {
      setChoiceIndex(choices.length - 1);
    } else {
      setChoiceIndex((prevIndex) => prevIndex - 1);
    }
  }

  function handleNextChoice() {
    if (choiceIndex < choices.length - 1) {
      setChoiceIndex((prevIndex) => prevIndex + 1);
    } else {
      setChoiceIndex(0);
    }
  }

  async function handleResult() {
    if (checkAnswer(quizNum, choiceIndex)) {
      setShowResult((prevResult) => ({ ...prevResult, correct: true }));
      setTimeout(() => {
        setShowResult({ wrong: false, correct: false });
        disableShowQuiz();
      }, 1000);
    } else {
      setShowResult((prevResult) => ({ ...prevResult, wrong: true }));
      setTimeout(() => {
        setShowResult({ wrong: false, correct: false });
      }, 1000);
    }
  }

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, exit: { duration: 3 } }}
      exit={{ opacity: 0 }}
      className="absolute flex items-center justify-center flex-col w-[375px] bottom-[62px]"
    >
      <div className="flex absolute bg-black opacity-75 w-[375px] h-[265px]"></div>
      <div className="z-[0]">
        <div className="flex">
          <motion.img
            onClick={handlePrevChoice}
            whileHover={{ scale: 1.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              exit: { duration: 0.1 },
            }}
            exit={{ opacity: 0 }}
            className="cursor-pointer w-12"
            src={leftArrow}
            alt="left arrow"
          />

          {/* show quiz options */}
          <div className="flex justify-center items-center">
            <img
              className="w-24 relative"
              src={choices[choiceIndex].image}
              alt={choices[choiceIndex].alt}
            />
            {showResult.correct && (
              <motion.img
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                exit={{ opacity: 0 }}
                className="absolute w-[100px]"
                src={correct}
                alt="check"
              />
            )}
            {showResult.wrong && (
              <motion.img
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                exit={{ opacity: 0 }}
                className="absolute w-[100px]"
                src={wrong}
                alt="wrong"
              />
            )}
          </div>

          <motion.img
            onClick={handleNextChoice}
            whileHover={{ scale: 1.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              exit: { duration: 0.1 },
            }}
            exit={{ opacity: 0 }}
            className="cursor-pointer w-12"
            src={rightArrow}
            alt="right arrow"
          />
        </div>
        <motion.button
          onClick={handleResult}
          whileHover={{ scale: 1.1, backgroundColor: "#BF6601" }}
          transition={{
            type: "spring",
            stiffness: 100,
            exit: { duration: 0.1 },
          }}
          className="mt-5 text-white bg-amber-500 pt-1 pb-1 pl-5 pr-5 text-sm rounded-lg"
        >
          Select
        </motion.button>
      </div>
    </motion.div>
  );
}
