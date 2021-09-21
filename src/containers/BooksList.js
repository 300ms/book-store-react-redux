import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = () => ({});

const renderList = ({ state }) => {
  const bookList = state.books;

  return (
    <div className="booksList">
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>BookId</th>
              <th>Category</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {
              bookList.map((book) => (
                <Book
                  book={book}
                  key={book.id}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
const BooksList = connect(mapStateToProps, mapDispatchToProps)(renderList);

export default BooksList;
