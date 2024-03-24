import { RootState } from './store';
import { createSlice, Reducer } from '@reduxjs/toolkit';
import {
  // createTaskThunk,
  // editTaskThunk,
  getAllTasksThunk,
  // getTaskByIdThunk,
  // removeTaskThunk
} from './operations.ts';

export interface Task {
  title: string;
  description: string;
  date: string;
  category: string;
}

export interface Tasks {
  todo: [{name: string, body: Task[] }];
  planned: [{name: string, body: Task[] }];
  inProgress: [{name: string, body: Task[] }];
  closed: [{name: string, body: Task[] }];
}

const initialState: Tasks = {
  todo: [{
    name: '',
    body: [],
  }],
  planned: [{
    name: '',
    body: [],
  }],
  inProgress: [{
    name: '',
    body: [],
  }],
  closed: [{
    name: '',
    body: [],
  }],
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers:
  (builder) => {
    builder
      // .addCase(createTaskThunk.fulfilled(), (state, {payload})=>{})
      // .addCase(removeTaskThunk.fulfilled(), (state, {payload})=>{})
      // .addCase(editTaskThunk.fulfilled(), (state, {payload})=>{})
      // .addCase(getTaskByIdThunk.fulfilled(), (state, {payload})=>{})
      .addCase(getAllTasksThunk.fulfilled, (state, { payload }) => {
        console.log('state',state)
        console.log('payload',[...payload])
        // state.todo.name = payload
      })
  }
})

export const tasksReducer: Reducer<Tasks> = taskSlice.reducer
export const tasksSelector = (state: RootState) => state.tasks
// export const plannedSelector = (state: RootState) => state.tasks.planned;
// export const inProgressSelector = (state: RootState) => state.tasks.inProgress;
// export const closedSelector = (state: RootState) => state.tasks.closed;