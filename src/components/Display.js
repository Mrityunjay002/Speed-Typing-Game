import React, { useEffect, useState } from "react";

function Display() {
  const [text, settext] = useState("");
  const [timeLeft, settimeLeft] = useState(2);
  const [isStart, setisStart] = useState(false);
  const [word,setWord]=useState(0)

  useEffect(() => {
    if (timeLeft > 0 && isStart) {
      setTimeout(() => {
        settimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
       
      setisStart(false);
      setWord(countWords(text))
    }
  }, [timeLeft, isStart]);

  const handleChange = (e) => {
    settext(e.target.value);
  };
  function countWords(text) {
    setisStart(true);

    const wordsArr = text.trim().split(" ");
    
    return wordsArr.filter((word) => word !== "").length;
  }

  return (
    <div>
      <h1>How fast do you type..??</h1>
      <textarea onChange={handleChange} />
      <h4>Time Remaining : {timeLeft}</h4>
      <button onClick={()=>setisStart(true)}>
        Start
      </button>
      <h4>Word : {word}</h4>
    </div>
  );
}

export default Display;
