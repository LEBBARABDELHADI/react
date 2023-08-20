import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";
export default function Navbar() {
  return (
    <nav className="p-2 bg-slate-300 navClass">
      {/* <NavLink className="mx-2 text-semibold text-md" to="/"> */}
      <NavLink
        // className={(isActive) =>
        //   `${isActive && "bg-amber-400"}  mx-2 text-semibold text-md`
        // }
        className=" mx-2 text-semibold text-md"
        to="/"
      >
        Home
      </NavLink>
      <Link className="mx-2 text-semibold text-md" to="/Analytics">
        Analytics
      </Link>
      <Link
        state={{ txt: "state" }}
        className="mx-2 text-semibold text-md"
        to="/Contact"
      >
        Contact
      </Link>
    </nav>
  );
}
