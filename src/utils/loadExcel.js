import * as XLSX from 'xlsx';

export const loadExcelData = async () => {
  const response = await fetch('/FamilyHomeData.xlsx');
  const arrayBuffer = await response.arrayBuffer();

  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  // Existing logic
  const houses = XLSX.utils.sheet_to_json(workbook.Sheets['Houses']);
  const faqRaw = XLSX.utils.sheet_to_json(workbook.Sheets['FAQ']);

  const faq = {};
  faqRaw.forEach(row => {
    const category = row.Category;
    if (!faq[category]) faq[category] = [];
    faq[category].push({
      question: row.Question,
      answer: row.Answer
    });
  });

  // --- NEW: VOCABS ---
  const vocabSheets = workbook.SheetNames;

  const vocabs = vocabSheets.map(sheetName => ({
    title: sheetName,
    image: `/vocabs/images/${sheetName}.png`, // or .jpg depending on your files
    route: `/vocab/${sheetName}`
  }));

  return { houses, faq, vocabs, workbook };
};