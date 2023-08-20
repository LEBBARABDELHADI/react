import React from "react";
import { useState } from "react";
import "./LeftContainer.css";
import ShadowList from "./ShadowList/ShadowList";
import BoxPannel from "./BoxPanel/BoxPanel.jsx";
export default function LeftConatiner() {
  const [tabs, settabs] = useState(0);

  const tabList = [
    { name: "Shaddow", component: <ShadowList /> },
    { name: "BoxPannel", component: <BoxPannel /> },
  ];
  return (
    <div className="firstLeftContainer">
      <div className="buttons">
        {tabList.map((tab, index) => (
          <button
            key={index}
            onClick={() => settabs(index)}
            className="buttonShadBox focus:outline-none focus:ring-2 ring-inset focus:ring-blue-300"
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="h-full overflow-auto">

      {tabList[tabs].component}
      </div>
    </div>
  );
}
