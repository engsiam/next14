"use client";
import { useState } from "react";
import Editor from "./component/CustomEditor";

export default function Home() {
  const [data, setData] = useState(null);

  const handleDataChange = (newData) => {
    setData(newData);
  };
  return (
    <main className="mt-10">
      <h1>Editor js Integration in Nexjs</h1>
      <Editor />
      <button
        className="px-8 py-4 text-white bg-red-700 rounded-sm"
        onClick={handleDataChange}
      >
        Save
      </button>
      <p>home page</p>
    </main>
  );
}
