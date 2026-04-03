import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useData } from '../utils/DataContext';
// import { loadExcelData } from '../utils/loadExcel';

export default function FAQ() {
  const { category } = useParams();
  const [faqData, setFaqData] = useState({});
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

//   useEffect(() => {
//     loadExcelData().then(data => {
//       setFaqData(data.faq);
//     });
//   }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const normalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

//   const faqs = faqData[normalizedCategory] || [];

  const { data } = useData();

  const faqs = data.faq[normalizedCategory] || [];

  return (
    <div style={{ padding: "2rem" }}>
      <header className="navbar">
        <h1>Family Home</h1>
        <nav><Link to="/">Back</Link></nav>
      </header>

      <div style={{ marginTop: "7rem" }}>
        <h1 style={{marginBottom: "1rem"}}>{normalizedCategory} FAQs</h1>

        {faqs.length === 0 ? (
          <p>No FAQs found.</p>
        ) : (
          faqs.map((item, index) => (
            <div key={index} style={{ marginBottom: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
              
              <div onClick={() => toggle(index)} style={{ padding: "1rem", cursor: "pointer", background: "#f5f5f5", display: "flex", justifyContent: "space-between" }}>
                <span>{item.question}</span>
<span style={{
  display: "inline-block",
  width: "8px",
  height: "8px",
  borderRight: "2px solid black",
  borderBottom: "2px solid black",
  transform: openIndex === index ? "rotate(-45deg)" : "rotate(45deg)",
  transition: "transform 0.2s ease"
}}></span>
              </div>

              <div
                ref={el => contentRefs.current[index] = el}
                style={{
                  height: openIndex === index ? contentRefs.current[index]?.scrollHeight + "px" : "0px",
                  overflow: "hidden",
                  transition: "0.3s",
                  padding: openIndex === index ? "1rem" : "0 1rem"
                }}
              >
                <p>{item.answer}</p>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}