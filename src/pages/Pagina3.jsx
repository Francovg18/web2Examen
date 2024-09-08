import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FormContext } from '../context/FormContext';

function Pagina3() {
  const { formData } = useContext(FormContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getResultado = () => {
    if (formData.nota >= 51) {
      return 'Aprobado';
    } else {
      return 'Reprobado';
    }
  };

  return (
    <>
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Button variant="warning" onClick={handleShow}>
          Consultar nota!
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hola {formData.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {getResultado()}, tu nota es de {formData.nota}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </>
  );
}

export default Pagina3;
