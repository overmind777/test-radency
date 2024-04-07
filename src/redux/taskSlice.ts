
import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';
import {
  createTaskThunk,
  editTaskThunk,
//   // createTaskThunk,
//   // editTaskThunk,
  getAllTasksThunk, removeTaskThunk,
//   // getTaskByIdThunk,
//   // removeTaskThunk
} from './operations.ts';
import { RootState } from './store.ts';

export interface Task {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  importance: 'low' | 'medium' | 'high';
}

interface TasksState {
  tasks: Task[],
  isOpen: boolean,
}

const initialState: TasksState = {
  tasks: [],
  isOpen: false,
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    modalState:(state, action)=>{
      state.isOpen = action.payload
    }
  },
  extraReducers:
  (builder) => {
    builder
      .addCase(createTaskThunk.fulfilled, (state, {payload})=>{
        state.tasks.push(payload)
      })
      .addCase(removeTaskThunk.fulfilled, (state, {payload})=>{
        state.tasks = state.tasks.filter((task: Task) => {
          return task.id !== payload;
        })
      })
      .addCase(editTaskThunk.fulfilled, (state, action)=>{
        const index = state.tasks.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      // .addCase(getTaskByIdThunk.fulfilled(), (state, {payload})=>{})
      .addCase(getAllTasksThunk.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload || []
      })
  }
})

export const tasksReducer: Reducer<TasksState> = taskSlice.reducer
export const {modalState} = taskSlice.actions
export const tasksSelector = (state: RootState) => state.tasks.tasks
export const modalSelector = (state: RootState) => state.tasks.isOpen