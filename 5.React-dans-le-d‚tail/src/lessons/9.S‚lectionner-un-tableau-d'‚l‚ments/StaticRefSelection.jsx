import { useRef } from "react";
export default function Container() {
  const importsRef = useRef([]);

  function addImportRef(el) {
    if (el && !importsRef.current.includes(el)) {
      importsRef.current.push(el);
    }
    console.log(importsRef, "");
  }
  return (
    <>
      <h1>Sélectionner un tableau d'éléments</h1>
      <div>
        <input ref={addImportRef} type="text" style={{ display: "block" }} />
        <input ref={addImportRef} type="text" style={{ display: "block" }} />
        <input ref={addImportRef} type="text" style={{ display: "block" }} />
      </div>
    </>
  );
}
