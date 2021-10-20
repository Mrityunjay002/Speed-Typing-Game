import React, { useEffect, useRef, useState } from "react";

function Display() {
  const [text, settext] = useState("");
  const [timeLeft, settimeLeft] = useState(2);
  const [isStart, setisStart] = useState(false);
  const [word, setWord] = useState(0);
  const TypingRef = useRef(null)

  useEffect(() => {
    if (timeLeft > 0 && isStart) {
      setTimeout(() => {
        settimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endGame()
    }
  }, [timeLeft, isStart]);

  const handleChange = (e) => {
    settext(e.target.value);
  };
  function startClock(){
    setisStart(true)
    settimeLeft(5)
    settext("")
    setWord(0)
    TypingRef.current.disabled=false
    TypingRef.current.focus()
  }
  function endGame(){
    setisStart(false);
    setWord(countWords(text));

  }
  function countWords(text) {
   

    const wordsArr = text.trim().split(" ");

    return wordsArr.filter((word) => word !== "").length;
  }

  return (
    <div>
      <h1>How fast do you type..??</h1>
      <textarea ref={TypingRef} disabled={!isStart} value={text} onChange={handleChange} />
      <h4>Time Remaining : {timeLeft}</h4>
      <button disabled={isStart} onClick={startClock}>Start</button>
      <h4>Word : {word}</h4>
    </div>
  );
}

export default Display;
