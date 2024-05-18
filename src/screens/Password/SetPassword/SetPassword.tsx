import React, { FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { API, ApiData, NavigateApiData } from '../../../api';
import { ScreenRoutes } from '../../../App/Routes';

import abstractArt from "../../../../src/photos/ForgotPassword.png"; // Image path
import logoIcon from "../../../../src/photos/transparent.svg"; // Image path
import "./SetPassword.css"; // Make sure to create a corresponding CSS file


function SetPassword() {
  const apiInstance = API.getInstance();
  const navigation = useNavigate();
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const location = useLocation();
  const email = location.state.email;
  console.log(`email: ${email}`)


  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSecondPasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSecondPassword(e.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const resetData: ApiData = {
      email: email,
      password: target.password.value
    };

    const apiData: NavigateApiData = {
      navigate: true,
      destination: ScreenRoutes.ResetComplete,
      navigation: navigation
    }

    apiInstance.post('auth/reset/password', resetData, apiData, 'ForgotPassword');

  };

  return (
    <div className="Forgot-container">
      <div className="ForgotPassword">
        <header className="header">
          <img src={logoIcon} alt="Logo" className="logo" />
          <h1>Forget Password</h1>
          <p>Please choose a new password</p>
        </header>

        <form className="ForgotPassword-form-emailAndPassword" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <h2 className="email">Password</h2>
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
      <div className="ForgotPassword-graphics">
        <img src={abstractArt} alt="Abstract Art" />
      </div>
    </div>
  );
}

export default SetPassword;