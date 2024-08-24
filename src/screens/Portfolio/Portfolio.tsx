import React, { useState } from "react";

import FloatingLabelInput from "../../common-components/FloatingLabelInput/FloatingLabelInput";
import GoogleEarth from "../../common-components/GoogleEarth/GoogleEarth";

import "./Portfolio.css";

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
      <div className="portfolio-form">
        <h2>Reach financial goals faster</h2>
        <p>
          Achieve your financial objectives swiftly by investing in fractional
          energy.
        </p>
        <FloatingLabelInput
          label="Name"
          value={portfolioName}
          onChange={handleInputChange}
          placeholder="Portfolio Name"
        />
        <button onClick={handleCreatePortfolio}>Create Portfolio</button>
      </div>
      <GoogleEarth />
    </div>
  );
};

export default Portfolio;
