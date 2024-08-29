import React from "react";
import "./PortfolioList.css"; // Create a separate CSS file for styling

const portfolios = [
  {
    id: 1,
    name: "Portfolio 1",
    buildings: [
      {
        location: "567 Green Wood",
        buildingId: "#12548796",
        type: "Office",
        date: "15 Jan, 03.29 PM",
        status: "Successful",
      },
      {
        location: "6995 Bullton Ave",
        buildingId: "#12548796",
        type: "Home",
        date: "15 Jan, 03.29 PM",
        status: "Successful",
      },
    ],
  },
  {
    id: 2,
    name: "Portfolio 2",
    buildings: [
      {
        location: "567 Green Wood",
        buildingId: "#12548796",
        type: "Office",
        date: "15 Jan, 03.29 PM",
        status: "Successful",
      },
      {
        location: "6995 Bullton Ave",
        buildingId: "#12548796",
        type: "Home",
        date: "15 Jan, 03.29 PM",
        status: "Successful",
      },
    ],
  },
];

const PortfolioList = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-list-wrapper">
        <div className="header">
          <h3>Portfolio List</h3>
          <div className="period">
            <label>Period</label>
            <input type="date" defaultValue="2023-01-01" />
            <input type="date" defaultValue="2023-12-31" />
          </div>
        </div>

        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="portfolio">
            <div className="portfolio-sidebar"></div>{" "}
            {/* Add this for the colored bar */}
            <div className="portfolio-content">
              <div className="portfolio-header">
                <h4>{portfolio.name}</h4>
                <div className="portfolio-buttons">
                  <button className="add-building-btn">Add Building</button>
                  <button className="view-more-btn">View More</button>
                </div>
              </div>
              <div className="building-list">
                {portfolio.buildings.map((building, index) => (
                  <React.Fragment key={index}>
                    <div className="location">{building.location}</div>
                    <div className="building-id">{building.buildingId}</div>
                    <div className="type">{building.type}</div>
                    <div className="date">{building.date}</div>
                    <div className="status">
                      <span
                        className={
                          building.status === "Successful"
                            ? "status-success"
                            : "status-failed"
                        }
                      >
                        {building.status}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="download-buttons">
          <button className="download-csv-btn">Download CSV</button>
          <button className="download-btn">Download</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
