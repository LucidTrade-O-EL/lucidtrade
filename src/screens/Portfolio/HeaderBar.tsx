import React from 'react';
import './HeaderBar.css'; // Import CSS for styling
import profileIcon from './path-to-your-profile-icon.png'; // Import the profile icon

const HeaderBar = ({ username = 'Zak' }) => {
  return (
    <div className="header-bar">
      <div className="header-greeting">
        <h1>Hi {username},</h1>
        <p>Welcome to LucidTrade!</p>
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search for something..." />
      </div>
      <div className="header-profile">
        {/* <img src={profileIcon} alt="Profile" /> */}
      </div>
    </div>
  );
};

export default HeaderBar;
