import { createAction } from '@reduxjs/toolkit';
import actionsTypes from './types';

const contactFormSubmithandlerRequest = createAction(
  'phonebook/contactFormSubmithandlerRequest',
);
const contactFormSubmithandlerSuccess = createAction(
  'phonebook/contactFormSubmithandlerSuccess',
);
const contactFormSubmithandlerError = createAction(
  'phonebook/contactFormSubmithandlerError',
);

const handelDeleteContactRequest = createAction(
  'phonebook/handelDeleteContactRequest',
);
const handelDeleteContactSuccess = createAction(
  'phonebook/handelDeleteContactSuccess',
);
const handelDeleteContactError = createAction(
  'phonebook/handelDeleteContactError',
);

const changeFilter = createAction(actionsTypes.changeFilter);

export {
  contactFormSubmithandlerRequest,
  contactFormSubmithandlerSuccess,
  contactFormSubmithandlerError,
  handelDeleteContactRequest,
  handelDeleteContactSuccess,
  handelDeleteContactError,
  changeFilter,
};
