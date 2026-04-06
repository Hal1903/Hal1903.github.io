import '../css/Home.css';
import '../css/FamilyHome.css';
import { Link } from 'react-router-dom';         //  for page navigation
import { HashLink } from 'react-router-hash-link'; //  for scrolling
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VocabSection({ vocabs }) {
    const navigate = useNavigate();

    const sheetNames = Object.keys(vocabs);

    // ADD THIS
    if (sheetNames.length === 0) {
        return <p style={{ padding: "20px" }}>Loading vocabulary...</p>;
    }

    return (
        <section id="Vocab" className="section">
            <h2 className="section-title">Vocabulary</h2>

            <div className="scroll-container">
                {sheetNames.map((name, index) => (
                    <div
                        className="card"
                        key={index}
                        onClick={() => navigate(`/vocab/${encodeURIComponent(name)}`)}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            src={`/vocabs/images/${name}.png`}
                            alt={name}
                        />

                        <div style={{ padding: "10px" }}>
                            <p style={{
                                fontSize: "1.1rem",
                                fontWeight: "600",
                                textAlign: "center"
                            }}>
                                {name}
                            </p>
                        </div>
                    </div>
                ))}
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


function SectionImg({ id, title, route, items }) {
    const navigate = useNavigate();

    return (
        <section id={id} className="section">
            <Link to={route} className="section-title">
                {title}
            </Link>

            <div className="scroll-container">
                {items.map((item, index) => (
                    <div
                        className="card"
                        key={index}
                        onClick={() => navigate(route)} 
                        style={{ cursor: "pointer" }}
                    >
                        {/* <img src={item.Image} alt={item.Title || item.name || "item"} /> */}
                        <img 
                        // if academic, use image; if houses, use Image;
                            src={item.Image || item.image}  
                            alt={item.title || item.name || "item"} 
                        />

                        <div style={{ padding: "10px 10px 10px 10px" }}>
                            {/* Format 1: Price and District */}
                            {item.Price ? (
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    <li style={{ fontSize: "1.2rem" }}>
                                        <b>${item.Price}</b>
                                    </li>
                                    <li style={{ color: "#555"}}>{item.District}</li>    
                                    <li style={{textAlign: "right"}}>
                                    <a className='NavExt'  href="mailto:hahikeyuaono@gmail.com">
                                        Contact Us
                                    </a>
                                    </li>
                                </ul>
                            ) : (
                                /* Format 2: Title only (for Academic/other) */
                                <p style={{ 
                                    fontSize: "1.1rem", 
                                    fontWeight: "600", 
                                    margin: "5px 0",
                                    color: "#333" 
                                }}>
                                    {item.title || item.name}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <hr />
        </section>
    );
}

export { Section, SectionImg, VocabSection };