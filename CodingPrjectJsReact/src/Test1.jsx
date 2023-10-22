import React from "react";
import name from "../src/Utils.js";
import * as d from "../src/Utils.js";
export default function Test1() {
  //   return <div>toto{name([-9, -1, 8, -2, -5, 1, 7, 2])}</div>;
  return (
    <div>
      toto{d.rebuildMessage(["*---Z", "A---*"])}
      {/* <button onClick></button> */}
      <button onClick={settooggle(!tooggle)}>Hide Element Below</button>
      {tooggle && <div>Toggle Challenge</div>}
    </div>
  );
}

/** 
  Challenge: User should be able to type in any characters on input and those character should show in the browser.
  
  Solution: https://codepen.io/angelo_jin/pen/yLzvMop
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

{
  /* <>
<input type="text" placeholder="Enter Text"
  onChange={(e)=>setTeext(e.target.value)}
  value={text}
  />
<p>{text}</p>
</> */
}
