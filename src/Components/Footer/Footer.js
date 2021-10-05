import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import weAccept from '../../images/weaccept.PNG'

const Footer = () => {
    return (
        <div className="bg-dark">
        <Container className="bg-dark d-flex justify-content-between py-5">
            <div>
                <NavLink to="/services" className="btn btn-dark d-block">Services</NavLink>
                <NavLink to="/about" className="btn btn-dark">About</NavLink>
            </div>
            <div>
            <img src={weAccept} alt="" />
            </div>
            <div className="text-light">
                <p>Address: Biruzali, Kapasia,Gazipur</p>
                <p>Phon: +8801704003819</p>
                <p>mdmominulislam310@gmail.com</p>
            </div>
        </Container>
        <p className="text-center bg-dark text-light shadow-lg p-3"> All right reserved &copy;dishary 2020-2021</p>
        </div>
    );
};

export default Footer;