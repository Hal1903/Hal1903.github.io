import { useParams, Link } from 'react-router-dom';
import { useData } from '../utils/DataContext';
import '../css/VocabPage.css';

export default function Vocab() {
  const { sheetName } = useParams();
  const decodedSheet = decodeURIComponent(sheetName);

  const { data, loading } = useData();

  const vocabData = data.vocab || {};
  const vocabs = vocabData[decodedSheet] || [];

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="vocab-page">

      <header className="navbar">
        <h1>Family Home</h1>
        <nav>
          <Link to="/">Back</Link>
        </nav>
      </header>

      {/* Header */}
      <div className="vocab-header">
        <img
          src={`/vocabs/images/${decodedSheet}.png`}
          alt={decodedSheet}
          className="vocab-header-img"
          onError={(e) => (e.target.style.display = 'none')}
        />
        <h1>{decodedSheet}</h1>
      </div>

      {/* Grid */}
      <div className="vocab-grid">
        {vocabs.length > 0 ? (
          vocabs.map((vocab, i) => (
            <div key={i} className="vocab-card">
              <p className="jp">
                <b>{vocab.Japanese}</b>
              </p>
              <p className="en">{vocab.English}</p>
            </div>
          ))
        ) : (
          <p className="empty">No vocabulary found for this category.</p>
        )}
      </div>

    </div>
  );
}