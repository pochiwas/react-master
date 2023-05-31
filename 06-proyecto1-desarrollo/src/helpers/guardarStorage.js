export const guardarStorage = (clave,elemento) => {
    //conseguir elementos en localStorage
    let elements = JSON.parse(localStorage.getItem(clave));
    //comprobar si es un array,sino se debe crear uno
    if(Array.isArray(elements)){
        //agregar elemento al array
        elements.push(elemento);
    }else{
      //crear un array agregando la pelicula nueva
      elements = [elemento];
    }
    //guardar en localstorage
    localStorage.setItem("pelicula",JSON.stringify(elements))
    //devolver objeto guardado
    return elements;
  };
