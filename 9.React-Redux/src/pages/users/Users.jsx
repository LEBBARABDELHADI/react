import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getdata } from "../../features/users";
import spinner from "../../assets/spinner.svg";
export default function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  if (!users.data && !users.loading && !users.error) {
    dispatch(getdata());
  }
  console.log("users", users);
  let content;

  if (users.error) {
    content = <p>An error has occured</p>;
    console.log("error");
  } else if (users.loading) {
    console.log("loading");

    content = <img src={spinner} alt="loading"></img>;
  } else if (users.data) {
    console.log("enter");

    content = (
      <ul>
        {users.data.map((user) => (
          <li key={user.id} className="text-slate-50 text-xl">
            {user.name}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div>Users </div>
      <div className="text-2xl mb-5 text-slate-100">{content}</div>
    </>
  );
}
