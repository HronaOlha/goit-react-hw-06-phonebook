import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Héloïse Letissier', number: '4591256' },
    { id: 'id-2', name: 'Gwendoline Christie', number: '4438912' },
  ],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    addFilter(state, action) {
      return action.payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('filter/deleteContact');
// export const addFilter = createAction('filter/addFilter');

// const contactsReducer = createReducer(initialState.contacts, {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter(contact => contact.id !== action.payload),
// });
// const filterReducer = createReducer(initialState.filter, {
//   [addFilter]: (state, action) => action.payload,
// });

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
