import React, { useState } from 'react';
import './LoginSignup.css'; // Import the CSS file

const LoginSignup = ({ handleTabChange }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup forms
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submit for login/signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:8000/login/' : 'http://localhost:8000/signup/';
    const requestBody = isLogin ? { username, password } : { username, email, password };

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.status === 201 || response.status === 200) {
        setError('');
        setSuccess(isLogin ? 'Login Successful!' : 'Signup Successful!');

        // Redirect to the Home tab after successful login/signup
        setTimeout(() => {
          handleTabChange('Home');
        }, 1000); // Short delay to show success message
      } else {
        setError(data.detail || 'Something went wrong');
      }
    } catch (err) {
      setError('Server error, please try again later.');
    }
  };

  return (
    <div className="form-container">
      <div className="toggle">
        <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>
          Login
        </button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>
          Signup
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {!isLogin && (
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={!isLogin}
          />
        )}

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={!isLogin}
          />
        )}

        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
    </div>
  );
};

export default LoginSignup;
