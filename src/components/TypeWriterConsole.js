import React, { useState } from "react";
import "../styles/_console.scss";
import TypeWriterEffect from "react-typewriter-effect";

const TypeWriterConsole = ({
  startDelay,
  hideBlinkerAfter,
  text,
  consolePrefix,
  typeSpeed,
  setShowNextStep,
  id,
}) => {
  const [showCursorAfter, setShowCursorAfter] = useState(true);

  const time = hideBlinkerAfter + text.length * typeSpeed + startDelay;

  let timeout = setTimeout(() => {
    setShowCursorAfter(false);
    setShowNextStep(true);
  }, time);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      clearTimeout(timeout);
    } else {
      timeout = setTimeout(() => {
        setShowCursorAfter(false);
        setShowNextStep(true);
      }, time);
    }
  });

  return (
    <div className="console-input-line">
      {consolePrefix && (
        <span className="console-text">C:\Users\Joao{">"}</span>
      )}
      <div id={id}>
        <TypeWriterEffect
          textStyle={{
            color: "white",
            fontWeight: 500,
            fontSize: "14px",
            fontFamily: "Courier New",
          }}
          startDelay={startDelay}
          cursorColor="white"
          text={text}
          typeSpeed={typeSpeed}
          hideCursorAfterText={true}
        />
      </div>
      {showCursorAfter && (
        <div
          className="react-typewriter-pointer add-cursor-animate "
          style={{ backgroundColor: "white" }}
        ></div>
      )}
    </div>
  );
};

export default TypeWriterConsole;
