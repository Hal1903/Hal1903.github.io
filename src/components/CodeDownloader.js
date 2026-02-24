import React from "react";
import '../css/button.css';

const CodeDownloader = ({ href, fileName, children }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="button-container">
      <button
        className="download-button"
        onClick={handleDownload}
      >
        {children || "Download File"}
      </button>
    </div>
  );
};

export default CodeDownloader;
