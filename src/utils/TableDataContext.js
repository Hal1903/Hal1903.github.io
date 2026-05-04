import { createContext, useContext, useEffect, useState } from 'react';
import { loadCSV } from './loadCSV';
import { SHEET_URLS } from './sheetURLs';

const TableDataContext = createContext();

export function TableDataProvider({ children }) {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRegistry = async () => {
      try {
        const res = await loadCSV(SHEET_URLS.tables_registry);
        // console.log("RAW CSV:", res);

        const parsed = res.map(row => ({
          key: row.key?.trim(),
          title: row.title,
          image: row.image,
          url: row.url
        }));

        setTables(parsed);
      } catch (err) {
        console.error("Table registry load failed:", err);
      } finally {
        setLoading(false);
      }
    };

    loadRegistry();
  }, []);
  console.log("PARSED TABLES:", tables);

  return (
    <TableDataContext.Provider value={{ tables, loading }}>
      {children}
    </TableDataContext.Provider>
  );
}

export const useTables = () => useContext(TableDataContext);