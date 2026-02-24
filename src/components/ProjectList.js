import React, { useState } from "react";
import Panel from "../components/ProjectPanel"
import "../css/ProjectPanel.css";

const ProjectList = () => {
  return (
          <div className="projects-grid">
          {/* at some point, isolate the list of panels to another file */}
            <Panel
                imageSrc="/images/projects/PINN.png"
                title="Physics-Informed Neural Networks for Tensegrity Analysis (accepted by NAECON 2025 conference!)"
                description="Neural networks with an inductive bias of physics laws predict the nodal coordinates of dynamic tensegrity structures."
                detail=
                {`
                This project explores the use of Physics-Informed Neural Networks (PINNs) to analyze tensegrity structures.
                The goal is to predict the nodal coordinates of these structures under dynamic conditions, 
                leveraging the principles of physics, described by a 2nd-order ODE with ill-conditioned matrices, to inform the NN's learning process. 
                Our experiments demosntrate the optimally tuned PINN model is capable of achieving
                the same accuracy as the traditional numerical methods, FEM. 
                `}
            />
            <Panel
                imageSrc="/images/projects/vba.png"
                title="Automated Table Transcription Tool (VBA) during Intern"
                description="After assigned to a data processing task at FPI, I developed a VBA application to automate the repetitive work on my own."
                detail=
                {`
                  During my internship at FPI, I developed several VBA applications to streamline business processes.
                  One notable component was an automated table transcription tool that saves 75-90% (1.5+ hours out of 2 hours) of time taken for manual, repetitive work daily.
                  This includes extracting data from another file, inserting the dates corresponds to the weekdays, updating summary statistics, and formatting the table for presentation.
                  This initialized the macro developer role at FPI temporarily for me, leading to more projects and giving lectures.
                `}
            />
            <Panel
                imageSrc="/images/projects/human.png"
                title="Human Domino Effect educational platform"
                description="For a school in Lexington, I contributed to the dev. of an educational platform supports parents."
                detail=
                {`
                As a group of five, we developed an educational platform for a local school to support parents in their children's learning journey.
                My contributions are mainly building a forum from a scratch using flask, SQLite, and HTML/CSS/JS.
                The forum is managed by moderator accounts who have post deletion privilege, ensuring a safe and supportive environment for parents.
                The platform allows parents to discuss various topics, share resources, and seek advice on supporting their children's education.
                I also embedded a shared calendar hosted by the school and implemented a booking system for parent-teacher meetings using Google API.
                `}
            />
            <Panel
              imageSrc="/images/projects/poster.png"
              title="Gaussian Energy-Based Model Predicting Time of Death of Post-Mortem Samples"
              description="Cutting-edge results using probabilistic models on predicting expected TOD and uncertainty range."
              detail = {`
              Time of death (TOD) is a crucial factor in forensic science, particularly in circadian gene analysis, 
              but it is often missing from post-mortem sample records unlike circadian gene expression data. 
              Our aim is to predict the expected TOD and its uncertainty range from post-mortem human samples using probabilistic models.
              We found that the Gaussian Energy-Based Model (GEBM) outperformed others in terms of probabilistic metrics: NLL, CRPS, and ECE.
              Achieved < 1 hour MAE, which is significant.
              `}
            />
            <Panel
                imageSrc="/images/projects/mspacman.png"
                title="QRDQN PacMan Solver"
                description="Risk-aware yet bold-minded agent that achieved the average score above 2,000 by eating pellets, fruits, and ghosts."
                detail=
                {`
                  Training time exceeded 4 hours.
                  Pacman is a dynamic, multiagent (4 enemies), sequential, discrete, and fully observable Markov Decision Process.
                  Despite the level of difficulty, the agent successfully learned the environments and adversarial motions.
                  The agent could chase fruits, eat ghosts while power pellet is in effect, and avoid ghosts when it is chased.
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
              Raw data is limited and imbalanced, so using synthetic data augmentation library doubled the F1 score from 0.4 to 0.9.
            `}/>
            <Panel
              imageSrc="/images/projects/LLMgrid.png"
              title="LLM-Driven Partially Observable Grid-World Navigation with Heuristic Controls"
              description="A transformer-based agent to make decision and navigate the environment where the agent only sees the adjacent cells each turn."
              detail={`
              This project explores using an LLM (Qwen 0.5B) as a decision-making agent for a POMDP, without relying on traditional RL or dynamic programming.
              The agent navigates the environment by reasoning over local observations, L1 heuristic signals, and explicit state-action memory of past failures.
              To reduce oscillations and inefficiencies, the system integrates action masking, transition penalties, and entropy-like exploration constraints directly into the prompt and control loop.
              The agent's trajectory and belief updates are visualized through a step-by-step grid animation with fog-of-war effects as well.
              This agent takes twice longer than the optimal strategy, but it usually reaches the goal while ChatGPT and Gemini failed.
              `}/>
            <Panel
              imageSrc="/images/projects/q.png"
              title="Reinforcement Learning for Optimal Strategies in Stochastic Tic-Tac-Toe"
              description="Reinforcement learning (Q-learning) agent finds the optimal strategy for Stochastic Tic-Tac-Toe, a variant of the game with probabilistic moves."
              detail = {`
              A game of tic-tac-toe played by throwing a ball would be inherently random, unless the player has perfect control.
              Leading a group of four, I developed a stochastic tic-tac-toe game environment, MinMax Tree verifier, symmetric-aware Q-learning algorithm, 
              and lower bound estimation with binomial coefficients for the required number of episodes to make an effective agent.
              Our agent effectively learned the optimal strategy when stochasticity was introduced, which is, avoiding the center and preferring the corner at the beginning.
              `}
            />
            <Panel
              imageSrc="/images/projects/poster.png"
              title="Gaussian Energy-Based Model Predicting Time of Death of Post-Mortem Samples"
              description="Cutting-edge results using probabilistic models on predicting expected TOD and uncertainty range."
              detail = {`
              Time of death (TOD) is a crucial factor in forensic science, particularly in circadian gene analysis, 
              but it is often missing from post-mortem sample records unlike circadian gene expression data. 
              Our aim is to predict the expected TOD and its uncertainty range from post-mortem human samples using probabilistic models.
              We found that the Gaussian Energy-Based Model (GEBM) outperformed others in terms of probabilistic metrics: NLL, CRPS, and ECE.
              Achieved < 1 hour MAE, which is significant.
              `}
            />
            <Panel
                imageSrc="/images/projects/bibloop-icon.png"
                title="Bibloop: Bible Study App with Light Interactive Communities (Full-Stack)"
                description="Can be found on App store: https://apps.apple.com/jp/app/bibloop/id6751510418"
                detail=
                {`
                  This app provides a daily verse, friend connection feature to motivate one another, and the collection of bible chapters to study full contents of the bible.
                  You can make a prayer request that will be sent to your friends, and your friends can react to this on their convenience.
                  As a full-stack collaborator, I contributed to authentication, refining error handling, notifications, and other minor improvements.                
                `}
            />
            
            <Panel
              imageSrc="/images/projects/cgan.png"
              title="An Image Generator using Conditional Generative Adversarial Network "
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
              imageSrc="/images/projects/maths.png"
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

  );
};

export default ProjectList;
