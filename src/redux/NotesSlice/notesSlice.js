import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                note: 'Biraz makarna yapabilirim',
                color: 'yellow',
                id: nanoid(),
            },
            {
                note: 'Geometri açılar iç açılar dış açılar sınavda çıkacak',
                color: 'purple',
                id: nanoid(),
            },
            {
                note: 'Çiçekler balkonda üşür',
                color: 'purple',
                id: nanoid(),
            },
        ],
        filteredItems: [
            {
                note: 'Biraz makarna yapabilirim',
                color: 'yellow',
                id: nanoid(),
            },
            {
                note: 'Geometri açılar iç açılar dış açılar sınavda çıkacak',
                color: 'purple',
                id: nanoid(),
            },
            {
                note: 'Çiçekler balkonda üşür',
                color: 'purple',
                id: nanoid(),
            },
        ]
    },
    reducers: {
        addNote: (state, action) => {
            const { color, note } = action.payload;
            state.items.push({ id: nanoid(), color: color, note: note });
        },
        filterNote: (state, action) => {
            if (action.payload === '') {
                state.filteredItems = [...state.items];
                return;
            }
            const filteredItems = state.items.filter(item => item.note.includes(action.payload));
            state.filteredItems = filteredItems
        }
    }
});

export const { addNote, filterNote } = notesSlice.actions;

export default notesSlice.reducer;