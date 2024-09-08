import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import '../estilos/form.css';

function Contacto() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [validar, setValidar] = useState(false);

  useEffect(() => {
    if (nombre && mensaje) {
      setValidar(true);
    } else {
      setValidar(false);
    }
  }, [nombre, mensaje]);

  const onSubmit = handleSubmit((data) => {
    alert("Datos enviados");
    reset();
  });

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor='nombre'>Nombre: </Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" value={nombre} {...register('nombre', {
            required: {
              value: true,
              message: 'Nombre requerido'
            },
            minLength: {
                value: 3,
                message: 'minimo 3 caracteres'
            }
          })}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          {errors.nombre && <span className='span'>{errors.nombre.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor='mensaje'>Mensaje: </Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu comentario" value={mensaje} {...register('mensaje', {
            required: {
              value: true,
              message: 'Escribe algo!'
            }
          })}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
          {errors.mensaje && <span className='span'>{errors.mensaje.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        {validar && <Button variant="primary" type="submit">Enviar</Button>}
      </Form>
    </>
  );
}

export { Contacto };
