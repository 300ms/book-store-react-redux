import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions/index';

const filterBook = (
  book, currentFilter,
) => {
  if (currentFilter === 'All' || currentFilter === book.category) { return book; }
  return false;
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  handleRemoveBook: (book) => {
    dispatch(removeBook(book));
  },
  handleFilterChange: (newFilter) => {
    dispatch(changeFilter(newFilter));
  },
});

const renderList = ({ state, handleRemoveBook, handleFilterChange }) => {
  const bookList = state.books;

  return (
    <div className="booksList">
      <div className="filter-category">
        <span>Category Filter:&nbsp;&nbsp;</span>
        <CategoryFilter
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div className="table-wrapper">
        <table className="fl-table">
          <tbody>
            {
              bookList.map((book) => {
                const filter = filterBook(book, state.filter);
                if (filter) {
                  return (
                    <Book
                      book={book}
                      key={book.id}
                      handleRemoveBook={handleRemoveBook}
                    />
                  );
                }

                return null;
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

const BooksList = connect(mapStateToProps, mapDispatchToProps)(renderList);

export default BooksList;
