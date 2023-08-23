import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './feature/profile/profileSlice'
import authReducer from './feature/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;