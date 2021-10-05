import React from 'react';
import { PropTypes } from 'prop-types';

const CategoryFilter = ({
  handleFilterChange,
}) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const handleChange = (event) => {
    handleFilterChange(event.target.value);
  };

  return (

    <div>
      <select className="categories font-normal" name="filter" id="filter-category" onChange={handleChange}>
        {
          categories.map((cat, id) => (
            <option key={`opt_${id * 2}`} value={id}>{cat}</option>
          ))
        }
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
