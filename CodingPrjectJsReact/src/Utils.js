export default function name(lis) {
  console.log("toto");
  let element = lis[0];
  for (let index = 1; index < lis.length; index++) {
    if (
      Math.abs(element) > Math.abs(lis[index]) ||
      element == -Math.abs(lis[index])
    ) {
      element = lis.at(index);
    }
  }
  return element;
}

export function rebuildMessage(arrays) {
  let aTrouveA = true;
  let res = "";
  let lastCaracter;
  let ind;
  while (arrays.length != 0) {
    if (aTrouveA) {
      ind = arrays.findIndex((element) => element.startsWith("A"));
      res = res + arrays.at(ind);
      lastCaracter = arrays.at(ind).at(arrays.at(ind).length - 1);
      arrays.splice(ind, 1);
      aTrouveA = false;
    }
    ind = arrays.findIndex((element) => element.startsWith(lastCaracter));
    res = res + arrays.at(ind);
    arrays.splice(ind, 1);
  }
  return res;
}

// const users = [
//     { name: "John Doe", id: 1 },
//     { name: "Jane Doe", id: 2 },
//     { name: "Billy Doe", id: 3 }
//   ];
  
//   function App() {
//     return (
//       <>
//         <h3>User names</h3>
//         <ul> 
//           {
//             users.map((item, index)=>
//       ( <li  key={index}> {item.name}</li> )
//           )
//           }
//         </ul>
//       </>
//     );
//   }