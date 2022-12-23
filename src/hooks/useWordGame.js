import { useState, useRef, useEffect } from "react";
import { wordCounter } from "../utilities/generic.utils";

const useWordGame = (startingTime) => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const inputRef = useRef(null);

  function innerTxtHandler(event) {
    const { value } = event.target;
    setText(value);
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    setText("");
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  function stopGame() {
    setIsTimeRunning(false);
    setWordCount(wordCounter(text));
  }

  function resetGame() {
    setIsTimeRunning(false);
    setTimeRemaining(startingTime);
    setWordCount(0);
    setText("");
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      stopGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {
    inputRef,
    innerTxtHandler,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  };
};

export default useWordGame;
