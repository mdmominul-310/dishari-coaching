import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCourse from '../../Hooks/useCourseData';
import Course from './Course/Course';

const Courses = () => {
    const [cart,setCart]=useState([]);
    const[courses]=useCourse();
    const handleCart=(course)=>{
        const newCart=[...cart,course];
        setCart(newCart);
        console.log(newCart)
    }
    let total=0;
    for(const course of cart){
      const total=course.price+total;
    }
    return (
        <div className="my-5 container">
            <div className="cart-sum d-flex justify-content-between">
            <h2 className="text-center my-5">Course list</h2>
            <div className="cart">
                <h4>Total Item: {cart.length} </h4>
                <h5>Total price:{total} </h5>
            </div>
            </div>
            
            <Row>
            {
                courses.slice(0,4).map(course=><Course  course={course} handleCart={handleCart}></Course>)
            }
            </Row>
            <NavLink to="/services" className="btn btn-success"> See All</NavLink>
        </div>
    );
};

export default Courses;
