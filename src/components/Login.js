import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/_login.scss";
import userLogin from "../icons/user-login.png";

import { start } from "../features/loading/loadingSlice";

const Login = ({ showLogin }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.value);

  const fadeComponent = (divClass) => {
    document.getElementsByClassName(divClass)[0].classList.add("fade-out");
  };

  const startLogin = () => {
    dispatch(start());
    setTimeout(() => {
      fadeComponent("login-window");
      showLogin(false);
    }, 2000);
  };

  return (
    <div className={`login-wrapper ${loading ? "wait" : ""}`}>
      <div
        style={{
          width: 492,
          height: 150,
        }}
        className="window login-window"
      >
        <div className="title-bar console-blue">
          <div className="title-bar-text">Welcome to Curriculum!</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Close" onClick={() => {}} />
          </div>
        </div>

        <div className="window-body">
          <div className="login-img">
            <img src={userLogin} alt="login-icon" />
          </div>
          <div>
            <p className="login-text">
              Type a user name and password to access the curriculum.
            </p>
            <div className="login-input">
              <div className="field-row input-spaced">
                <label
                  className={`login-input-field ${loading ? "wait" : ""}`}
                  htmlFor="text1"
                >
                  User name:
                </label>
                <input
                  className={`login-input-field ${loading ? "wait" : ""}`}
                  id="text1"
                  type="text"
                  defaultValue="João Santos"
                  readOnly={true}
                />
              </div>

              <div className="field-row input-spaced">
                <label
                  className={`login-input-field ${loading ? "wait" : ""}`}
                  htmlFor="text2"
                >
                  Password:
                </label>
                <input
                  className={`login-input-field ${loading ? "wait" : ""}`}
                  id="text2"
                  type="password"
                  value="oh you hacker"
                  readOnly={true}
                />
              </div>
            </div>
          </div>
          <div className="login-bttns">
            <button
              className={`login-bttn ${loading ? "wait" : ""}`}
              onClick={() => {
                startLogin();
              }}
            >
              OK
            </button>
            <button className={`login-bttn ${loading ? "wait" : ""}`}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
