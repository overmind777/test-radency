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

export type Tasks = {
  todo: Task[];
  planned: Task[];
  inProgress: Task[];
  closed: Task[];
}

const initialState: Tasks = {
  todo: [],
  planned: [],
  inProgress: [],
  closed: []
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
        state.todo = payload
      })
  }
})

export const tasksReducer: Reducer<Tasks> = taskSlice.reducer
export const todoSelector = (state: RootState) => state.tasks.todo
export const plannedSelector = (state: RootState) => state.tasks.planned;
export const inProgressSelector = (state: RootState) => state.tasks.inProgress;
export const closedSelector = (state: RootState) => state.tasks.closed;