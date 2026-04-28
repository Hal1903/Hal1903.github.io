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


      // Sort houses by AvailableAt date (with robust handling of invalid/missing dates)
      const parseDate = (dateStr) => {
        if (!dateStr) return null;

        const d = new Date(dateStr);
        return isNaN(d.getTime()) ? null : d;
      };

      const sortedHouses = [...housesData].sort((a, b) => {
        const dateA = parseDate(a.AvailableAt);
        const dateB = parseDate(b.AvailableAt);

        // Case 1: both valid → sort ascending
        if (dateA && dateB) return dateA - dateB;

        // Case 2: only A valid → A first
        if (dateA && !dateB) return -1;

        // Case 3: only B valid → B first
        if (!dateA && dateB) return 1;

        // Case 4: both invalid → keep original order
        return 0;
      });



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
const vocabImages = {}; // optional (for cleaner image handling later)

vocabRaw.forEach(row => {
  const cat = row.Category?.trim();
  if (!cat) return;

  // IGNORE Link_ rows from becoming categories
  if (cat.startsWith("Link_")) {
    const realCat = cat.replace("Link_", "").trim();

    // store image separately (optional but recommended)
    vocabImages[realCat] = row.Japanese;
    return;
  }

  if (!vocabGrouped[cat]) vocabGrouped[cat] = [];

  vocabGrouped[cat].push({
    Japanese: row.Japanese,
    English: row.English
  });
});

      const freshData = {
        houses: sortedHouses, //housesData,
        faq: groupedFAQ,
        vocab: vocabGrouped,
        vocabImages: vocabImages 
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