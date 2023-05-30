import React from "react";

export const Eventos = () => {
  //llamar a funcion para ayuda a mejorar codigo mas limpio
  //generar metodo o herramienta para manipular logica de eventos.

  const handlerClick = (e) => {
    console.log("Haz Hecho click");
  };

  const hasEntrado = (e, accion) => {
    console.log(`Has${accion}trado a la caja`);
  };

  const EstasDentro = (e) =>{
    //onfocus
    alert("Estas dentro");
  };

  const EstasFuera = () => {
    console.log('Estas fuera');
  }

  return (
    <div>
      <h1>Evento Click</h1>
      <p>
        {" "}
        <button onClick={(e) => handlerClick(e)}>Dame Click</button>
      </p>

      <p>
        <button onDoubleClick={(e) => handlerClick(e)}>Haz Doble Click</button>
      </p>

      <div
        id="caja"
        onMouseEnter={(e) => hasEntrado(e, "Entrado")}
        onMouseLeave={(e) => hasEntrado(e, "Salido")}
      >
        Pasa Por aca
      </div>
      <p>
        <label>Ingresar algo</label>

        <input type="text" placeholder="Introduce tu nombre" onFocus={EstasDentro}
        onBlur={EstasFuera}/>
      </p>
    </div>
  );
};
