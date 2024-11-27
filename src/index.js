import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';

import HomePage from './App.HomePage';
import LoginPage from './App.LoginPage';
import Trends from './App.Trends';
import Dashboard from './App.Dashboard';

export default function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard><HomePage /></Dashboard>} />
            <Route path="/trends" element={<Dashboard><Trends /></Dashboard>} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
