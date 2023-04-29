import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import NewExpense from './components/Expenses/NewExpense';

const App = () => {
  const expensesData = [
    {
      id: 'c6f53d8e-0608-449e-9828-addf887031be',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date('2020-08-13T17:00:00.000Z'),
    },
    {
      id: '32e95a91-052c-4012-9c7c-55da2ba191ec',
      title: 'New TV',
      amount: 799.49,
      date: new Date('2021-03-11T17:00:00.000Z'),
    },
    {
      id: '06116bed-6038-45fa-9775-5f77f33c80b2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date('2021-03-27T17:00:00.000Z'),
    },
    {
      id: 'b0e51295-6f4a-46ff-bf01-202bce5b7c43',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date('2021-06-11T17:00:00.000Z'),
    },
  ];

  const [expenses, setExpenses] = useState([...expensesData]);

  const handleExpenseSubmit = (formData) => {
    const submittedExpense = {
      ...formData,
      id: crypto.randomUUID(),
    };
    setExpenses((prevExpenses) => [submittedExpense, ...prevExpenses]);
  };

  const handleYearPick = (year) => {
    const filteredExpenses = expensesData.filter(
      (expense) => expense.date.getFullYear() === +year
    );
    setExpenses(filteredExpenses);
  };

  return (
    <>
      <NewExpense onExpenseSubmit={handleExpenseSubmit} />
      <ExpensesFilter onYearPick={handleYearPick} />
      {expenses.length === 0 && <p>No expenses found.</p>}
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
