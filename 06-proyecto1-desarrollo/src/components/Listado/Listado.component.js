import React, { useEffect } from "react";

export const ListadoComponent = ({ listadoState, setListadoState }) => {
  //los hooks siempre deben de ser declarados primero que las funciones
  useEffect(() => {
    console.log("Componente con listado de peliculas cargado!!!");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let elementos = JSON.parse(localStorage.getItem("pelicula"));

    console.log("pelicula del localstorage", elementos);

    setListadoState(elementos);
  };

  return (
    <>
      {console.log("listado state en listado component", listadoState)}

      {listadoState != null  ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit">Editar</button>
              &nbsp;
              <button className="delete">Borrar</button>
            </article>
          );
        })
      ) : (
        <h2>No hay Peliculas Disponibles en estos momentos!</h2>
      )}
    </>
  );
};
