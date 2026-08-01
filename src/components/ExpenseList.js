import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = ['Groceries', 'Utilities', 'Transport'];

  return (
    <div className="list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
