export const loadVocabData = async (url) => {
  const res = await fetch(url);
  const text = await res.text();

  const rows = text
    .trim()
    .split("\n")
    .map(r => r.split(","));

  const headers = rows[0].map(h => h.trim());

  const data = rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = row[i] ?? "";
    });
    return obj;
  });

  const grouped = {};
  const panelImages = {};

  for (const row of data) {
    const cat = row.Category?.trim();
    if (!cat) continue;

    // CASE 1: Link row → panel image
    if (cat.startsWith("Link_")) {
      const realCat = cat.replace("Link_", "").trim();
      panelImages[realCat] = row.Japanese; // image URL
      continue;
    }

    // CASE 2: normal vocab row
    if (!grouped[cat]) grouped[cat] = [];

    grouped[cat].push({
      Japanese: row.Japanese,
      English: row.English,
    });
  }

  return { grouped, panelImages };
};