// src/componentes/Nav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../estilos/nav.css';

function Nav() {
  return (
    <nav className='nav'>
      <NavLink 
        className={({ isActive }) => (isActive ? 'activo' : 'a')} 
        to='/'
      >
        HOME
      </NavLink>
      <NavLink 
        className={({ isActive }) => (isActive ? 'activo' : 'a')} 
        to='/pagina2'
      >
        PAG1
      </NavLink>
      <NavLink 
        className={({ isActive }) => (isActive ? 'activo' : 'a')} 
        to='/pagina3'
      >
        PAG2
      </NavLink>
    </nav>
  );
}

export { Nav };
