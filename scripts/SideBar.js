function ArticlePageLayout() {
  return (
    <div className="page-layout">
      <Sidebar /> {/* your list of articles */}
      <main>
        <MarkdownArticle />
      </main>
    </div>
  );
}
