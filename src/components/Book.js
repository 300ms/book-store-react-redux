import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.category}</td>
      <td>{book.title}</td>
      <td><button type="submit">Delete Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
