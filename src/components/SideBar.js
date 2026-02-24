import { Link, useParams } from 'react-router-dom';
import articleMap from '../utils/loadPosts';
import "../css/SideBar.css";

export default function Sidebar({ topic, onClose }) {
  const { articleId } = useParams();
  const articles = articleMap[topic] ? Object.entries(articleMap[topic]) : [];

  return (
    <aside>
      <div className="sidebar-header">
        <h3>Articles</h3>
        <button className="close-btn" onClick={() => onClose(false)}>✖</button>
        {/* This position without flex display is easier to use, although it doesn't look stylish */}
      </div>

      <ol>
        {articles.map(([id, article]) => (
          <li key={id}>
            <Link to={`/course/${topic}/${id}`} onClick={() => onClose(false)}>
              {article.title || id}
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
