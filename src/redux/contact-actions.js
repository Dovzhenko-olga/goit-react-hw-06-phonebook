import { createAction } from '@reduxjs/toolkit';

export const add = createAction('contact/add');
export const deleted = createAction('contact/delete');
export const changeFilter = createAction('contact/changeFilter');