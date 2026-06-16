import { useFetching } from "./fetch";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("pizza");

  const data = useFetching(query);

  console.log(data);

  return (
    <div id="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter recipe name"
      />
      <button onClick={() => setQuery(input.trim() || "pizza")}>Search</button>
      <div>{data ? JSON.stringify(data) : "Loading..."}</div>
    </div>
  );
}



