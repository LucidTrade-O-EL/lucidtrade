import React, { useState } from "react";
import "./Portfolio.css";
import HeaderBar from "./HeaderBar"; // Import the HeaderBar component
import logo from "../../photos/logo-transparent.svg"; // Import the logo image
import FloatingLabelInput from "../../Component/FloatingLabelInput"; // Import the new component

// Icons
import { FaRegFolderOpen } from "react-icons/fa6";
import { IoIosAnalytics } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

const Portfolio = () => {
  const [portfolioName, setPortfolioName] = useState("Portfolio 1");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPortfolioName(e.target.value);
  };

  const handleCreatePortfolio = () => {
    console.log(`Creating portfolio: ${portfolioName}`);
  };

  return (
    <div className="portfolio-container">
      <HeaderBar username="Zak" /> {/* Keep the HeaderBar at the top */}
      <div className="main-layout">
        <div className="sidebar">
          <div className="logo-container-main">
            <img src={logo} alt="Logo" className="logo" />
            <span className="logo-text" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: '24px' }}>LucidTrade</span>
          </div>
          <ul>
            <li className="active">
              <FaRegFolderOpen /> Portfolio
            </li>
            <li>
              <IoIosAnalytics /> Buildings
            </li>
          </ul>
          <div className="sidebar-bottom">
            <button><MdSupportAgent /> Support</button>
            <button><CiLogout /> Log out</button>
          </div>
        </div>
        <div className="main-content">
          <div className="content-wrapper">
            <div className="portfolio-form">
              <h2>Reach financial goals faster</h2>
              <p>
                Achieve your financial objectives swiftly by investing in
                fractional energy.
              </p>
              <FloatingLabelInput
                label="Name"
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
