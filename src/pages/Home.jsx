import React from 'react'
import { Header } from '../componentes/Header'
import  {Formulario } from '../componentes/Formulario';
import { Nav } from '../componentes/Nav';
import { Footer } from '../componentes/Footer';
import imagen from '../imagenes/imagen.jpg';
import '../index.css';
function Home() {
  return (
    <div>
        
        <Header 
        pagina='Evaluación:'
        />
        <Formulario/>
        
        
    </div>
  );
}

export {Home}