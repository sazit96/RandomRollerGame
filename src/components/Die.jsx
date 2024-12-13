import React from 'react';

const Die = ({ value }) => {
  return (
    <button className="die">
      <span className="die-value">{value}</span>
    </button>
  );
};

export default Die;
