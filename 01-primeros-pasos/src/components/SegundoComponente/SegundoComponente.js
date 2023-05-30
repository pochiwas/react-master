import React from "react";

export const SegundoComponente = () => {
  const libros = [];

  return (
    <div className="segundo-componente">
      <h1>Segundo Componente</h1>

      <ul>
        {libros.length >= 1 ? (
          libros.map((libro, indice) => {
            return <li key={indice}>{libro}</li>;
          })
        ) : (
          <p>No hay Nigun Libro Disponible</p>
        )}
      </ul>
    </div>
  );
};
