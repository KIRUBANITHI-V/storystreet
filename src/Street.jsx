import React from "react";
import { useNavigate } from 'react-router-dom';
import './Street.css';

function Street() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/mood');
  };

  const handleNoClick = () => {
    navigate('/nope');
  };

  return (
    <div className="cards">
      <img src="/src/assets/storystreet.jpeg" alt="Story Image"/>
      <h2>Welcome to</h2>
      <h1>The Story Street</h1>
      <p>Do you like to hear stories?</p>
      <div className="buttons">
        <button className="yes-btn" onClick={handleYesClick}>Yes, I'd love to!</button>
        <button className="no-btn" onClick={handleNoClick}>No, thanks</button>
      </div>
    </div>
  );
}

export default Street;