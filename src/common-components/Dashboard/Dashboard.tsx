import { useSelector } from "react-redux";

import HeaderBar from "../HeaderBar/HeaderBar";
import Sidebar from "../Sidebar/Sidebar";

import { RootState } from "../../Redux/store";
import { ScreenRoutes } from "../../App/Routes";
import Portfolio from "../../screens/Portfolio/Portfolio";
import "./Dashboard.css";
import PortfolioList from "../../screens/Portfolio/PortfolioList";
import PortfolioStart from "../../screens/Portfolio/PortfolioStart";
import Solar from "./Solar/Solar";

const Dashboard = () => {
  const selectedScreen: ScreenRoutes = useSelector(
    (state: RootState) => state.dashboard.selectedScreen
  );

  const renderScreen = () => {
    switch (selectedScreen) {
      case ScreenRoutes.Portfolio:
        return <Solar />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className="Dashboard-container">
      <div className="Dashboard-header">
        <HeaderBar username="Zak" />
      </div>
      <div className="Dashboard-Page">
        <div className="Dashboard-Sidebar">
          <Sidebar />
        </div>
        <div className="Dashboard-MainContent">{renderScreen()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
