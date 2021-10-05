import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import doneIcon from '../../images/success.png'

const OrderModal = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Conformation!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
        <div>
          <h4> Order Completed Successfully!</h4>
          <div className="d-flex justify-content-center" >
          <img src={doneIcon} alt="" />
          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Done</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default OrderModal;