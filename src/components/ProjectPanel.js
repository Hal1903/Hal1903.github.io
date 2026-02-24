import React, { useState } from "react";
import "../css/ProjectPanel.css";

const Panel = ({ imageSrc, title, description, detail }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`panel ${flipped ? "flipped" : ""}` } onClick={() => setFlipped(!flipped)}>
      <div className="panel-inner" style={{width: '325px', height: '425px'}}>
        <div className="panel-front">
          <div className="panel-image">
            <img src={imageSrc} alt={title} />
          </div>
          <div className="panel-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="panel-back">
          <div className="panel-content">
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;



// import React from "react";
// import "../css/ProjectPanel.css";

// const Panel = ({ imageSrc, title, description }) => {
//   return (
//     <div className="panel">
//       <div className="panel-image">
//         <img src={imageSrc} alt={title} />
//       </div>
//       <div className="panel-content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Panel;
