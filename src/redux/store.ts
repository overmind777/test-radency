import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './taskSlice.ts';


export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;