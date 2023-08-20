import React from "react";

export default function ListUser({ users }) {
  const dataSorted = users
    ? users.sort((a, b) =>
        a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())
      )
    : [];
  console.log(dataSorted);
  return (
    <div>
      tata
      {dataSorted.length != 0 ? (
        <ul>
          {dataSorted.map((user) => {
            return (
              <li>
                {" "}
                {user.firstname} {user.lastName}
              </li>
            );
          })}
        </ul>
      ) : (
        `Users:0`
      )}
    </div>
  );
  s;
}
