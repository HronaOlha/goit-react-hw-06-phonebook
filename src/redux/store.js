import { configureStore, createSlice } from '@reduxjs/toolkit';
// Залишається в store
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistor = persistStore(store)
//

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

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
