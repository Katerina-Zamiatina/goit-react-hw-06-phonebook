import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
import contactsReducer from './contacts/reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

// const rootReducer = combineReducers({ contacts: contactsReducer });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

export default store;
