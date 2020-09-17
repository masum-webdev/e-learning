import React, { useEffect, useState } from 'react';
import Data from './components/fakedata/fakedata.json';
import Header from './components/Header/Header';
import './App.css';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';


function App() {

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(Data);
  }, []);

  const [coursePrice, setCoursePrice] = useState([]);

  const handleAddCourse = (newPrice) => {
    const newCoursePrice = [...coursePrice, newPrice];
    setCoursePrice(newCoursePrice);
  }


  return (
    <div className="container ">
      <Header></Header>
      <Cart price={coursePrice} ></Cart>
      {
        courses.map(c => <Course course={c} handleAddCourse={handleAddCourse} ></Course>)
      }
      <footer className="text-center">
        <small>&copy;E-learning.Developed by Masum Khandaker</small>
      </footer>

    </div>
  );
}

export default App;
