import React from "react";
import close from "./assets/close.svg";
import hamburger from "./assets/hamburger.svg";
import { useState } from "react";
export default function NavBar() {
  const [showMenu, setShowMeenu] = useState(false);
  return (
    <nav className="fixed top-0 w-full flex justify-center p-4 bg-slate-200 ">
      <ul
        className={` ${showMenu ? "flex" : "hidden"}  flex-col items-center  
      justify-center bg-slate-200 w-full absolute
       top-full pb-5 sm:flex sm:relative sm:pb-0 sm:flex-row `}
      >
        <li className="inline-block py-2 mx-4 text-lg sm:py-0">Accueil</li>
        <li className="inline-block py-2 mx-4 text-lg sm:py-0">Srvices</li>
        <li className="inline-block py-2 mx-4 text-lg sm:py-0">Tarif</li>
        <li className="inline-block py-2 mx-4 text-lg sm:py-0">Contact</li>
      </ul>
      <button
        className="ml-auto sm:hidden"
        onClick={() => setShowMeenu(!showMenu)}
      >
        <img
          className="w-4"
          src={showMenu ? close : hamburger}
          alt={showMenu ? "Cacher le menu " : "Montrer le menu"}
        />
      </button>
    </nav>
  );
}
