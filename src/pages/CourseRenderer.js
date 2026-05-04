import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Courses.css';
import { Link } from "react-router-dom"
// import Courses_list from "./Courses.json"

function CourseRenderer({ data, title = "Courses", baseRoute = "/course" }) {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="navbar">
      <h1>{title === "Courses" ? "MAX-STUDIES" : "My KY Home"}</h1>
        {/* <h1>MAX-STUDIES</h1> */}
        <nav>
          <Link to="/home">About Me</Link>
          <Link to="/">My KY Home</Link>
        </nav>
      </header>

      <main className="content">
        <h2 style={{ textAlign: 'center', marginTop: '70px' }}>
          {title}
        </h2>

        <div className="course-container">
          {data.map(item => (
            <div
              className="course-panel"
              key={item.id}
              onClick={() => navigate(`${baseRoute}/${item.id}`)}
            >
              <img src={item.image} alt={item.title} className="course-image" />
              <div className="course-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CourseRenderer;