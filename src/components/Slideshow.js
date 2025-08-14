import React, { useEffect, useState } from 'react';

const imageList = [
  '/images/slides/poster.jpeg',
  '/images/slides/wpi.jpeg',
  '/images/slides/ca.jpeg',
  '/images/slides/egr103.jpeg',
  '/images/slides/syuryo.png',
];

function AboutSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Manual controls
  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % imageList.length);
  };

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <div className="slideshow-container">
      <button className="prev-btn" onClick={prevSlide}>
        &#9664; {/* Left triangle */}
      </button>
      <img
        src={imageList[current]}
        alt={`Slide ${current + 1}`}
        className="slideshow-image"
      />
      <button className="next-btn" onClick={nextSlide}>
        &#9654; {/* Right triangle */}
      </button>
    </div>
  );
}

export default function Slideshow() {
  return (
    <div className="slideshow-container">
      <AboutSlideshow />
        <style jsx>{`
          .slideshow-container {
            position: relative;
            width: 100%;
            max-width: 100%;
            height: 300px; /* Set your desired fixed height */
            overflow: hidden;
          }
          .slideshow-image {
            height: 100%;
            width: auto;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          }
          .prev-btn,
          .next-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0,0,0,0.5);
            border: none;
            color: white;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            cursor: pointer;
            z-index: 2;
          }

          .prev-btn {
            left: 15px;
          }

          .next-btn {
            right: 15px;
          }

          .prev-btn:hover,
          .next-btn:hover {
            background: rgba(0,0,0,0.7);
          }

        `}</style>

    </div>
  );
}
