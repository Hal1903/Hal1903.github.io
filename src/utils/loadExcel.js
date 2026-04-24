import * as XLSX from 'xlsx';

const FAMILY_HOME_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmxdXqte47EjUiufmb6PMqeNqm2WLPLGcp-JZBkegbwI6QnKTNbLXz2c-G3nSjgQ/pub?output=xlsx";

export const loadExcelData = async () => {
  try {
    const response = await fetch(`${FAMILY_HOME_URL}&t=${new Date().getTime()}`);
    if (!response.ok) throw new Error("Network response was not ok");

    const arrayBuffer = await response.arrayBuffer();
    // Use type 'array' to read the binary XLSX data
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });

    const houses = XLSX.utils.sheet_to_json(workbook.Sheets['Houses']) || [];
    const faqRaw = XLSX.utils.sheet_to_json(workbook.Sheets['FAQ']) || [];

    const faq = {};
    faqRaw.forEach(row => {
      const category = row.Category;
      if (category) {
        if (!faq[category]) faq[category] = [];
        faq[category].push({ question: row.Question, answer: row.Answer });
      }
    });

    // Explicitly clear localStorage if we get fresh data to prevent version mismatch
    localStorage.removeItem('excelData');

    return { houses, faq };
  } catch (err) {
    console.error("Error loading FamilyHomeData:", err);
    return { houses: [], faq: {} }; // Return empty structure instead of throwing
  }
};