import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Import all your page components
import LoginPage from './LoginPage'; // Import the new LoginPage
import HomePageContent from './HomePageContent';
import PreparationPage from './PreparationPage';
import ConfirmationPage from './ConfirmationPage';
import CeremonyPage from './CeremonyPage';
import MessagePage from './MessagePage';
import WallpaperPage from './WallpaperPage';
import './App.css';

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Add state to track if the user is authenticated
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Create a function to handle successful login
    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate('/'); // Navigate to the homepage after login
    };

    const handleSendLoveClick = () => {
        navigate('/prepare');
    };

    return (
        <div className="rakhi-card">
            <div className="card-border">
                {/* Conditional Rendering: Show login page or the main app */}
                {!isAuthenticated ? (
                    <LoginPage onLogin={handleLogin} />
                ) : (
                    <Routes location={location}>
                        <Route path="/" element={<HomePageContent onSendLoveClick={handleSendLoveClick} />} />
                        <Route path="/prepare" element={<PreparationPage />} />
                        <Route path="/confirm" element={<ConfirmationPage />} />
                        <Route path="/ceremony" element={<CeremonyPage />} />
                        <Route path="/message" element={<MessagePage />} />
                        <Route path="/wallpapers" element={<WallpaperPage />} />
                    </Routes>
                )}
            </div>
        </div>
    );
}

export default App;