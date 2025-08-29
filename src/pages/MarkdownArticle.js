import { useState } from 'react';
import { useParams } from 'react-router-dom';
import articleMap from '../utils/loadPosts';
import Sidebar from '../components/SideBar';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Link } from "react-router-dom"
import { Suspense } from 'react';

const mathjaxConfig = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
  },
};

export default function MarkdownArticle() {
  const { topic, articleId } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const ArticleModule = articleMap[topic]?.[articleId];
  if (!ArticleModule) {
    return <div><h1>404</h1><p>Article not found.</p></div>;
  }

  const ArticleComponent = ArticleModule.default;

  // button label without ternary
  let buttonLabel = "☰";
  if (isOpen) buttonLabel = "✖";

  // sidebar class without ternary
  let toggleClass = "collapsed";
  if (isOpen) toggleClass = "open";

  return (
    <div>
      <header className={`navbar ${isOpen ? "shifted" : ""}`}>
        <h1 className="navbar-title">MAX STUDIES</h1>
        <div className="navbar-bottom">
          <button 
            className="sidebar-btn" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {buttonLabel}
          </button>
            <nav>
              <Link to="/">Home</Link>
              <Link to={`/course/${topic}`}>Back</Link>
            </nav>
        </div>
      </header>

<div className="markdown-body">
  <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
    <Sidebar topic={topic} onClose={setIsOpen}/>
  </div>

  <div className={`main ${isOpen ? "shifted" : ""}`}>
    <Suspense fallback={<p>Loading article...</p>}>
      <ArticleComponent />
    </Suspense>

    {/* <MathJaxContext config={mathjaxConfig}>
      <ArticleComponent />
    </MathJaxContext> */}
  </div>
</div>

    </div>
  );
}
