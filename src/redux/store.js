import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contact-reduser';

const store = configureStore({
  reducer: {
  contact: contactsReduser,
},
  devTools: process.env.NODE_ENV === 'development',
});

export default store;