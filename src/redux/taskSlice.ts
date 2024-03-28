
import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import {
//   // createTaskThunk,
//   // editTaskThunk,
  getAllTasksThunk,
//   // getTaskByIdThunk,
//   // removeTaskThunk
} from './operations.ts';
import { RootState } from './store.ts';

export interface Task {
  title: string;
  category: string;
  description: string;
  importance: 'low' | 'medium' | 'high';
}

interface TasksState {
  tasks: Task[],
}

const initialState: TasksState = {
  tasks: []
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
      .addCase(getAllTasksThunk.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload || []
      })
  }
})

export const tasksReducer: Reducer<TasksState> = taskSlice.reducer
export const tasksSelector = (state: RootState) => state.tasks.tasks
// export const plannedSelector = (state: RootState) => state.tasks.planned;
// export const inProgressSelector = (state: RootState) => state.tasks.inProgress;
// export const closedSelector = (state: RootState) => state.tasks.closed;