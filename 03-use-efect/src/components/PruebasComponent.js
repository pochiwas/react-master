import React, {useState,useEffect} from 'react'

export const PruebasComponent = () => {


    const [usuario, setUsuario] = useState('');

    const cambiarUsuario = e =>{
        setUsuario(e.target.value);
    }

    //hook use effect se dispara cuando el componente sufre algun cambio y cuando se carga el componente o cambio en algun estado
    useEffect(() => {
      return () => {
        console.log("modificacion en usuario")
      }
    }, [usuario])
    
  return (
    <div>
        <h1>
            UseEffect Hooks
        </h1>
        <strong id='usuario'> {usuario} :</strong> &nbsp;
        <input type='text' onChange={cambiarUsuario} placeholder='cambiar nombre'></input>

        <p>

        </p>
    </div>
  )
}
