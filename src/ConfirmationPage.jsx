import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

// Get the base URL from Vite's environment variables
const BASE_URL = import.meta.env.BASE_URL;

function ConfirmationPage() {
    const navigate = useNavigate();
    const [showTextLines, setShowTextLines] = useState(false);
    const [showAvatar, setShowAvatar] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setShowTextLines(true);
        }, 500);

        const avatarTimer = setTimeout(() => {
            setShowAvatar(true);
        }, 1000);

        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, 1500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(avatarTimer);
            clearTimeout(buttonTimer);
        };
    }, []);

    const handleStartCeremonyClick = () => {
        // This is the main change: navigate to the ceremony page
        navigate('/ceremony');
    };

    return (
        <>
            <h1 className="greeting-main">Are you ready?</h1>
            <p className={`additional-lines ${showTextLines ? 'fade-in' : ''}`}>
                The moment of truth is here!
                <br />
                It's time to perform the Aarti.
                <br />
                Click below to begin the ceremony.
            </p>

            <div className="button-avatar-container">
                <button
                    className={`festive-button ${showButton ? 'fade-in' : ''}`}
                    onClick={handleStartCeremonyClick} // Updated handler
                >
                    Start the Ceremony!
                </button>
                <div className={`avatar-right-of-button ${showAvatar ? 'pop-up-right' : ''}`}>
                    <img src={`${BASE_URL}images/msurprise.png`} alt="Love Avatar" className="my-avatar-small" />
                </div>
            </div>
        </>
    );
}

export default ConfirmationPage;