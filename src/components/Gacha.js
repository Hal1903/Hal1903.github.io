import {React, useState, useEffect, useRef} from 'react'
import '../css/Gacha.css'

// 1 mythic, 1 secret, 2 epics, 3 rare, 5 uncommon, 8 common. Higher -> academic / engineering. Oh, Fibonacci!
const items = [
    {rank: 1, title: "01. Favorite music genre", desc: "Classical, rock, vocaloid, military songs, aand game music"},
    {rank: 1, title: "02. The max # of pushups I could make (08/19/2025)", desc: "32, 2^5. Before May 2025 I barely made 15, very happy."},
    {rank: 1, title: "03. The longest concentration hour", desc: "12 hours" },
    {rank: 1, title: "04. Favorite food", desc: "Roast beef, sushi, omelette rice, cream melon soda, and my parent's cooking" },
    {rank: 1, title: "05. When I realized I like studying", desc: "At the age of 19-20. I am catching up to those who liked studying earlier!" },
    {rank: 1, title: "06. Favorite games", desc: "Final Fantasy Tactics Advance, Dragon Quest 11, Puyo Puyo & Tetris, and Japanese indies" },
    {rank: 1, title: "07. Three words that describe me the most (subjective)", desc: "curious, coherent, and lazy (good and bad)"},
    {rank: 1, title: "08. Favorite Color in MTG", desc: "Blue and Black" },

    {rank: 2, title: "09. The lowest test score", desc: "8/100 (examining the ability to draw straight lines using a ruler.)" },
    {rank: 2, title: "10. My Computer", desc: "Ryzen5 7600X + NVIDIA 4060 Ti + 32GB RAM"},
    {rank: 2, title: "11. Favorite quote", desc: "Hobbies are means that became the goals. 趣味とは手段と目的が逆転したものである。" },
    {rank: 2, title: "12. My travel habits", desc: "Going to universities nearby and buy some gifts, visit tech companies nearby, and buy a Starbucks mug if it is a state I have never visited." },
    {rank: 2, title: "13. Favorite Programming Language", desc: "Python, C++, and Prolog. I want to learn Haskell at some point."},
    
    {rank: 3, title: "14. Daily habits", desc: "Thinking of interesting properties of a number I see. Sometimes I work on proof when I found a patterns, but sometimes it is an unsolved problem."},
    {rank: 3, title: "15. Favorite equations (hence formula as well)", desc: "Bellman Equation, Euler's formula and identity, Taylor series, adversarial training loss, and Cross-Entropy (especially with a conneciton to KL divergence)" },
    {rank: 3, title: "16. Favorite Paradox", desc: "Arcsin law, Simpson's Paradox, Giffen goods, Hilbert hotel, and Banach-Tarski" },
    // {rank: 3, title: "Things I struggled to understand the most", desc: "Renewal Process with Kolmogorov Equations, RB Tree, and "},

    {rank: 4, title: "17. The most elegant physics equations and proofs I saw (as a hobby)", desc: "Lagrangian and Action principles and Noether's theorem" },
    {rank: 4, title: "18. Favorite ML Models", desc: "Autoencoder, variations of GAN, XGB/LGB, and Gaussian Process. Not a model, but dropout regularization is intriguing to me." },
    
    {rank: 5, title: "19. Favorite math theorems", desc: "Universal Approximation theorem, Matrix-Tree theorem, Taylor's theorem, Binomial/Generating Function theorem, and Fermat's Square Sum theorem"},

    {rank: 6, title: "20. Things I want to study outside my career", desc: "GNN, MARL, SSL, Measure theory, Manifolds, ITP, Axiom of Choice (= Nash Equilibrium (2023)), Godel's Incompleteness Theorems, ..." },


]


export default function Gacha() {
  const [storage, setStorage] = useState([]);

  const handleGachaClick = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setStorage(prev => [...prev, randomItem]);
  };

  const deleteItemClick = (indexToDelete) => {
    setStorage(prev => prev.filter((_, index) => index !== indexToDelete));
  };

  const getPanelStyle = (rank) => {
    if (rank >= 6) {
        return {
        background: "linear-gradient(135deg, gold, yellow)",
        animation: "glow 1s infinite alternate"
        };
    } else if (rank === 5) {
        return {
        background: "linear-gradient(135deg, violet, pink)",
        animation: "glow 1s infinite alternate"
        };
    } else if (rank === 4) {
        return {
        background: "linear-gradient(135deg, lightblue, white)"
        };
    }
    return {}; // default: no extra styling
  };

    
  // Scroll to bottom whenever storage changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [storage]);

  const containerRef = useRef(null);
  return (
    <div style={{ display: "flex", gap: "2rem", width: "90%", height: "375px"}}>
      {/* Left: Gacha machine (40%) */}
      <div
        className="machine"
        style={{
          flex: "0 0 40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="images/icons/gachagacha.png"
          alt="Gacha Machine"
          style={{ cursor: "pointer", width: "200px" }}
          onClick={handleGachaClick}
        />
      </div>

      {/* Right: Scrollable storage (60%) */}
      <div
        ref={containerRef}
        className="gacha-items"
        style={{
          flex: "0 0 60%",
          maxHeight: "550px",
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
      
      {/* Storage mapping, shows item panel */}
        {
          storage.map((item, index) => (
            <div key={index} className="item-panel" style={getPanelStyle(item.rank)}>
            <div style={{flex: 1}}>
                <div style={{display: 'flex'}}>
                    <b style={{ fontSize: "1rem", color: "#666", marginRight: "1.5em"}}>☆{item.rank}</b>
                    <h4 style={{ margin: "0 0 0.5rem 0", textAlign: "left" }}>{item.title}</h4>
                </div>
                <p style={{ margin: 0, textAlign: "left" }}>{item.desc}</p>
            </div>
            
            <button
                onClick={() => deleteItemClick(index)}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#f33",
                        cursor: "pointer",
                        fontSize: "2rem",
                        padding: 0,
                        lineHeight: 1
                    }}
            >
                &times;
            </button>
            </div>
        ))
        }
      </div>
    </div>
  );
}
