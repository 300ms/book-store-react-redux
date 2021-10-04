/* eslint-disable max-len */
import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { book, handleRemoveBook } = props;

  return (
    <tr className="book-row">
      <td className="info">
        {book.category}
        {' '}
        <br />
        {book.title}
        {' '}
        <br />
        {book.id}
        {' '}
        <br />
        <div>
          <button type="submit" onClick={() => handleRemoveBook(book)}>Delete Book</button>
        </div>
      </td>
      <td className="progress"> Progress </td>
      <td className="chapter">Chapter Info</td>
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
