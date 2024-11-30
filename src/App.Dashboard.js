import React from 'react';
import './App.Dashboard.css';
import { useNavigate } from 'react-router-dom';

function NavButton({ label, route, className }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`${label} clicked!`);
    navigate(route);
  };

  return (
    <div onClick={handleClick} className={className}>
      <div className="dashboard-button-title">{label}</div>
    </div>
  );
}

function Dashboard({ children }) {
  return (
    <div className="dashboard">
      <div className="topbar">
        <div className="comet-budgeting">CometBudgeting</div>
        <NavButton label="Home" route="/" className="home-button" />
        <NavButton label="Budget Info" route="/goals" className="budget-button" />
        <NavButton label="Trends and Insight" route="/trends" className="trend-button" />
        <NavButton label="Financial Info" route="/info" className="financial-button" />
      </div>
      {children}
    </div>
  );
}

export default Dashboard;