import React from "react";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <div>
        <h1>React.js</h1>
        <p>i.e., using the React library for rendering the UI</p>
      </div>
    </header>
  );
};

export default Header;
