import { createContext, useContext, useEffect, useState } from 'react';
import { loadExcelData } from '../utils/loadExcel';

const DataContext = createContext();

// ✅ Provider
export function DataProvider({ children }) {
  const [data, setData] = useState({
    houses: [],
    faq: {}
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const cached = localStorage.getItem('excelData');

        if (cached) {
          setData(JSON.parse(cached));
          setLoading(false);
        }

        const freshData = await loadExcelData();

        setData(freshData);
        localStorage.setItem('excelData', JSON.stringify(freshData));

      } catch (err) {
        console.error("Excel load failed:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
}

// THIS is what you are missing most likely
export const useData = () => useContext(DataContext);