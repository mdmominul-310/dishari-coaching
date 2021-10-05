import React from 'react';
import Courses from '../Courses/Courses';
import Slider from '../Slider/Slider';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = (props) => {
    return (
        <div>
            <Slider></Slider>
        <Courses handleCart={props.handleCart}></Courses>
        <Container className="mb-5">  
        <NavLink className="btn btn-success c" to="/services">See All</NavLink>
            </Container> 
        
        </div>
        
    );
};

export default Home;