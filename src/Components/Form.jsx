import React, { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [address, setAddress] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
  });
  console.log(customer);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    // setShow(false);
    // console.log(event);
    setCustomer({ ...customer, name: event.target.value });
  };
  const handleChangeAddress = (event) => {
    // setShow(false);
    // console.log(event);
    setCustomer({ ...customer, address: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numberRegex = /[0-9]/;
    console.log(numberRegex.test(customer.address));
    console.log(customer.address.includes(" "));
    console.log(customer.name.trim().length > 3);
    if (
      customer.name.trim().length > 3 &&
      customer.address.includes(" ") &&
      numberRegex.test(customer.address)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const reset = () => {
    setName("");
    setAddress("");
  };
  return (
    <>
      {/* {condicion ? resultado true : resultado false} */}

      {show ? (
        <Message customer={customer} />
      ) : (
        <>
          <h2>A donde mandamos el envio?</h2>
          <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input
              type="text"
              value={customer.name}
              onChange={handleChangeName}
            />
            <label>Direccion:</label>
            <input
              type="text"
              value={customer.address}
              onChange={handleChangeAddress}
            />
            <button>Enviar</button>
          </form>
          <button onClick={reset}>Reset form</button>
        </>
      )}
      {error ? (
        <h4 style={{ color: "red" }}>Verifique bien la información</h4>
      ) : null}
    </>
  );
};

export default Form;
