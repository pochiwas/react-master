import React, { useState } from "react";

export const PrimerEstado = () => {
  const [nombre, setNombre] = useState("Elias Yanez");

  const cambiarNombre = (e,value) => {
    console.log(value)
setNombre(value);
  };
  return (
    <div>
      <h3>Mi primer Estado</h3>
      <strong>{nombre}</strong>
      &nbsp;
      <button onClick={cambiarNombre}>Cambiar el nombre</button>

      <input type="text" placeholder="Ingresa un nombre" onKeyUp={e => cambiarNombre(e,e.target.value)}/>
    </div>
  );
};
