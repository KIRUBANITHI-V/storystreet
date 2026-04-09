import React, { useState, useEffect } from 'react';
import './Happy.css';

// ✅ Import all images
import imgTitle from "./assets/sad/Title.jpeg";
import img1 from "./assets/sad/1.jpeg";
import img2 from "./assets/sad/2.png";
import img3 from "./assets/sad/3.png";
import img4 from "./assets/sad/4.png";
import img5 from "./assets/sad/5.png";
import img6 from "./assets/sad/6.png";
import img7 from "./assets/sad/7.png";
import img8 from "./assets/sad/8.png";
import img9 from "./assets/sad/9.png";
import img10 from "./assets/sad/10.png";
import img11 from "./assets/sad/11.png";
import img12 from "./assets/sad/12.png";
import imgEnd from "./assets/sad/end.jpeg";

// ✅ Store imported images
const images = [
  imgTitle,
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
  imgEnd
];

function Sad() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 25000);

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

export default Sad;
