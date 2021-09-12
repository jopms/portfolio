import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { finish } from "../features/loading/loadingSlice";
import "../styles/_desktop.scss";
import windows from "../icons/windows-start.png";
import computer from "../icons/my-computer.png";
import startup from "../sounds/startup.mp3";

import Console from "./Console";
import MenuItem from "./MenuItem";
import Documents from "./applications/Documents";

const Desktop = ({ setShowWindows }) => {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    playAudio(startup);
    document.getElementById("desktop").addEventListener("click", (e) => {
      handleClick(e);
    });

    fadeComponent("desktop", "taskbar");
    dispatch(finish());

    return () => {
      document.getElementById("desktop").removeEventListener("click", (e) => {
        handleClick(e);
      });
    };
  }, []);

  const playAudio = (url) => {
    new Audio(url).play();
  };

  const fadeComponent = (divClass1, divClass2) => {
    document
      .getElementsByClassName(divClass1)[0]
      .classList.add("fade-in-desktop");
    document.getElementsByClassName(divClass2)[0].classList.add("fade-in");
  };

  const handleClick = (e) => {
    if (e.target.className.includes("start-bttn")) return;
    if (!e.target.className.includes("taskbar-menu")) {
      setShowMenu(false);
    }
  };

  return (
    <div id="desktop" className="desktop-wrapper">
      <div className="desktop">
        <div className="desktop-application"></div>

        <div className="desktop-application">
          <Documents />
        </div>
        <div className="desktop-application">
          <Console />
        </div>
        <div className="desktop-application"></div>
        <div className="desktop-application"></div>
        <div className="desktop-application"></div>
        <div className="desktop-application"></div>
        <div className="desktop-application"></div>
        <div className="desktop-application"></div>
      </div>
      <div className="taskbar-wrapper">
        {showMenu && (
          <div className="window taskbar-menu">
            <div className="menu-left-bar"></div>
            <div className="menu-item-wrapper">
              <div className="menu-item" onClick={() => setShowWindows(true)}>
                <MenuItem
                  text="Go to login"
                  icon={{ img: computer, alt: "computer-icon" }}
                />
              </div>
              <div className="menu-item">
                <MenuItem
                  text="My Computer"
                  icon={{ img: computer, alt: "computer-icon" }}
                />
              </div>
              <div className="menu-item">
                <MenuItem
                  text="My Computer"
                  icon={{ img: computer, alt: "computer-icon" }}
                />
              </div>
              <div className="menu-item">
                <MenuItem
                  text="My Computer"
                  icon={{ img: computer, alt: "computer-icon" }}
                />
              </div>
              <div className="menu-item">
                <MenuItem
                  text="My Computer"
                  icon={{ img: computer, alt: "computer-icon" }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="taskbar">
          <button
            className="start-bttn"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <img
              className="windows-start-icon"
              src={windows}
              alt="windows-icon"
            />
            Start
          </button>
          <div className="status-bar-wrap">
            <div className="status-bar">
              <p className="status-bar-field">21:10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
