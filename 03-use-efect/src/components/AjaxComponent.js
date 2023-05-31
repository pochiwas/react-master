import React, { useState, useEffect } from "react";

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("")
  //Array generico para rellenar
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
    ]);
  };

  const getUsuariosApiPromise = () => {
    //peticion ajax tradicional en forma de promesa convencional
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then(
        (resultado_final) => {
          setUsuarios(resultado_final.data);
          console.log("log promesa", usuarios);
        },
        (error) => {
          console.log("error en promesa", error);
        }
      );
  };

  const getUsuariosAsync = async () => {
    //peticion ajax mediante uso de funcion async y await
    //se anade una funcion de carga de datos, (podria ser algun spinner) con timeout
    setTimeout( async() =>{
       try {
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json();
        setUsuarios(data);
        setCargando(false);
       }catch (error) {
        setErrores(error.message)
        console.log('error log',error.message);
        console.log('error log',JSON.stringify(error))
        //throw error
       }
    },2000)
  };

  useEffect(() => {
    //getUsuariosEstaticos();
    //getUsuariosApiPromise();
    getUsuariosAsync();
  }, []);




  if(errores !== ""){

    return <div classNameName="error">Ha ocurrido un error : {errores}</div>;

  }else if (cargando === true) {
    //return cuando se esta cargando la informacion
    return <div classNameName="cargando">Cargando Datos .....</div>;
  } else if(cargando === false && errores === "") {
    //return de caso exitoso
    return (
      <div classNameName="listado">
        <h2>Listado de usuarios via ajax</h2>

        <ul>
          <ol classNameName="usuario">
            {usuarios.map((usuario) => {
              // console.log(usuario);
              return (
                <li key={usuario.id}>
                    <img src={usuario.avatar} width="20"></img>
                  {usuario.first_name} {usuario.last_name}{" "}
                </li>
              );
            })}
          </ol>
        </ul>
      </div>
    );
  }

};
