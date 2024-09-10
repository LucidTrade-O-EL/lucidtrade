import { CgProfile } from "react-icons/cg";
import "./HeaderBar.css";

const HeaderBar = ({ username = "Zakariya Veasy" }) => {
  return (
    <div className="header-bar">
      <div className="header-greeting">
        <h1>
          <span className="greeting-text">Hi</span>
          <span className="username-color"> {username}</span>,
        </h1>
        <p className="welcome-text">Welcome to LucidTrade!</p>
      </div>
      <div className="header-search"></div>
      <div className="header-profile">
        <CgProfile size={50} />
      </div>
    </div>
  );
};

export default HeaderBar;
