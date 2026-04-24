import { useParams } from 'react-router-dom';
import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from '../utils/DataContext';
import '../css/FAQ.css';

export default function FAQ() {
  const { category } = useParams();
  const { data, loading } = useData();

  const [openIndexes, setOpenIndexes] = useState(new Set());
  const [heights, setHeights] = useState({});
  const contentRefs = useRef([]);

  const normalizedCategory =
    category?.charAt(0).toUpperCase() + category?.slice(1);

  // SAFE access (never undefined crash)
  const faqs = data?.faq?.[normalizedCategory];

  // =========================
  // LOADING / STATE LOGIC
  // =========================
  const isLoading = loading || !data;
  const hasFaqs = Array.isArray(faqs) && faqs.length > 0;

  // =========================
  // HEIGHT MEASUREMENT
  // =========================
  useLayoutEffect(() => {
    if (!hasFaqs) return;

    const newHeights = {};

    faqs.forEach((_, index) => {
      const el = contentRefs.current[index];
      if (el) newHeights[index] = el.scrollHeight;
    });

    setHeights(prev => {
      const same =
        Object.keys(prev).length === Object.keys(newHeights).length &&
        Object.keys(newHeights).every(k => prev[k] === newHeights[k]);

      return same ? prev : newHeights;
    });

  }, [faqs, hasFaqs]);

  // =========================
  // TOGGLE HANDLER
  // =========================
  const toggle = (index) => {
    setOpenIndexes(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  // =========================
  // RENDER
  // =========================
  return (
    <div className="faq-page">

      <header className="navbar">
        <h1>My KY Home</h1>
        <nav>
          <Link to="/">Back</Link>
        </nav>
      </header>

      <div className="faq-header">

        <h1 className="faq-title">
          {normalizedCategory} FAQs
        </h1>

        {/* LOADING STATE */}
        {isLoading ? (
          <p>Loading...</p>

        ) : !hasFaqs ? (
          /* EMPTY STATE (ONLY AFTER DATA LOADS) */
          <p>No FAQs found.</p>

        ) : (
          /* FAQ LIST */
          faqs.map((item, index) => {
            const isOpen = openIndexes.has(index);

            return (
              <div key={index} className="faq-item">

                {/* QUESTION */}
                <div
                  className="faq-question"
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>

                  <span className={`faq-arrow ${isOpen ? "open" : ""}`} />
                </div>

                {/* ANSWER */}
                <div
                  className="faq-answer"
                  style={{
                    height: isOpen ? `${heights[index] || 0}px` : "0px"
                  }}
                >
                  <div
                    ref={el => contentRefs.current[index] = el}
                    className="faq-content-wrapper"
                  >
                    <p className="faq-content">
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