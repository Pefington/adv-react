import PropTypes from 'prop-types';
import React from 'react';

import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ title, amount, date }) => (
  <article>
    <ExpenseDate date={date} />
    <b>{title}</b> - <small>${amount}</small>
  </article>
);

export default ExpenseItem;

ExpenseItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
