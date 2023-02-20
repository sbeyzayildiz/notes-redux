import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './NotesSlice/notesSlice';

export const store = configureStore({
    reducer: {
        notes: notesReducer
    }
});