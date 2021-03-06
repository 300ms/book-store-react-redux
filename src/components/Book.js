/* eslint-disable max-len */
import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { book, handleRemoveBook } = props;

  return (
    <li className="list-item Lesson-Panel">
      <div className="book-actions">
        <div className="">
          <h3 className="School-of font-bold">{book.category}</h3>
          <h1 className="title font-bold">{book.title}</h1>
          <h2 className="Suzanne-Collins">Author here</h2>
        </div>
        <div className="book-options">
          <button type="button" className="book-option">Comments</button>
          {' '}
          <button type="button" className="book-option middle-option" onClick={() => handleRemoveBook(book)}>Remove Book</button>
          {' '}
          <button type="button" className="book-option">Comments</button>
        </div>
      </div>
      <div className="completion-meter">
        <div className="Rectangle-3"><div className="Oval-2" /></div>
        <div>
          <h1 className="-Percent-Complete font-normal">64%</h1>
          <p className="Completed font-normal">Completed</p>
        </div>

      </div>
      <div className="Line-2" />
      <div className="progress-numbers">
        <div>
          <p className="Current-Chapter">Current chapter</p>
          <p className="Current-Lesson">Chapter 17</p>
        </div>
        <button className="Rectangle-2" type="button"><p className="Update-progress base-button">update progress</p></button>
      </div>
    </li>
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
