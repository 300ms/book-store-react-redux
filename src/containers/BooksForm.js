import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
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

class BooksForm extends React.Component {
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
    } else if (event.target.nodeName === 'SELECT') {
      const newState = { ...this.state, category: event.target.value };
      this.setState(newState);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onSubmitCreateBook } = this.props;
    const { title, category } = this.state;
    if (title === '' || category === 'Select Category') { return; }
    onSubmitCreateBook(this.state);
  }

  render() {
    return (
      <div className="booksForm">
        <form className="book-form" action="#">
          <h3 className="book-form-header">
            ADD NEW BOOK
          </h3>
          <br />
          <div className="form-fields">
            <input type="text" id="title-input" name="title" placeholder="Book Title" onChange={this.handleChange} />
            <select name="category" id="category-input" placeholder="Category" onChange={this.handleChange}>
              {
                      categories.map((cat, id) => (
                        <option key={`opt_${id * 2}`} value={cat}>{cat}</option>
                      ))
                  }
            </select>
            <button className="add-book-button" type="submit" onClick={this.handleSubmit}><span className="add-book-button-span">ADD BOOK</span></button>
          </div>
        </form>
      </div>

    );
  }
}

BooksForm.propTypes = {
  onSubmitCreateBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitCreateBook: (book) => {
    dispatch(addBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
