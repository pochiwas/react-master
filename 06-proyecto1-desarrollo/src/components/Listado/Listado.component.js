import React, { useEffect,useState } from "react";
import { guardarStorage } from "../../helpers/guardarStorage";
import { Editar } from "../Editar/Editar.component";

export const ListadoComponent = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0)
  //los hooks siempre deben de ser declarados primero que las funciones
  useEffect(() => {
    console.log("Componente con listado de peliculas cargado!!!");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let pelicula = JSON.parse(localStorage.getItem("pelicula"));
    setListadoState(pelicula);
    return pelicula;
  };

  const borrarPelicula = (id) =>{
    //conseguir data almacenada en storage
    let data = conseguirPeliculas();
    //filtrar data por el id para eliminarlo del array
    let nuevoListado = data.filter(list => list.id !== parseInt(id));
    //actualizar estado del listado
    setListadoState(nuevoListado);
    //actualizar los datos en el localstorage
   localStorage.setItem('pelicula',JSON.stringify(nuevoListado));
    //guardarStorage('pelicula',JSON.stringify(nuevoListado));

    //alert(id);
  }

  return (
    <>
      {console.log("listado state en listado component", listadoState)}

      {listadoState != null && listadoState.length > 0 ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
              
              &nbsp;
              <button className="delete" onClick={ () => borrarPelicula(peli.id)} >Borrar</button>
            
            {editar === peli.id && (
              <Editar/>
            )}
            </article>
          );
        })
      ) : (
        <h2>No hay Peliculas Disponibles en estos momentos!</h2>
      )}
    </>
  );
};
