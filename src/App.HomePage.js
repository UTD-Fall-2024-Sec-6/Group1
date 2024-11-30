import React from 'react';
import './App.HomePage.css';

import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AccountButton() {
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = () => {
      console.log('Account clicked!');
      navigate('/account'); // Redirect to the Account page
    };
  
    return (
        <div onClick={handleClick} className="account-button">
            Account Management
        </div>
    );
}

function HomePage() {
    const aboutDescription = "CometBudgeting is an app for UT Dallas Students to track their finances and budgeting.";

    return (
        <div className="home-page">
            <AccountButton/>
            <div className="homepage">Homepage</div>
            <div className="features-box">
                <div className="about-box-desc">New Features:TBA</div>
            </div>
            <div className="about-us">About Us</div>
            <div className="about-box">
                <div className="about-box-desc">{aboutDescription}</div>
            </div>
        </div>      
    );
}

export default HomePage;
