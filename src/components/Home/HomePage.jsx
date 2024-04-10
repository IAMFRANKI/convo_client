import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`container ${theme}-theme`}>
      {/* <Link to="/categories">Go to Categories</Link>
      <Link to="/profile">Go to Profile</Link> */}
      <div className="navbar">
        <div className="profile-icon">
          <Link to="/profile">
            <img src="profile-icon.png" alt="Profile" />
          </Link>
        </div>
        {/* <div className="nav-buttons">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/categories" className="nav-button">
            Categories
          </Link>
        </div> */}
      </div>
      <div className="content">
        <div className="theme-button">
          <button onClick={toggleTheme}>Change Theme</button>
        </div>
        <div className="threads">
          {/* Thread components will be rendered here */}
          <div className="thread">
            <h3>Thread Title 1</h3>
            <p>Thread content goes here...</p>
          </div>
          <div className="thread">
            <h3>Thread Title 2</h3>
            <p>Thread content goes here...</p>
          </div>
          {/* Add more thread components as needed */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
