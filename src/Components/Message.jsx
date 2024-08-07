import React from "react";

const Message = ({ customer }) => {
  return (
    <>
      <h4>Muchas gracias, {customer.name}!</h4>
      <h4>
        En 30 minutos estará llegando tu pedido a la direccion:{" "}
        {customer.address}
      </h4>
    </>
  );
};

export default Message;
