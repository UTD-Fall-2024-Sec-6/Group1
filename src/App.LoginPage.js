import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.LoginPage.css';

function EnterButton({ onClick }) {
  return (
    <div onClick={onClick} className="rectangle-13">
      <div className="enter">ENTER</div>
    </div>
  );
}

function TextInput({ id, value, onChange, placeholder }) {
  return (
    <div className="text-input-container">
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-input"
      />
    </div>
  );
}

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const trimu = username.trim();
  const trump = password.trim();

  console.log("Username: ", trimu);
  console.log("Password: ", trump);

  const handleLogin = () => {
    // Hardcoded credentials
    const credentials = {
      user1: 'password1',
      user2: 'password2',
      admin: 'admin123',
    };

    // Validate credentials
    if (credentials[trimu] === trump) {
      alert('Login successful!');
      navigate('/')
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="log-in-page">
      <div className="rectangle-10">
        <div className="login">LOGIN</div>
      </div>
      <div className="username">Username:</div>
      <div className="password">Password:</div>
      <div className="rectangle-12">
        <TextInput
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
      </div>
      <div className="rectangle-11">
        <TextInput
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
      </div>
      <EnterButton onClick={handleLogin} />
    </div>
  );
}

export default LoginPage;
