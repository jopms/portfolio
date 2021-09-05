import React, { useState } from "react";
import "../styles/_console.scss";
import msdosIcon from "../icons/msdos.png";
import cmd from "../icons/cmd.png";
import TypeWriterConsole from "./TypeWriterConsole";
import Projects from "./Projects";

const Console = ({ defaultOpen, showIcon = true }) => {
  const [maximizeWindow, setMaximizeWindow] = useState(false);
  const [openCmd, setOpenCmd] = useState(defaultOpen);
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [showStepThree, setShowStepThree] = useState(false);
  const [showStepFour, setShowStepFour] = useState(false);

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
      text: "want to have a talk ?",
    },
  ];

/*   const handleClose = () => {
    setOpenCmd(false);
  }; */

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
        <div className="window console">
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
                  //handleClose();
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
    </>
  );
};

export default Console;
