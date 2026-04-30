import { PulseLoader } from "react-spinners";
import '../css/loaderAnime.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadCSV } from '../utils/loadCSV';
import { Link } from 'react-router-dom'

export default function TablePage() {
  const location = useLocation();
  const { url, title } = location.state || {};

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTable = async () => {
      if (!url) return;
      const res = await loadCSV(url);
      setData(res);
    };

    fetchTable();
  }, [url]);

  if (!data.length) {
    // return <p>Loading table...</p>;
        return (
            <div className="loader-container">
            <PulseLoader color="#36d7b7" size={20} />
            </div>
        );
    }

  const headers = Object.keys(data[0]);

  return (
    
    <div style={{ padding: "2rem", marginTop: "5rem"}}>
        <header className="navbar">
        <h1>My KY Home</h1>
        <nav>
            <Link to="/">Back</Link>
        </nav>
        </header>
    
      <h2>{title}</h2>

      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {headers.map((h, j) => (
                  <td key={j} style={{ border: "1px solid #ccc", padding: "8px" }}>
                    {row[h]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}