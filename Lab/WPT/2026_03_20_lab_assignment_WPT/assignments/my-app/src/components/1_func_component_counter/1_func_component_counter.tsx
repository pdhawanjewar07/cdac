import { useState } from "react";

export default function FnCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return (
    <div>
      <h2>Assignment 1. Functional Counter Component</h2>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement [-]</button>
      ------
      <button onClick={increment}>Increment [+]</button>
    </div>
  );
}

