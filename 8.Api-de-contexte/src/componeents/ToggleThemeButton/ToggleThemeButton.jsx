import React from "react";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import "./ToggleThemeButton.css";
import { ThemeContext } from "../../context/ThemeProvider.jsx";
import { useContext } from "react";

export default function ToggleTheme() {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="toggleThemebtn">
      <span> {darkMode ? "Go Light" : "Go Dark"} </span>
      <img src={darkMode ? sun : moon} alt="ToggleTheme" />
    </button>
  );
}
