import '../css/Home.css';
import '../css/FamilyHome.css';
import { Link } from 'react-router-dom';         //  for page navigation
import { HashLink } from 'react-router-hash-link'; //  for scrolling
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import React
import React from 'react';

function VocabSection({ vocabs = {}, vocabImages = {} }) {
  const navigate = useNavigate();

  const categories = Object.keys(vocabs);

  if (categories.length === 0) {
    return <p style={{ padding: "20px" }}>Loading vocabulary...</p>;
  }

  return (
    <section id="Vocab" className="section">
      <h2 className="section-title">英単語</h2>

      <div className="scroll-container">
        {categories.map((cat, index) => {
          const image =
            vocabImages[cat] || `/vocabs/images/${cat}.png`;

          return (
            <div
              key={index}
              className="card"
              onClick={() => navigate(`/vocab/${encodeURIComponent(cat)}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={image}
                alt={cat}
                onError={(e) => {
                  e.target.src = `/vocabs/images/${cat}.png`;
                }}
              />

              <div style={{ padding: "10px" }}>
                <p style={{ fontSize: "1.1rem", fontWeight: 800, textAlign: "center" }}>
                  {cat}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <hr />
    </section>
  );
}

function Section({ id, title, items, category }) {
    const navigate = useNavigate();

    return (
        <section id={id} className="section">

            <Link to={`/faq/${category}`} className="section-title">
                {title}
            </Link>

            <div className="scroll-container">
                {items.map((item, index) => (
<div
    className="card faq-card"
    key={index}
    onClick={() => navigate(`/faq/${category}`)}
    style={{ cursor: "pointer", backgroundColor: "#fcfcfc" }}
>
    <div className="faq-text">
        <p>
            <strong>Question:</strong> <br /> 
            {item.question}
        </p>

        <p style={{ marginTop: "0.5rem" }}>
            <strong>Answer:</strong><br />
            {item.answer}
        </p>
    </div>
</div>
                ))}
            </div>
            <hr />

        </section>
    );
}

// const PROXIES = [
//   (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
//   (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
// ];

// function ZillowImage({ src, alt, className }) {
//   const [attempt, setAttempt] = React.useState(0);
//   // attempt 0 = direct, 1 = proxy 1, 2 = proxy 2, 3 = placeholder
//   const PLACEHOLDER = "/images/placeholder.png"; // swap with your own

//   const resolvedSrc = React.useMemo(() => {
//     if (!src || !src.startsWith("http")) return src || PLACEHOLDER;
//     if (attempt === 0) return src;
//     if (attempt <= PROXIES.length) return PROXIES[attempt - 1](src);
//     return PLACEHOLDER;
//   }, [src, attempt]);

//   return (
//     <img
//       src={resolvedSrc}
//       alt={alt}
//       className={className}
//       loading="lazy"
//       // NO crossOrigin here — adding it forces CORS enforcement on plain image loads,
//       // which breaks Zillow's CDN even through proxies
//       onError={() => {
//         if (attempt < PROXIES.length + 1) {
//           setAttempt((a) => a + 1);
//         }
//       }}
//     />
//   );
// }

function SafeImage({ src, alt, className }) {
  const PLACEHOLDER = "/images/placeholder.png";

  // If no src → fallback
  if (!src) {
    return <img src={PLACEHOLDER} alt={alt} className={className} />;
  }

  // LOCAL image (your new case)
  if (src.startsWith("/")) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onError={(e) => (e.target.src = PLACEHOLDER)}
      />
    );
  }

  // EXTERNAL image (optional fallback behavior)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => (e.target.src = PLACEHOLDER)}
    />
  );
}


function SectionImg({ id, title, route, items }) {
  const navigate = useNavigate();
    const formatPrice = (price) => {
        if (!price) return "";

        // Remove anything that's not a digit
        const cleaned = String(price).replace(/[^\d]/g, "");

        if (!cleaned) return price; // fallback (avoid NaN)

        return Number(cleaned).toLocaleString();
    };

  return (
    <section id={id} className="section">
      {/* Keep header clickable like before */}
      <Link to={route} className="section-title">
        {title}
      </Link>

      <div className="scroll-container">
        {items &&
          items.map((item, index) => {
            const imageUrl = item.Image || item.image || "";

            return (
              <div
                className="card"
                key={index}
                onClick={() => route && navigate(route)}
                style={{ cursor: route ? "pointer" : "default" }}
              >
                {/* Image (with ORB-safe wrapper) */}
                <SafeImage
                  src={imageUrl}
                  alt={item.District || item.title || "item"}
                  className="card-image"
                />

                <div style={{ padding: "10px" }}>
                  {item.Price ? (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
<li
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.2rem"
  }}
>
  <b>${formatPrice(item.Price)}</b>

  {item.AvailableAt && (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        fontSize: "0.9rem",
        color: "#555"
      }}
    >
      <span>available from</span>
      <span>
        {new Date(item.AvailableAt).toLocaleDateString("en-US")}
      </span>
    </span>
  )}
</li>

                      <li style={{ color: "#555" }}>
                        {item.District}
                      </li>

                      <li style={{ textAlign: "right" }}>
                        <a
                          className="NavExt"
                          href="mailto:hahikeyuaono@gmail.com"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <p
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        margin: "5px 0",
                        color: "#333",
                      }}
                    >
                      {item.title || item.name}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
      </div>

      <hr />
    </section>
  );
}

export { Section, SectionImg, VocabSection };