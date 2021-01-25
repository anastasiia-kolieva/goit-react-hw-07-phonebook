import api from '../services/contacts-api';
import * as actions from './actions';

// Action-creator- это функция, в которую передаются аргументы. А из себя она возвращает
// функцию, которая получает dispatch(метод)
// Прослойка thunk смотрит: если тип action=функция, то она эту функцию просто вызывает. Если нет, она
// этот action отправляет дальше
// тоесть отправляется результат функции
// по результату http запроса, делается dispatch с результатами асинхронки(с данными) отправляешь action
const contactFormSubmithandler = newContact => dispatch => {
  dispatch(actions.contactFormSubmithandlerRequest());

  api
    .addContacts(newContact)
    .then(data => dispatch(actions.contactFormSubmithandlerSuccess(data)))
    .catch(error => dispatch(actions.contactFormSubmithandlerError(error)));
};

const handelDeleteContact = contactId => dispatch => {
  dispatch(actions.handelDeleteContactRequest());

  api
    .deleteContacts(contactId)
    .then(() => dispatch(actions.handelDeleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.handelDeleteContactError(error)));
};

export { contactFormSubmithandler, handelDeleteContact };
