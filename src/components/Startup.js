import React, { useEffect } from "react";
import "../styles/_startup.scss";
import startup from "../sounds/startup.mp3";
import TypeWriterEffect from "react-typewriter-effect";

const Startup = () => {
  useEffect(() => {
    const timer1 = setTimeout(() => {
      fadeComponent("startup-text");
      const timer2 = setTimeout(() => {
        openCmd();
      }, 3000);
      return () => {
        clearTimeout(timer2);
      };
    }, 7000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const playAudio = (url) => {
    new Audio(url).play();
  };

  const fadeComponent = (divClass) => {
    document.getElementsByClassName(divClass)[0].classList.add("fade-out");
  };

  const openCmd = () => {
    document.getElementById("startup-bttn").click();
  };

  return (
    <div className="startup-wrap">
      <div className="startup-text ">
        <TypeWriterEffect
          startDelay={2000}
          cursorColor="#f1f1f1"
          textStyle={{
            fontWeight: 500,
            fontSize: "30px",
          }}
          multiText={["Loading João's curriculum..."]}
          typeSpeed={70}
        />
        <button
          id="startup-bttn"
          onClick={() => {
            playAudio(startup);
          }}
        ></button>
      </div>
    </div>
  );
};

export default Startup;
