import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <p> Test</p>
      {props.children}
    </div>
  );
}
