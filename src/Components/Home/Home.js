import React from 'react';
import Courses from '../Courses/Courses';
import Slider from '../Slider/Slider';

const Home = (props) => {
    return (
        <div>
            <Slider></Slider>
            <Courses handleCart={props.handleCart}></Courses>
        </div>
    );
};

export default Home;