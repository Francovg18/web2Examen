import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormContext } from '../context/FormContext';
import Swal from 'sweetalert2';
import '../index.css';
import '../estilos/form.css';

function Formulario() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { formData, setFormData } = useContext(FormContext);
  const [nombre, setNombre] = useState(formData.nombre);
  const [fecha, setFecha] = useState(formData.fecha);
  const [nota, setNota] = useState(formData.nota);
  const [validar, setValidar] = useState(false);

  useEffect(() => {
    if (nombre && fecha && nota) {
      setValidar(true);
    } else {
      setValidar(false);
    }
  }, [nombre, fecha, nota]);

  const onSubmit = handleSubmit((data) => {
    setFormData({ nombre, fecha, nota });
    Swal.fire({
      title: 'Datos enviados',
      text: 'El formulario ha sido enviado exitosamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      reset();
    });
  });

  return (
    <div className="container">
      <div className="form-container">
        <button className="close-button">×</button>
        <h2 className="title">REGISTRO</h2>
        <form onSubmit={onSubmit} className="form">
          <div className="form-group">
            <label htmlFor="nombre">NOMBRE:</label>
            <input
              type="text"
              id="nombre"
              className="input"

              value={nombre}
              {...register('nombre', {
                required: {
                  value: true,
                  message: 'Nombre requerido'
                },
                minLength: {
                  value: 4,
                  message: 'Mínimo 4 caracteres'
                }
              })}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
            <span className="icon">🏠</span>
          </div>
          <div className="form-group">
            <label htmlFor="fecha">FECHA NAC:</label>
            <input
              type="date"
              id="fecha"
              className="input"
              value={fecha}
              {...register('fecha', {
                required: {
                  value: true,
                  message: 'Fecha de nacimiento requerida'
                }
              })}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
            {errors.fecha && <span className="error-message">{errors.fecha.message}</span>}
            <span className="icon">⭐</span>
          </div>
          <div className="form-group">
            <label htmlFor="nota">NOTA:</label>
            <input
              type="number"
              id="nota"
              className="input"
              value={nota}
              {...register('nota', {
                required: {
                  value: true,
                  message: 'Nota requerida'
                },
                min: {
                  value: 0,
                  message: 'La nota debe ser mínimo 0'
                },
                max: {
                  value: 100,
                  message: 'La nota debe ser máximo 100'
                }
              })}
              onChange={(e) => setNota(e.target.value)}
              required
            />
            {errors.nota && <span className="error-message">{errors.nota.message}</span>}
            <span className="icon">📃</span>
          </div>
          <button
            type="submit"
            className={`submit-button ${!validar && 'disabled'}`}
            disabled={!validar}
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}

export { Formulario };
