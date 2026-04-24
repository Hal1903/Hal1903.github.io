import React from "react";

export default function FBGroupCard({ name, image, url, description }) {
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