import React, { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { API, ApiData, NavigateApiData } from '../../../api';
import { ScreenRoutes } from '../../../App/Routes';

import abstractArt from "../../../../src/photos/ForgotPassword.png"; // Image path
import logoIcon from "../../../../src/photos/transparent.png"; // Image path
import "./SetPassword.css"; // Make sure to create a corresponding CSS file

enum PasswordErrorType {
  NONE = "None",
  TOO_SHORT = "TooShort",
  NO_SPECIAL_CHAR = "NoSpecialChar",
  TOO_LONG = "TooLong",
  NOT_THE_SAME = "NotTheSame"
}

function SetPassword() {
  const apiInstance = API.getInstance();
  const navigation = useNavigate();
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [validPassword, setValidPassword] = useState<PasswordErrorType>(PasswordErrorType.NONE); // New state for password matching
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const email = location.state;

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSecondPasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSecondPassword(e.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const validatedPasswordResult: PasswordErrorType = validatePassword(password, secondPassword);

    if (validatedPasswordResult !== PasswordErrorType.NONE) {
      setValidPassword(validatedPasswordResult);
      return;
    }

    const resetData: ApiData = {
      email: email,
      password: password
    };

    const apiData: NavigateApiData = {
      navigate: true,
      destination: ScreenRoutes.ResetComplete,
      navigation: navigation
    }

    apiInstance.post('auth/reset/password', resetData, apiData, 'ForgotPassword');
  };

  const validatePassword = (password: string, secondPassword: string) => {
    const specialCharacterRegex = /[$-/:-?{-~!"^_`\[\]]/;

    if (password.length < 7) {
      return PasswordErrorType.TOO_SHORT;
    }

    if (password.length > 20) {
      return PasswordErrorType.TOO_LONG;
    }

    if (password !== secondPassword) {
      return PasswordErrorType.NOT_THE_SAME;
    }

    if (!specialCharacterRegex.test(password)) {
      return PasswordErrorType.NO_SPECIAL_CHAR;
    }

    return PasswordErrorType.NONE;
  };

  useEffect(() => {
    switch (validPassword) {
      case PasswordErrorType.TOO_SHORT:
        setErrorMessage("Password is too short");
        break;
      case PasswordErrorType.NO_SPECIAL_CHAR:
        setErrorMessage("Password does not contain at least one special character");
        break;
      case PasswordErrorType.TOO_LONG:
        setErrorMessage("Password is too long");
        break;
      case PasswordErrorType.NOT_THE_SAME:
        setErrorMessage("Passwords do not match");
        break;
      case PasswordErrorType.NONE:
        setErrorMessage("");
        break;
      default:
        break;
    }
  }, [validPassword]);

  return (
    <div className="set-password-container">
      <div className="set-password">
        <header className="header">
          <div className="centered-container">
            <div>
              <img src={logoIcon} alt="Logo" className="set-password-logo" />
            </div>
            <div>
              <h1>Forgot Password</h1>
            </div>
            <div>
              <p>Please choose a new password</p>
            </div>
          </div>
        </header>

        <form className="set-password-form-emailAndPassword" onSubmit={handleSubmit}>
          <div className="set-password-input-wrapper">
            <div className="password-label-wrapper">
              <h2 className="email">Password</h2>
              {validPassword !== PasswordErrorType.NONE && (
                <div className="tooltip">
                  <span className="tooltip-icon">!</span>
                  {errorMessage}
                </div>
              )}
            </div>
            <input
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <h2 className="email">Re-enter Password</h2>
            <input
              name="password"
              type="password"
              value={secondPassword}
              onChange={handleSecondPasswordChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      <div className="set-password-graphics">
        <img src={abstractArt} alt="Abstract Art" />
      </div>
    </div>
  );
}

export default SetPassword;