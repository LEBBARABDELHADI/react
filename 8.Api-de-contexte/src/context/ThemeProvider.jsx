import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
  const [darkMode, setdarkMode] = useState(false);
  function toggleTheme() {
    setdarkMode(!darkMode);
  }
  if (darkMode) document.body.classList.add("dark");
  else document.body.classList.remove("dark");

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
