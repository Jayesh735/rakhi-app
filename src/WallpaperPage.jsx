import React from 'react';
import './WallpaperPage.css';

// Get the base URL from Vite's environment variables
const BASE_URL = import.meta.env.BASE_URL;

function WallpaperPage() {
  return (
    <div className="wallpaper-page-container">
      <h1 className="wallpaper-page-title">A Gift For You</h1>
      <p className="wallpaper-page-subtitle">Download these wallpapers as a token of my love.</p>
      <div className="wallpapers-grid">
        {/* Wallpaper 1 */}
        <div className="wallpaper-card">
          <img src={`${BASE_URL}images/wallpaper1.jpg`} alt="Rakshabandhan Wallpaper 1" className="wallpaper-image" />
          <div className="wallpaper-overlay">
            <a 
              href={`${BASE_URL}images/wallpaper1.jpg`} 
              download="Rakhi_Wallpaper_1.jpg" 
              className="static-button download-btn"
            >
              Download
            </a>
          </div>
        </div>

        {/* Wallpaper 2 */}
        <div className="wallpaper-card">
          <img src={`${BASE_URL}images/wallpaper2.jpg`} alt="Rakshabandhan Wallpaper 2" className="wallpaper-image" />
          <div className="wallpaper-overlay">
            <a 
              href={`${BASE_URL}images/wallpaper2.jpg`} 
              download="Rakhi_Wallpaper_2.jpg" 
              className="static-button download-btn"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WallpaperPage;