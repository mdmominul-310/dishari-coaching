import React from 'react';
import { Container } from 'react-bootstrap';
import momin from '../../images/my-bg.png';
import mojammel from '../../images/my-bg2.png'

const About = () => {
    return (
        <Container>
            <h2 className="text-center my-5">About us</h2>
            <div className="d-flex justify-content-between align-items-center shadow">
                <div>
                    <img className="img-fluid" src={momin} alt="" />
                </div>
                <div className="ms-5">
                    <h2>Md Mominul Islam <small>(C.E.O)</small></h2>
                    <p>Md Mominul islam Work for dishary Academy. I work for Dishary last 10 years. I completed C.S.E from American International University</p>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center shadow my-5">
                <div>
                    <img src={mojammel} alt="" />
                </div>
                <div className="ms-5">
                    <h2>Md Mojammel Haque <small>(Graphics Designer)</small></h2>
                    <p>
                        Md Mojammel haque work for dishary Academy. I work for Dishary last 10 years . I completed B.S.C at Graphics design from North South International University
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;