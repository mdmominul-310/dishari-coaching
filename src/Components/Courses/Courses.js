import { Row } from 'react-bootstrap';
import useCourse from '../../Hooks/useCourseData';
import Course from './Course/Course'
const Services = (props) => {
    
  const[courses]=useCourse();
     return (
        <div className="container my-5">
          <h4 className="my-5 text-center">All Services</h4>
          <Row md={2} lg={3} className="g-4">
         
              {
                courses.slice(0,6).map(course=><Course key={course.key} course={course} handleCart={props.handleCart}></Course>)
              }
          
          </Row>

        </div>
    );
};

export default Services;