import React from 'react';
import './WallpaperPage.css';

function WallpaperPage() {
  return (
    <div className="wallpaper-page-container">
      <h1 className="wallpaper-page-title">A Gift For You</h1>
      <p className="wallpaper-page-subtitle">Download these wallpapers as a token of my love.</p>
      <div className="wallpapers-grid">
        {/* Wallpaper 1 */}
        <div className="wallpaper-card">
          <img src="/images/wallpaper1.jpg" alt="Rakshabandhan Wallpaper 1" className="wallpaper-image" />
          <div className="wallpaper-overlay">
            <a 
              href="/images/wallpaper1.jpg" 
              download="Rakhi_Wallpaper_1.jpg" 
              className="static-button download-btn"
            >
              Download
            </a>
          </div>
        </div>

        {/* Wallpaper 2 */}
        <div className="wallpaper-card">
          <img src="/images/wallpaper2.jpg" alt="Rakshabandhan Wallpaper 2" className="wallpaper-image" />
          <div className="wallpaper-overlay">
            <a 
              href="/images/wallpaper2.jpg" 
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