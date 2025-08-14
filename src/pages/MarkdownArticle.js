import { useParams } from 'react-router-dom';
import articleMap from '../utils/loadPosts';
import SideBar from '../components/SideBar';
import { HashLink as Link } from 'react-router-hash-link';

export default function MarkdownArticle() {
  const { topic, articleId } = useParams();

  const ArticleModule = articleMap[topic]?.[articleId];

  if (!ArticleModule) {
    return <div><h1>404</h1><p>Article not found.</p></div>;
  }

  const ArticleComponent = ArticleModule.default;

  return (
    <div>
      <header className="navbar">
        <h1>STEM-STUDIES</h1>
        <nav>
          <a href="/">Home</a>
          <a href={`/course/${topic}`}>Back</a>
        </nav>
      </header>
      <div className="markdown-body">
        {/* <SideBar /> needs more format!*/}
        <ArticleComponent />
      </div>
    </div>
  );
}


