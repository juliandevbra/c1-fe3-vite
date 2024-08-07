import React, { useState } from "react";
import Button from "./Button";
import CardStyles from "../Styles/Card.module.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  //   let contador = 0;
  const sumar = () => {
    // counter = counter + 1  ❌
    setCounter(counter + 1); // ✅s
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  return (
    <div className={CardStyles.btnGroup}>
      <Button onClick={restar}>-</Button>
      <h4>{counter}</h4>
      <Button onClick={() => setCounter(counter + 1)}>+</Button>
    </div>
  );
};

export default Counter;
