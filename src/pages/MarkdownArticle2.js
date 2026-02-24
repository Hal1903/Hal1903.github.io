

// src/pages/MarkdownArticle.js
import { useParams } from 'react-router-dom';
import articleMap from '../utils/loadPosts';

export default function MarkdownArticle() {
  const { topic, articleId } = useParams();

  const ArticleComponent = articleMap[topic]?.[articleId];

  if (!ArticleComponent) {
    return <div><h1>404</h1><p>Article not found.</p></div>;
  }

  return (
    <div className="markdown-body">
      <ArticleComponent />
    </div>
  );
}


// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw';

// function MarkdownArticle() {
//   const { topic, articleId } = useParams();
//   const [content, setContent] = useState('');
//   const [isHTML, setIsHTML] = useState(false);

//   useEffect(() => {
//     // Remove file extension if user types one
//     const cleanId = articleId.replace(/\.(html|md)$/, '');

//     const htmlPath = `/posts/${topic}/${cleanId}`;
//     const mdPath = `/posts/${topic}/${cleanId}`;

//     fetch(htmlPath).then(res => {
//       if (res.ok) {
//         setIsHTML(true);
//         return res.text();
//       }
//       return fetch(mdPath).then(res => {
//         if (res.ok) {
//           setIsHTML(false);
//           return res.text();
//         }
//         throw new Error("Article not found");
//       });
//     })
//     .then(setContent)
//     .catch(() => setContent('<h1>404</h1><p>Article not found.</p>'));
//   }, [topic, articleId]);

//   return (
//     <div className="markdown-body">
//       {isHTML ? (
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       ) : (
//         <ReactMarkdown
//           children={content}
//           remarkPlugins={[remarkGfm]}
//           rehypePlugins={[rehypeRaw]}
//         />
//       )}
//     </div>
//   );
// }

// export default MarkdownArticle;


// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw'; // allows HTML in markdown

// function MarkdownArticle() {
//   const { topic, articleId } = useParams();
//   const [content, setContent] = useState('');
//   const [isHTML, setIsHTML] = useState(false);

//   useEffect(() => {
//     const path = `/posts/${topic}/${articleId}`;

//     // Try loading .html first
//     fetch(path).then(res => {
//       if (res.ok) {
//         setIsHTML(true);
//         return res.text();
//       }
//       // Fallback to .md
//       return fetch(path).then(res => {
//         if (res.ok) {
//           setIsHTML(false);
//           return res.text();
//         }
//         throw new Error("Article not found");
//       });
//     })
//     .then(setContent)
//     .catch(() => setContent('# 404\nArticle not found.'));
//   }, [topic, articleId]);

//   return (
//     <div className="markdown-body">
//       {isHTML ? (
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       ) : (
//         <ReactMarkdown
//           children={content}
//           remarkPlugins={[remarkGfm]}
//           rehypePlugins={[rehypeRaw]}
//         />
//       )}
//     </div>
//   );
// }

// export default MarkdownArticle;


// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';

// function MarkdownArticle() {
//   const { topic, articleId } = useParams();
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     fetch(`/posts/${topic}/${articleId}.html`) // if cannot rename the folder by EPERM, the file is open in live-server. Close it.
//       .then(res => res.text())
//       .then(setContent)
//       .catch(() => setContent('# 404\nArticle not found.'));
//   }, [topic, articleId]);

//   return (
//     <div className="markdown-body">
//       <ReactMarkdown>{content}</ReactMarkdown>
//     </div>
//   );
// }

// export default MarkdownArticle;
