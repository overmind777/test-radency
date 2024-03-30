import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { AppDispatch, RootState } from "./store.ts";
import { Task } from "./taskSlice.ts";

const taskApi = axios.create({
  // baseURL: "https://nodejs-serverless-function-express-dhh0.onrender.com",
  baseURL: "http://192.168.88.102:3000"
});
export interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}

export interface Query {
  id?: number;
  title?: string;
  category?: string;
  description?: string;
  importance?: string;
}

// export const createTaskThunk = createAsyncThunk <string, { title: string, description: string }, AsyncThunkConfig>('createTask', async (task, thunkApi)=> {
//     try {
//       const {title, description} = task
//     } catch (error: unknown) {
//       return thunkApi.rejectWithValue(
//         `${(error as Error)?.message ?? "Unknown error"}`
//       );
//     }
//   }
// )
//
// export const removeTaskThunk = createAsyncThunk <string, string, AsyncThunkConfig>('removeTask',async (id, thunkAPI)=>{
//   try{
//
//   } catch (error: unknown) {
//   return thunkApi.rejectWithValue(
//     `${(error as Error)?.message ?? "Unknown error"}`
//   );
// }})

export const editTaskThunk = createAsyncThunk <
  Task,
  Query,
  AsyncThunkConfig
>('editTask',async (task, thunkAPI)=>{
  const {id,category } = task
  try{
    const {data} = await taskApi.patch(`/tasks/${id}`, { category });
    return data as Task
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
})

// export const getTaskByIdThunk = createAsyncThunk <AsyncThunkConfig>('getTaskById',async (id, thunkAPI)=>{try{}catch (error: unknown) {
//   return thunkApi.rejectWithValue(
//     `${(error as Error)?.message ?? "Unknown error"}`
//   );
// }})

export const getAllTasksThunk = createAsyncThunk<
  Task[],
  void,
  AsyncThunkConfig
>("getAllTasks", async (_, thunkApi) => {
  try {
    const {data} = await taskApi.get("/tasks");
    return data;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});
