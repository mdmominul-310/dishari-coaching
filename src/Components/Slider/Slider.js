import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import useCourse from '../../Hooks/useCourseData';


const Slider = () => {
    const [courses]=useCourse();
    
    return (
        <Container className="my-1">
            <Carousel variant="dark" className="shadow-lg">
                {courses.slice(0,3).map(course=>  <Carousel.Item >
    <img
      className="d-block w-100 h-75"
      src={course.url}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2> {course.course} </h2>
      <p> {course.details} </p>
    </Carousel.Caption>
  </Carousel.Item>)}
            </Carousel>






               
        </Container>
        
         
    );
};

export default Slider;