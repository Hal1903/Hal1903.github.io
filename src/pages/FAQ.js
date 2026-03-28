import { useParams } from 'react-router-dom';
import FAQ_list from './FAQ_list.json';
import { Link } from "react-router-dom"
import '../css/Home.css';
import '../css/FamilyHome.css';

export default function FAQ() {
    const { category } = useParams();

    // Normalize category (optional safety)
    const normalizedCategory =
        category.charAt(0).toUpperCase() + category.slice(1);

    const faqs = FAQ_list.faq[normalizedCategory] || [];

    return (
        
        <div style={{ padding: "2rem" }}>
      <header className="navbar">
        <h1>Family Home</h1>
        <nav>
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
                    <div key={index} style={{ marginBottom: "1.5rem" }}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))
            )}
        </div>
        </div>
    );
}