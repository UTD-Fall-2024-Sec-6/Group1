import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.Account.css';

function Account() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  // Navigation handlers
  const handleHomeClick = () => {
    console.log('Navigating to Home');
    navigate('/');
  };

  const handleBudgetInfoClick = () => {
    console.log('Navigating to Budget Info');
    navigate('/goals');
  };

  const handleTrendsClick = () => {
    console.log('Navigating to Trends');
    navigate('/trends');
  };

  const handleFinancialInfoClick = () => {
    console.log('Navigating to Financial Info');
    navigate('/info');
  };

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopupYes = () => {
    setIsPopupVisible(false);
    navigate('/login')
  };

  const closePopupNo = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="account-container">
      {/* Replace Dashboard buttons */}
      <div className="topbar">
        <div className="comet-budgeting">CometBudgeting</div>
        <div onClick={handleHomeClick} className="home-button">
          <div className="dashboard-button-title">Home</div>
        </div>
        <div onClick={handleBudgetInfoClick} className="budget-button">
          <div className="dashboard-button-title">Budget Info</div>
        </div>
        <div onClick={handleTrendsClick} className="trend-button">
          <div className="dashboard-button-title">Trends and Insight</div>
        </div>
        <div onClick={handleFinancialInfoClick} className="financial-button">
          <div className="dashboard-button-title">Financial Info</div>
        </div>
      </div>

      {/* Account management content */}
      <button className="delete-account" onClick={openPopup}>
        Delete Account
      </button>
      <div className="account-management">Account Management</div>
      <div className="rectangle-16"></div>
      <div className="rectangle-29"></div>
      <div className="dob">DOB:</div>
      <div className="user-info">User Info:</div>
      <div className="name">Name:</div>
      <button className="change-password">Change Password</button>
      <div className="email">Email:</div>
      <div className="dob">DOB:</div>
      <button className="edit-user-details">Edit User Details</button>
      <div className="rectangle-30"></div>
      <div className="rectangle-31"></div>
      <div className="rectangle-32"></div>
      <div className="rectangle-33"></div>
      <div className="rectangle-34"></div>
      <button className="rectangle-35" onClick={openPopup}></button>
      <div className="account">Account</div>

      {/* Popup for Rectangle 34 */}
      {isPopupVisible && (
        <div className="delete-account-popup">
          <div className="rectangle-37"></div>
          <div className="delete-account-pop">DELETE ACCOUNT</div>
          <div className="rectangle-38"></div>
          <div className="warning">
            Deleting your account will erase all of your data as well as your
            account. Are you sure you want to take this action? It cannot be
            undone.
          </div>
          <div className="rectangle-39"></div>
          <div className="rectangle-40"></div>
          <button className="cancel" onClick={closePopupNo}>
            Cancel
          </button>
          <button className="yes-i-am-sure" onClick={closePopupYes}>
            Yes I am Sure
          </button>
        </div>
      )}
    </div>
  );
}

export default Account;
