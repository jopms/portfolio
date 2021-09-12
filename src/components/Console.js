import React, { useState } from "react";
import Projects from "./Projects";
import TypeWriterConsole from "./TypeWriterConsole";
import msdosIcon from "../icons/msdos.png";
import information from "../icons/msg-information.png";
import cmd from "../icons/cmd.png";
import msgWarning from "../icons/msg-warning.png";
import closeError from "../sounds/close-error.mp3";
import shutdown from "../sounds/shutdown.mp3";

import "../styles/_console.scss";

const Console = ({ defaultOpen, showIcon = true }) => {
  const [maximizeWindow, setMaximizeWindow] = useState(false);
  const [openCmd, setOpenCmd] = useState(defaultOpen);
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [showStepThree, setShowStepThree] = useState(false);
  const [showStepFour, setShowStepFour] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //TODO V2
  /*   const [showWindows, setShowWindows] = useState(false);
  const [showLogin, setShowLogin] = useState(true); */

  const consoleData = [
    {
      startDelay: 2000,
      hideBlinkerAfter: 2000,
      typeSpeed: 70,
      text: "whoami",
    },
    {
      startDelay: 2000,
      hideBlinkerAfter: 2000,
      typeSpeed: 70,
      text: 'dir /b "documents\\projects"',
    },
    {
      startDelay: 2000,
      hideBlinkerAfter: 2000,
      typeSpeed: 70,
      text: "want to schedule a meet?",
    },
  ];

  const playAudio = (url) => {
    new Audio(url).play();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeAll = () => {
    playAudio(shutdown);
    fadeComponent("window", "modal-centered");
    //TODO V2
    /*  setOpenCmd(false);
    setShowModal(false);
    setShowWindows(true); */
  };

  const fadeComponent = (divClass1, divClass2) => {
    divClass1 &&
      document
        .getElementsByClassName(divClass1)[0]
        .classList.add("fade-out-console");
    divClass2 &&
      document
        .getElementsByClassName(divClass2)[0]
        .classList.add("fade-out-console");
  };

  return (
    <>
      {showIcon && (
        <div
          className="icon-cmd"
          onDoubleClick={() => {
            setOpenCmd(true);
          }}
        >
          <img src={cmd} alt="cmd-icon" />
          My projects
        </div>
      )}
      {openCmd && (
        <div
          className={`window console ${maximizeWindow ? "full-screen" : ""}`}
        >
          <div className="title-bar console-blue">
            <img className="msdos-img" src={msdosIcon} alt="" />
            <div className="title-bar-text">MS-DOS Prompt</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button
                aria-label={maximizeWindow ? "Restore" : "Maximize"}
                onClick={() => {
                  setMaximizeWindow(!maximizeWindow);
                }}
              />
              <button
                aria-label="Close"
                onClick={() => {
                  openModal();
                }}
              />
            </div>
          </div>

          <div className="window-body">
            <div className="console-input">
              <span className="console-text">João(R) Santos 94</span>
              <br />
              <span className="console-text">(C)Copyright jopms 1994-2021</span>
              <br />
              <br />
              <br />
              <div className="type-writter">
                <TypeWriterConsole
                  startDelay={consoleData[0].startDelay}
                  hideBlinkerAfter={consoleData[0].hideBlinkerAfter}
                  text={consoleData[0].text}
                  consolePrefix={true}
                  typeSpeed={consoleData[0].typeSpeed}
                  setShowNextStep={setShowStepTwo}
                  id="1"
                  stopPresentation={showModal}
                />
                {showStepTwo && (
                  <>
                    <div className="console-input-line">
                      <span className="console-text">
                        react-developer\
                        <a
                          className="console-link"
                          href="https://www.linkedin.com/in/jopms/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          jopms
                        </a>
                      </span>
                      <br />
                      <br />
                      <br />
                    </div>

                    <div className="console-input-line">
                      <TypeWriterConsole
                        startDelay={consoleData[1].startDelay}
                        hideBlinkerAfter={consoleData[1].hideBlinkerAfter}
                        text={consoleData[1].text}
                        consolePrefix={true}
                        typeSpeed={consoleData[1].typeSpeed}
                        setShowNextStep={setShowStepThree}
                        id="2"
                        stopPresentation={showModal}
                      />
                    </div>
                  </>
                )}
                {showStepThree && (
                  <>
                    <div className="console-input-line">
                      <Projects />
                    </div>
                    <div className="console-input-line">
                      <TypeWriterConsole
                        startDelay={consoleData[2].startDelay}
                        hideBlinkerAfter={consoleData[2].hideBlinkerAfter}
                        text={consoleData[2].text}
                        consolePrefix={true}
                        typeSpeed={consoleData[2].typeSpeed}
                        setShowNextStep={setShowStepFour}
                        id="3"
                        stopPresentation={showModal}
                      />
                    </div>
                  </>
                )}
                {showStepFour && (
                  <>
                    <div className="console-input-line">
                      <span className="console-text">
                        <a
                          className="console-link"
                          href="mailto:joao.34@hotmail.com"
                        >
                          email me
                        </a>
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="window modal-centered">
          <div className="title-bar">
            <div className="title-bar-text">
              {showStepFour ? "Thanks !" : "WARNING !"}
            </div>
            <div className="title-bar-controls">
              <button
                aria-label="Close"
                onClick={() => {
                  setShowModal(false);
                }}
              ></button>
            </div>
          </div>
          <div className="window-body column">
            <div className="window-body-row">
              <div className="close-window-icon">
                <img src={showStepFour ? information : msgWarning} alt="information icon" />
              </div>
              <p>
                {showStepFour
                  ? "I look forward to seeing you soon. Want to close this window ?"
                  : "You first need to see all the information related to the candidate. Are you sure you want to continue ?"}
              </p>
            </div>
            <section
              style={{ justifyContent: "flex-end" }}
              className="field-row"
            >
              <button
                onClick={() => {
                  showStepFour ? closeAll() : playAudio(closeError);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                No
              </button>
            </section>
          </div>
        </div>
      )}
      {/* //TODO V2 */}
      {/*  {!showWindows ? (
        ""
      ) : showLogin ? (
        <Login showLogin={setShowLogin} />
      ) : (
        <Desktop setShowWindows={setShowWindows} />
      )} */}
    </>
  );
};

export default Console;
