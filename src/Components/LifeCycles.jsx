import { useEffect, useState } from "react";

const LifeCycles = () => {
  console.log("Parte funcional del componente");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [poke, setPoke] = useState(null);
  const endpoint = "https://pokeapi.co/api/v2/pokemon/ditto";

  let interval;

  //Efecto secundario
  //Fase montaje
  useEffect(() => {
    if (!interval) {
      interval = setInterval(() => {
        console.log("Esto se va a ejecutar cada 1 segundo");
      }, 1000);
    }

    setTimeout(() => {
      console.log("Esto ocurre una sola vez");
      setLoading(false);
    }, 2000);
  }, []);

  //Fase de actualización
  useEffect(() => {
    console.log(
      "Esto se ejecuta en el montaje y también cada vez que loading se actualiza"
    );
    if (!loading) {
      setUser({
        name: "Carlos",
        age: "25",
      });
    }
  }, [loading]);

  //Fase de desmontaje
  useEffect(() => {
    return () => {
      clearInterval(interval);
      console.log("Se desmontó el componente");
    };
  }, []);

  //Version 19 React: ❌ useEffect ✅ use

  //Ejemplo llamando a API
  useEffect(() => {
    fetch(endpoint)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        setPoke(data);
      });
  }, []);

  return (
    <div>
      {console.log("Parte de render del componente")}
      {loading ? "Cargando..." : <h2>Hola, {user.name}</h2>}
      {poke ? <h2>Nombre de pokemon: {poke.name}</h2> : "Cargando pokemon..."}
    </div>
  );
};

export default LifeCycles;
