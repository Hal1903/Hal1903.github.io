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
                Welcome! I'm Haruku, an undergraduate researcher and developer interested in math, computer science, and education at University of Kentucky.
              </p>
              <p>
                My goals are to foster academic curiosity and enjoyment in learning and to earn a Ph.D. in computer science. 
                My works explaining math and CS is in Resources section. Feel free to check them out:)
              </p>
              <p>
                Here is my journey of academic and engineering landscapes:
              </p>
            </div>

            {/* Right column: Slideshow */}
            <div className="about-slideshow">
              <AboutSlideshow /> {/* edit src/component to add images */}
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
          <div className="projects-grid">
          {/* at some point, isolate the list of panels to another file */}
            <Panel
                imageSrc="/images/projects/PINN.png"
                title="Physics-Informed Neural Networks for Tensegrity Analysis"
                description="Neural networks with an inductive bias of physics laws predict the nodal coordinates of dynamic tensegrity structures."
                detail=
                {`This project explores the use of Physics-Informed Neural Networks (PINNs) to analyze tensegrity structures.
                The goal is to predict the nodal coordinates of these structures under dynamic conditions, 
                leveraging the principles of physics, described by a 2nd-order ODE with ill-conditioned matrices, to inform the NN's learning process. 
                Our experiments demosntrate the optimally tuned PINN model is capable of achieving
                the same accuracy as the traditional numerical methods, FEM. The generous supervision was given from Dr. Jing Qin at University of Kentucky.
                `}
            />
            <Panel
              imageSrc="/images/projects/poster.png"
              title="Gaussian Energy-Based Model Predicting Time of Death of Post-Mortem Samples"
              description="Experiments of 6 probabilistic models to predict expected TOD and uncertainty range."
              detail = {`
              Time of death (TOD) is a crucial factor in forensic science, particularly in circadian gene analysis, 
              but it is often missing from post-mortem sample records unlike circadian gene expression data. 
              Our aim is to predict the expected TOD and its uncertainty range from post-mortem samples using probabilistic models.
              We conducted experiments with tuned six models and found that the Gaussian Energy-Based Model (GEBM) outperformed others in terms of probabilistic metrics: NLL, CRPS, and ECE.
              This research is supported by WPI, NSF, and UMass Chan Medical School.
              `}
            />
            <Panel
              imageSrc="/images/projects/q.png"
              title="Reinforcement Learning for Optimal Strategies in Stochastic Tic-Tac-Toe"
              description="Reinforcement learning (Q-learning) agent finds the optimal strategy for Stochastic Tic-Tac-Toe, a variant of the game with probabilistic moves."
              detail = {`
              A game of tic-tac-toe played by throwing a ball would be inherently random, unless the player has perfect control.
              Leading a group of four, I developed a stochastic tic-tac-toe game environment, MinMax Tree verifier, symmetric-aware Q-learning algorithm, 
              and lower bound estimation with binomial coefficients for the required number of episodes to make an effective agent.
              Our agent effectively learned the optimal strategy when stochasticity was introduced, which is, avoiding the center and preferring the corner at the beginning.
              The future work is DQN for n*n boards and extension to POMDP.
              `}
            />
            <Panel
              imageSrc="/images/projects/gci.png"
              title="Early-Attrition Predictive Model for Job Applicants"
              description="ML model predicts the likelihood of an applicant leaving within the first few years based on their resume, application, and pre-hiring survey data. EDA was a crucial step as well."
              detail={`
              This project involves Exploratory Data Analysis and developing a machine learning model to predict early attrition among job applicants. 
              First, we performed EDA on the dataset to understand the features, leading to feature creation that increases ROC_AUC by at least 0.03 (which is significant!).
              The features permitted are data available only before hiring, excluding job satisfaction, work environment, etc.
              My project assesses the likelihood of an applicant leaving the company within the first few years of employment. 
              Raw data is limited and imbalanced, so using synthetic data augmentation library doubled the F1 score from 0.4 to 0.8.
            `}/>
            <Panel
              imageSrc="/images/projects/cgan.png"
              title="Conditional Generative Adversarial Network"
              description="Taking an integer as input, the model generates a digit image of the integer. 
              Trained on MNIST dataset and implemented from the scratch."
              detail = {`
              One of the model tested during the REU at WPI was CGAN, and the model underperformed due to data limitation.
              To confirm the model's capability with sufficient data, I implemented both regression and classification CGANs. 
              This project is an extension of it.
              This CGAN takes an integer as input and generates a digit image of the integer. 
              Because of noize at the input, the model is capable of generating a different digit image almost every time (and no mode collapse).
              The challenge was tuning the hyperparameters to achieve effective learning, and finally I achieved at least 60-80% of images for each digit identifiable by human eyes.
              `}
            />
            <Panel
              imageSrc="/images/projects/Picture4.png"
              title="Special Worksheets for Advanced Mathematics"
              description="Arithmetics, number theory, graph theory, and computer science worksheets for advanced elementary to high school students."
              detail = {`
              In my Saturday Japanese school, some students are excelling in math and interested in advanced mathematics topics.
              I was giving them improvised problems occasionally, but I decided to create a set of worksheets for them.
              As there are plenty of resources for typical curriculum, so I selected topics that are not covered in the program.
              The worksheets cover topics start from arithmetics like exponentiation and remainder.
              gradually guiding to number theory, graph theory, and computer science without necessity of proof (focusing on learning fun facts).
              The most advanced topics include 15 Puzzle and Kadane's Algorithm.
              `}
            />
          </div>
          <div>
            <p style={{fontSize: "20px", marginTop: "2rem", marginBottom: "3rem"}}>
              ... and last but not least, I am working on this portfolio website to showcase my works and projects:)
              <br></br>
              
            </p>
            
          </div>
        </section>
        {/* <section>
          
          <div>
          <p style={{fontSize: "20px", marginTop: "1rem", marginBottom: "3rem"}}>
              Also, here is my sister's website. She provides you a portrait of your house, please check this out if you want one as a trait of your invaluable memory:
              <br></br>
              <a href="http://aono.my.canva.site/watercolor-house-portrait-website">
              http://aono.my.canva.site/watercolor-house-portrait-website
              </a>
          </p>
          </div>

        </section> */}

      </main>
      
      {/* Language proficiency line, Skills, Favorite things to do*/}
      <p style={{fontSize: "20px", marginTop: "2rem", marginBottom: "3rem"}}> 
      Also, here is an About-Me Gacha, try to click or tap the gacha:)
      There are 20 items in total. Higher rank describes more niche, academic-heavy facts.
      </p>
      <div className="gacha">
          <Gacha />
          {/* 5 appreciation coins. Sell one item to get 2 coins. Prepare 20 items and 2 same items. 2 epics, 3 rare, 4 uncommon, 6 common*/}

      </div>
      

      <footer className="footer">
        <section id="contact">
          <h2>Contact</h2>
          {/* <ul>
            <li>Email: hahikeyuaono0419@gmail.com</li>
            <li>GitHub: <a href="https://github.com/Hal1903">Hal1903</a></li>
          </ul> */}
          <div style={{align: "center", marginBottom: "2rem"}}>
            Email: hahikeyuaono0419@gmail.com
            <br></br>
            GitHub: <a href="https://github.com/Hal1903">Hal1903</a>
          </div>
          
          <div className='social-icons'>
            <SocialIcon url="https://github.com/Hal1903"></SocialIcon>
            <SocialIcon url="https://www.linkedin.com/in/haruku-aono-b656661a9/"></SocialIcon>
            <SocialIcon url="mailto:hahikeyuaono0419@gmail.com/"></SocialIcon>
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
