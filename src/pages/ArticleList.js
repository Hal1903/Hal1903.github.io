// src/pages/ArticleList.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articleMap from '../utils/loadPosts';
import '../css/ArticleList.css';
import '../css/Courses.css'

function ArticleList() {
  const { topic } = useParams();

  // Get the articles for this topic
  const topicArticles = articleMap[topic] || {};
  // const articles = Object.keys(topicArticles).map((id) => {
  //   // If the article exports a title constant, use it
  //   const mod = topicArticles[id];
  //   const title = mod.title || id;
  //   return { id, title };
  // });
  const articles = Object.keys(topicArticles).map((id) => {
  const mod = topicArticles[id];
  const title = mod.title || (mod.default && mod.default.title) || id;
  return { id, title };
  });


  return (
    <div>
      <header className="navbar">
        <h1>MAX-STUDIES</h1>
        <nav>
          <a href="/">Home</a>
          <Link to="/course/">Course List</Link>
        </nav>
      </header>
      <div className="article-container">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/course/${topic}/${article.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="article-panel">
              {/* <img
                className="article-image"
                src="/default-article.jpg"
                alt={article.title}
              /> */}
              <div className="article-info">
                <h3>{article.title}</h3>
                <p>Click to read</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;


// This one for html or md parsing

// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import '../css/ArticleList.css';

// function ArticleList() {
//   const { topic } = useParams();
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetch(`/posts/${topic}/manifest.json`)
//       .then(res => res.json())
//       .then(async (fileNames) => {
//         const articleData = await Promise.all(
//           fileNames.map(async (file) => {
//             const res = await fetch(`/posts/${topic}/${file}`);
//             // print out response status
//             console.log(`Fetching ${file}: ${res.status}`);
//             const text = await res.text();
//             const title = text.match(/^#\s+(.*)/)?.[1] || file;  // extract first Markdown title
//             return {
//               id: file.replace('.md', ''),
//               title
//             };
//           })
//         );
//         setArticles(articleData);
//       });
//   }, [topic]);

//   return (
//     <div className="article-container">
//       {articles.map((article) => (
//         <Link key={article.id} to={`/course/${topic}/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//           <div className="article-panel">
//             <img className="article-image" src="/default-article.jpg" alt="article" />
//             <div className="article-info">
//               <h3>{article.title}</h3>
//               <p>Click to read</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default ArticleList;
