import React from "react";
import { useLocation } from "react-router";
export default function Contact() {
  const para = useLocation();
  console.log(para);
  return (
    <div className=" text-center pt-10  text-4xl ">
      Contact us : {para.state.txt}
    </div>
  );
}
