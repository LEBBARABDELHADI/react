import React from "react";
import "./ModalBtn.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalResult from "./ModalResult";
export default function ModalBtn() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="relative z-1 model text-white
        rounded mt-2 px-3
   py-1 mt-2 bg-blue-600 text-sm"
      >
        Get the code
      </button>

      {showModal &&
        createPortal(
          <ModalResult
            closeModal={() => setShowModal(!showModal)}
          ></ModalResult>,
          document.body
        )}
    </>
  );
}
