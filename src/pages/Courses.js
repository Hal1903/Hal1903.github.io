import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Courses.css';

const courses = [
  // Ask my sibling for accounting and finance.
  // Maybe sister for drawing.
  {
    id: 'comp',
    title: 'Intro to Office Works (JPN+EN)',
    description: 'Navigation to the basic knowledge of core computer systems and essential skills for beginners.',
    image: '../images/Courses/pc.png',
  },
  {
    id: 'elementary_math',
    title: 'Elementary Mathematics (JPN): 算数応用',
    description: 'Exposure to advanced topics and abstraction in arithmetics, number theory, graph theory, and algorithms.',
    image: '../images/Courses/elem.png',
  },
    {
    id: 'reason',
    title: 'Elementary Reasoning',
    description: 'Primer to critical thinking and reasoning via causation/correlation distinction, bias/fallacies, and logics.',
    image: '../images/Courses/thinker.jpg',
  },
  {
    id: 'mathComp',
    title: 'Introduction to Programming and Mathematics',
    description: 'Programming and mathematics with proofs.',
    image: '../images/Courses/py.png',
  },
  // {
  //   id: 'Discrete',
  //   title: 'Introduction to Discrete Math',
  //   description: 'Starting point of proof-based mathematics and getting interesting perspectives to mathematics.',
  //   image: '../images/Courses/discrete.png',
  // },
  {
    id: 'Linear',
    title: 'Linear Algebra',
    description: 'Introduction to vectors and matrices to build a foundation for ML and various other fields of mathematics.',
    image: '../images/Courses/linear.png',
  },
  {
    id: 'ML1',
    title: 'Introduction to Data Science and Machine Learning',
    description: 'Example-based machine learning with mathematical backgrounds and Python programs.',
    image: '../images/Courses/ml1.png',
  },
  // {
  //   id: 'toc',
  //   title: 'Introduction to Theory of Computing',
  //   description: 'Introduction to fundamental capabilities and limitations of computers to deepen the knowledge of the mathematical background of computers.',
  //   image: '../images/Courses/DFA.png',
  // },
  // {
  //   id: 'nlinear',
  //   title: 'Introduction to Numerical Linear Algebra',
  //   description: '',
  //   image: '../images/Courses/DFA.png',
  // },
];

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="navbar">
        <h1>MAX-STUDIES</h1>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>

      <main className="content">
        <h2 style={{ textAlign: 'center' }}>Courses</h2>
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
