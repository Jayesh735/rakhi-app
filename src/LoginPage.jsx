import React, { useState } from 'react';
import './LoginPage.css';

// The 'onLogin' prop is a function passed from App.jsx
function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check against our "secret codes"
    if (username === 'mansi_verma' && password === 'kimi@2511') {
      setError('');
      onLogin(); // Call the function from App.jsx to grant access
    } else {
      setError('Sorry, the username or secret code is incorrect.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">A Special Message For You</h1>
      <p className="login-subtitle">Please enter the secret code to continue.</p>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Secret Code</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {error && <p className="login-error">{error}</p>}
        
        <button type="submit" className="static-button login-button">
          Unlock
        </button>
      </form>
    </div>
  );
}

export default LoginPage;