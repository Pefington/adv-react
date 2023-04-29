import PropTypes from 'prop-types';
import React, { useState } from 'react';

const NewExpense = ({ onExpenseSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    onExpenseSubmit(formData);
    setTitle('');
    setAmount('');
    setDate('');

    setShowForm(false);
  };

  return (
    <article>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </label>
          <div className="grid">
            <label htmlFor="amount">
              Amount
              <input
                type="number"
                min="0.01"
                step="0.01"
                id="amount"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
              />
            </label>
            <label htmlFor="date">
              Date
              <input
                type="date"
                id="date"
                min="2019-01-01"
                max="2022-12-31"
                value={date}
                onChange={({ target }) => setDate(target.value)}
              />
            </label>
          </div>
          <div className="grid">
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
            <button type="submit" onClick={handleSubmit}>
              Add Expense
            </button>
          </div>
        </form>
      ) : (
        <button type="button" onClick={() => setShowForm(true)}>
          Add New Expense
        </button>
      )}
    </article>
  );
};

export default NewExpense;

NewExpense.propTypes = {
  onExpenseSubmit: PropTypes.func.isRequired,
};
