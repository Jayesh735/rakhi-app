import React, { useEffect, useState } from 'react';
import './HomePageContent.css'; // Specific CSS for HomePageContent

// Get the base URL from Vite's environment variables
const BASE_URL = import.meta.env.BASE_URL;

function HomePageContent({ onSendLoveClick }) {
    const [showAvatars, setShowAvatars] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showSignature, setShowSignature] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Trigger avatars after a delay
        const avatarTimer = setTimeout(() => {
            setShowAvatars(true);
        }, 1500); // Wait for main greetings to appear first

        // Trigger message text after avatars
        const messageTimer = setTimeout(() => {
            setShowMessage(true);
        }, 2500); // After avatars start sliding

        // Trigger signature after message
        const signatureTimer = setTimeout(() => {
            setShowSignature(true);
        }, 3500); // After message fades in

        // Trigger button after signature
        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, 4000); // After signature fades in

        // Cleanup timers on component unmount
        return () => {
            clearTimeout(avatarTimer);
            clearTimeout(messageTimer);
            clearTimeout(signatureTimer);
            clearTimeout(buttonTimer);
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <>
            <h3 className="greeting-small">Happy</h3>
            <h1 className="greeting-main">Rakshabandhan Mansi 🐒</h1>

            <p className={`message-text ${showMessage ? 'fade-in' : ''}`}>
                To my dearest sister, May our bond always be filled with joy, laughter, and unbreakable strength.
                Wishing you all the happiness in the world!
            </p>

            <p className={`signature ${showSignature ? 'fade-in' : ''}`}>
                With lots of love,
                <br />
                Jayesh🐒
            </p>

            <button
                className={`festive-button ${showButton ? 'fade-in' : ''}`}
                onClick={onSendLoveClick}
            >
                Send My Love!
            </button>

            <div className={`avatar-container-left ${showAvatars ? 'slide-in' : ''}`}>
                <img src={`${BASE_URL}images/mpagal.png`} alt="Rakhi Greet" className="my-avatar" />
            </div>
            <div className={`avatar-container-right ${showAvatars ? 'slide-in' : ''}`}>
                <img src={`${BASE_URL}images/greet.png`} alt="Happy Rakhi" className="my-avatar mirrored" />
            </div>
        </>
    );
}

export default HomePageContent;