import React, { useState } from "react";

import myDocs from "../../icons/my-docs.png";
import myDocsSmall from "../../icons/my-docs-small.png";
import certificate from "../../icons/certificate.png";
import github from "../../icons/github.png";

import "../../styles/_console.scss";

const Documents = ({ showIcon = true }) => {
  const [maximizeWindow, setMaximizeWindow] = useState(false);
  const [openDocuments, setOpenDocuments] = useState(false);

  return (
    <>
      {showIcon && (
        <div
          className="icon-cmd"
          onDoubleClick={() => {
            setOpenDocuments(true);
          }}
        >
          <img src={myDocs} alt="my-documents" />
          My Documents
        </div>
      )}
      {openDocuments && (
        <div
          className={`window console ${maximizeWindow ? "full-screen" : ""}`}
        >
          <div className="title-bar">
            <div className="title-bar-text">
              <img
                src={myDocsSmall}
                alt="My documents small icon"
                className="folder-icon"
              />
              <div className="folder-title">
                C:\Users\João Santos\My Documents
              </div>
            </div>
            <div class="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button
                aria-label={maximizeWindow ? "Restore" : "Maximize"}
                onClick={() => {
                  setMaximizeWindow(!maximizeWindow);
                }}
              />
              <button
                aria-label="Close"
                onClick={() => {
                  setOpenDocuments(false);
                }}
              ></button>
            </div>
          </div>
          <div className="window-body">
            <pre className="folder-body">
              <a
                className="icon-folder-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.udemy.com/certificate/UC-174f0550-30dd-4ae6-b966-146f10a6e005/?fbclid=IwAR3OPpCyUfHe6x2Az3uKNtRptFrW-nXdqWWpzUkUr3FMUUk4gHh7zvOPQuw"
              >
                <div className="icon-folder" onDoubleClick={() => {}}>
                  <img src={certificate} alt="udemy certificate" />
                  <span className="icon-folder-text">Udemy Certificate</span>
                </div>
              </a>
              <a
                className="icon-folder-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.freecodecamp.org/certification/fccd9018614-0781-4028-92c7-b87c3c0ae508/responsive-web-design"
              >
                <div className="icon-folder-2" onDoubleClick={() => {}}>
                  <img src={certificate} alt="udemy certificate" />
                  <div className="icon-folder-text">
                    <div>FreeCodeCamp</div>
                    <div>Certificate</div>
                  </div>
                </div>
              </a>
              <a
                className="icon-folder-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/jopms"
              >
                <div className="icon-folder-2" onDoubleClick={() => {}}>
                  <img src={github} alt="Github" />
                  <div className="icon-folder-text">
                    <div>GitHub</div>
                  </div>
                </div>
              </a>
            </pre>
          </div>
          <div className="status-bar">
            <p className="status-bar-field">3 object(s)</p>
            <p className="status-bar-field">980KB</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Documents;
