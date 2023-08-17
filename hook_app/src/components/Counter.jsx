import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button type="button" onClick={decrease}>
        -
      </button>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
