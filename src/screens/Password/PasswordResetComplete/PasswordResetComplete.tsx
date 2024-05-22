import { useNavigate } from "react-router-dom";

import abstractArt from "../../../../src/photos/ForgotPassword.png"; // Image path
import logoIcon from "../../../../src/photos/transparent.png"; // Image path

import "./PasswordResetComplete.css"; // Make sure to create a corresponding CSS file
import { ScreenRoutes } from "../../../App/Routes";

function PasswordResetComplete() {
  const navigation = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    navigation(ScreenRoutes.Loading);
  };

  return (
    <div className="PasswordReset-container">
      <div className="PasswordReset">
        <header className="header">
          <div className="centered-container">
            <div>
              <img src={logoIcon} alt="Logo" className="password-complete-logo" />
            </div>
            <div>
              <h1>Password Reset</h1>
            </div>
            <div>
              <p>Your password has been successfully reset. Click below to login.</p>
            </div>
          </div>

        </header>

        <form className="PasswordReset-form-emailAndPassword" onSubmit={handleSubmit}>
          <div className="input-wrapper">
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <div className="PasswordReset-graphics">
        <img src={abstractArt} alt="Abstract Art" />
      </div>
    </div>
  );
}

export default PasswordResetComplete;