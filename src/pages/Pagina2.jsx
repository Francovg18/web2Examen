import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { Header } from '../componentes/Header';
import ListGroup from 'react-bootstrap/ListGroup';

const Pagina2 = () => {
  const { formData } = useContext(FormContext);

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <Header pagina="Datos de la persona:" />
          <ListGroup as="ul">
            <ListGroup.Item as="li">Nombre: {formData.nombre}</ListGroup.Item>
            <ListGroup.Item as="li">Edad: {calcularEdad(formData.fecha)}</ListGroup.Item>
            <ListGroup.Item as="li">Nota: {formData.nota}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Pagina2;
