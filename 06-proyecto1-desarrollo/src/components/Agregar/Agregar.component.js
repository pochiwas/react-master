import React, { useState } from "react";
import { guardarStorage } from "../../helpers/guardarStorage";

export const AgregarComponent = ({setListadoState}) => {
  const tituloComponent = "Agregar Pelicula";

  const [peliculaState, setPeliculaState] = useState({ titulo: "", descripcion: "" });
  const {titulo,descripcion} = peliculaState;
  const getDatosForm = (e) => {
    e.preventDefault();
    //conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    //objeto a guardar
    let objPelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };


    //Guardar estado de la pelicula
    setPeliculaState(objPelicula);

    //actualizar el estado del listado principal
    setListadoState(elementos =>{
      console.log('elementos --->',elementos)
      
      return [...elementos,objPelicula];
    })
    //guardar en el almacenamiento local
    guardarStorage("pelicula",objPelicula)
  
  };


  return (
    <>
      <div className="add">
        <h3 className="title">{tituloComponent}</h3>
        
        {( titulo && descripcion) &&  "Haz Creado la pelicula " +titulo}

        <form onSubmit={getDatosForm}>
          <input type="text" id="title" name="titulo" placeholder="Titulo" />
          &nbsp;
          <textarea
            id="description"
            name="descripcion"
            placeholder="Descripción"
          ></textarea>
          &nbsp;
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};
