import React, { FormEvent } from 'react';
import "./PasswordRest.css"; // Make sure to create a corresponding CSS file
import abstractArt from "/Users/omnisceo/Desktop/LucidTrade_Project/lucidtrade/src/photos/LoginPic1.png"; // Image path
import logoIcon from "/Users/omnisceo/Desktop/LucidTrade_Project/lucidtrade/src/photos/transparent.svg"; // Image path

const PasswordRest = () => {
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
          <h1>Password Rest</h1>
          <p>Your password have been successfully Reset. Click below to login.</p>
        </header>

        <form className="login-form-emailAndPassword" onSubmit={handleSubmit}>

          <button type="submit" className="login-button">Continue</button>
        </form>
      </div>
      <div className="login-graphics">
        <img src={abstractArt} alt="Abstract Art" />
      </div>
    </div>
  );
};

export default PasswordRest;
