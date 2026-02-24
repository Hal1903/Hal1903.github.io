import React from 'react';
import '../css/Home.css';
import { SocialIcon } from 'react-social-icons'
// import { Link } from 'react-router-dom'; 
import { HashLink as Link } from 'react-router-hash-link'; // This works for github.io, static web
import AboutSlideshow from '../components/Slideshow'; // Adjust the import path as necessary
import HorizontalTimeline from '../components/Timeline';
import Panel from "../components/ProjectPanel"; // adjust path if needed
import "../css/ProjectGrid.css";
import Gacha from "../components/Gacha";
import ProjectList from '../components/ProjectList';

// import { Timeline } from "flowbite-react";

function Home() {
  return (
    <div className="App">
      <header className="navbar">
        <h1>MAX-STUDIES</h1>
        <nav>
            <Link smooth to="#about">About</Link>
            <Link smooth to="#projects">Projects</Link>
            <Link smooth to="#contact">Contact</Link>
          <Link to="/course">Resources</Link>
        </nav>
      </header>

        <main className="content">
      {/* ADD a big slide show of fancy STEM images: Videos are acceptable too. */}
          <section id="about" className="about-container">
            {/* Left column: Text */}
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Welcome! I'm Haruku, a researcher and developer interested in math, computer science, and education graduated from University of Kentucky.
              </p>
              <p>
                My goals are to foster academic curiosity and enjoyment in learning and to earn a Ph.D. in computer science. 
                Since my primary language is Japanese, I also aim to bridge the gap between Japanese and English resources in STEM fields.
                My works explaining math and CS is in Resources section. Feel free to check them out:) (not yet fully ready though)
              </p>
              <p>
                Here is my journey of academic and engineering landscapes, followed by my projects:
              </p>
            </div>

            {/* Right column: Slideshow */}
            <div className="about-slideshow">
              <AboutSlideshow /> {/* edit src/component to add images */}
              
              {/* Resume Buttons */}
              <div className="resume-buttons">
                <a
                  href="/Resume_inPerson_JPN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                >
                  📄 Resume (JP)
                </a>

                <a
                  href="/Resume_inPerson.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                >
                  📄 Resume (EN)
                </a>
              </div>

            </div>
            
        </section>

        <section className="timeline-section">
          <h2>Timeline</h2> 
          <HorizontalTimeline />  
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p style={{fontSize: "20px", marginTop: "1rem"}}>
          Here are the most recent or significant projects I developed. 
          <br></br>
          Click the project panels to see more details. They will flip;)
          </p>

          <ProjectList></ProjectList>

          <div>
            <p style={{fontSize: "20px", marginTop: "2rem", marginBottom: "3rem"}}>
              ... and last but not least, I am working on this portfolio website to showcase my works and projects:)
              <br></br>
              
            </p>
            
          </div>

        </section>
        {/* <section>
          


        </section> */}
          <p style={{fontSize: "20px", marginTop: "2rem", marginBottom: "3rem"}}> 
          Also, here is an About-Me Gacha, try to click or tap the gacha:)
          There are 20 items in total. Higher rank describes more niche, academic-heavy facts.
          </p>
          <div className="gacha">
            <Gacha />
          </div>
      </main>
      

      <footer className="footer">
        <section id="contact">
          <h2>Contact</h2>
          {/* <ul>
            <li>Email: hahikeyuaono0419@gmail.com</li>
            <li>GitHub: <a href="https://github.com/Hal1903">Hal1903</a></li>
          </ul> */}
          {/* <div style={{align: "center", marginBottom: "2rem"}}> */}

            {/* <br></br> */}
            {/* GitHub: <a href="https://github.com/Hal1903">Hal1903</a>
          </div> */}
          
          <div className='social-icons'>
            <SocialIcon url="https://github.com/Hal1903"></SocialIcon>
            <SocialIcon url="https://www.linkedin.com/in/haruku-aono-b656661a9/"></SocialIcon>
            
            <a
              href="https://scholar.google.com/citations?hl=en&user=0vYSmiwAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img
              src={"/images/icons/scholar.png"}
              alt="Google Scholar"
              className="scholar-icon"
              // style={{ width: '35px', height: '35px', marginTop: '6px'}}
            />
            </a>
           
          </div>
        </section>

        {/* <section className="comments">
          <h2>Comments</h2>
          <p>(You can embed a comment widget here later)</p>
        </section> */}
      </footer>
    </div>
  );
}

export default Home;
