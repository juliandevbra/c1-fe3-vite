import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>Bienvenidos a la clase 3</h1>
      <Card nombre={"Jennifer"} email={"jenni@gmail.com"} />
      <Card nombre={"Gladys"} email={"glady12@gmail.com"} />
      <Card nombre={"Federico"} email={"fede38@gmail.com"} />

      <h3>Contact me</h3>
      <input type="email" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <Button text="Enviar consulta">Enviar consulta</Button>
    </>
  );
}

export default App;
