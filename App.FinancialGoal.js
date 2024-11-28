import React, { useState } from 'react';
import './App.FinancialGoal.css';

function ProgressBar({ percentage, className }) {
  return (
    <div className={`progress-bar ${className}`}>
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

function FinancialGoal() {
  const [progress56, setProgress56] = useState(25);
  const [progress57, setProgress57] = useState(50);
  const [progress58, setProgress58] = useState(75);
  const [progress59, setProgress59] = useState(90);
  const [progress60, setProgress60] = useState(10);

  return (
    <div className="frame-4">
      <div className="set-your-goals">Set your Goals</div>
      <div className="rectangle-41"></div>
      <button className="weekly">Weekly</button>
      <div className="rectangle-42"></div>
      <button className="monthly">Monthly</button>
      <div className="rectangle-43"></div>
      <div className="current">Current</div>

      {/* Text Inputs */}
      <TextInput placeholder="Saving 1" className="saving-1" />
      <TextInput placeholder="Saving 2" className="saving-2" />
      <TextInput placeholder="Spending 1" className="spending-1" />
      <TextInput placeholder="Spending 2" className="spending-2" />
      <TextInput placeholder="Spending 3" className="spending-3" />

      {/* Number Inputs */}
      <NumberInput placeholder="Enter value" className="rectangle-46" />
      <NumberInput placeholder="Enter value" className="rectangle-47" />
      <NumberInput placeholder="Enter value" className="rectangle-48" />
      <NumberInput placeholder="Enter value" className="rectangle-49" />
      <NumberInput placeholder="Enter value" className="rectangle-50" />

      <div className="saving-12">Saving 1</div>
      <div className="saving-22">Saving 2</div>
      <div className="spending-12">Spending 1</div>
      <div className="spending-22">Spending 2</div>
      <div className="spending-32">Spending 3</div>

      {/* Progress Bars */}
      <ProgressBar percentage={progress56} className="rectangle-56" />
      <ProgressBar percentage={progress57} className="rectangle-57" />
      <ProgressBar percentage={progress58} className="rectangle-58" />
      <ProgressBar percentage={progress59} className="rectangle-59" />
      <ProgressBar percentage={progress60} className="rectangle-60" />

      <div className="spending">Spending</div>
      <div className="saving">Saving</div>
      <div className="rectangle-54"></div>
      <div className="add-saving-category">Add Saving Category</div>
      <div className="rectangle-55"></div>
      <div className="add-spending-category">Add Spending Category</div>
    </div>
  );
}

function TextInput({ placeholder, className }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

function NumberInput({ placeholder, className }) {
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };

  return (
    <input
      type="text"
      value={number}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default FinancialGoal;
