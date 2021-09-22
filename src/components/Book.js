/* eslint-disable max-len */
import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { book, handleRemoveBook } = props;

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.category}</td>
      <td>{book.title}</td>
      <td><button type="submit" onClick={() => handleRemoveBook(book)}>Delete Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
