export const useState = (valorInicial) => {
  let estado = valorInicial;

  function modificarEstado(nuevoValor) {
    estado = nuevoValor;
  }
  return [estado, modificarEstado];
};
//Una básica representación de lo que sería useState
