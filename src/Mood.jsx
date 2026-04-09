import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mood.css';

import backgroundMusic from "./assets/hedwigs_theme.mp3";

function Mood() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [mode, setMode] = useState('');
  const [feeling, setFeeling] = useState('');
  const [energy, setEnergy] = useState('');
  const [outlook, setOutlook] = useState('');
  const [life, setLife] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    switch (feeling) {
      case 'Happy':
        score += 2;
        break;
      case 'Sad':
        score -= 2;
        break;
      case 'Angry':
        score -= 3;
        break;
      case 'Excited':
        score += 3;
        break;
      default:
        break;
    }
    switch (energy) {
      case 'High':
        score += 1;
        break;
      case 'Low':
        score -= 1;
        break;
      default:
        break;
    }
    switch (outlook) {
      case 'Optimistic':
        score += 1;
        break;
      case 'Pessimistic':
        score -= 1;
        break;
      default:
        break;
    }
    switch (life) {
      case 'Pretty awesome':
        score += 1;
        break;
      case 'Could be better':
        score -= 1;
        break;
      default:
        break;
    }
    let mode = '';
    if (score >= 5) {
      mode = 'Happy';
    } else if (score >= 0) {
      mode = 'Relaxed';
    } else if (score >= -5) {
      mode = 'Sad';
    } else {
      mode = 'Angry';
    }
    setScore(score);
    setMode(mode);
    setSubmitted(true);

    setTimeout(() => {
      navigate(`/${mode.toLowerCase()}`);
    }, 3500);
  };

  const getColor = (mode) => {
    switch (mode) {
      case 'Happy':
        return '#4CAF50';
      case 'Relaxed':
        return '#03A9F4';
      case 'Sad':
        return '#FFC107';
      case 'Angry':
        return '#F44336';
      default:
        return '#ddd';
    }
  };

  return (
     <div>
      <audio ref={audioRef} src={backgroundMusic} loop />
    <div className="card" style={{ backgroundColor: submitted ? getColor(mode) : '#fff', color: submitted ? '#fff' : '#333' }}>
      <h2 className="title">{submitted ? `You're feeling ${mode}` : 'Before Entering into the Story...'}</h2>
      <p className="subtitle">{submitted ? '' : 'Let\'s check your mood!'}</p>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="question">
            <label><h3>1. How are you feeling today?</h3></label>
            <div className="options">
              <button type="button" className={`option-btn ${feeling === 'Happy' ? 'selected' : ''}`} style={{ backgroundColor: '#4CAF50' }} onClick={() => setFeeling('Happy')}>Happy</button>
              <button type="button" className={`option-btn ${feeling === 'Sad' ? 'selected' : ''}`} style={{ backgroundColor: '#FFC107' }} onClick={() => setFeeling('Sad')}>Sad</button>
              <button type="button" className={`option-btn ${feeling === 'Neutral' ? 'selected' : ''}`} style={{ backgroundColor: '#03A9F4' }} onClick={() => setFeeling('Neutral')}>Neutral</button>
              <button type="button" className={`option-btn ${feeling === 'Angry' ? 'selected' : ''}`} style={{ backgroundColor: '#F44336' }} onClick={() => setFeeling('Angry')}>Angry</button>
              <button type="button" className={`option-btn ${feeling === 'Excited' ? 'selected' : ''}`} style={{ backgroundColor: '#9C27B0' }} onClick={() => setFeeling('Excited')}>Excited</button>
            </div>
          </div>
          <div className="question">
            <label><h3>2. How would you describe your energy level?</h3></label>
            <div className="options">
              <button type="button" className={`option-btn ${energy === 'High' ? 'selected' : ''}`} style={{ backgroundColor: '#4CAF50' }} onClick={() => setEnergy('High')}>High</button>
              <button type="button" className={`option-btn ${energy === 'Low' ? 'selected' : ''}`} style={{ backgroundColor: '#F44336' }} onClick={() => setEnergy('Low')}>Low</button>
              <button type="button" className={`option-btn ${energy === 'Neutral' ? 'selected' : ''}`} style={{ backgroundColor: '#03A9F4' }} onClick={() => setEnergy('Neutral')}>Neutral</button>
            </div>
          </div>
          <div className="question">
            <label><h3>3. What's your outlook on life?</h3></label>
            <div className="options">
              <button type="button" className={`option-btn ${outlook === 'Optimistic' ? 'selected' : ''}`} style={{ backgroundColor: '#4CAF50' }} onClick={() => setOutlook('Optimistic')}>Optimistic</button>
              <button type="button" className={`option-btn ${outlook === 'Pessimistic' ? 'selected' : ''}`} style={{ backgroundColor: '#F44336' }} onClick={() => setOutlook('Pessimistic')}>Pessimistic</button>
              <button type="button" className={`option-btn ${outlook === 'Neutral' ? 'selected' : ''}`} style={{ backgroundColor: '#03A9F4' }} onClick={() => setOutlook('Neutral')}>Neutral</button>
            </div>
          </div>
          <div className="question">
            <label><h3>4. How's life treating you?</h3></label>
            <div className="options">
              <button type="button" className={`option-btn ${life === 'Pretty awesome' ? 'selected' : ''}`} style={{ backgroundColor: '#4CAF50' }} onClick={() => setLife('Pretty awesome')}>Pretty awesome</button>
              <button type="button" className={`option-btn ${life === 'Could be better' ? 'selected' : ''}`} style={{ backgroundColor: '#F44336' }} onClick={() => setLife('Could be better')}>Could be better</button>
              <button type="button" className={`option-btn ${life === "It's going, thanks for asking" ? 'selected' : ''}`} style={{ backgroundColor: '#03A9F4' }} onClick={() => setLife("It's going, thanks for asking")}>It's going, thanks for asking</button>
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="result">
          <canvas id="mood-chart" width="200" height="200"></canvas>
          <p className="result-text">You're feeling {mode}!</p>
        </div>
      )}
    </div>
     </div>
  );
}

export default Mood;
