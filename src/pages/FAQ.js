import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useRef } from "react";
import FAQ_list from './FAQ_list.json';
import { Link } from "react-router-dom"
import '../css/Home.css';
import '../css/FamilyHome.css';

export default function FAQ() {
    const { category } = useParams();
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Normalize category (optional safety)
    const normalizedCategory =
        category.charAt(0).toUpperCase() + category.slice(1);

    const faqs = FAQ_list.faq[normalizedCategory] || [];

    return (
        
        <div style={{ padding: "2rem" }}>
      <header className="navbar">
        <h1>Family Home</h1>
        <nav style={{ marginTop: "0.5rem" }}>
          {/* <a href="/home">Home</a> */}
          <Link to="/">Back</Link>
        </nav>
      </header>

        <div style={{ marginTop: "7rem" }}>
            <h1>{normalizedCategory} FAQs</h1>

{faqs.length === 0 ? (
    <p>No FAQs found.</p>
) : (
    faqs.map((item, index) => (
        <div
            key={index}
            style={{
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
            }}
        >
            {/* Question */}
<div
    onClick={() => toggle(index)}
    style={{
        padding: "1rem",
        cursor: "pointer",
        backgroundColor: "#f5f5f5",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }}
>
    <span>{item.question}</span>

    <span
        style={{
            border: "solid black",
            borderWidth: "0 2px 2px 0",
            display: "inline-block",
            padding: "4px",
            transform: openIndex === index
                ? "rotate(-135deg)"
                : "rotate(45deg)",
            transition: "transform 0.3s ease",
        }}
    ></span>
</div>

            {/* Answer */}
<div
    ref={(el) => (contentRefs.current[index] = el)}
    style={{
        height:
            openIndex === index
                ? contentRefs.current[index]?.scrollHeight + "px"
                : "0px",
        overflow: "hidden",
        transition: "height 0.35s ease",
        padding: openIndex === index ? "1rem" : "0 1rem",
        backgroundColor: "white",
        // makes the motion perfectly smooth!
        transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.2s ease"
    }}
>
    <p style={{ margin: 0 }}>{item.answer}</p>
</div>


        </div>
    ))
)}
        </div>
        </div>
    );
}