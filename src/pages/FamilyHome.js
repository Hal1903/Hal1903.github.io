import '../css/Home.css';
import '../css/FamilyHome.css';
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom';         //  for page navigation
import { HashLink } from 'react-router-hash-link'; //  for scrolling
import Courses_list from './Courses.json';
import USInfo_list from './USInfo.json';
import FBGroupCard from '../components/FBGroupCard';
import {useEffect, useState} from 'react'
import { useData } from '../utils/DataContext';
import { useNavigate } from 'react-router-dom';
import { useTables } from '../utils/TableDataContext';
import {Section, SectionImg, VocabSection} from '../components/HomeSections';
// import { loadVocabData } from '../utils/loadVocabData';
import { PulseLoader } from "react-spinners";
import '../css/loaderAnime.css';
import { useFAQImages } from '../utils/useFAQImages';



export default function FamilyHome() {
    const [isOpen, setIsOpen] = useState(false);
    

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const { data, loading } = useData();
    const { tables, loading: tablesLoading } = useTables();
    const { faqImages, loading: faqImgLoading } = useFAQImages();
    
    const navigate = useNavigate();
    const ready = !loading && data?.faq && data?.houses;

    const houses = data.houses;
    const faqData = data.faq;

    const categories = Object.keys(faqData);
    const faqPanels = Object.keys(faqData).map(cat => ({
        title: cat,
        image: faqImages[cat] || "",   // from CSV
        key: cat                       // use as identifier
    }));

    const academic = Courses_list.Courses || []; // Parse from Courses; separate the list to json first.
    const usinfo = USInfo_list.Articles || []; // Parse from USInfo; separate the list to json first.

    const vocabData = data.vocab || {};
    const vocabImages = data.vocabImages || {};

    const tableItems = tables.map(t => ({
        title: t.title,
        image: t.image,
        key: t.key,
        url: t.url
    }));

    // if (loading) return <PulseLoader color="#36d7b7" size={15} />;
    if (loading) {
        return (
            <div className="loader-container">
            <PulseLoader color="#36d7b7" size={20} />
            </div>
        );
    }
    

    return (
        <div className="FamilyHome"  style={{backgroundColor: "#efefef"}}>

            {/*  NAVBAR */}
            <header className="navbar">
            <div className="nav-container">
                <h1 className="logo">My KY Home</h1>

                {/* Hamburger Icon */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Nav Links */}
                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <HashLink smooth to="#Houses" onClick={closeMenu}>物件</HashLink>

                    {/* {categories.map(cat => (
                    <HashLink
                        key={cat}
                        smooth
                        to={`#${cat}`}
                        onClick={closeMenu}
                    >
                        {cat}
                    </HashLink>
                    ))} */}

                    <HashLink smooth to="#Vocab" onClick={closeMenu}>英単語</HashLink>
                    <HashLink smooth to="#Community" onClick={closeMenu}>日本人コミュニティ</HashLink>
                    <HashLink smooth to="#AboutUs" onClick={closeMenu}>当サイトについて</HashLink>
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
        アメリカ、特にケンタッキー州での新生活に少し不安を感じている日本人の方々のため、
        生活を支える基本的な情報やケンタッキー周辺で役立つ情報をお届けします。
    </p>
    <p style={{textShadow: "1px 1px 2px rgba(0,0,0,0.1)"}}>
        お子様の学校選びを含めた物件探しの困りごとから入居後に頻出する問題そして FAQ への回答をまとめているので、ご活用ください。
    </p>


    </div>
<hr />
            {/*  MAIN CONTENT */}
            <main className="content" style={{backgroundColor: "#efefef"}}>

                <SectionImg id="Houses" 
                            title="物件 / Houses (affiliated by Golden 7 Realty)" 
                            route="/Houses" items={houses} />


                <SectionImg
                    id="FAQ"
                    title="よくある質問 (FAQ)"
                    items={faqImages.map(item => ({
                        title: item.category,
                        image: item.image,
                        onClick: () => navigate(`/faq/${encodeURIComponent(item.category)}`)
                    }))}
                />

                {/* {categories.map(category => (
                    <Section
                        key={category}
                        id={category}
                        title={category}
                        items={faqData[category]}
                        category={category}
                    />
                ))} */}

                <SectionImg
                    id="USInfo"
                    title="記事"
                    route="/blogs"
                    items={usinfo}
                />


                <VocabSection vocabs={vocabData} vocabImages={vocabImages} />

                <SectionImg
                    id="Tables"
                    title="早見表"
                    route="/table"    // no global route
                    items={tableItems}
                />

                {/* <SectionImg
                    id="Academic"
                    title="Academic"
                    route="/course"
                    items={academic}
                /> */}



{/* <h1>Video Resources</h1> */}

<h1 id="Community">Community</h1>
<div className='about-container2'>
<p style={{textShadow: "1px 1px 2px rgba(0,0,0,0.1)"}}>
    日本人コミュニティをお探しの場合は以下から参加が可能です： <br />
</p>

<FBGroupCard 
    name="日本人 in Kentucky"
    // image="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/513902666_1250203020107602_6795357682946854395_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=25d718&_nc_ohc=gKBZCKHHjxgQ7kNvwHJ70q1&_nc_oc=Adomf_by6L8k4Dyff7wCG3kcMZvejZizprt0v6f4tnv0oWhZ4CqqzIOtFC4eBaXFI2k&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=V-CAx0MkeOBbP9OcqzK54g&_nc_ss=7a389&oh=00_Af1IS5ex-l3N9yKMUag62wuaC3fBCylKQ6sLss_LRpU-tQ&oe=69D79D31"
    image = "images/fb.jpg"
    url="https://www.facebook.com/share/g/18JmGCy58C/"
    description="現地の生活情報やお得な情報が共有されているコミュニティです。ぜひ参加してみてください。"
/>
<FBGroupCard 
    name="セントラルケンタッキー在住日本人グループ"
    image="images/ckjg.jpg"
    url="https://www.facebook.com/share/g/1D6YcoFZXy/"
    description="レキシントン付近での生活情報やお得な情報が共有されているコミュニティです。"
/>
<FBGroupCard 
    name="ソーラン in Kentucky"
    // image="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/595198062_4242834959318000_1413714240785491276_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=25d718&_nc_ohc=bZ3FUABpUbIQ7kNvwHyAs_i&_nc_oc=AdotB6QBQbCuj1_iZ179N7TD4suHZEcdOCog_6i18H2eI5FUetqHY-5LXBnOIuQZ1lU&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=PHpCF-PsrKy38Y3z01rvUQ&_nc_ss=7a389&oh=00_Af1wmX3RtgnBW6K-U7nWIAEwHVvcSJqWyGX4vaxgzin6dA&oe=69D7A892"
    image = "images/soran.png"
    url="https://www.facebook.com/share/g/1FnmqUahdW/"
    description="ソーラン節を通して築く日本人コミュニティです。様々な場所で披露しています、興味があれば練習にご参加ください。"
/>
</div>




            </main>


      <footer className="footer">
        <section id="AboutUs">
        <h1 id="AboutUs">About Us</h1>
        <div className='about-container2' >
            {/* <div className='about-slideshow'>
                <img src="/images/home/yuki_pic.png" />
            </div> */}
            <div className='about-text2' style={{textAlign: "center"}}>
            <h2>Yuki Aono</h2>
<p>
不動産仲介にとどまらず、ご家族が安心してケンタッキーでの新生活をスタートできるよう、
住まいと暮らしをトータルでサポートしています。
「ケンタッキーに来てよかった」と思える幸せな住環境づくりを大切にしています。
</p>
<p>
また、投資家ネットワークを活かし、きれいにリノベーションされた売り物件を賃貸化し、
すぐに収益を生む「テナント付き物件」を実現。
こうした物件は、入居者様には快適な住まいを、
オーナー様には安定した収益をもたらし、多くの方にご好評をいただいています。
</p>
<p>
「住む人」と「投資する人」双方に価値のある不動産をつなぐことが、私の役割です。
まずは、赴任が決まったらすぐLINEでお気軽にご連絡ください。
</p>
<p>Email: hahikeyuaono@gmail.com</p>
                <div className='social-icons' style={{margin: "2rem"}}>
                <SocialIcon url="https://line.me/R/ti/p/@325uhrhr" />
                <SocialIcon url="https://www.facebook.com/yukiko.aono.716/"></SocialIcon>
                <SocialIcon url="https://www.linkedin.com/in/yuki-aono-547289384/"></SocialIcon>
                <SocialIcon url="mailto:hahikeyuaono@gmail.com"></SocialIcon>
                </div>
            </div>
        </div>

        <div className='about-container2' >
            <div className='about-text2' style={{textAlign: "center"}}>
            {/* <div className='about-slideshow'>
                <img src="/images/home/luke_pic.jpg" style={{ width: "200px", height: "270px" }} />
            </div> */}
            <h2>Haruku Aono</h2>
<p>
このウェブサイトの開発者です。
同じくケンタッキー州に住む日本人の方々が
少しでも安心して新生活をスタートできるよう、
このサイトを作りました。
</p>
<p>
既存の、自己紹介と勉強資料のまとめを兼ねたサイトを改造して作りましたので、
一応そのリンクも下に載せておきます。
</p>
<p>
何か取り扱ってほしい情報や、サイトの改善点などがあれば、ぜひLINEなどでご連絡ください。
</p>
                <p>Email: hahikeyuaono0419@gmail.com</p>
                <p><Link to="/home"><b>
                ▶ Portfolio About-me Link
                </b></Link></p>
                
                
          <div className='social-icons' style={{margin: "2rem"}}>
            <SocialIcon url="https://line.me/R/ti/p/@726hstzb"></SocialIcon>
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