import React from "react";

function ChildComponent({ someProp }) {
  return <div>{someProp}</div>;
}
export function Test() {
  return (
    <div>
      {/* {someProp} */}
      <ChildComponent></ChildComponent>
    </div>
  );
}
export default { ChildComponent };
