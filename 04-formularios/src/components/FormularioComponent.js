import React, { useState } from "react";

export const FormularioComponent = () => {
  const [usuario, setusuario] = useState({});
  const conseguirDatos = (e) => {
    //se debe de usar el event Prevent default para prevenir el funcionamiento por defecto del envio de formulario
    e.preventDefault();
    let datos = e.target;

    let usr = {
      nombre: datos.inputNombre.value,
      apellido: datos.inputApellido.value,
      genero: datos.select.value,
      bio: datos.textArea.value,
    };
    setusuario(usr);

    console.log("log datos form", usuario);
  };

  return (
    <div>
      <h1>Formularios con React JS</h1>
      <form onSubmit={conseguirDatos}>
        <input type="text" name="inputNombre" placeholder="ingresa tu nombre" />
        <input
          type="text"
          name="inputApellido"
          placeholder="ingresa tu apellido"
        />
        <select name="select">
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
        <textarea name="textArea" placeholder="Biografia"></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
