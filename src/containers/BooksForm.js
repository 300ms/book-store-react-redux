import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      category: null,
    };

    this.categories = [
      'Category',
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];

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
    const { title } = this.state;
    return (
      <div className="form-block">
        <div className="form-title font-bold">
          add new book
        </div>
        <form action="#" onSubmit={this.handleSubmit}>
          <input className="inputValue" type="text" onChange={this.handleChange} value={title} id="inputValue" placeholder="Book title" />
          <select className="category" name="category" id="category" onChange={this.handleChange}>
            {
              this.categories.map((cat, id) => (
                <option key={`opt_${id * 2}`} value={id}>{cat}</option>
              ))
            }
          </select>
          <button id="submit-btn" className="Rectangle-2 submit-btn base-button" type="submit"><p>Add Book</p></button>
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
