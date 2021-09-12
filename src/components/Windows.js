import React from "react";
import Curriculum from "./Curriculum";
/* import Desktop from "./Desktop";
import Login from "./Login"; */
import "../styles/_login.scss";

const Windows = () => {
  //TODO V2
  //const [showLogin, setShowLogin] = useState(false);
  //return showLogin ? <Login showLogin={setShowLogin} /> : <Desktop />;
  //return <Desktop />;
  return <Curriculum />;
};

export default Windows;
