import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { finish } from "../features/loading/loadingSlice";
import "../styles/_desktop.scss";
import windows from "../icons/windows-start.png";
import computer from "../icons/my-computer.png";

import Console from "./Console";
import MenuItem from "./MenuItem";

const Desktop = () => {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
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

  const fadeComponent = (divClass1, divClass2) => {
    document.getElementsByClassName(divClass1)[0].classList.add("fade-in");
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
        <Console />
      </div>
      <div className="taskbar-wrapper">
        {showMenu && (
          <div className="window taskbar-menu">
            <div className="menu-left-bar"></div>
            <div className="menu-item-wrapper">
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
        </div>
      </div>
    </div>
  );
};

export default Desktop;
