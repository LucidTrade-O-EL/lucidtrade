import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { API, ApiData, NavigateApiData } from '../../../api';
import { ScreenRoutes } from '../../../App/Routes';

import abstractArt from "../../../../src/photos/ForgotPassword.png"; // Image path
import logoIcon from "../../../../src/photos/transparent.png"; // Image path
import "./ForgotPassword.css"; // Make sure to create a corresponding CSS file

function ForgotPassword() {
  const apiInstance = API.getInstance();
  const navigation = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const emailData: ApiData = {
      email: target.email.value,
    };

    const apiData: NavigateApiData = {
      navigate: true,
      destination: ScreenRoutes.SetPassword,
      navigation: navigation
    }

    apiInstance.post('auth/forgot/password', emailData, apiData, 'ForgotPassword');
  };

  return (
    <div className="forgot-container">
      <div className="forgotPassword">
        <header className="forgot-password-header">
          <div>
            <img src={logoIcon} alt="Logo" className="forgot-password-logo" />
          </div>
        </header>

        <div className='forgot-password-content'>
          <div>
            <h1>Forgot Password</h1>
          </div>
          <div>
            <p>Don’t worry, happens to all of us. Enter your email below to recover your password</p>
          </div>
        </div>

        <form className="forgotPassword-form-emailAndPassword" onSubmit={handleSubmit}>
          <div className="forgot-password-input-wrapper">
            <h2 className="email">Email Address</h2>
            <input
              name="email"
              type="email"
              placeholder="JaneDoe@gmail.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <div className="forgotPassword-graphics">
        <img src={abstractArt} alt="Abstract Art" />
      </div>
    </div>
  );
}

export default ForgotPassword;