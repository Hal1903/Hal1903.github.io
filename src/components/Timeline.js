import React from "react";
import {Chrono} from "react-chrono";
import "../css/Timeline.css";

export default function Timeline() {
  const items = [
    { title: "2021", cardTitle: "2021 Hihglights"},
    { title: "2022", cardTitle: "2022 Highlights" },
    { title: "2023", cardTitle: "2023 Highlights" },
    { title: "2024", cardTitle: "2024 Highlights" },
    { title: "2025", cardTitle: "2025 Highlights" },
    { title: "2026", cardTitle: "2026 Highlights" },
  ];

  return (
    <div  className="timeline-wrapper">
        <div style={{ minWidth: "600px", width: "max-content", height: "500px" }}>
        <Chrono mode="HORIZONTAL" items={items}
            scrollable 
            disableToolbar={true}
            cardHeight={256}
            cardWidth={256}
            slideShow={false}
            showAllCardsHorizontal = {true}
            theme={{
            primary: "black",
            secondary: null,
            //   cardBgColor: "white",
            //   cardForeColor: "black",
            titleColor: "black"
            }}
        >
            <div>
                <ul>
                    <li>Started programming beyond just playing around (Python, C++, JS)</li>
                    <li>Developed simple video games, Kivy calculator, automation with Google API, etc.</li>
                </ul>
            </div>
            <div>
            <ul>
                <li>Passed AP Calculus BC with 2 months self-study</li>
                <li>Intern at FPI (VBA dev)</li>
                <li>Started undergraduate studies in CS and MA at UKY</li>
                <li>Started competitive programming and TA in Calc II and JPN's</li>
            </ul>
            </div>
            <div>
            <ul>
                <li>Elected Treasurer of Japanese Culture in Kentucky Society</li>
                <li>Assistant teacher at Central Kentucky Japanese School</li>
            </ul>
            </div>
            <div>
            <ul>
                <li>Completed GCI (DS + Analytics) from UofTokyo</li>
                <li>Started research on PINN</li>
                <li>MathLab reseach on Chipfiring at UKY</li>
            </ul>
            </div>
            <div>
            <ul>
                <li>Completed REU at WPI</li>
                <li>Paper accepted by IEEE NAECON</li>
                <li>Finished B.S. in CS and Math; graduated from UKY</li>
                <li>Experimental math curriculum begins</li>
                <li>Finished a senior project (Human Domino)</li>
            </ul>
            </div>
            <div>
            <ul>
                <li>More is coming soon...</li>
            </ul>
            </div>
        </Chrono>
        </div>
    </div>
  );
}


// export default function HorizontalTimeline() {
//     return (
//         // omit the headers
//         <div style={{ width: "60%", height: "auto", margin: "0 auto", }}>
//             <Chrono 
//             items={items} 
//             mode="HORIZONTAL" 
//             scrollable 
//             disableToolbar={true}
//             cardHeight={128}
//             cardWidth={256}
//             slideShow={false}
//             showAllCardsHorizontal = {true}
//             >
//             <div>
                
//             </div>
//             </Chrono>
//         </div>
//     );
// };
