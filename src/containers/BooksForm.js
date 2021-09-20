import React from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <form className="book-form" action="#">
      <h3>
        Create new book
      </h3>
      <br />
      <div className="form-fields">
        <label htmlFor="title">
          Book Title:

          <input type="text" id="title" name="title" />
        </label>

        <label htmlFor="category">
          Category:
          <select name="category" id="category">
            {
                    categories.map((cat, id) => (
                      <option key={`opt_${id * 2}`} value={id}>{cat}</option>
                    ))
                }
          </select>
        </label>

        <button type="button">Add Book</button>
      </div>
    </form>

  );
};

export default BooksForm;
