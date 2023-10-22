// Filter.js
import React from 'react';

const Filter = ({ titleFilter, rateFilter, handleTitleChange, handleRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        value={rateFilter}
        onChange={handleRateChange}
      />
    </div>
  );
};

export default Filter;
