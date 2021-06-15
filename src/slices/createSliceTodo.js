import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: ['asasa'],
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { todoAdded } = todosSlice.actions;

export default todosSlice.reducer;
