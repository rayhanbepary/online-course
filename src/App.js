import React, { useState } from 'react';
import Data from './data.json'
import './App.css';
import CourseInfo from './components/CourseInfo';
import PriceCount from './components/PriceCount'

function App() {

  const [Courses,setCourses] = useState([]);

  const addCountHandler = (course) =>{
    let newCourse = [...Courses,course]
    setCourses(newCourse);
  }

  return (
    <>
      <div className="top-nav">
        <h5>Enrolled Courses: {Courses.length}</h5>
        <PriceCount price={Courses}></PriceCount>
      </div> 
      {Data.map(item => <CourseInfo addCountHandler={addCountHandler} courses={item}></CourseInfo>)}     
    </>
  );
}

export default App;
