import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        addToDo: (state, action) => {
            state.items.push(action.payload)
        },

        toggle: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            item.completed = !item.completed;
        },
        deleteButton: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        }
    }
})


export const { addToDo, toggle, deleteButton } = todosSlice.actions;
export default todosSlice.reducer;