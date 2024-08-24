import logo from "../../photos/logo-transparent.svg"; // Import the logo image

// Icons
import { FaRegFolderOpen } from "react-icons/fa6";
import { IoIosAnalytics } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

import "./Sidebar.css";

const Sidebar = () => {
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
        <li className="active">
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
