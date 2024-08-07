import React, { useState } from "react";
import Card from "./Card";
import { pizzas } from "../utils/pizzas";

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <>
      {cart.length > 0 && (
        <>
          <h2>Pedidos a entregar</h2>
          <ul>
            {cart.map((pedido) => (
              <li key={pedido.id}>{pedido.tipo}</li>
            ))}
          </ul>
        </>
      )}
      <h1 style={titleStyles}>Lista de pizzas</h1>
      <div className="list-container">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} recipe={pizza} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
};

export default Home;
