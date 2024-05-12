import { FormEvent } from 'react';
import { useSelector } from 'react-redux';

import { ApiData, NavigateApiData } from '../../api';
import { ScreenRoutes } from '../../App/Routes';
import { RootState } from '../../Redux/store';

import abstractArt from "../../../src/photos/LoginPic1.png";
import logoIcon from "../../../src/photos/transparent.svg";
import "./SignUp.css"; // Make sure to create a corresponding CSS file


const SignUp = () => {
  const { apiInstance } = useSelector((state: RootState) => state.common.apiInstance);
  const { navigationInstance } = useSelector((state: RootState) => state.common.navigationInstance);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const target = event.target as typeof event.target & {
      firstName: { value: string };
      lastName: { value: string };
      email: { value: string };
      phoneNumber: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
    };

    const formData: ApiData = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      phoneNumber: target.phoneNumber.value,
      password: target.password.value,
      confirmPassword: target.confirmPassword.value
    };

    const apiData: NavigateApiData = {
      navigate: true,
      destination: ScreenRoutes.Verify,
      navigation: navigationInstance
    }

    apiInstance.post('auth/code', formData, apiData, 'SignUp');

  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <header className="signup-header">
          <img src={logoIcon} alt="Logo" className="logo" />
          <h1>Welcome to LucidTrade</h1>
          <p>Kindly fill in your details below to create an account</p>
        </header>

        <form className="signup-form-emailAndPassword" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <h2 className="EmailPassword">First Name</h2>
            <input name="firstName" type="text" placeholder="First Name" required />
          </div>
          <div className="input-wrapper">
            <h2 className="EmailPassword">Last Name</h2>
            <input name="lastName" type="text" placeholder="Last Name" required />
          </div>
          <div className="input-wrapper">
            <h2 className="EmailPassword">Email Address</h2>
            <input name="email" type="email" placeholder="Email Address" required />
          </div>
          <div className="input-wrapper">
            <h2 className="EmailPassword">Phone Number</h2>
            <input name="phoneNumber" type="text" placeholder="Phone Number" required />
          </div>
          <div className="input-wrapper">
            <h2 className="EmailPassword">Password</h2>
            <input name="password" type="password" placeholder="Password" required />
          </div>
          <div className="input-wrapper">
            <h2 className="EmailPassword">Confirm Password</h2>
            <input name="confirmPassword" type="password" placeholder="Confirm Password" required />
          </div>

          <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div>

          <button type="submit" className="signup-button">Create Account</button>

          <div className="separator">Or</div>
          <button type="button" className="google-button">Create with Google</button>
        </form>

        <footer className="signup-footer">
          <p>Already have an account? <a href="/">Log In</a></p>
        </footer>
      </div>
      <div className="signup-graphics">
        <img src={abstractArt} alt="Abstract Art" />
      </div>
    </div>
  );
};

export default SignUp;