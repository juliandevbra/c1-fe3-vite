import React, { useState } from "react";
import { useSalarioStates } from "./Context";

const ChildComponent = () => {
  const { salario, setSalario } = useSalarioStates();
  console.log("ChildComponent");
  return (
    <div className="child">
      <h3>ChildComponent</h3>
      <p>Cuanto ganas por semestre?</p>
      <h3>Total: {salario * 6} </h3>
      <button onClick={() => setSalario(salario + 100000)}>
        Aumentar sueldo
      </button>
    </div>
  );
};

export default ChildComponent;
