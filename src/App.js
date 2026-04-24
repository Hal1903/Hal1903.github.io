import {React, Suspense, lazy} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import FamilyHome from './pages/FamilyHome';
import FAQ from './pages/FAQ';
import Houses from './pages/Houses';

// import Home from './pages/Home';
// import Courses from './pages/Courses';
// import MarkdownArticle from './pages/MarkdownArticle';
// import ArticleList from './pages/ArticleList';
// import VocabPage from './pages/VocabPage';

// lazy-loaded pages
const VocabPage = lazy(() => import('./pages/VocabPage'));
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const MarkdownArticle = lazy(() => import('./pages/MarkdownArticle'));
const ArticleList = lazy(() => import('./pages/ArticleList'));

import { MathJax, MathJaxContext } from "better-react-mathjax";
// import ReactMarkdown from 'react-markdown';
import { DataProvider } from './utils/DataContext';
import ScrollToTop from './utils/ScrollToTop';


function App() {
  return (
    <DataProvider>
    <MathJaxContext>
    <Router>
    <ScrollToTop /> 

      <Routes>

        <Route path="/" element={<FamilyHome />} />
        <Route path="/faq/:category" element={<FAQ />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/vocab/:sheetName" element={<VocabPage />} />

        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/course/:topic/:articleId" element={<MarkdownArticle />} />
        <Route path="/course/:topic" element={<ArticleList />} />
        
      </Routes>
    </Router>
    </MathJaxContext>
    </DataProvider>
  );
}

export default App;
