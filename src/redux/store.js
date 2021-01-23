import { combineReducers } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import actionTypes from './types';

const itemsReducer = createReducer([], {
  // это строка потому вычисляемое свойство объекта
  [actionTypes.handelDeleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  contactFormSubmithandlerSuccess: (state, action) => [
    ...state,
    action.payload,
  ],
});

const filterReducer = createReducer('', {
  [actionTypes.changeFilter]: (_, action) => action.payload,
});

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export default store;
