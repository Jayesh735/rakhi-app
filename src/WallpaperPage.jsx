import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './WallpaperPage.css';

const BASE_URL = import.meta.env.BASE_URL;

function WallpaperPage() {
  // Replace 'YOUR_FORM_ID' with your actual ID from Formspree
  const [state, handleSubmit] = useForm('mqaleqrd');

  return (
    <div className="wallpaper-page-container">
      <h1 className="wallpaper-page-title">A Gift For You</h1>
      <p className="wallpaper-page-subtitle">Download the most "no-effort" collages ever 😜..</p>
      <p className = 'wallpaper-page-subtitle'> Website credits: 99% - Mansi , all the avatars</p>
      <p className = 'wallpaper-page-subtitle'> 1% - Jayesh, all the coding part (irrelevant)</p>
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

      {/* --- FEEDBACK SECTION --- */}
      <div className="feedback-section">
        {state.succeeded ? (
          <div className="feedback-success">
            <h2>Thank You for your feedback!</h2>
          </div>
        ) : (
          <>
            <h2 className="feedback-title">Send Feedback</h2>
            <p className="feedback-subtitle">Please tell me how you feel about my cringe website 😞😞. (It's more of a digital greeting card 😞😞)</p>
            <form onSubmit={handleSubmit} className="feedback-form">
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" name="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" required />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              
              <button type="submit" className="static-button" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default WallpaperPage;