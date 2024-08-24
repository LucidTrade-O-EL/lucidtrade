import React, { useState } from 'react';
import './Portfolio.css';
import HeaderBar from './HeaderBar'; // Import the HeaderBar component

const Portfolio = () => {
  const [portfolioName, setPortfolioName] = useState('Portfolio 1');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPortfolioName(e.target.value);
  };

  const handleCreatePortfolio = () => {
    console.log(`Creating portfolio: ${portfolioName}`);
  };

  return (
    <div className="portfolio-container">
      <HeaderBar username="Zak" /> {/* Keep the HeaderBar at the top */}
      <div className="main-layout"> {/* Main layout wraps the sidebar and content */}
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>Buildings</li>
            <li>Utility Bills</li>
            <li className="active">Portfolio</li>
            <li>Measures</li>
          </ul>
          <div className="sidebar-bottom">
            <button>Support</button>
            <button>Log out</button>
          </div>
        </div>
        <div className="main-content">
          <div className="content-wrapper">
            <div className="portfolio-form">
              <h2>Reach financial goals faster</h2>
              <p>Achieve your financial objectives swiftly by investing in fractional energy.</p>
              <input
                type="text"
                value={portfolioName}
                onChange={handleInputChange}
                placeholder="Portfolio Name"
              />
              <button onClick={handleCreatePortfolio}>Create Portfolio</button>
            </div>
          </div>
          <div className="google-earth-container">
            {/* Dynamic Google Earth Engine Map would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
