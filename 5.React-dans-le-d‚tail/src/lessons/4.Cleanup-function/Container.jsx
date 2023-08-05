import { useEffect, useState } from "react";
import Card from "./Card";
export default function Container() {
  const [showCard, setShowCard] = useState(true);
  useEffect(() => {
    // console.log("Effect showCard");
    return () => {
      // console.log("Fonction de nettoyage après modificatiion showCard");
    };
  }, [showCard]);

  return (
    <div>
      <h1>Cleanup function</h1>
      <button onClick={() => setShowCard(!showCard)}>
        {" "}
        Affcher/Retirer le card
      </button>
      {showCard && <Card></Card>}
    </div>
  );
}
