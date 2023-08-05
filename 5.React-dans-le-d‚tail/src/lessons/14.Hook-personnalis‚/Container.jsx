import callApi from "./CallApi.js";
import spinner from "./spinner.svg";
export default function Container() {
  const { error, loading, data } = callApi();
  console.log("url", data[0]);
  return (
    <div>
      <h1>Photo de chats 🐾</h1>
      {error && <p> erreur est survenue</p>}
      {!error && loading && <img src={spinner} alt=" photo loading" />}
      {data[0] && <img src={data[0].url} alt=" photo d'un chat" />}
    </div>
  );
}
