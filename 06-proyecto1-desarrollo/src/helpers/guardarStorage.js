export const guardarStorage = (clave,elemento) => {
    //conseguir elementos en localStorage
    let data = JSON.parse(localStorage.getItem(clave));
    //comprobar si es un array,sino se debe crear uno
    if(Array.isArray(data)){
        //agregar elemento al array
        data.push(elemento);
    }else{
      //crear un array agregando la pelicula nueva
      data = [elemento];
    }
    //guardar en localstorage
    localStorage.setItem("pelicula",JSON.stringify(data))
    //devolver objeto guardado
    return data;
  };
