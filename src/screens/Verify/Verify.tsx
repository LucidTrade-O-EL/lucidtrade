import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import "./Verify.css";
import abstractArt from "../../../src/photos/LoginPic1.png";
import logoIcon from "../../../src/photos/transparent.svg";

const Verify = () => {
  const [timer, setTimer] = useState(390); // 6 minutes and 30 seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(t => t > 0 ? t - 1 : 0);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const nextIndex = index + 1;
    if (event.target.value.length === 1 && nextIndex < inputRefs.current.length) {
      const nextInput = inputRefs.current[nextIndex];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Use non-null assertion operator to ensure TypeScript understands the null values are filtered out
    const code = inputRefs.current.filter((input): input is HTMLInputElement => input !== null)
      .map(input => input.value).join('');
  
    try {
      const response = await fetch('http://localhost:8080/api/auth/verify', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });
  
      const data = await response.json();
      console.log(data);
  
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <header className="login-header">
          <img src={logoIcon} alt="Logo" className="logo" />
          <h1>Verify that it’s you</h1>
          <p>Please check your inbox and enter the verification code you just received on your email address ending with example.com.</p>
        </header>

        <form onSubmit={handleSubmit} className="login-form-emailAndPassword">
          <div className="input-wrapper">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el} // Assign ref safely
                name="code"
                type="text"
                maxLength={1}
                required
                className="code-input"
                autoComplete="off"
                pattern="\d*"
                onChange={handleChange(index)}
              />
            ))}
          </div>
          <div className="timer-resend">
            <span className="timer">Time left: {formatTime()}</span>
            <button type="button" className="resend-button" onClick={() => setTimer(390)}>Resend code</button>
          </div>

          <button type="submit" className="login-button">Verify</button>
          <button type="button" className="google-button">Cancel</button>
        </form>
      </div>
      <div className="login-graphics">
        <img src={abstractArt} alt="Abstract Art" />
      </div>
    </div>
  );
};

export default Verify;
