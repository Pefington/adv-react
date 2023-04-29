import PropTypes from 'prop-types';
import React from 'react';

const ExpensesFilter = ({ onYearPick }) => {
  const handleChange = ({ target }) => {
    onYearPick(target.value);
  };

  return (
      <article>
        <label htmlFor="filter">
          Filter by year
          <select id="filter" onChange={handleChange}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </label>
      </article>
  );
};

export default ExpensesFilter;

ExpensesFilter.propTypes = {
  onYearPick: PropTypes.func.isRequired,
};
