  import React, { useState, useEffect } from 'react';
  import './Happy.css';


  const images = [
    '/src/assets/sad/Title.jpeg',
    '/src/assets/sad/1.jpeg',
    '/src/assets/sad/2.png',
    '/src/assets/sad/3.png',
    '/src/assets/sad/4.png',
    '/src/assets/sad/5.png',
    '/src/assets/sad/6.png',
    '/src/assets/sad/7.png',
    '/src/assets/sad/8.png',
    '/src/assets/sad/9.png',
    
    '/src/assets/sad/10.png',
    '/src/assets/sad/11.png',
    '/src/assets/sad/12.png',
    '/src/assets/sad/end.jpeg',

    // Add more images here
  ];

  function Sad () {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);

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

  export default Sad;