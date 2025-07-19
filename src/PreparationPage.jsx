// src/PreparationPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PreparationPage.css'; // Keep your component-specific CSS import

function PreparationPage() {
    const [showAvatar, setShowAvatar] = useState(false);
    const [showTextLines, setShowTextLines] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Avatar pop-up after 0.8s
        const avatarTimer = setTimeout(() => {
            setShowAvatar(true);
        }, 800);

        // Additional text lines fade in after 1.8s
        const textLinesTimer = setTimeout(() => {
            setShowTextLines(true);
        }, 1800);

        // Button fades in after 2.8s
        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, 2800);

        return () => {
            clearTimeout(avatarTimer);
            clearTimeout(textLinesTimer);
            clearTimeout(buttonTimer);
        };
    }, []);

    const handleNextClick = () => {
        console.log("Navigating to /confirm...");
        navigate('/confirm');
    };

    return (
        <> {/* Use a React Fragment */}
            <h1 className="greeting-main">A surprise is brewing...</h1>

            <div className={`additional-lines ${showTextLines ? 'fade-in' : ''}`}>
                <p>Hold on tight! Something special is being prepared just for you.</p>
                <p>This might take a moment, but it will be worth it!</p>
            </div>

            <div className="button-avatar-container">
                <button className={`festive-button ${showButton ? 'fade-in' : ''}`} onClick={handleNextClick}>
                    Next!
                </button>
                <div className={`avatar-right-of-button ${showAvatar ? 'pop-up-right' : ''}`}>
                    <img
                        src="/images/smort.png"
                        alt="Excited Avatar"
                        className="my-avatar-small"
                    />
                </div>
            </div>
        </>
    );
}

export default PreparationPage;