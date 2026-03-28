import '../css/Home.css';
import '../css/FamilyHome.css';
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom';         //  for page navigation
import { HashLink } from 'react-router-hash-link'; //  for scrolling
import FAQ_list from './FAQ_list.json';
import House_list from './Houses.json';
import Courses_list from './Courses.json';
import {useState} from 'react'


import { useNavigate } from 'react-router-dom';

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
                        <img src={item.image} alt={item.title} />
                        <div style={{}}>
                            <ul style={{listStyle: "none", padding: "2px 20px 2px 20px"}}>
                                <li style={{fontSize: "1.2rem"}}><b>{item.price}</b></li>
                                <li>{item.address}</li>
                                <li>{item.title}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <hr />

        </section>
    );
}

export default function FamilyHome() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const faq = FAQ_list.faq

    // Placeholder data
    const houses = House_list.Houses || [];

    const life = FAQ_list.faq.Life || [];
    const grocery = FAQ_list.faq.Grocery || [];
    const troubles = FAQ_list.faq.Troubles || [];
    const education = FAQ_list.faq.Education || [];
    const academic = Courses_list.Courses || []; // Parse from Courses; separate the list to json first.

    return (
        <div className="FamilyHome"  style={{backgroundColor: "#efefef"}}>

            {/*  NAVBAR */}
            <header className="navbar">
            <div className="nav-container">
                <h1 className="logo">Family Home</h1>

                {/* Hamburger Icon */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Nav Links */}
                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <HashLink smooth to="#Houses" onClick={closeMenu}>Houses</HashLink>
                    <HashLink smooth to="#Life" onClick={closeMenu}>Life</HashLink>
                    <HashLink smooth to="#Grocery" onClick={closeMenu}>Grocery</HashLink>
                    <HashLink smooth to="#Troubles" onClick={closeMenu}>Troubles</HashLink>
                    <HashLink smooth to="#Education" onClick={closeMenu}>Education</HashLink>
                    <HashLink smooth to="#Academic" onClick={closeMenu}>Academic</HashLink>
                    <Link to="/home" onClick={closeMenu}>About Us</Link>
                </nav>
            </div>
        </header>

{/*  TOP IMAGE */}
    <img 
        src="/images/family_top.png"
        alt="Top Pic"
        className="full-width-image"
    />
    <div className='about-container' 
    >
    <p style={{textShadow: "1px 1px 2px rgba(0,0,0,0.1)"}}>
        アメリカでの新生活に少し不安を感じている日本人の方々のため、生活を支える基本的な情報やケンタッキー周辺で役立つ情報をお届けします。
    </p>
    <p style={{textShadow: "1px 1px 2px rgba(0,0,0,0.1)"}}>
        お子様の学校選びを含めた物件探しの困りごとから入居後に頻出する問題そして FAQ への回答をまとめているので、ぜひご活用ください。
    </p>
    <p style={{textShadow: "1px 1px 2px rgba(0,0,0,0.1)"}}>
        日本人コミュニティをお探しの方はこちらのFacebookグループにご参加ください： <br />
    </p>


<div className="link-card">
    <img 
        src="/images/fb.jpg" 
        alt="Facebook Group"
        className="link-image"
    />

    <div className="link-content">
        <p className="link-title">Community Facebook Group</p>
        <p className="link-description">
            現地の生活情報やお得な情報が共有されているコミュニティです。ぜひ参加してみてください。
        </p>
        <p style={{textAlign: "center"}}>
        <a 
            href="https://www.facebook.com/share/g/18JmGCy58C/" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Visit Group →
        </a>
        </p>
    </div>
</div>


    </div>
<hr />
            {/*  MAIN CONTENT */}
            <main className="content" style={{backgroundColor: "#efefef"}}>

                <SectionImg
                    id="Houses"
                    title="Houses"
                    route="/Houses"
                    items={houses}
                />

                <Section
                    id="Life"
                    title="Life Hacks"
                    route="/Life"
                    items={life}
                    category="Life"
                />
<Section id="Grocery" title="Grocery" items={grocery} category="Grocery" />
<Section id="Troubles" title="Troubles"  items={troubles} category="Troubles" />
<Section id="Education" title="Education" items={education} category="Education" />

                <SectionImg
                    id="Academic"
                    title="Academic"
                    route="/course"
                    items={academic}
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