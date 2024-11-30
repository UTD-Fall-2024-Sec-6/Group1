import React, { Children } from 'react';
import './App.Dashboard.css';
import { useNavigate } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Home clicked!');
    navigate('/'); // Redirect to the Home page
  };

  return (
    <div onClick={handleClick} className="home-button">
      <div className="dashboard-button-title">Home</div>
    </div>
  );
}

function BudgetButton() {
  const handleClick = () => {
    console.log('Budget Info clicked!');
  };

  return (
    <div onClick={handleClick} className="budget-button">
        <div class="dashboard-button-title">Budget Info</div>
    </div>
  );
}

function TrendButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Trends and Insights clicked!');
    navigate('/trends'); // Redirect to the Trends page
  };

  return (
    <div onClick={handleClick} className="trend-button">
      <div className="dashboard-button-title">Trends and Insight</div>
    </div>
  );
}

function FinancialButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Financial Info clicked!');
    navigate('/info'); // Redirect to the Financial Info page
  };

  return (
    <div onClick={handleClick} className="financial-button">
      <div className="dashboard-button-title">Financial Info</div>
    </div>
  );
}
function Dashboard({ children }) {
  return (
    <div class="dashboard">
      <div class="topbar">
        <div class="comet-budgeting">CometBudgeting</div>
        <HomeButton />
        <BudgetButton/>
        <TrendButton/>
        <FinancialButton/>
      </div>
      {children}
    </div>
  );
}

export default Dashboard;
