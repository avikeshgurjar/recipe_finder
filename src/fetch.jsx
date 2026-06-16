import { useEffect, useState } from "react";
const api_key = import.meta.env.VITE_API_KEY || import.meta.env.REACT_APP_api_key;


function useFetching(input) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (input==="") {
      setData(null);
      return;
    }

    fetch(
      `https://api.api-ninjas.com/v1/recipe?query=${encodeURIComponent(input)}`,
      {
        headers: {
          'X-Api-Key': api_key
        }
      }
    )
      .then((res) => {
        if (!res.ok) {
          console.error("something is wrong with api");
          return null;
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error(err);
        setData(null);
      });
  }, [input]);

  return data;
}

export { useFetching };
