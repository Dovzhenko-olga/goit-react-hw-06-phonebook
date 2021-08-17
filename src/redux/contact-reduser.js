import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { add, deleted, changeFilter } from './contact-actions';

const contactList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

const contacts = createReducer(contactList, {
  [add]: (state, { payload }) => {
    if(state.some(contact => contact.name === payload.name)) {
      alert(`${payload.name} already in contacts. Rewrite number?`);
      return state;
      } else {
        return [payload, ...state];
    }},
  [deleted]: (state, { payload }) => state.filter(({id}) => id !== payload),
})

// const contacts = (state = contactList, { type, payload }) => {
//   switch (type) {
//     case add:
//       if (state.some(contact => contact.name === payload.name)) {
//       // toggleModal(name);
//       alert(`${payload.name} already in contacts. Rewrite number?`);
//       return state;
//       } else {
//         return [payload, ...state];
//     }
    
//     case deleted:
//       return state.filter(({id}) => id !== payload);
    
//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case changeFilter:
//       return payload;
    
//     default:
//       return state;
//   }
// }

export default combineReducers({
  contacts,
  filter,
});