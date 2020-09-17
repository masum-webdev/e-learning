import React from 'react';
import './Course.css';

const Course = (props) => {
  const singleCourse = props.course;
  const { banner, title, author, price, hours, lecture } = singleCourse;
  return (
    <div class="course row align-items-center my-3 p-3">
      <div class="col-md-3">
        <img src={banner} alt="banner" />
      </div>
      <div class="col-md-7">
        <h3>{title}</h3>
        <p>Instructor: <strong>{author}</strong></p>
        <h4>${price}</h4>
        <p>{hours} total hours - {lecture} lectures</p>
      </div>
      <div class="col-md-2 text-md-right text-center">
        <button onClick={() => props.handleAddCourse(price)} class="btn btn-success">Enroll Now</button>
      </div>
    </div>
  );
};

export default Course;