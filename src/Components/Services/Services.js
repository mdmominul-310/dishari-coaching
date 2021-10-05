import { Row } from 'react-bootstrap';
import useCourse from '../../Hooks/useCourseData';
import Service from './service/Service';
const Services = (props) => {
  const[courses]=useCourse();
     return (
        <div className="container my-5">
          <h4 className="my-5 text-center">All Services</h4>
          <Row md={2} lg={3} className="g-4">
         
              {
                courses.map(course=><Service key={course.key} course={course} handleCart={props.handleCart}></Service>)
              }
          
          </Row>

        </div>
    );
};

export default Services;