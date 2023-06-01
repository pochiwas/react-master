import React from "react";

export const Editar = () => {
  return (
    <div className="form">
      <form>
    <h2>Editar Pelicula</h2>
    <div className="form-editar">
        <label>Titulo </label>
        <input type="text" id="inputTitulo" placeholder="Ingresa el titulo"/>
        <br/>
        <label>Descripción </label>
        <textarea placeholder="ingresa descripcion" id="descripcionArea"></textarea>
    
    </div>
    <button type="submit" >Modificar</button>
      </form>
    </div>
  );
};
