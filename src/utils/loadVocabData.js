import * as XLSX from 'xlsx';

// For loading the vocab data for family home page to list the panels

export const loadVocabData = async () => {
  const response = await fetch('/vocabs/vocabularies.xlsx');
  const arrayBuffer = await response.arrayBuffer();

  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const sheets = workbook.SheetNames;

  const panels = sheets.map(name => ({
    title: name,
    image: `/vocabs/images/${name}.png`,
  }));

  const vocabData = {};

  sheets.forEach(name => {
    const sheet = workbook.Sheets[name];

    // KEY FIX: read raw rows (no header assumption)
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Skip first 2 rows → start from A3/B3
    const dataRows = rows.slice(2);

    vocabData[name] = dataRows
      .filter(row => row[0] && row[1]) // remove empty rows
      .map(row => ({
        Japanese: row[0],
        English: row[1],
      }));
  });

  return { panels, vocabData };
};