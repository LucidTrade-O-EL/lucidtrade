import HeaderBar from "../HeaderBar/HeaderBar";
import Portfolio from "../../screens/Portfolio/Portfolio";
import Sidebar from "../Sidebar/Sidebar";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard-container">
      <div className="Dashboard-header">
        <HeaderBar username="Zak" /> {/* Keep the HeaderBar at the top */}
      </div>
      <div className="Dashboard-Page">
        <div className="Dashboard-Sidebar">
          <Sidebar/>
        </div>
        <div className="Dashboard-MainContent">
          <Portfolio/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
