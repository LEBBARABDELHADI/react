import { useEffect, useState } from "react";

function App3() {
  const [count, setCount] = useState(0);
  if (count === 0) {
    const [name, setName] = useState("Codingame");
  }
  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <div>
      <div> {`count ${count} prevCount ${name}`}</div>
    </div>
  );
}

// thow an error 
// hooks should not be called in statement
