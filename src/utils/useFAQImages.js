import { useEffect, useState } from "react";
import { loadCSV } from "../utils/loadCSV";
import { SHEET_URLS } from "../utils/sheetURLs";

export function useFAQImages() {
  const [faqImages, setFaqImages] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await loadCSV(SHEET_URLS.faq_images);

      const parsed = res.map(row => ({
        category: row.Category,
        image: row.Image
      }));

      setFaqImages(parsed);
      setLoading(false);
    };

    load();
  }, []);

  return { faqImages, loading };
}