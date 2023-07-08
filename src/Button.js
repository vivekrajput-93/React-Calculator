import React, { useState } from "react";
import Calculator from "./Calculator";
import "./Button.css";

const Button = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appStyles = {
    backgroundColor: isDarkMode ? "#222" : "#3a4764",
    color: isDarkMode ? "#fff" : "#222",
    minHeight: "120vh",
  };

  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: isDarkMode ? "#3a4764" : "#222",
    color: isDarkMode ? "#222" : "#fff",
    border: "none",
    cursor: "pointer",
  };

  const homestyle = {
    backgroundColor: "blue",
  }

  return (
    <div style={homestyle}>
      <div style={appStyles}>
        <button style={buttonStyles} onClick={toggleMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Calculator />
      </div>
    </div>
  );
};

export default Button;
