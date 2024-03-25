"use client";

import { useState } from "react";

export default function Page() {
  const [array, setArray] = useState([1]);
  const [flag, setFlag] = useState(true); // State that changes over time
  return (
    <h1>
      Home
      <button
        onClick={() => {
          setArray([...array, array[array.length - 1] + 1]);
          setFlag(!flag); // Toggle flag state
        }}
      >
        plus
      </button>
    </h1>
  );
}
