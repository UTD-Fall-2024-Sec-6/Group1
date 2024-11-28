import { React, useState } from 'react';
import './App.FinancialInfo.css';

function Table() {
	const expenses = new Map();
	expenses.set("Rent", [1000, 1000, 1000, 1000, 1000, 1000, 1200, 1200, 1200, 1200, 1200, 1200]);
	expenses.set("Groceries", [250, 250, 250, 250, 0, 0, 0, 0, 250, 250, 250, 250]);
	expenses.set("Internet/Data Plan", [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70]);
	expenses.set("Gas", [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150]);
	//expenses on a monthly basis - should recieve from backend.
	//If you don't have data for specific months, just a dictionary with name & amount will do instead.


	const expenseNames = Array.from(expenses.keys());
	const averages = new Map();

	let expenseList = [];
	let average = 0.;
	for (let i = 0; i < expenseNames.length; i++) {
		expenseList = expenses.get(expenseNames[i]); //expense list: list of the current monthly expense
		for (let j = 0; j < expenseList.length; j++) {
			average += expenseList[j]; //the sum
		}
		average = average / expenseList.length; //take the averages of the expense list
		averages.set(expenseNames[i], average); //put the averages in a map for the expenses
		average = 0;
	}

	let totals = [], currentTotal = 0.;
	for (let j = 0; j < 12; j++) {
		for (let i = 0; i < expenseNames.length; i++) {
			currentTotal += expenses.get(expenseNames[i])[j];
		}
		totals.push(currentTotal); //add each month's total to the totals array.
		currentTotal = 0.;
	}
	for (let i = 0; i < expenseNames.length; i++) {
		currentTotal += averages.get(expenseNames[i]);
	}
	totals.push(currentTotal); //add the averages to the end

	//initialize the table
	const table = new Array(14);
	for (let i = 0; i < table.length; i++) {
		table[i] = new Array(11).fill("-");
	}

	for (let y = 0; y < 11; y++) { //starts at top row and work downwards
		if (expenseNames.length > y) {
			table[0][y] = expenseNames[y]; //expense name
			for (let x = 1; x < 13; x++) {
				table[x][y] = "$" + expenses.get(expenseNames[y])[x - 1].toFixed(2); //monthly rates
			}
			table[13][y] = "$" + averages.get(expenseNames[y]).toFixed(2); //averages
		}
		else if (y === 10) {
			table[0][y] = "Total";
			for (let x = 1; x < 14; x++) {
				table[x][y] = "$" + totals[x-1].toFixed(2); //totals
			}
		}
		//if there are no expenses, the table is left blank
	}

	//I actually found a way to avoid this mess, but it causes a security problem, so wall of text it is.
	return (
		<table class="table">
			<tr>
				<th class="th">Name</th>
				<th class="th">Jan</th>
				<th class="th">Feb</th>
				<th class="th">Mar</th>
				<th class="th">Apr</th>
				<th class="th">May</th>
				<th class="th">Jun</th>
				<th class="th">Jul</th>
				<th class="th">Aug</th>
				<th class="th">Sep</th>
				<th class="th">Oct</th>
				<th class="th">Nov</th>
				<th class="th">Dec</th>
				<th class="th">Avg</th>
			</tr>
			<tr>
				<th class="th">{table[0][0]}</th>
				<td class="td">{table[1][0]}</td>
				<td class="td">{table[2][0]}</td>
				<td class="td">{table[3][0]}</td>
				<td class="td">{table[4][0]}</td>
				<td class="td">{table[5][0]}</td>
				<td class="td">{table[6][0]}</td>
				<td class="td">{table[7][0]}</td>
				<td class="td">{table[8][0]}</td>
				<td class="td">{table[9][0]}</td>
				<td class="td">{table[10][0]}</td>
				<td class="td">{table[11][0]}</td>
				<td class="td">{table[12][0]}</td>
				<td class="td">{table[13][0]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][1]}</th>
				<td class="td">{table[1][1]}</td>
				<td class="td">{table[2][1]}</td>
				<td class="td">{table[3][1]}</td>
				<td class="td">{table[4][1]}</td>
				<td class="td">{table[5][1]}</td>
				<td class="td">{table[6][1]}</td>
				<td class="td">{table[7][1]}</td>
				<td class="td">{table[8][1]}</td>
				<td class="td">{table[9][1]}</td>
				<td class="td">{table[10][1]}</td>
				<td class="td">{table[11][1]}</td>
				<td class="td">{table[12][1]}</td>
				<td class="td">{table[13][1]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][2]}</th>
				<td class="td">{table[1][2]}</td>
				<td class="td">{table[2][2]}</td>
				<td class="td">{table[3][2]}</td>
				<td class="td">{table[4][2]}</td>
				<td class="td">{table[5][2]}</td>
				<td class="td">{table[6][2]}</td>
				<td class="td">{table[7][2]}</td>
				<td class="td">{table[8][2]}</td>
				<td class="td">{table[9][2]}</td>
				<td class="td">{table[10][2]}</td>
				<td class="td">{table[11][2]}</td>
				<td class="td">{table[12][2]}</td>
				<td class="td">{table[13][2]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][3]}</th>
				<td class="td">{table[1][3]}</td>
				<td class="td">{table[2][3]}</td>
				<td class="td">{table[3][3]}</td>
				<td class="td">{table[4][3]}</td>
				<td class="td">{table[5][3]}</td>
				<td class="td">{table[6][3]}</td>
				<td class="td">{table[7][3]}</td>
				<td class="td">{table[8][3]}</td>
				<td class="td">{table[9][3]}</td>
				<td class="td">{table[10][3]}</td>
				<td class="td">{table[11][3]}</td>
				<td class="td">{table[12][3]}</td>
				<td class="td">{table[13][3]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][4]}</th>
				<td class="td">{table[1][4]}</td>
				<td class="td">{table[2][4]}</td>
				<td class="td">{table[3][4]}</td>
				<td class="td">{table[4][4]}</td>
				<td class="td">{table[5][4]}</td>
				<td class="td">{table[6][4]}</td>
				<td class="td">{table[7][4]}</td>
				<td class="td">{table[8][4]}</td>
				<td class="td">{table[9][4]}</td>
				<td class="td">{table[10][4]}</td>
				<td class="td">{table[11][4]}</td>
				<td class="td">{table[12][4]}</td>
				<td class="td">{table[13][4]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][5]}</th>
				<td class="td">{table[1][5]}</td>
				<td class="td">{table[2][5]}</td>
				<td class="td">{table[3][5]}</td>
				<td class="td">{table[4][5]}</td>
				<td class="td">{table[5][5]}</td>
				<td class="td">{table[6][5]}</td>
				<td class="td">{table[7][5]}</td>
				<td class="td">{table[8][5]}</td>
				<td class="td">{table[9][5]}</td>
				<td class="td">{table[10][5]}</td>
				<td class="td">{table[11][5]}</td>
				<td class="td">{table[12][5]}</td>
				<td class="td">{table[13][5]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][6]}</th>
				<td class="td">{table[1][6]}</td>
				<td class="td">{table[2][6]}</td>
				<td class="td">{table[3][6]}</td>
				<td class="td">{table[4][6]}</td>
				<td class="td">{table[5][6]}</td>
				<td class="td">{table[6][6]}</td>
				<td class="td">{table[7][6]}</td>
				<td class="td">{table[8][6]}</td>
				<td class="td">{table[9][6]}</td>
				<td class="td">{table[10][6]}</td>
				<td class="td">{table[11][6]}</td>
				<td class="td">{table[12][6]}</td>
				<td class="td">{table[13][6]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][7]}</th>
				<td class="td">{table[1][7]}</td>
				<td class="td">{table[2][7]}</td>
				<td class="td">{table[3][7]}</td>
				<td class="td">{table[4][7]}</td>
				<td class="td">{table[5][7]}</td>
				<td class="td">{table[6][7]}</td>
				<td class="td">{table[7][7]}</td>
				<td class="td">{table[8][7]}</td>
				<td class="td">{table[9][7]}</td>
				<td class="td">{table[10][7]}</td>
				<td class="td">{table[11][7]}</td>
				<td class="td">{table[12][7]}</td>
				<td class="td">{table[13][7]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][8]}</th>
				<td class="td">{table[1][8]}</td>
				<td class="td">{table[2][8]}</td>
				<td class="td">{table[3][8]}</td>
				<td class="td">{table[4][8]}</td>
				<td class="td">{table[5][8]}</td>
				<td class="td">{table[6][8]}</td>
				<td class="td">{table[7][8]}</td>
				<td class="td">{table[8][8]}</td>
				<td class="td">{table[9][8]}</td>
				<td class="td">{table[10][8]}</td>
				<td class="td">{table[11][8]}</td>
				<td class="td">{table[12][8]}</td>
				<td class="td">{table[13][8]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][9]}</th>
				<td class="td">{table[1][9]}</td>
				<td class="td">{table[2][9]}</td>
				<td class="td">{table[3][9]}</td>
				<td class="td">{table[4][9]}</td>
				<td class="td">{table[5][9]}</td>
				<td class="td">{table[6][9]}</td>
				<td class="td">{table[7][9]}</td>
				<td class="td">{table[8][9]}</td>
				<td class="td">{table[9][9]}</td>
				<td class="td">{table[10][9]}</td>
				<td class="td">{table[11][9]}</td>
				<td class="td">{table[12][9]}</td>
				<td class="td">{table[13][9]}</td>
			</tr>
			<tr>
				<th class="th">{table[0][10]}</th>
				<td class="td">{table[1][10]}</td>
				<td class="td">{table[2][10]}</td>
				<td class="td">{table[3][10]}</td>
				<td class="td">{table[4][10]}</td>
				<td class="td">{table[5][10]}</td>
				<td class="td">{table[6][10]}</td>
				<td class="td">{table[7][10]}</td>
				<td class="td">{table[8][10]}</td>
				<td class="td">{table[9][10]}</td>
				<td class="td">{table[10][10]}</td>
				<td class="td">{table[11][10]}</td>
				<td class="td">{table[12][10]}</td>
				<td class="td">{table[13][10]}</td>
			</tr>
		</table>
		);
}

function Export() {
	//TODO: find out how to handle exporting a file
	console.log("This isn't a feature yet :(");
}


function ExportButton() {
	return (
		<div onClick={Export} class="export-button">
			<div class="button-text">Export</div>
		</div>
	);
}

function DeleteConfirm() {
	window.confirm("Are you sure you want to delete this?");
	//TODO: send a signal somewhere to delete the thing. Probably will involve a react prop
}

function InfoBlock() {
	const [editPopupVisible, setEditPopupVisible] = useState(false);
	const openEditPopup = () => {
		setEditPopupVisible(true);
	}
	const closeEditPopup = () => {
		setEditPopupVisible(false);
	}

	const infoName = "expenses";

	return (
		<div class="info-box">
			<div style={{ width: 10 }}></div>
			<div class="info-text">{infoName}</div>
			<img class="icon" onClick={DeleteConfirm} src="delete.png"></img>
			<div style={{ width: 10 }}></div>
			<img class="icon" onClick={openEditPopup} src="edit.png"></img>

		</div>
		
		);
}


function FinancialInfo() {
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	let amountInfos = 4;
	const openEditPopup = () => {
		setIsPopupVisible(true);
	};

	const closeEditPopup = () => {
		setIsPopupVisible(false);
	};

	//again, InfoBlock can be shortened but it causes security problems which are kinda bad
	return (
		<div class="financial-info">
			<Table />
			<div onClick={openEditPopup} class="edit-button">
				<div class="button-text">Edit</div>
			</div>
			<ExportButton />
			{isPopupVisible ?
				<div class="popup">
					<div class="infos">
					{amountInfos > 0 ?
						<InfoBlock/>
						: ""
					}
					{amountInfos > 1 ?
						<InfoBlock />
						: ""
					}
					{amountInfos > 2 ?
						<InfoBlock />
						: ""
					}
					{amountInfos > 3 ?
						<InfoBlock />
						: ""
					}
					{amountInfos > 4 ?
						<InfoBlock />
						: ""
					}
					{amountInfos > 5 ?
						<InfoBlock />
						: ""
					}
					{amountInfos > 6 ?
						<InfoBlock />
						: ""
					}
					{amountInfos > 7 ?
						<InfoBlock />
						: ""
					}
					{amountInfos > 8 ?
						<InfoBlock />
						: ""
					}
					{amountInfos > 9 ?
						<InfoBlock />
						: ""
					}
					</div>
					<div style={{ height: 600 }}></div>
					<div class="add-button">
						<div class="button-text-dark">Add New</div> 
					</div>
					<div onClick={closeEditPopup} class="close-box">
						<div class="x">X</div>
					</div>
				</div>


				: ""
			}
		</div>
		
	);
}

export default FinancialInfo;