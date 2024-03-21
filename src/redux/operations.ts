import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store.ts';


export interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export const createTaskThunk = createAsyncThunk <AsyncThunkConfig>('createTask', async ({},thunkApi)=>{try{}catch (){}})

export const removeTaskThunk = createAsyncThunk <string, string, AsyncThunkConfig>('removeTask',async (id, thunkAPI)=>{try{}catch (){}})

export const editTaskThunk = createAsyncThunk <AsyncThunkConfig>('editTask',async ({}, thunkAPI)=>{try{}catch (){}})

export const getTaskByIdThunk = createAsyncThunk <AsyncThunkConfig>('getTaskById',async (id, thunkAPI)=>{try{}catch (){}})

export const getAllTasksThunk = createAsyncThunk <AsyncThunkConfig>('getAllTasks',async (_, thunkAPI)=>{try{}catch (){}})