import React, { useState } from "react";
import drum from "../icons/drum.png";
import drumActive from "../icons/drum-active.png";
import notes from "../icons/note.png";
import notesActive from "../icons/note-active.png";
import weather from "../icons/weather.png";
import weatherActive from "../icons/weather-active.png";

const Projects = () => {
  const [drumColor, setDrumColor] = useState(false);
  const [notesColor, setNotesColor] = useState(false);
  const [weatherColor, setWeatherColor] = useState(false);

  return (
    <div className="console-input-projects">
      <div className="console-input-img-wrap">
        <a href="https://jopms-notes-app.netlify.app/"  rel="noreferrer" target="_blank">
          <img
            className="console-input-img"
            onMouseOver={() => {
              setNotesColor(true);
            }}
            onMouseOut={() => {
              setNotesColor(false);
            }}
            src={notesColor ? notesActive : notes}
            alt=""
          />
        </a>
      </div>
      <div className="console-input-img-wrap">
        <a href="https://brave-wilson-cbca63.netlify.app/" rel="noreferrer" target="_blank">
          <img
            className="console-input-img"
            onMouseOver={() => {
              setDrumColor(true);
            }}
            onMouseOut={() => {
              setDrumColor(false);
            }}
            src={drumColor ? drumActive : drum}
            alt=""
          />
        </a>
      </div>
      <div className="console-input-img-wrap">
        <a href="https://react-weather-app-jopms.netlify.app/" rel="noreferrer" target="_blank">
          <img
            className="console-input-img"
            onMouseOver={() => {
              setWeatherColor(true);
            }}
            onMouseOut={() => {
              setWeatherColor(false);
            }}
            src={weatherColor ? weatherActive : weather}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
