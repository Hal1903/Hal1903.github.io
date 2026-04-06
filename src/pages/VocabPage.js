import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadVocabData } from '../utils/loadVocabData'; // Verify path
import { Link } from 'react-router-dom';

export default function Vocab() {
  // const { sheetName } = useParams();
  const { sheetName } = useParams();
  const decodedSheet = decodeURIComponent(sheetName);
  const [vocabs, setVocabs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { vocabData } = await loadVocabData();

      console.log("LOOKUP:", decodedSheet);
      console.log("AVAILABLE:", Object.keys(vocabData));

      setVocabs(vocabData[decodedSheet] || []);
      setLoading(false);
    };

    fetchData();
  }, [decodedSheet]);

  if (loading) return <div>Loading...</div>;

  return (
    
    <div style={{ padding: "20px" }}>
      <header className="navbar">
        <h1>Family Home</h1>
        <nav><Link to="/">Back</Link></nav>
      </header>
      {/* Header with the Category Image */}
      <div style={{ textAlign: 'center', marginTop: '7rem', marginBottom: '30px' }}>
        <img 
          // src={`/vocabs/images/${sheetName}.png`} 
          // alt={sheetName} 
          src={`/vocabs/images/${decodedSheet}.png`}
          alt={decodedSheet}
          style={{ width: '200px', borderRadius: '10px' }}
          onError={(e) => e.target.style.display = 'none'} // Hide if image fails
        />
        <h1>{decodedSheet}</h1>
        {/* <h1>{sheetName}</h1> */}
      </div>

      <div className="vocab-grid" style={{ display: 'grid', gap: '15px' }}>
        {vocabs.length > 0 ? (
          vocabs.map((vocab, i) => (
            <div key={i} className="card" style={{ border: '1px solid #ddd', padding: '15px' }}>
              {/* Note: Ensure 'Japanese' and 'English' match your CSV headers exactly */}
              <p style={{ fontSize: '1.2rem' }}><b>{vocab.Japanese}</b></p>
              <p style={{ color: '#666' }}>{vocab.English}</p>
            </div>
          ))
        ) : (
          <p>No vocabulary found for this category.</p>
        )}
      </div>
    </div>
  );
}