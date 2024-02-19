import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastC({ show, setShow, toggleShow }) {

  return (
    <Row>
      <Col md={6} className="mb-2">
        <ToastContainer
          position="top-end" className="p-3" style={{ zIndex: 1 }}
        >
          <Toast show={show} onClose={toggleShow}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto"></strong>
              <small>justo ahora</small>
            </Toast.Header>
            <Toast.Body
            >Guardando datos...</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default ToastC;