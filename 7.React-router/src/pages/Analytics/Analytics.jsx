import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Analytics() {
  return (
    <div className="text-center bg-slate-400 pb-20">
      <p className="text-2xl pt-10 mb-6"> here is the company Analytics</p>
      <nav>
        <Link
          to="/Analytics/development"
          className="mr-3 font-semibold text-1g"
        >
          Development{" "}
        </Link>
        <Link
          to="/Analytics/cyberSecurity"
          className="mr-3 font-semibold text-1g"
        >
          CyberSecurity{" "}
        </Link>
        <Link to="/Analytics/uiux" className="mr-3 font-semibold text-1g">
          UI/UX{" "}
        </Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
