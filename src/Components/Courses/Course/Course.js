import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const{course,details,url,price}=props.course;
    return (
        
           <Col className="shadow-lg p-3 mb-5 bg-white rounded cart-item"> 
             <Card className="h-100 cart-item">
                <Card.Img variant="top" src={url} />
                    <Card.Body>
                        <Card.Title>{course}</Card.Title>
                             <Card.Text>
                                 {details}
                             </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                      <h6> Price {price} Taka</h6>
                      <Button className="btn btn-primary" onClick={()=>props.handleCart(props)}> <svg  width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
</svg> Add To cart</Button>
                    </Card.Footer>
                </Card>
            </Col>
        
    );
};

export default Course;