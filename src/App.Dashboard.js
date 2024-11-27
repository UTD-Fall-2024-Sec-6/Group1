import React, { Children } from 'react';
import './App.Dashboard.css';

function HomeButton() {
  const handleClick = () => {
    console.log('Home clicked!');
  };

  return (
    <div onClick={handleClick} className="home-button">
        <div class="dashboard-button-title">Home</div>
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
  const handleClick = () => {
    console.log('Trends and Insights clicked!');
  };

  return (
    <div onClick={handleClick} className="trend-button">
        <div class="dashboard-button-title">Trends and Insight</div>
    </div>
  );
}

function FinancialButton() {
  const handleClick = () => {
    console.log('Financial Info clicked!');
  };

  return (
    <div onClick={handleClick} className="financial-button">
        <div class="dashboard-button-title">Financial Info</div>
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
