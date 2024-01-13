import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  changeFilter,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
} from './todos-actions';

// const items = createReducer([], {
//   [fetchTodosSuccess]: (_, { payload }) => payload,
//   [addTodoSuccess]: (state, { payload }) => [...state, payload],
//   [deleteTodoSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
//   [toggleCompletedSuccess]: (state, { payload }) =>
//     state.map(todo => (todo.id === payload.id ? payload : todo)),
// });

const items = createReducer([], builder => {
  builder
    .addCase(fetchTodosSuccess, (_, { payload }) => payload)
    .addCase(addTodoSuccess, (state, { payload }) => [...state, payload])
    .addCase(deleteTodoSuccess, (state, { payload }) =>
      state.filter(({ id }) => id !== payload)
    )
    .addCase(toggleCompletedSuccess, (state, { payload }) =>
      state.map(todo => (todo.id === payload.id ? payload : todo))
    );
});

// const loading = createReducer(false, {
//   [fetchTodosRequest]: () => true,
//   [fetchTodosSuccess]: () => false,
//   [fetchTodosError]: () => false,
//   [addTodoRequest]: () => true,
//   [addTodoSuccess]: () => false,
//   [addTodoError]: () => false,
//   [deleteTodoRequest]: () => true,
//   [deleteTodoSuccess]: () => false,
//   [deleteTodoError]: () => false,
//   [toggleCompletedRequest]: () => true,
//   [toggleCompletedSuccess]: () => false,
//   [toggleCompletedError]: () => false,
// });

const loading = createReducer(false, builder => {
  builder
    .addCase(fetchTodosRequest, () => true)
    .addCase(fetchTodosSuccess, () => false)
    .addCase(fetchTodosError, () => false)
    .addCase(addTodoRequest, () => true)
    .addCase(addTodoSuccess, () => false)
    .addCase(addTodoError, () => false)
    .addCase(deleteTodoRequest, () => true)
    .addCase(deleteTodoSuccess, () => false)
    .addCase(deleteTodoError, () => false)
    .addCase(toggleCompletedRequest, () => true)
    .addCase(toggleCompletedSuccess, () => false)
    .addCase(toggleCompletedError, () => false);
});

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

const filter = createReducer('', builder => {
  builder.addCase(changeFilter, (_, { payload }) => payload);
});

// const error = createReducer(null, {});

const error = createReducer(null, builder => {
  builder.addCase(addTodoError, (_, { payload }) => payload);
  builder.addCase(deleteTodoError, (_, { payload }) => payload);
  builder.addCase(toggleCompletedError, (_, { payload }) => payload);
  builder.addCase(fetchTodosError, (_, { payload }) => payload);
});

export const todosReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});
