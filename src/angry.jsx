  import React, { useState, useEffect } from 'react';
  import './Happy.css';


  const images = [
    '/src/assets/angry/1.png',
    '/src/assets/angry/2.png',
    '/src/assets/angry/3.png',
    '/src/assets/angry/4.png',
    '/src/assets/angry/5.png',
    '/src/assets/angry/6.png',
    '/src/assets/angry/7.png',
    '/src/assets/angry/8.png',
    '/src/assets/angry/9.png',
    '/src/assets/angry/10.png',
    '/src/assets/angry/11.png',
    '/src/assets/angry/12.png',
    '/src/assets/angry/13.png',
    '/src/assets/angry/14.png',
    '/src/assets/angry/14.1.png',
    '/src/assets/angry/15.png',
    '/src/assets/angry/16.png',
    '/src/assets/angry/17.png',
    '/src/assets/angry/18.png',
    '/src/assets/angry/19.png',
    '/src/assets/angry/20.png',
    '/src/assets/angry/21.png',
    '/src/assets/angry/22.png',
    '/src/assets/angry/23.png',
    '/src/assets/angry/24.png',
    '/src/assets/angry/25.png',
    '/src/assets/angry/26.png',
   
    // Add more images here
  ];

  function Angry () {
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

  export default Angry;