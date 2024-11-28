import React, { useState } from 'react';
import './App.Account.css';

function Account() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const openPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div class="frame-2">
            <button className="delete-account" onClick={openPopup}>Delete Account</button>
            <div class="account-management">Account Management</div>
            <div class="rectangle-16"></div>
            <div class="rectangle-29"></div>
            <div class="dob">DOB:</div>
            <div class="user-info">User Info:</div>
            <div class="name">Name:</div>
            <button className="change-password">Change Password</button>
            <div class="email">Email:</div>
            <div class="dob">DOB:</div>
            <button className="edit-user-details">Edit User Details</button>
            <div class="rectangle-30"></div>
            <div class="rectangle-31"></div>
            <div class="rectangle-32"></div>
            <div class="rectangle-33"></div>
            <div class="rectangle-34"></div>
            <button class="rectangle-35" onClick={openPopup}></button>
            <div class="account">Account</div>

            {/* Popup for Rectangle 34 */}
            {isPopupVisible && (
                <div class="delete-account-popup">
                    <div class="rectangle-37"></div>
                    <div class="delete-account-pop">DELETE ACCOUNT</div>
                    <div class="rectangle-38"></div>
                    <div
                        class="warning"
                    >
                        Deleting your account will erase all of your data as well as your account.
                        Are you sure you want to take this action? It cannot be undone.
                    </div>
                    <div class="rectangle-39"></div>
                    <div class="rectangle-40"></div>
                    <button className="cancel" onClick={closePopup}>Cancel</button>
                    <button className="yes-i-am-sure"onClick={closePopup}>Yes I am Sure</button>
                </div>
            )}
            
            

        </div>

    );
  }
  
  export default Account;