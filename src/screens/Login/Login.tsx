import React, { FormEvent } from 'react';
import "./Login.css"; // Make sure to create a corresponding CSS file
import abstractArt from "../../../src/photos/LoginPic1.png"; // Image path
import logoIcon from "../../../src/photos/transparent.svg"; // Image path
import { useNavigate } from 'react-router-dom';
import { API, ApiData, NavigateApiData } from '../../api';
import { ScreenRoutes } from '../../App/Routes';

const Login = () => {
  const apiInstance = new API();
  const navigation = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const loginData: ApiData = {
      email: target.email.value,
      password: target.password.value
    };

    const apiData: NavigateApiData = {
      navigate: true,
      destination: ScreenRoutes.ResetComplete,
      navigation: navigation
    }

    await apiInstance.post('auth/login', loginData, apiData, 'Login');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <header className="login-header">
          <img src={logoIcon} alt="Logo" className="logo" />
          <h1>Welcome Back</h1>
          <p>Kindly fill in your details below to log in to your account</p>
        </header>

        <form className="login-form-emailAndPassword" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <h2 className="EmailPassword">Email Address</h2>
            <input name="email" type="email" placeholder="Email Address" required />
          </div>
          <div className="input-wrapper">
            <h2 className="EmailPassword">Password</h2>
            <input name="password" type="password" placeholder="Password" required />
          </div>

          <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div>

          <button type="submit" className="login-button">Login</button>

          <div className="separator">Or</div>
          <button type="button" className="google-button">Login with Google</button>
        </form>

        <footer className="login-footer">
          <p>Don't have an account yet? <a href="/signup">Create Account</a></p>
        </footer>
      </div>
      <div className="login-graphics">
        <img src={abstractArt} alt="Abstract Art" />
      </div>
    </div>
  );
};

export default Login;
