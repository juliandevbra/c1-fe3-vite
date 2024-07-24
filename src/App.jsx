import "./App.css";
import Componente from "./Componente";
function App() {
  let mensaje = "Hola";
  let x = false;
  return (
    <>
      <h1>Bienvenidos a Vite</h1>
      {/* <h3>{mensaje + " Carlos"}</h3> */}
      <h4>{/* condicion ? resultado true : resultado false */}</h4>
      <h4>Hola {x ? "Carlos" : "Brian"}</h4>
      <Componente />
    </>
  );
}

export default App;
