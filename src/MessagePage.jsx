import React, { useState, useEffect } from 'react'; // 1. Import useState and useEffect
import { useNavigate } from 'react-router-dom';
import './MessagePage.css';

function MessagePage() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false); // 2. Add state for the button

  useEffect(() => {
    // 3. Set a timer to show the button after 1.5 seconds
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 1500);

    return () => clearTimeout(buttonTimer); // Cleanup the timer
  }, []); // Empty array ensures this runs only once

  const handleNextClick = () => {
    navigate('/wallpapers');
  };

  return (
    <div className="message-page-container">
      <img src="/images/mwink.png" alt="Love" className="final-avatar" />
      <h1 className="final-title">Happy Rakshabandhan!</h1>
      <p className="final-message">
        Though miles may lie between us, we are never far apart,
        for a sister and brother are always connected by the heart.
        <br/><br/>
        Wishing you a day as special as you are.
      </p>
      <p className="final-signature">With All My Love,<br/>Jayesh</p>

      {/* 4. Update the button's className to be conditional */}
      <button 
        className={`festive-button message-next-btn ${showButton ? 'fade-in' : ''}`} 
        onClick={handleNextClick}
      >
        One Last Surprise...
      </button>
    </div>
  );
}

export default MessagePage;