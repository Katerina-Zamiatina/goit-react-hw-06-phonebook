import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import types from './types';

export const addContact = createAction('contacts/add', contact => ({
  payload: {
    id: uuidv4(),
    name: contact.name,
    number: contact.number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/filter');

// export const addContact = payload => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name: payload.name,
//     number: payload.number,
//   },
// });

// export const deleteContact = payload => ({
//   type: types.DELETE_CONTACT,
//   payload,
// });

// export const filterContact = payload => ({
//   type: types.FILTER_CONTACT,
//   payload,
// });
