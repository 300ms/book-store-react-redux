import React from 'react';
import { addBook } from '../actions';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export default class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      category: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.nodeName === 'INPUT') {
      const newState = { ...this.state, title: event.target.value };
      this.setState(newState);
    } else if (event.target.nodeName === 'OPTION') {
      const newState = { ...this.state, category: event.target.value };
      this.setState(newState);
    }

    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    addBook(this.state);
    this.setState({ id: null, title: null, category: null });
  }

  render() {
    return (
      <div className="booksForm">
        <form className="book-form" action="#">
          <h3>
            Create new book
          </h3>
          <br />
          <div className="form-fields">
            <label htmlFor="title">
              Book Title:

              <input type="text" id="title" name="title" onChange={this.handleChange} />
            </label>

            <label htmlFor="category">
              Category:
              <select name="category" id="category" onChange={this.handleChange}>
                {
                      categories.map((cat, id) => (
                        <option key={`opt_${id * 2}`} value={id}>{cat}</option>
                      ))
                  }
              </select>
            </label>

            <button type="submit" onClick={this.handleSubmit}>Add Book</button>
          </div>
        </form>
      </div>

    );
  }
}
