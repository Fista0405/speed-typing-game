import { useEffect, useState, useRef } from "react";
import { wordCounter } from "./utilities/generic.utils";
import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    inputRef,
    innerTxtHandler,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(5);
  return (
    <>
      <h1>Speed Typing Game</h1>
      <textarea
        ref={inputRef}
        name="textarea"
        type="textarea"
        value={text}
        onChange={innerTxtHandler}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining} seconds</h4>
      <button onClick={() => startGame()} disabled={isTimeRunning}>
        Start
      </button>{" "}
      <h1>Word Count: {wordCount}</h1>
    </>
  );
}

export default App;
