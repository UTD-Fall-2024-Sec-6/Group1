import React, { useState, useEffect } from 'react';
import './App.FinancialInfo.css';

function FinancialInfo() {
  const [entries, setEntries] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);

  useEffect(() => {
    fetch('/entries')
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error('Error fetching entries:', err));
  }, []);

  const openPopup = (entry = null) => {
    setCurrentEntry(entry || { id: Date.now(), name: '', amount: '', type: '', frequency: '' });
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setCurrentEntry(null);
    setIsPopupVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEntry({ ...currentEntry, [name]: value });
  };

  const handleSave = () => {
    if (!currentEntry.name || isNaN(currentEntry.amount) || currentEntry.amount <= 0) {
      alert('Invalid input');
      return;
    }

    if (!['income', 'expense'].includes(currentEntry.type.toLowerCase())) {
      alert('Type must be either "income" or "expense".');
      return;
    }

    if (!['daily', 'weekly', 'monthly'].includes(currentEntry.frequency.toLowerCase())) {
      alert('Frequency must be daily, weekly, or monthly.');
      return;
    }

    const method = entries.some((entry) => entry.id === currentEntry.id) ? 'PUT' : 'POST';
    const url = method === 'PUT' ? `/entries/${currentEntry.id}` : '/entries';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentEntry),
    })
      .then((res) => res.json())
      .then((savedEntry) => {
        setEntries((prevEntries) =>
          method === 'PUT'
            ? prevEntries.map((entry) => (entry.id === savedEntry.id ? savedEntry : entry))
            : [...prevEntries, savedEntry]
        );
        closePopup();
      })
      .catch((err) => console.error('Error saving entry:', err));
  };

  const calculateMonthlyTotals = () => {
    const income = Array(12).fill(0);
    const expenses = Array(12).fill(0);

    entries.forEach(({ amount, type, frequency }) => {
      const monthlyAmount =
        frequency === 'daily'
          ? amount * 30
          : frequency === 'weekly'
          ? amount * 4
          : parseFloat(amount);

      if (type.toLowerCase() === 'income') {
        income.forEach((_, idx) => (income[idx] += monthlyAmount));
      } else {
        expenses.forEach((_, idx) => (expenses[idx] += monthlyAmount));
      }
    });

    const netTotal = income.map((inc, idx) => inc - expenses[idx]);
    return { income, expenses, netTotal };
  };

  const handleDelete = (id) => {
    fetch(`/entries/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
        } else {
          alert('Failed to delete the entry.');
        }
      })
      .catch((err) => console.error('Error deleting entry:', err));
  };

  const renderTable = () => {
    return entries.map((entry) => (
      <tr key={entry.id}>
        <td>{entry.name}</td>
        <td>{entry.amount}</td>
        <td>{entry.type}</td>
        <td>{entry.frequency}</td>
        <td>
          <button onClick={() => openPopup(entry)}>Edit</button>
          <button onClick={() => handleDelete(entry.id)}>Delete</button>
        </td>
      </tr>
    ));
  };

  const renderMonthlyTotalsTable = () => {
    const { income, expenses, netTotal } = calculateMonthlyTotals();
  
    return (
      <table className="totals-table">
        <thead>
          <tr>
            <th>Category</th>
            {income.map((_, idx) => (
              <th key={idx}>{new Date(0, idx).toLocaleString('default', { month: 'long' })}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Income</td>
            {income.map((val, idx) => (
              <td key={idx}>${val.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td>Total Expenses</td>
            {expenses.map((val, idx) => (
              <td key={idx}>${val.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <td>Net Total</td>
            {netTotal.map((val, idx) => (
              <td key={idx}>${val.toFixed(2)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="financial-info">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Frequency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>

      <div onClick={() => openPopup()} className="edit-button">
        <div className="button-text">Create</div>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <h3>{currentEntry.id ? 'Edit Entry' : 'Create Entry'}</h3>
          <input
            type="text"
            name="name"
            value={currentEntry.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="number"
            name="amount"
            value={currentEntry.amount}
            onChange={handleInputChange}
            placeholder="Amount"
          />
          <input
            type="text"
            name="type"
            value={currentEntry.type}
            onChange={handleInputChange}
            placeholder="income or expense"
          />
          <input
            type="text"
            name="frequency"
            value={currentEntry.frequency}
            onChange={handleInputChange}
            placeholder="daily, weekly, monthly"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={closePopup}>Cancel</button>
        </div>
      )}


{/* New Monthly Totals Table */}

      {renderMonthlyTotalsTable()}

    </div>
  );
}

export default FinancialInfo;
