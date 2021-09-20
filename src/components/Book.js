import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ category, title }) => (
  <tr>
    <td>{category}</td>
    <td>{title}</td>
    <td><button type="button">Delete Book</button></td>
  </tr>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
