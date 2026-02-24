import React from 'react';

const LargePanel = ({ imageSrc, title, description }) => {
  return (
    <div className="large-panel">
      <div className="large-panel-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="large-panel-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}