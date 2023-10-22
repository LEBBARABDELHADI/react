import { useState } from "react";
import ListUser from "./ListUser";
function App() {
  // const [count, setCount] = useState(0);
  const customer = {
    id: "12",
    name: "toto",
    address: {
      zipcode: "3232",
    },
  };
  const update = Object.assign({}, customer, { name: "fd" });
  update.address.zipcode = "99";
  console.log("customer", customer);
  console.log("update", update);
  let v = [1, 5, 2, 3, 2, 3, 4];
  function filterDuplicate(data) {
    const result = [];
    data.forEach((item) => {
      if (!result.includes(item)) {
        result.push(item);
      }
    });

    // for (let index = 0; index < data.length; index++) {
    //   const element = data[index];
    //   if (!result.includes(element)) {
    //     result.push(element);
    //   }
    // }
    return result;
  }

  function closestToZero(params) {
    let res = Math.abs(params[0]);
    params.forEach((el) => {
      if (Math.abs(res) > Math.abs(el)) {
        res = el;
      }
    });
    if (params.includes(Math.abs(res))) {
      res = Math.abs(res);
    }
    return res;
  }
  // function closestToZero2(params) {
  //   let res = Math.abs(params[0]);
  //   params.forEach((el) => {
  //     if (Math.abs(res) > Math.abs(el) || res ==-el) {
  //       res = Math.abs(el);
  //     }
  //   });

  //   return res;
  // }
  const t = {
    a: "a",
    b: {
      c: "c",
    },
  };
  console.log(t?.b?.sq?.x);
  let toto = filterDuplicate(v);
  console.log(toto);
  return (
    <>
      {/* {closestToZero2([-9, 8, -2, -5, 7])} */}
      {customer.address.zipcode}
      {/* <ListUser
        users={[
          { firstname: "amine", lastName: "abbar" },
          { firstname: "badr", lastName: "masiqi" },
          { firstname: "mourad", lastName: "aadihes" },
        ]}
      ></ListUser> */}
      <ul>
        {filterDuplicate([1, 5, 2, 3, 2, 3, 4]).map((item, index) => (
          <p key={index}> toto {item}</p>
        ))}
      </ul>
    </>
  );
}

export default App;
