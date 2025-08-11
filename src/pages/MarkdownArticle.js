import { useParams } from 'react-router-dom';
import articleMap from '../utils/loadPosts';

export default function MarkdownArticle() {
  const { topic, articleId } = useParams();

  const ArticleModule = articleMap[topic]?.[articleId];

  if (!ArticleModule) {
    return <div><h1>404</h1><p>Article not found.</p></div>;
  }

  const ArticleComponent = ArticleModule.default;

  return (
    <div className="markdown-body">
      <ArticleComponent />
    </div>
  );
}


