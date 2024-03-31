import React, { useState } from "react";
import "./Login.css"; // Make sure to create a corresponding CSS file
import abstractArt from "/Users/omnisceo/Desktop/LucidTrade_Project/lucidtrade/src/photos/LoginPic1.png"; // Correct path to your abstract art image
import logoIcon from "/Users/omnisceo/Desktop/LucidTrade_Project/lucidtrade/src/photos/transparent.svg";
import { Eye, EyeOff } from "react-ionicons";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <header className="login-header">
          <img src={logoIcon} alt="Logo" className="logo" />
          <h1>Welcome to Back</h1>
          <p>Kindly fill in your details below to create an account</p>
        </header>



        <form className="login-form-emailAndPassword" >
            <div className="input-wrapper">
              <h2 className="EmailPassword" >Email Address</h2>
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-wrapper">
              <h2 className="EmailPassword" >Password</h2>
              <input type="password" placeholder="Password" required />
          </div>

          
          <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="separator">Or</div>
          <button type="button" className="google-button">
            Login with Google
          </button>
        </form>




        <footer className="login-footer">
          <p>
            Don't have an account yet? <a href="/signup">Create Account</a>
          </p>
        </footer>
      </div>
      <div className="login-graphics">
        <img src={abstractArt} alt="Abstract Art" />
      </div>
    </div>
  );
};

export default Login;
