import { createContext, useContext, useEffect, useState } from 'react';
import { loadCSV } from './loadCSV';
import { SHEET_URLS } from './sheetURLs';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({
    houses: [],
    faq: {},
    vocab: {}
  });

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadData = async () => {
    try {
      const [housesData, faqRaw, vocabRaw] = await Promise.all([
        loadCSV(SHEET_URLS.houses),
        loadCSV(SHEET_URLS.faq),
        loadCSV(SHEET_URLS.vocab)
      ]);

      const groupedFAQ = {};
      faqRaw.forEach(row => {
        const cat = row.Category;
        if (!groupedFAQ[cat]) groupedFAQ[cat] = [];
        groupedFAQ[cat].push({
          question: row.Question,
          answer: row.Answer,
        });
      });

      const vocabGrouped = {};
      vocabRaw.forEach(row => {
        const cat = row.Category?.trim();
        if (!cat) return;

        if (!vocabGrouped[cat]) vocabGrouped[cat] = [];

        vocabGrouped[cat].push({
          Japanese: row.Japanese,
          English: row.English
        });
      });

      const freshData = {
        houses: housesData,
        faq: groupedFAQ,
        vocab: vocabGrouped
      };

      setData(freshData);
      localStorage.setItem('csvData', JSON.stringify(freshData));

    } catch (err) {
      console.error("CSV load failed:", err);
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

export const useData = () => useContext(DataContext);