import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      

      <Modal.Body>
        <p>Aggiunto al carrello!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Chiudi
        </Button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
