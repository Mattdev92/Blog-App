import { configureStore } from '@reduxjs/toolkit';
import todosReducer from 'slices/createSliceTodo';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
