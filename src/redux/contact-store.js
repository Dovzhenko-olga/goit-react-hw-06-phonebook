import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReduser from './contact-reduser';

const rootReduser = combineReducers({
  contact: contactsReduser,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;