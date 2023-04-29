import PropTypes from 'prop-types';
import React from 'react';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-IE', { month: 'long' });
  const day = date.toLocaleString('en-IE', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <small>
      {day} {month} {year} -{' '}
    </small>
  );
};

export default ExpenseDate;

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
