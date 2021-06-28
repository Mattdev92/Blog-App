import { createSlice } from '@reduxjs/toolkit';
import { InnitialStateType } from 'slices/createSliceTodo.types';

const initialState: InnitialStateType = {
  author: 'Mateusz',
  names: ['Mateusz'],
};
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.names.push(action.payload);
    },
  },
});

export const { todoAdded } = todosSlice.actions;

export default todosSlice.reducer;
