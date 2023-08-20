import { useState } from "react";
import ListUser from "./ListUser";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      toto
      <ListUser
        users={[
          { firstname: "amine", lastName: "abbar" },
          { firstname: "badr", lastName: "masiqi" },
          { firstname: "mourad", lastName: "aadihes" },
        ]}
      ></ListUser>
    </>
  );
}

export default App;
