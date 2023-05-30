import React from 'react'
import PropTypes from 'prop-types'

export const TercerComponente = ({nombre,apellido}) => {
    //se valida props para saber el tipo de dato que llega
    //se puede desestructurar para mejor practica
    //Se utiliza propTypes para validacion de tipos de datos.

    console.log(nombre,apellido)
  return (
    
    <div>
        <h2>Comunicacion entre Componentes</h2>
        <h3>Habilitacion de datos en props , {nombre + apellido}</h3>
    </div>
  )
}

TercerComponente.prototype = {
    nombre: PropTypes.string,
    apellido: PropTypes.string
}
