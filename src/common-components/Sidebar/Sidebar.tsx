import { FaRegFolderOpen } from "react-icons/fa6";
import { IoIosAnalytics } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";

import logo from "../../photos/logo-transparent.svg";
import { ScreenRoutes } from "../../App/Routes";
import { setSelectedScreen } from "../../Redux/actions/dashboardNavigationActions";
import "./Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleNavigation = (screen: ScreenRoutes) => {
    dispatch(setSelectedScreen(screen));
  };

  return (
    <div className="sidebar">
      <div className="logo-container-main">
        <img src={logo} alt="Logo" className="logo" />
        <span
          className="logo-text"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            fontSize: "24px",
          }}
        >
          LucidTrade
        </span>
      </div>
      <ul>
        <li
          className="active"
          onClick={() => handleNavigation(ScreenRoutes.Portfolio)}
        >
          <FaRegFolderOpen /> Portfolio
        </li>
        <li>
          <IoIosAnalytics /> Buildings
        </li>
      </ul>
      <div className="sidebar-bottom">
        <button>
          <MdSupportAgent /> Support
        </button>
        <button>
          <CiLogout /> Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
