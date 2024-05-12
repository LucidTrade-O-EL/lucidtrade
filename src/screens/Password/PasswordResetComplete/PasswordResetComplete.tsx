import abstractArt from "../../../../src/photos/ForgotPassword.png"; // Image path
import logoIcon from "../../../../src/photos/transparent.svg"; // Image path
import "./PasswordResetComplete.css"; // Make sure to create a corresponding CSS file

function PasswordResetComplete() {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <div className="PasswordReset-container">
      <div className="PasswordReset">
        <header className="header">
          <img src={logoIcon} alt="Logo" className="logo" />
          <h1>Password Reset</h1>
          <p>Your password have been successfully Reset. Click below to login.</p>
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