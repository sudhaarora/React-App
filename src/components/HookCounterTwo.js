import React, { useState } from "react";

function HookCounterTow() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((newVal) => newVal + 5);
    }
  };
  return (
    <div>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={IncrementFive}>Increment 5</button>
      <h2>Hook counter: </h2>
      <h3>{count}</h3>
    </div>
  );
}

export default HookCounterTow;
