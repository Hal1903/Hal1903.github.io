import {React, Suspense, lazy} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import FamilyHome from './pages/FamilyHome';
// import FAQ from './pages/FAQ';
import Houses from './pages/Houses';
import TablePage from './pages/TablePage';

// import Home from './pages/Home';
// import Courses from './pages/Courses';
// import MarkdownArticle from './pages/MarkdownArticle';
// import ArticleList from './pages/ArticleList';
// import VocabPage from './pages/VocabPage';

// lazy-loaded pages
const VocabPage = lazy(() => import('./pages/VocabPage'));
const Home = lazy(() => import('./pages/Home'));
const CourseRenderer = lazy(() => import('./pages/CourseRenderer'));
const Courses = lazy(() => import('./pages/Courses'));
const MarkdownArticle = lazy(() => import('./pages/MarkdownArticle'));
const ArticleList = lazy(() => import('./pages/ArticleList'));
const FYInfo = lazy(() => import('./pages/FYInfo'));
const FAQ = lazy(() => import('./pages/FAQ'));

import Courses_list from "./pages/Courses.json";
import USInfo_list from "./pages/USInfo.json";

import { MathJax, MathJaxContext } from "better-react-mathjax";
// import ReactMarkdown from 'react-markdown';
import { DataProvider } from './utils/DataContext';
import { TableDataProvider } from './utils/TableDataContext';
import ScrollToTop from './utils/ScrollToTop';


function App() {
  return (
    <DataProvider>
    <TableDataProvider> 
    <MathJaxContext>
    <Router>
    <ScrollToTop /> 

      <Routes>

        <Route path="/" element={<FamilyHome />} />
        <Route path="/houses" element={<Houses />} />

        <Route path="/vocab/:sheetName" element={<VocabPage />} />
        {/* <Route path="/fyinfo" element={<FYInfo />} /> */}
        <Route path="/faq/:category" element={<FAQ />} />
        <Route path="/table/:key" element={<TablePage />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/course" element={<Courses />} /> */}
        <Route
          path="/course"
          element={
            <Courses
              data={Courses_list.Courses}
              title="Courses"
              baseRoute="/course"
            />
          }
        />

        <Route path="/:type/:topic/:articleId" element={<MarkdownArticle />} />
        <Route path="/:type/:topic" element={<ArticleList />} />

        <Route
          path="/blogs"
          element={
            <Courses
              data={USInfo_list.Articles}
              title="Blogs"
              baseRoute="/blogs"
            />
          }
        />
        <Route path="/:type/:topic" element={<ArticleList />} />
        <Route path="/:type/:topic/:articleId" element={<MarkdownArticle />} />
        
      </Routes>
    </Router>
    </MathJaxContext>
    </TableDataProvider> 
    </DataProvider>
  );
}

export default App;
