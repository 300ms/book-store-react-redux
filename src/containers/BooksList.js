import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = () => ({});

const renderList = ({
  state,
}) => (
  <div className="table-wrapper">
    <table className="fl-table">
      <thead>
        <th>BookId</th>
        <th>Category</th>
        <th>Title</th>
      </thead>
      <tbody>
        {
                    state.books.map((book) => (
                      <Book
                        key={book.id}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...book}
                      />
                    ))
                }
      </tbody>
    </table>
  </div>
);

const BooksList = connect(mapStateToProps, mapDispatchToProps)(renderList);

export default BooksList;
