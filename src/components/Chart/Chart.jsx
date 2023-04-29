import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ChartBar from './ChartBar';

const Chart = ({ expenses }) => {
  const dataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
  });

  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <article className="grid">
      {dataPoints.map((dataPoint) => {
        const { label, value } = dataPoint;
        return (
          <ChartBar
            key={label}
            value={value}
            maxValue={maxValue}
            label={label}
          />
        );
      })}
    </article>
  );
};

export default Chart;

Chart.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};
