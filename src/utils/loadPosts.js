const context = require.context('../posts', true, /\.js$/);
const articleMap = {};

context.keys().forEach((key) => {
  const match = key.match(/^\.\/([^/]+)\/([^/]+)\.js$/);
  if (!match) return;

  const subject = match[1];
  const fileName = match[2];
  const articleId = fileName.toLowerCase();

  const module = context(key); // entire module with default & named exports

  if (!articleMap[subject]) {
    articleMap[subject] = {};
  }
  articleMap[subject][articleId] = module;
});

export default articleMap;
