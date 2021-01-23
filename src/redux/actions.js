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

const handelDeleteContact = createAction(actionsTypes.handelDeleteContact);

const changeFilter = createAction(actionsTypes.changeFilter);

export {
  handelDeleteContact,
  contactFormSubmithandlerRequest,
  contactFormSubmithandlerSuccess,
  contactFormSubmithandlerError,
  changeFilter,
};

// {
//   id:    ,
//   name,
//   number,
// }
