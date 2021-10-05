import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="container">
    <nav className="nav">
      <span className="Bookstore-CMS Text-Style-5">
        Bookstore CMS
      </span>

      <span className="BOOKS Text-Style-7">
        BOOKS
      </span>

      <span className="CATEGORIES Text-Style-7">
        CATEGORIES
      </span>

      <div className="Oval">
        <div className="Mask" />
      </div>
    </nav>
    <BooksList />
    <div className="Line" />
    <BooksForm />
  </div>
);

export default App;
