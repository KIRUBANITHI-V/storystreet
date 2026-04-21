import React, { useState, useEffect } from 'react';
import './Happy.css';

// ✅ Import Relax images
import img1 from "./assets/Relax/1.png";
import img2 from "./assets/Relax/2.png";
import img21 from "./assets/Relax/2.1.png";
import img3 from "./assets/Relax/3.png";
import img4 from "./assets/Relax/4.png";
import img5 from "./assets/Relax/5.png";
import img6 from "./assets/Relax/6.png";
import img7 from "./assets/Relax/7.png";
import img8 from "./assets/Relax/8.png";
import img9 from "./assets/Relax/9.png";
import img10 from "./assets/Relax/10.png";
import img11 from "./assets/Relax/11.png";
import img12 from "./assets/Relax/12.png";
import img13 from "./assets/Relax/13.png";
import img14 from "./assets/Relax/14.png";
import img16 from "./assets/Relax/16.png";
import img17 from "./assets/Relax/17.png";
import img18 from "./assets/Relax/18.png";
import img19 from "./assets/Relax/19.png";
import img20 from "./assets/Relax/20.png";
import img21b from "./assets/Relax/21.png";

const images = [
  img1,
  img2,
  img21,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21b
];

function Relaxed() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % images.length
      );
    }, 45000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) =>
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
