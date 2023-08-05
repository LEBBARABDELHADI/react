import { useState, useEffect } from "react";

export default function callApi() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search/to")
      .then((res) => {
        console.log("res ", res);
        if (!res.ok) {
          throw new Error();
        }
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setData(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  return { error, loading, data };
}
