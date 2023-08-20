import React from "react";

export default function ModalContent({ closeModal }) {
  // item-center sur y
  //  justify-center sur x
  return (
    <div
      className="fixed inset-0 bg-slate-800/75 flex  items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="bg-slate-300 text-slate-900 p-10 rounded relative mb-[1vh] "
        onClick={(e) => e.stopPropagation()}
      >
        here is the content
        <button
          className=" bg-red-600 absolute rounded  right-1 top-1  w-7 h-7 text-slate-100  flex items-center justify-center "
          onClick={closeModal}
        >
          {" "}
          X
        </button>
      </div>
    </div>
  );
}
