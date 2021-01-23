import { combineReducers } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import actionsTypes from './types';

const itemsReducer = createReducer([], {
  // это строка потому вычисляемое свойство объекта
  [actionsTypes.handelDeleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [actions.contactFormSubmithandlerSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
});

const filterReducer = createReducer('', {
  [actionsTypes.changeFilter]: (_, action) => action.payload,
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
