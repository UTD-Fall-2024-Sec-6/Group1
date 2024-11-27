import React, { useState } from 'react';
import './App.LoginPage.css';

function EnterButton() {
    const handleClick = () => {
        console.log('Div clicked!');
    };

    return (
        <div onClick={handleClick} className="rectangle-13">
            <div class="enter">ENTER</div>
        </div>
    );
}

function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="text-input-container">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        className="text-input"
      />
    </div>
  );
}

function LoginPage() {
  return (
    <div class="log-in-page">
      <div class="rectangle-10">
        <div class="login">LOGIN</div>
      </div>
      <div class="username">Username:</div>
      <div class="password">Password:</div>
      <div class="rectangle-11">
        <TextInput/>
      </div>
      <div class="rectangle-12">
        <TextInput/>
      </div>
      <EnterButton/>
    </div>
  );
}

export default LoginPage;
