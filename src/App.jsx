import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './componentes/Nav';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import { FormProvider } from './context/FormContext';
import imagen from './imagenes/imagen.jpg';
import './index.css';
function App() {
  // Configuramos la variable CSS para la imagen de fondo
  const rootStyle = {
    '--background-image': `url(${imagen})`,
  };

  return (
    <div style={rootStyle} className="app-container">
      <FormProvider>
        <BrowserRouter>
          <Nav />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagina2" element={<Pagina2 />} />
            <Route path="/pagina3" element={<Pagina3 />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </div>
  );
}

export default App;
