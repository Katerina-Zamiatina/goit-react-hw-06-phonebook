import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './actions';

const items = createReducer(
  [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
  {
    [actions.addContact]: (state, action) => [...state, action.payload],
    [actions.deleteContact]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
);

const filter = createReducer('', {
  [actions.filterContact]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });

// const itemsReducer = (
//   state = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
//   { type, payload },
// ) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];
//     case types.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case [actions.filterContact]:
//       return payload;
//     default:
//       return state;
//   }
// };
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
