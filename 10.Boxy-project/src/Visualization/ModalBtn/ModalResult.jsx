import React from "react";
import GetStringf from "./../../utilsDoc/fuctionUtils";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function ModalResult({ closeModal }) {
  const shadows = useSelector((state) => state.shadows);
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => (document.body.style.overflowY = "auto");
  }, []);

  let runningAnimation = false;
  function handleCopy(e) {
    if (!runningAnimation) {
      runningAnimation = true;
      e.target.textContent = "Copied !";
    }
    setTimeout(() => {
      e.target.textContent = "Copy";
      runningAnimation = false;
    }, 1250);
    navigator.clipboard.writeText(`box-shadow : ${GetStringf(shadows)}`);
  }
  return (
    <div
      className=" flex fixed z-10 inset-0 justify-center align-items bg-gray-600/75"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-[500px] bg-gray-50 my-[40vh] p-8 rounded "
      >
        <div className="flex items-baseline justify-end   ">
          <p className="font-semibold mr-9  "> Here is your code </p>
          <button
            className="ml-auto mr-2 text-white text-sm bg-blue-600 hover:bg-blue-600 rounded  py-1 px-3 baseline"
            onClick={handleCopy}
          >
            copy
          </button>
          <button className="mr-3 text-white text-sm bg-red-600 hover:bg-red-600 rounded  py-1 px-3 baseline">
            cancel
          </button>
        </div>
        <p className="absolute rounded bg-gray-100 ">
          <span className="font-semibold">box-Shadow :</span>
          <span> {GetStringf(shadows)}</span>
        </p>
      </div>
    </div>
  );
}
