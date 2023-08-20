import React from "react";
import "./Visualization.css";
import ModalBtn from "./ModalBtn/ModalBtn";
import GetStringf from "./../../src/utilsDoc/fuctionUtils";
import { useSelector } from "react-redux";
export default function Visualization() {
  const shadows = useSelector((state) => state.shadows);
  const boxPropertes = useSelector((state) => state.boxproperties);
  console.log(shadows);
  return (
    <div className="">
      <div className="flex flex-col   p-5 justify-center items-center ">
        <ModalBtn></ModalBtn>
        <div
          className="rightside w-[250px] h-[250px] bg-white p-5 rounded"
          style={{
            boxShadow: `${GetStringf(shadows).slice(0, -1)}`,
            borderRadius: `${boxPropertes[0].value}px`,
            height: `${boxPropertes[1].value}px`,
            width: `${boxPropertes[2].value}px`,
            backgroundColor: `${boxPropertes[3].value}`,
          }}
        >
          {" "}
        </div>
      </div>
    </div>
  );
}
