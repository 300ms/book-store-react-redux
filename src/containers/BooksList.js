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
    <div>
      <CategoryFilter
        handleFilterChange={handleFilterChange}
      />
      <ul>
        {
          // eslint-disable-next-line
          bookList.map(book => {
            const fBook = filterBook(book, state.filter);
            if (fBook) {
              return (
                <Book
                  key={book.id}
                  id={book.id}
                  book={book}
                  handleRemoveBook={handleRemoveBook}
                />
              );
            }
          })

        }

      </ul>
    </div>
  );
};

const BooksList = connect(mapStateToProps, mapDispatchToProps)(renderList);

export default BooksList;
