import React from "react";
import "../styles/_menuItem.scss";

const MenuItem = ({ text, icon}) => {
  const createText = (text) => {
    return (
      <>
        <u>{text.charAt(0)}</u> {text.substring(1)}
      </>
    );
  };

  return (
    <div className="menu-item-content">
      <div className="menu-item-img">
        <img src={icon.img} alt={icon.alt} />
      </div>
      <div className="menu-item-text">{createText(text)}</div>
    </div>
  );
};

export default MenuItem;
