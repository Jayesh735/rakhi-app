// src/App.jsx
import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import HomePageContent from './HomePageContent';
import PreparationPage from './PreparationPage';
import ConfirmationPage from './ConfirmationPage';
import CeremonyPage from './CeremonyPage';
import MessagePage from './MessagePage';
import WallpaperPage from './WallpaperPage.jsx'; // <-- 1. Import the new page

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSendLoveClick = () => {
        navigate('/prepare');
    };

    return (
        <div className="rakhi-card">
            <div className="card-border">
                <Routes location={location}>
                    <Route path="/" element={<HomePageContent onSendLoveClick={handleSendLoveClick} />} />
                    <Route path="/prepare" element={<PreparationPage />} />
                    <Route path="/confirm" element={<ConfirmationPage />} />
                    <Route path="/ceremony" element={<CeremonyPage />} />
                    <Route path="/message" element={<MessagePage />} />
                    <Route path="/wallpapers" element={<WallpaperPage />} /> {/* <-- 2. Add the new route */}
                </Routes>
            </div>
        </div>
    );
}

export default App;