import { CREATE_BOOK, REMOVE_BOOK } from '../helpers/helper';

const { v4: uuidv4 } = require('uuid');

const addBook = (book) => ({
  type: CREATE_BOOK,
  id: uuidv4(),
  title: book.title,
  category: book.category,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  id: book.id,
});

export { addBook, removeBook };
