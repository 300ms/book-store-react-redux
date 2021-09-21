import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';
import './index.css';

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

const store = createStore(rootReducer, { books: bookList });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
