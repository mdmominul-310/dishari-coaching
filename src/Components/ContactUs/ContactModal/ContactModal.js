import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import doneIcon from '../../../images/success.png'

const ContactModal = (props) => {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Conformation!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <p>
          Your Messege has benn sent succesfully!
          Our team will contact you very soon!
        </p>
        <img src={doneIcon} alt="" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default ContactModal;