import { createAction } from '@reduxjs/toolkit';
import actionTypes from './types';

const handelDeleteContact = createAction(actionTypes.handelDeleteContact);

const contactFormSubmithandler = createAction(
  actionTypes.contactFormSubmithandler,
);

const changeFilter = createAction(actionTypes.changeFilter);

export { handelDeleteContact, contactFormSubmithandler, changeFilter };
