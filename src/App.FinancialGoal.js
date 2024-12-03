import React, { useState } from 'react';
import './App.FinancialGoal.css';
import User from './User.js';


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
  const [contributionFrequency, setContributionFrequency] = useState('weekly');
  const testUser = new User('John Doe', 'john@example.com', 'password123', 1, 5000);

  const [saving1, setSaving1] = useState('');
  const [saving2, setSaving2] = useState('');
  const [spending1, setSpending1] = useState('');
  const [spending2, setSpending2] = useState('');
  const [spending3, setSpending3] = useState('');

  const handleSaving1Change = (event) => setSaving1(event.target.value);
  const handleSaving2Change = (event) => setSaving2(event.target.value);
  const handleSpending1Change = (event) => setSpending1(event.target.value);
  const handleSpending2Change = (event) => setSpending2(event.target.value);
  const handleSpending3Change = (event) => setSpending3(event.target.value);

  const goalAmount = 1000; // Example goal amount

  const calculateProgress = (amount) => {
    return Math.min((amount / goalAmount) * 100, 100);
  };

  const progressSaving1 = calculateProgress(Number(saving1));
  const progressSaving2 = calculateProgress(Number(saving2));
  const progressSpending1 = calculateProgress(Number(spending1));
  const progressSpending2 = calculateProgress(Number(spending2));
  const progressSpending3 = calculateProgress(Number(spending3));

  const budget = testUser.getBudget();

  budget.createGoal(5000, 'short-term');

  const handleFrequencyChange = (frequency) => {
    setContributionFrequency(frequency);
  };

  const handleSubmit = async () => {
    const entry = {
      id: testUser.id, // Unique identifier
      contributionFrequency,
      savings: savingsCategories.map((category) => ({
        name: category.name,
        value: category.value,
      })),
      
    };
    alert('Category Set Successfully');
  };
  
  const [savingsCategories, setSavingsCategories] = useState([{ name: '', value: 0 }]);
  
  const handleAddSavingCategory = () => {
    setSavingsCategories([...savingsCategories, { name: '', value: 0 }]);
    handleSubmit();
  };

  return (
    <div className="financial-goal-container">
      <div className="set-your-goals">Set your Goals</div>
      <button
        className={`weekly ${contributionFrequency === 'weekly' ? 'active' : ''}`}
        onClick={() => handleFrequencyChange('weekly')}
      >
        Weekly
      </button>
      <button
        className={`monthly ${contributionFrequency === 'monthly' ? 'active' : ''}`}
        onClick={() => handleFrequencyChange('monthly')}
      >
        Monthly
      </button>

      {/* Text Inputs */}
      <TextInput
      placeholder="Saving 1"
      className="saving-1"
      value={saving1}
      onChange={handleSaving1Change}
      />
      <TextInput
        placeholder="Saving 2"
        className="saving-2"
        value={saving2}
        onChange={handleSaving2Change}
      />
      <TextInput
        placeholder="Spending 1"
        className="spending-1"
        value={spending1}
        onChange={handleSpending1Change}
      />
      <TextInput
        placeholder="Spending 2"
        className="spending-2"
        value={spending2}
        onChange={handleSpending2Change}
      />
      <TextInput
        placeholder="Spending 3"
        className="spending-3"
        value={spending3}
        onChange={handleSpending3Change}
      />

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

      <ProgressBar percentage={progressSaving1} className="rectangle-56" />
      <ProgressBar percentage={progressSaving2} className="rectangle-57" />
      <ProgressBar percentage={progressSpending1} className="rectangle-58" />
      <ProgressBar percentage={progressSpending2} className="rectangle-59" />
      <ProgressBar percentage={progressSpending3} className="rectangle-60" />

      <div className="spending">Spending</div>
      <div className="saving">Saving</div>
      <div className="rectangle-54"></div>
      <button onClick={handleAddSavingCategory} className="add-saving-category">
        Add Saving Category
      </button>
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
