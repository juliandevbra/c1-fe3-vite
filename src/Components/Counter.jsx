import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  //   let contador = 0;
  const sumar = () => {
    // counter = counter + 1  ❌
    setCounter(counter + 1); // ✅
    console.log(counter);
  };
  const restar = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  console.log(counter);
  return (
    <div>
      <Button onClick={restar}>-</Button>
      <h4>{counter}</h4>
      <Button onClick={() => setCounter(counter + 1)}>+</Button>
    </div>
  );
};

export default Counter;
