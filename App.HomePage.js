import React from 'react';
import './App.HomePage.css';

function AccountButton() {
    const handleClick = () => {
      console.log('Account clicked!');
    };
  
    return (
        <div onClick={handleClick} className="account-button">
            <div class="account-management">Account Management</div>
        </div>
    );
  }

function HomePage() {
    const aboutDescription = "CometBudgeting is an app for UT Dallas Students to track their finances and budgeting.";

    return (
        <div class="home-page">
            <AccountButton/>
            <div class="homepage">Homepage</div>
            <div class="features-box">
                <div class="about-box-desc">New Features:TBA</div>
            </div>
            <div class="about-us">About Us</div>
            <div class="about-box">
                <div class="about-box-desc">{aboutDescription}</div>
            </div>
        </div>      
    );
  }

  export default HomePage;