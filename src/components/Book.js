/* eslint-disable max-len */
import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { book, handleRemoveBook } = props;

  return (
    <tr id="book-row">
      <td id="info">
        <span className="book-category">{book.category}</span>
        <br />
        <span className="book-title">{book.title}</span>
        <br />
        <span className="book-id">{book.id}</span>
        <br />
        <div>
          <span className="book-options">Comments</span>
          <button className="book-options" type="submit" onClick={() => handleRemoveBook(book)}>Remove</button>
          <span className="book-options">Edit</span>
        </div>
      </td>
      <td className="progress"><span className="empty">Progress</span></td>
      <div className="Line-2" />
      <td className="chapter"><span className="empty">Chapter Info</span></td>
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
