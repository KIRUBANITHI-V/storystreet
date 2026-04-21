import React, { useState, useEffect } from 'react';
import './Happy.css';

// ✅ Import all Angry images
import img1 from "./assets/angry/1.png";
import img2 from "./assets/angry/2.png";
import img3 from "./assets/angry/3.png";
import img4 from "./assets/angry/4.png";
import img5 from "./assets/angry/5.png";
import img6 from "./assets/angry/6.png";
import img7 from "./assets/angry/7.png";
import img8 from "./assets/angry/8.png";
import img9 from "./assets/angry/9.png";
import img10 from "./assets/angry/10.png";
import img11 from "./assets/angry/11.png";
import img12 from "./assets/angry/12.png";
import img13 from "./assets/angry/13.png";
import img14 from "./assets/angry/14.png";
import img141 from "./assets/angry/14.1.png";
import img15 from "./assets/angry/15.png";
import img16 from "./assets/angry/16.png";
import img17 from "./assets/angry/17.png";
import img18 from "./assets/angry/18.png";
import img19 from "./assets/angry/19.png";
import img20 from "./assets/angry/20.png";
import img21 from "./assets/angry/21.png";
import img22 from "./assets/angry/22.png";
import img23 from "./assets/angry/23.png";
import img24 from "./assets/angry/24.png";
import img25 from "./assets/angry/25.png";
import img26 from "./assets/angry/26.png";

// ✅ Store images
const images = [
  img1,
  img2,
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
  img141,
  img15,
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
  img26
];

function Angry() {
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

export default Angry;
