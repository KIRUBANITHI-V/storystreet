  import React, { useState, useEffect } from 'react';
  import './Happy.css';


  const images = [
    '/src/assets/Relax/1.png',
    '/src/assets/Relax/2.png',
     '/src/assets/Relax/2.1.png',
    '/src/assets/Relax/3.png',
    '/src/assets/Relax/4.png',
    '/src/assets/Relax/5.png',
    '/src/assets/Relax/6.png',
    '/src/assets/Relax/7.png',
    '/src/assets/Relax/8.png',
    '/src/assets/Relax/9.png',
    '/src/assets/Relax/10.png',
    '/src/assets/Relax/11.png',
    '/src/assets/Relax/12.png',
    '/src/assets/Relax/13.png',
    '/src/assets/Relax/14.png',
    '/src/assets/Relax/16.png',
    '/src/assets/Relax/17.png',
    '/src/assets/Relax/18.png',
    '/src/assets/Relax/19.png',
    '/src/assets/Relax/20.png',
    '/src/assets/Relax/21.png',
    // Add more images here
  ];

  function Relaxed () {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 20000);

      return () => clearInterval(intervalId);
    }, []);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
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
  };

  export default Relaxed;