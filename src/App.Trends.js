// JavaScript source code
import React from 'react';
import './App.Trends.css';

function Chart() {
  let budget = 0.;

  let someData = new Map();
  someData.set("expense 1", 20000.);
  someData.set("expense 2", 5000.);
  someData.set("expense 3", 5000.);
  someData.set("expense 4", 5000.);
  someData.set("expense 5", 5000.);
  someData.set("expense 6", 5000.);
  const expenseNames = Array.from(someData.keys());
  //find total spending
  someData.forEach((value) => {
    budget += value;
  });

  //set expense to a number in degrees by dividing by the total budget then multiplying by 360
  //this is for use in the pie chart
  someData.keys().forEach((key) => {
    someData.set(key, someData.get(key) * 360 / budget);
  });
  let degreeList = Array.from(someData.values());

  let colorList = [
    "#e34242", //red
    "#338530", //green
    "#5260c4", //blue
    "#a26aab", //purple
    "#f5e47a", //yellow
    "#5fc7b7", //turqoise
    "#f0af46", //orange
    "#f2a2a6", //pink
    "#946d44", //brown
    "#bd6cd4" //magenta
  ]

  let chart_format = "conic-gradient(";
  for (let i = 0; i < degreeList.length; i++) {
    if (i !== 0) {
      degreeList[i] += degreeList[i - 1];
      chart_format = chart_format.concat(colorList[i] + " " + Math.ceil(degreeList[i - 1]) + "deg " + Math.ceil(degreeList[i]) + "deg, "); //middle part added to remove gradient
    }
    else {
      chart_format = chart_format.concat(colorList[i] + " " + Math.ceil(degreeList[i]).toString() + "deg, "); //first time through has no gradient to remove
    }
  }
  chart_format = chart_format.substring(0, chart_format.length - 2); //last element does not have a comma
  chart_format = chart_format.concat(")");

  return (
    <div class="chart-container">
    <span class="chart" style={{ backgroundImage: chart_format }}></span>
      <div class="chart-label">
        {expenseNames.map((expense, index) => {
          console.log("hrmm");
          return (
            <>
              <div class="chart-label-box" style={{ backgroundColor: colorList[index] }}></div>
              <div class="chart-label-text">{ expense }</div>
            </>
          )
        })}

    </div>
    </div>
    );
}

function Trends() {
  const loanLength = 2, timeUnit = 12; //monthly budget = 12, weekly budget = 51.
  let loan;
  let budget = 45000;

  loan = budget * (1.07 ** loanLength) / (loanLength*timeUnit); //will use the real formula when I get back to my apartment -Gavin
  return (
    <div class="trends">
      <div class="trends-title">Trends and Insights</div>
      <div class="data-body">
        <Chart />
        <div class="insights">
          <div class="insight1">${budget} </div>
          <div class="insight-subtext">per year</div>
          <div class="insight2">${loan.toFixed(2)}</div>
          <div class="insight-subtext">monthly with 7% annual interest on a 2-year plan</div>
        </div>
      </div>
    </div>
    
  );
}

export default Trends;