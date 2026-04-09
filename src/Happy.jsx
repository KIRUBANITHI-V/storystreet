  import React, { useState, useEffect } from 'react';
  import './Happy.css';


  const images = [
    '/src/assets/happy/0.png',
    '/src/assets/happy/1.png',
    '/src/assets/happy/2.png',
    '/src/assets/happy/3.png',
    '/src/assets/happy/4.png',
    '/src/assets/happy/6.png',
    '/src/assets/happy/8.png',
    '/src/assets/happy/9.png',
    '/src/assets/happy/10.png',
    '/src/assets/happy/11.png',
    '/src/assets/happy/12.png',
    '/src/assets/happy/13.png',
    '/src/assets/happy/14.png',
    
    '/src/assets/happy/16.png',
    '/src/assets/happy/17.png',
    '/src/assets/happy/18.png',
    '/src/assets/happy/19.png',
    '/src/assets/happy/20.png',
    '/src/assets/happy/21.png',
    '/src/assets/happy/22.png',
    '/src/assets/happy/23.png',
    '/src/assets/happy/24.png',
    '/src/assets/happy/25.png',
    '/src/assets/happy/26.png',
    '/src/assets/happy/27.png',
    
    
    // Add more images here
  ];

  function Happy () {
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

  export default Happy;