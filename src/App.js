import {React, Suspense, lazy} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FamilyHome from './pages/FamilyHome';
import Courses from './pages/Courses';
import './App.css';
import MarkdownArticle from './pages/MarkdownArticle';
import ArticleList from './pages/ArticleList';
import { MathJax, MathJaxContext } from "better-react-mathjax";
// import ReactMarkdown from 'react-markdown';

function App() {
  return (
    <MathJaxContext>
    <Router>
      <Routes>
        <Route path="/" element={<FamilyHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/course/:topic/:articleId" element={<MarkdownArticle />} />
        <Route path="/course/:topic" element={<ArticleList />} />
      </Routes>
    </Router>
    </MathJaxContext>
  );
}

export default App;
