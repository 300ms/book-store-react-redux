import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <>
    <div className="booksList"><BooksList /></div>
    <div className="booksForm"><BooksForm /></div>
  </>
);

export default App;
