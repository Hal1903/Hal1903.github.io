import { useParams } from 'react-router-dom';
import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from '../utils/DataContext';

export default function FAQ() {
  const { category } = useParams();
  const { data } = useData();

  const [openIndexes, setOpenIndexes] = useState(new Set());
  const [heights, setHeights] = useState({});
  const contentRefs = useRef([]);

  const normalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const faqs = data.faq[normalizedCategory] || [];

  // measure heights AFTER render (critical for smooth animation)
  useLayoutEffect(() => {
    const newHeights = {};

    faqs.forEach((_, index) => {
      const el = contentRefs.current[index];
      if (el) {
        newHeights[index] = el.scrollHeight;
      }
    });

    setHeights(newHeights);
  }, [faqs, openIndexes]);

  const toggle = (index) => {
    setOpenIndexes(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <header className="navbar">
        <h1>My KY Home</h1>
        <nav><Link to="/">Back</Link></nav>
      </header>

      <div style={{ marginTop: "7rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>
          {normalizedCategory} FAQs
        </h1>

        {faqs.length === 0 ? (
          <p>No FAQs found.</p>
        ) : (
          faqs.map((item, index) => {
            const isOpen = openIndexes.has(index);

            return (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  overflow: "hidden"
                }}
              >
                {/* QUESTION */}
                <div
                  onClick={() => toggle(index)}
                  style={{
                    padding: "1rem",
                    cursor: "pointer",
                    background: "#f5f5f5",
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <span>{item.question}</span>

                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRight: "2px solid black",
                      borderBottom: "2px solid black",
                      transform: isOpen ? "rotate(-45deg)" : "rotate(45deg)",
                      transition: "transform 0.2s ease"
                    }}
                  />
                </div>

                {/* ANSWER */}
                <div
                  style={{
                    height: isOpen ? `${heights[index] || 0}px` : "0px",
                    overflow: "hidden",
                    transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s",
                    padding: isOpen ? "1rem" : "0 1rem"
                  }}
                >
                  <div
                    ref={el => contentRefs.current[index] = el}
                  >
                    <p style={{ margin: 0 }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}