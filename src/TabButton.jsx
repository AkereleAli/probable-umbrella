import React from "react";

const TabButton = ({ children, isSelected, onSelect }) => {
  return (
    <div id="tab">
      <menu>
        <button className={isSelected ? "active" : ""} onClick={onSelect}>
          {children}
        </button>
      </menu>
    </div>
  );
};

export default TabButton;
