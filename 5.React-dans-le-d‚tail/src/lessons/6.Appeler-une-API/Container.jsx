import "./Container.css";
import { useEffect, useState } from "react";
import spinner from "./spinner.svg";
export default function Container() {
  const [contentState, setcontentState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });
  useEffect(() => {
    setcontentState({ ...contentState, loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        // console.log("data", data);
        if (!data.ok) throw new Error("");
        return data.json();
      })
      .then((res) => {
        // console.log("res", res);
        setcontentState({
          ...contentState,
          loading: false,
          error: false,
          data: res,
        });
        return res;
      })
      .catch((e) => {
        setcontentState({
          ...contentState,
          loading: false,
          data: undefined,
          error: true,
        });
        // console.log("erreur", e);
      });
  }, []);
  let content;
  if (contentState.loading) {
    content = <img src={spinner} alt=" for loading" />;
  } else if (contentState.error) {
    content = <p>Une erreur est survenue...</p>;
  } else if (contentState.data?.length == 0) {
    content = <p> l'api est en erreur</p>;
  } else if (contentState.data?.length > 0) {
    content = (
      <ul>
        {contentState.data.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.username}</span>
            <span>{item.email}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  );
}
