import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalSalir({ value, setValue }) {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAceptar = () => {
    handleClose()
    setValue({
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      colonia: "",
      numero: "",
      calle: "",
      codigoPostal: "",
      telefono: "",
      rfc: "",
      estatus: "",
      observacionesRechaso: "",
    })
    setTimeout(() => {
      navigate("/")
    }, 2000);
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Salir
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Estas seguro que desea salir, si avandona ahora mismo perdera toda la informacion de registro..!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleAceptar}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSalir;