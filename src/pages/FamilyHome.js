import '../css/Home.css';
import '../css/FamilyHome.css';
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom';         //  for page navigation
import { HashLink } from 'react-router-hash-link'; //  for scrolling

// Reusable Section Component
function Section({ id, title, route, items }) {
    return (
        <section id={id} className="section">

            {/* Clickable title → route page */}
            <Link to={route} className="section-title">
                {title}
            </Link>

            {/* Horizontal scroll */}
            <div className="scroll-container">
                {items.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default function FamilyHome() {

    // Placeholder data
    const houses = [
        { image: "https://via.placeholder.com/300x180", title: "Modern House" },
        { image: "https://via.placeholder.com/300x180", title: "Minimal Home" },
        { image: "https://via.placeholder.com/300x180", title: "Luxury Villa" },
        { image: "https://via.placeholder.com/300x180", title: "Beach House" },
    ];

    const life = [
        { image: "https://via.placeholder.com/300x180", title: "Kitchen Hack" },
        { image: "https://via.placeholder.com/300x180", title: "Cleaning Tip" },
        { image: "https://via.placeholder.com/300x180", title: "Daily Routine" },
        { image: "https://via.placeholder.com/300x180", title: "Storage Idea" },
    ];

    const education = [
        { image: "https://via.placeholder.com/300x180", title: "Math Course" },
        { image: "https://via.placeholder.com/300x180", title: "Programming" },
        { image: "https://via.placeholder.com/300x180", title: "AI Basics" },
        { image: "https://via.placeholder.com/300x180", title: "Data Science" },
    ];

    return (
        <div className="FamilyHome">

            {/*  NAVBAR */}
            <header className="navbar">
                <h1 style={{ marginBottom: '0.5rem' }}>Family Home</h1>
                <nav>
                    {/* Scroll within page */}
                    <HashLink smooth to="#houses">Houses</HashLink>
                    <HashLink smooth to="#life">Life Hacks</HashLink>
                    <HashLink smooth to="#education">Education</HashLink>

                    {/* Navigate to different page */}
                    <Link to="/home">About Us</Link>
                </nav>
            </header>

            {/*  MAIN CONTENT */}
            <main className="content">

                <Section
                    id="houses"
                    title="Houses"
                    route="/houses"
                    items={houses}
                />

                <Section
                    id="life"
                    title="Life Hacks"
                    route="/life"
                    items={life}
                />

                <Section
                    id="education"
                    title="Education"
                    route="/course"
                    items={education}
                />

            </main>


      <footer className="footer">
        <section id="contact">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>Contact</h2>
        <ul style={{ listStylePosition: "inside", padding: 0 }}>
            <li>Realtor Email: hahikeyuaono@gmail.com</li>
            <li>Developer Email: hahikeyuaono0419@gmail.com</li>
        </ul>
        </div>
          {/* <div style={{align: "center", marginBottom: "2rem"}}> */}

            {/* <br></br> */}
            {/* GitHub: <a href="https://github.com/Hal1903">Hal1903</a>
          </div> */}
          
          <div className='social-icons'>
            <SocialIcon url="https://github.com/Hal1903"></SocialIcon>
            <SocialIcon url="https://www.linkedin.com/in/haruku-aono-b656661a9/"></SocialIcon>
            
            <a
              href="https://scholar.google.com/citations?hl=en&user=0vYSmiwAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img
              src={"/images/icons/scholar.png"}
              alt="Google Scholar"
              className="scholar-icon"
              // style={{ width: '35px', height: '35px', marginTop: '6px'}}
            />
            </a>
           
          </div>
        </section>

        {/* <section className="comments">
          <h2>Comments</h2>
          <p>(You can embed a comment widget here later)</p>
        </section> */}
      </footer>

        </div>

        
    );
}