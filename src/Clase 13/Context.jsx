import { createContext, useContext, useState } from "react";

const SalarioStates = createContext();

const Context = ({ children }) => {
  const [salario, setSalario] = useState(1600000);
  const [total, setTotal] = useState(100);

  return (
    <SalarioStates.Provider value={{ salario, setSalario, total }}>
      {children}
    </SalarioStates.Provider>
  );
};

export default Context;

export const useSalarioStates = () => useContext(SalarioStates);
