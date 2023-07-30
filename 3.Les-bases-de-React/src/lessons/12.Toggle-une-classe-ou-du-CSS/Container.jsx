import "./Container.css";
import { useState } from "react";
export default function Container() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Toggle une classe</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae
        illo dicta natus expedita beatae ipsam repellendus tempora repudiandae
        asperiores repellat eum pariatur unde error modi quas dignissimos,
        laborum iste.
      </p>
      <button onClick={() => setDarkMode(!darkMode)}>
        Activer {`${darkMode ? "dark mode" : "light mode"}`}
      </button>
    </div>
  );
}
