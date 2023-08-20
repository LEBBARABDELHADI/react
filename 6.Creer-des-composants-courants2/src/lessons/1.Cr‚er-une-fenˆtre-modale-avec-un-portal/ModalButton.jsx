import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalCotent from "./ModalContent";

export default function ModalButton() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="block mx-auto bg-slate-200 rounded p-2"
      >
        Open the modal
      </button>
      {showModal &&
        createPortal(
          <ModalCotent closeModal={() => setShowModal(false)}></ModalCotent>,
          document.body
        )}
    </>
  );
}
