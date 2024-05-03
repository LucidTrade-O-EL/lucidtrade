import React, { FormEvent } from 'react';
import "./Login.css"; // Make sure to create a corresponding CSS file
import abstractArt from "../../../src/photos/LoginPic1.png"; // Image path
import logoIcon from "../../../src/photos/transparent.svg"; // Image path
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    // Creating an object to hold login data
    const loginData = {
      email: target.email.value,
      password: target.password.value
    };

    // Sending the POST request to your API for login
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const data = await response.json(); // Assuming the server responds with JSON
      console.log(data); // Logging the response to the console
      navigate('/signup')

      // Here you could handle redirection or update local state based on the response
    } catch (error) {
      console.error('Error:', error);
    }
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
            <input name="email" type="email" placeholder="Email Address" required/>
          </div>
          <div className="input-wrapper">
            <h2 className="EmailPassword">Password</h2>
            <input name="password" type="password" placeholder="Password" required/>
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
