import React from "react";
import lobo from "./lobo.png";
import { useSalarioStates } from "./Context";
const LoboEstepario = () => {
  const { salario } = useSalarioStates();
  console.log("Lobo Estepario");
  return (
    <div className="lobo-estepario">
      <img className="lobo" src={lobo} alt="lobo" width={100} />
      <h3>Total: {salario * 6}</h3>
    </div>
  );
};

export default LoboEstepario;
