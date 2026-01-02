function checkAnswer(quizNum, choice) {
  if (quizNum === 2 && choice === 2) {
    return true;
  } else if (quizNum === 14 && choice === 1) {
    return true;
  } else if (quizNum === 31 && choice === 0) {
    return true;
  } else if (quizNum === 44 && choice === 3) {
    return true;
  } else {
    return false;
  }
}

export { checkAnswer };
