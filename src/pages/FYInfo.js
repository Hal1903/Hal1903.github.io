import { useLocation } from "react-router-dom";

export default function FYInfo() {
  const { state } = useLocation();
  const category = state?.category;

  const { data, loading } = useData();

  if (loading) return <div>Loading...</div>;

  const faqData = data.faq || {};

  const items = category
    ? faqData[category] || []
    : faqData; // fallback: show all

  return (
    <div>
      <h2>{category || "All FAQ"}</h2>

      {category ? (
        items.map((item, i) => (
          <div key={i}>
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))
      ) : (
        Object.keys(faqData).map(cat => (
          <div key={cat}>
            <h3>{cat}</h3>
            {faqData[cat].map((item, i) => (
              <div key={i}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}