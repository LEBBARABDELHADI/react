import React from "react";

export default function ListUsers({ users }) {
  users.sort((obj1, obj2) => {
    if (obj1.lastName < obj2.lastName) {
      return -1;
    } else if (obj1.lastName > obj2.lastName) {
      return 1;
    } else {
      return 0;
    }
  });
  //   console.log(users.length);
  return (
    <div>
      {users.length == 0 ? (
        <div> Users : 0</div>
      ) : (
        <ul>
          {users.map((item, index) => {
            return (
              <li key={index}> {`${item.firstName} ${item.lastName}`} </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
