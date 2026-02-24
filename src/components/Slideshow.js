import React, { useEffect, useState } from 'react';
import '../css/Slideshow.css';

const imageList = [
  '/images/slides/poster.jpeg',
  '/images/slides/wpi.jpeg',
  '/images/slides/ca.jpeg',
  '/images/slides/egr103.jpeg',
  '/images/slides/syuryo.png',
];

export default function AboutSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % imageList.length);
  };

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <div className="slideshow-container">
      <button className="prev-btn" onClick={prevSlide}>
        &#9664;
      </button>

      <img
        src={imageList[current]}
        alt={`Slide ${current + 1}`}
        className="slideshow-image"
      />

      <button className="next-btn" onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
}

