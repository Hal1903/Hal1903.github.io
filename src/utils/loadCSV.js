export const loadCSV = async (url) => {
  const res = await fetch(url);
  const text = await res.text();

  const rows = text
    .trim()
    .split("\n")
    .map(r => {
      const cols = [];
      let current = "";
      let inQuotes = false;

      for (let char of r) {
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
          cols.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      cols.push(current);
      return cols.map(c => c.replace(/^"|"$/g, "").trim());
    });

  const headers = rows[0].map(h => h.trim());

  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = row[i] ?? "";
    });
    return obj;
  });
};