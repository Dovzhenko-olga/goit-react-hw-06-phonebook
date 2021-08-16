import shortid from 'shortid';
import actionTypes from './contact-types';

export const addContact = ({name, number}) => ({
  type: actionTypes.ADD,
  payload: {
      id: shortid.generate(),
      name,
      number,
    },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});