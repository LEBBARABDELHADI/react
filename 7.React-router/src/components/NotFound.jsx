import React from "react";
import {Link} from "react-router-dom"
export default function NotFound() {
  return (
  <div>
  <div className="text-center pt-10  text-4xl ">Page not found</div>
  <div className="text-center" >
      <Link to="/"> Back to home pagee</Link>
  </div>
  </div>
  );
}
