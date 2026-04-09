import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nope.css';

function Nope() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/mood');
  };

  const handleNoClick = () => {
    window.close();
  };

  return (
    <div className="cardd">
      <h2>Don't Scroll, Read!</h2>
      <p>Reading stories can transport you to new worlds, spark imagination, and broaden your perspective. It's a great way to relax, learn, and grow. So, take a break from scrolling and dive into a story!</p>
      <p>Now, do you like to hear stories?</p>
      <div className="buttons">
        <button className="yes-btn" onClick={handleYesClick}>Yes, I'd love to!</button>
        <button className="no-btn" onClick={handleNoClick}>No, thanks</button>
      </div>
    </div>
  );
}

export default Nope;