// JavaScript source code
import React from 'react';
import './App.Trends.css';

function Trends() {
  const loanLength = 2;
  let budget, loan;
  budget = 100000.;
  loan = budget * (1.07 ** loanLength) / (loanLength*12);
  return (
    <div class="trends">
      <div class="trends-title">Trends and Insights</div>
      <div class="data-body">
        <span class="chart"></span>
        <div class="insights">
          <div class="insight1">${budget} </div>
          <div class="insight-subtext">per year</div>

          <div class="insight2">${loan.toFixed(2)}</div>
          <div class="insight-subtext">monthly with 7% annual interest</div>
        </div>
      </div>
    </div>
    
  );
}

export default Trends;