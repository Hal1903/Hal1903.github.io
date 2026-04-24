import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Courses.css';
import { Link } from "react-router-dom"
import Courses_list from "./Courses.json"

const courses = Courses_list.Courses

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="navbar">
        <h1>MAX-STUDIES</h1>
        <nav>
          {/* <a href="/home">Home</a> */}
          <Link to="/home">About Me</Link>
          <Link to="/">My KY Home</Link>
        </nav>
      </header>

      <main className="content">
        <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Courses</h2>
        <div className="course-container">
          {courses.map(course => (
            <div className="course-panel" key={course.id} onClick={() => navigate(`/course/${course.id}`)}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Courses;
