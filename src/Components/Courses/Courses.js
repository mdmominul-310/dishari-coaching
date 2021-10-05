import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCourse from '../../Hooks/useCourseData';
import Course from './Course/Course';
const Courses = (props) => {
    const[courses]=useCourse();
    return (
        <div className="my-5 container">
            <h2 className="text-center my-5">Courses</h2>
            <Row>
            {
                courses.slice(0,4).map(course=><Course key={course.key} course={course} handleCart={props.handleCart} ></Course>)
            }
            </Row>
            <NavLink to="/services" className="btn btn-success"> See All</NavLink>
        </div>
    );
};

export default Courses;
