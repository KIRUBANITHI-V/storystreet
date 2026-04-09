import React, { useState, useEffect } from 'react';
import './Happy.css';

// ✅ Import all Happy images
import img0 from "./assets/happy/0.png";
import img1 from "./assets/happy/1.png";
import img2 from "./assets/happy/2.png";
import img3 from "./assets/happy/3.png";
import img4 from "./assets/happy/4.png";
import img6 from "./assets/happy/6.png";
import img8 from "./assets/happy/8.png";
import img9 from "./assets/happy/9.png";
import img10 from "./assets/happy/10.png";
import img11 from "./assets/happy/11.png";
import img12 from "./assets/happy/12.png";
import img13 from "./assets/happy/13.png";
import img14 from "./assets/happy/14.png";
import img16 from "./assets/happy/16.png";
import img17 from "./assets/happy/17.png";
import img18 from "./assets/happy/18.png";
import img19 from "./assets/happy/19.png";
import img20 from "./assets/happy/20.png";
import img21 from "./assets/happy/21.png";
import img22 from "./assets/happy/22.png";
import img23 from "./assets/happy/23.png";
import img24 from "./assets/happy/24.png";
import img25 from "./assets/happy/25.png";
import img26 from "./assets/happy/26.png";
import img27 from "./assets/happy/27.png";

// ✅ Store images
const images = [
  img0,
  img1,
  img2,
  img3,
  img4,
  img6,
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
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27
];

function Happy() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % images.length
      );
    }, 30000);

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

export default Happy;
