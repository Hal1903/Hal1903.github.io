// not used yet
// src/components/Sidebar.js
import { Link, useParams } from 'react-router-dom';
import articleMap from '../utils/loadPosts';

export default function Sidebar() {
  const { topic } = useParams();
  const articles = articleMap[topic] ? Object.keys(articleMap[topic]) : [];

  return (
    <aside>
      <h3>Articles</h3>
      <ul>
        {articles.map(id => (
          <li key={id}>
            <Link to={`/course/${topic}/${id}`}>{id}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
