import React from "react";

const CustomCard = ({ item }) => {
  const lines = item.cardDetailedText.split('\n');

  return (
    <div style={{ padding: "10px" }}>
      <h3>{item.cardTitle}</h3>
      <ul>
        {lines.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomCard;
