import { CREATE_BOOK, REMOVE_BOOK } from '../helpers/helper';

const { v4: uuidv4 } = require('uuid');

const bookList = [
  {
    id: uuidv4(),
    category: 'History',
    title: 'History Book 1',
  },
  {
    id: uuidv4(),
    category: 'Horror',
    title: 'Horror Book 1',
  },
  {
    id: uuidv4(),
    category: 'Learning',
    title: 'Learning Book 1',
  },
];

const books = (state = bookList, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category,
        },
      ];

    case REMOVE_BOOK:
      // eslint-disable-next-line no-case-declarations
      const newState = [];
      state.map((book) => (book.id !== action.id ? newState.push(book) : []));
      return newState;
    default:
      return state;
  }
};

export default books;
