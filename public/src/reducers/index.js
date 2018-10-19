import { combineReducers } from 'redux';
import BooksReducer from './books_reducers';
const rootReducer = combineReducers ({
  books: BooksReducer
});


export default rootReducer;
