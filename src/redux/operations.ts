import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store.ts';


export interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export const createTaskThunk = createAsyncThunk('createTask', async()=>{})

export const removeTaskThunk = createAsyncThunk('removeTask',async()=>{})

export const editTaskThunk = createAsyncThunk('editTask',async()=>{})

export const getTaskByIdThunk = createAsyncThunk('getTaskById',async()=>{})

export const getAllTasksThunk = createAsyncThunk('getAllTasks',async()=>{})