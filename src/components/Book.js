/* eslint-disable max-len */
import React from 'react';
import { PropTypes } from 'prop-types';
import { removeBook } from '../actions';

const handleRemoveBook = (book) => {
  removeBook(book.id);
};

const Book = (props) => {
  const { book } = props;

  // console.log(this.state);
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.category}</td>
      <td>{book.title}</td>
      <td><button type="submit" onClick={handleRemoveBook}>Delete Book</button></td>
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
