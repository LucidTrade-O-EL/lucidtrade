import { FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { API, ApiData, NavigateApiData } from '../../api';
import { ScreenRoutes } from '../../App/Routes';

import abstractArt from "../../../src/photos/LoginPic1.png";
import logoIcon from "../../../src/photos/transparent.png";
import "./Login.css";

const Login = () => {
  const apiInstance = API.getInstance();
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
      destination: ScreenRoutes.Loading,
      navigation: navigation
    }

    await apiInstance.post('auth/login', loginData, apiData, 'Login');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <header>
          <div className="login-header">
            <div>
              <img src={logoIcon} alt="Logo" className="login-logo " />
            </div>
            <div>
              <h1>Welcome Back</h1>
            </div>
            <div>
              <p>Kindly fill in your details below to log in to your account</p>
            </div>
          </div>
        </header>

        <form className="login-form-emailAndPassword" onSubmit={handleSubmit}>
          <div className="login-input-wrapper">
            <h2 className="EmailPassword">Email Address</h2>
            <input name="email" type="email" placeholder="Email Address" required />
          </div>
          <div className="login-input-wrapper">
            <h2 className="EmailPassword">Password</h2>
            <input name="password" type="password" placeholder="Password" required />
          </div>

          {/*Weh have no terms and conditions for them to read. We will re-enable when we have written them*/}
          {/* <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div> */}

          <div className="login-buttons">
            <button type="submit" className="login-button">Login</button>
            <div className="separator">Or</div>
            <button type="button" className="login-google-button">Login with Google</button>
          </div>
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