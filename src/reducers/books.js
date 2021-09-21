import { CREATE_BOOK, REMOVE_BOOK } from '../helpers/helper';

const books = (state = [], action) => {
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
