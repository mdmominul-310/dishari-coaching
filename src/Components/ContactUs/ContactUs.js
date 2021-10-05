import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ContactModal from './ContactModal/ContactModal';
import './Contactus.css'

const ContactUs = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Container className="contact-form"> 
            <div className="contact-image mb-5">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <div>
                <h3 className="text-center my-5">Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group my-3">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />
                        </div>
                        <div className="form-group my-3">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *"  />
                        </div>
                        <div className="form-group">
                            <Button className="btnContact" onClick={() => setModalShow(true)}> Send Messeage</Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control frm-regular" placeholder="Your Message *"  ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <ContactModal show={modalShow} onHide={() => setModalShow(false)}></ContactModal>
            </Container>
            
    );
};

export default ContactUs;