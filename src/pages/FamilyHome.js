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

function FBGroupCard({ name, image, url, description }) {
    return (
    <div className="link-card">
        <img 
            // src={`/images/${image}`} 
            src = {image}
            alt="Facebook Group"
            className="link-image"
        />

        <div className="link-content">
            <p className="link-title">{name}</p>
            <p className="link-description">
                {description}
            </p>
            <p style={{textAlign: "center"}}>
            <a 
                href={url}
                target="_blank" 
                rel="noopener noreferrer"
            >
                Visit Group →
            </a>
            </p>
        </div>
    </div>
    )
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
                    <HashLink smooth to="#AboutUs" onClick={closeMenu}>About Us</HashLink>
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
        アメリカ、特にケンタッキー州での新生活に少し不安を感じている日本人の方々のため、生活を支える基本的な情報やケンタッキー周辺で役立つ情報をお届けします。
    </p>
    <p style={{textShadow: "1px 1px 2px rgba(0,0,0,0.1)"}}>
        お子様の学校選びを含めた物件探しの困りごとから入居後に頻出する問題そして FAQ への回答をまとめているので、ご活用ください。
    </p>
    <p style={{textShadow: "1px 1px 2px rgba(0,0,0,0.1)"}}>
        日本人コミュニティをお探しの場合は以下から参加が可能です： <br />
    </p>

<FBGroupCard 
    name="日本人 in Kentucky"
    image="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/513902666_1250203020107602_6795357682946854395_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=25d718&_nc_ohc=cXgTXUcSBBgQ7kNvwHZLWvA&_nc_oc=Adrlw_duNPdQM0dlYGeQITQwXDtupHC7W0RCv67w5FtaVqdBWu9NONX1YvYg5gicYFmKzPzddkjQFpNVTVmEClPu&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=5KUb7r1rS0IZj8NKDMYIcQ&_nc_ss=7a32e&oh=00_AfzmX_O88fQiIH4KwdDak8V7uQvORibZrRn44ui4wgvWZA&oe=69CE2A71"
    url="https://www.facebook.com/share/g/18JmGCy58C/"
    description="現地の生活情報やお得な情報が共有されているコミュニティです。ぜひ参加してみてください。"
/>
<FBGroupCard 
    name="セントラルケンタッキー在住日本人グループ"
    image="https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/131454369_10158063071748111_2289784090943501382_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=25d718&_nc_ohc=3iAYnq6EKz8Q7kNvwFzkuQQ&_nc_oc=AdrpEFAJ27tAv9XLiJiSJKW3jpxRRFXNLuNAuVwP80twkbT5zSGW2JU7Dw9Zki3YYOjyX3tDdT9iOl0gGmfceW8i&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=rEq3zs3qlDNvVLFG8lgtBQ&_nc_ss=7a32e&oh=00_AfxNZo7G01V9HxJ8WcsMaGrXy3gMlq8jyCy0DYZdMbRmGg&oe=69EFC8DB"
    url="https://www.facebook.com/share/g/1D6YcoFZXy/"
    description="レキシントン付近での生活情報やお得な情報が共有されているコミュニティです。"
/>
<FBGroupCard 
    name="ソーラン in Kentucky"
    image="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/595198062_4242834959318000_1413714240785491276_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=25d718&_nc_ohc=TVonNqOmR-oQ7kNvwHqLccx&_nc_oc=AdrAlxeuQ0c_AE1F2giCc6EORF7ogLZq2gQycQlLq_kVASDRXohZ2OtQ80mf29nBxueuh91EaT7IIPbMjaxluI_G&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=c9FfsZyocW5HBD1fIMb9Kw&_nc_ss=7a32e&oh=00_AfzhreUIIZNt6J5CXiLZ99Utaa7BhOgF5ztzSMiH6qOzLg&oe=69CE35D2"
    url="https://www.facebook.com/share/g/1FnmqUahdW/"
    description="ソーラン節を通して築く日本人コミュニティです。様々な場所で披露しています、興味があれば練習にご参加ください。"
/>



{/* https://www.facebook.com/share/g/18b5oRYzLv/ */}
{/* https://www.facebook.com/share/g/1DsoJxu2MN/ */}
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

<h1>Video Resources</h1>



            </main>


      <footer className="footer">
        <section id="AboutUs">
        <h1 id="AboutUs">About Us</h1>
        <div className='about-container2'>
            <div className='about-slideshow'>
                <img src="/images/home/yuki_pic.png" />
            </div>
            <div className='about-text2' style={{textAlign: "center"}}>
            <h2>Yuki Aono</h2>
                <p>
                A Realtor committed to supporting and moderating Japanese communities in the U.S. 
                Dedicating to sharing essential knowledge and firsthand experience to help residents thrive in American life.
                Proud proponent of this platform.
                </p>
                <p>Email: hahikeyuaono@gmail.com</p>
                <div className='social-icons' style={{margin: "2rem"}}>
                <SocialIcon url="https://www.facebook.com/yukiko.aono.716/"></SocialIcon>
                <SocialIcon url="https://www.linkedin.com/in/yuki-aono-547289384/"></SocialIcon>
                <SocialIcon url="mailto:hahikeyuaono@gmail.com"></SocialIcon>
                </div>
            </div>
        </div>

        <div className='about-container2'>
            <div className='about-text2' style={{textAlign: "center"}}>
            <h2>Haruku Aono</h2>
                <p>
Developer of this website and its academic resources, 
dedicated to advancing CS/Math education and promoting Japanese communities. 
Currently teaching at a Japanese school (CKJS).
                </p>
                <p>Email: hahikeyuaono0419@gmail.com</p>
                <p><Link to="/home"><b>
                ▶ Portfolio Link
                </b></Link></p>
                

          <div className='social-icons' style={{margin: "2rem"}}>
            <SocialIcon url="https://www.facebook.com/haruku.aono.5/"></SocialIcon>
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

            </div>
            <div className='about-slideshow'>
                <img src="/images/home/luke_pic.jpg" style={{ width: "200px", height: "270px" }} />
            </div>
        </div>


        {/* <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>Contact</h2>
        <ul style={{ listStylePosition: "inside", padding: 0 }}>
            <li>Realtor Email: hahikeyuaono@gmail.com</li>
            <li>Developer Email: hahikeyuaono0419@gmail.com</li>
        </ul>
        </div> */}
          {/* <div style={{align: "center", marginBottom: "2rem"}}> */}

            {/* <br></br> */}
            {/* GitHub: <a href="https://github.com/Hal1903">Hal1903</a>
          </div> */}
          

        </section>

      </footer>

        </div>

        
    );
}