import * as XLSX from 'xlsx';

// For loading the vocab data for family home page to list the panels

export const loadVocabData = async () => {
  const response = await fetch('/vocabs/vocabularies.xlsx');
  const arrayBuffer = await response.arrayBuffer();

  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  const sheets = workbook.SheetNames;

  // Create panel data (for homepage)
  const panels = sheets.map(name => ({
    title: name,
    image: `/vocabs/images/${name}.png`, // must match filename
  }));

  // Create full vocab data (for each page)
  const vocabData = {};
  sheets.forEach(name => {
    const sheet = workbook.Sheets[name];
    vocabData[name] = XLSX.utils.sheet_to_json(sheet);
  });

  return { panels, vocabData };
};