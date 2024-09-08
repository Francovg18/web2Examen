import React from 'react'
import '../estilos/header.css'
function Header({pagina}) {
  return (
    <div className='header'>
        <h1 className='titulo'>{pagina}</h1>

    </div>
  );
}

export {Header}