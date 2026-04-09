import React, { useState, useEffect } from 'react';
import './Happy.css';

// ✅ Correct paths (after moving to public/Relax/)
const images = [
  '/Relax/1.png',
  '/Relax/2.png',
  '/Relax/2.1.png',
  '/Relax/3.png',
  '/Relax/4.png',
  '/Relax/5.png',
  '/Relax/6.png',
  '/Relax/7.png',
  '/Relax/8.png',
  '/Relax/9.png',
  '/Relax/10.png',
  '/Relax/11.png',
  '/Relax/12.png',
  '/Relax/13.png',
  '/Relax/14.png',
  '/Relax/16.png',
  '/Relax/17.png',
  '/Relax/18.png',
  '/Relax/19.png',
  '/Relax/20.png',
  '/Relax/21.png',
];

function Relaxed() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="slideshow-container">

      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${
            index === currentIndex ? 'active' : ''
          }`}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      ))}

      <button className="prev-btn" onClick={handlePrev}>
        {'<<'}
      </button>

      <button className="next-btn" onClick={handleNext}>
        {'>>'}
      </button>

    </div>
  );
}

export default Relaxed;
