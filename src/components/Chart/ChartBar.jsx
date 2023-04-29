import PropTypes from 'prop-types';
import React from 'react';

const ChartBar = ({ label, value, maxValue }) => {
  const fillHeight =
    maxValue > 0 ? `${Math.round((value / maxValue) * 100)}%` : '';

  return (
    <div className="chart-bar-container">
      <div className="chart-bar" style={{ height: fillHeight }} />
      <figcaption>{label}</figcaption>
    </div>
  );
};

export default ChartBar;

ChartBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};
