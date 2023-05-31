import React, { useState } from "react";
import PropTypes from 'prop-types'

export const PrimerEjercicio = ({ year }) => {

  const [changeAge, setChangeAge] = useState(year);

  const Next = (e) => {
    setChangeAge(changeAge + 1);
  };
  const Before = (e) => {
    setChangeAge(changeAge - 1);
  };

  const CambiarYear = e => {
    let dato = parseInt(e.target.value)
    if( Number.isInteger(dato)){
        setChangeAge(dato)
    }else{
        setChangeAge(year)
    }

    
  }

  return (
    <div>
      <h2>2.Recibir una prop con el ano actual</h2>

      <strong>Año actual: {changeAge}</strong>
      <p>
        <button onClick={Next}>Next</button>
        &nbsp;
        <button onClick={Before}>Before</button>
      </p>
      <p>
        <input type="text" placeholder="Cambiar Nombre" onChange={CambiarYear}/>
      </p>
    </div>
  );
};

PrimerEjercicio.propTypes = {  
    year: PropTypes.number.isRequired
 }

