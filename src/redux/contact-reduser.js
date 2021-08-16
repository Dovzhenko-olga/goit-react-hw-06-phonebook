import { combineReducers } from 'redux';
import actionTypes from './contact-types';

const contactList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

const contacts = (state = contactList, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      if (state.some(contact => contact.name === payload.name)) {
      // toggleModal(name);
      alert(`${payload.name} already in contacts. Rewrite number?`);
      return state;
      } else {
        return [payload, ...state];
    }
    
    case actionTypes.DELETE:
      return state.filter(({id}) => id !== payload);
    
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;
    
    default:
      return state;
  }
}

export default combineReducers({
  contacts,
  filter,
});