import { createAction } from '@reduxjs/toolkit';
import actionTypes from './types';
import api from '../services/contacts-api';

// Action-creator- это функция, в которую передаются аргументы. А из себя она возвращает
// функцию, которая получает dispatch(метод)
// Прослойка thunk смотрит: если тип action=функция, то она эту функцию просто вызывает. Если нет, она
// этот action отправляет дальше
// тоесть отправляется результат функции
// по результату http запроса, делается dispatch с результатами асинхронки(с данными) отправляешь action
const contactFormSubmithandler = newContact => dispatch => {
  dispatch({ type: 'phonebook/contactFormSubmithandlerRequest' });

  api
    .addContacts(newContact)
    .then(data =>
      dispatch({
        type: 'phonebook/contactFormSubmithandlerSuccess',
        payload: data,
      }),
    )
    .catch(error =>
      dispatch({
        type: 'phonebook/contactFormSubmithandlerError',
        payload: error,
      }),
    );
};

const handelDeleteContact = createAction(actionTypes.handelDeleteContact);

// const contactFormSubmithandler = createAction(
//   actionTypes.contactFormSubmithandler,
// );

const changeFilter = createAction(actionTypes.changeFilter);

export { handelDeleteContact, contactFormSubmithandler, changeFilter };

// {
//   id:    ,
//   name,
//   number,
// }
