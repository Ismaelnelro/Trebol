import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { autenticationAction, checkingAuthenticationAction, noAuthenticationAction } from "./authActions";
import { userModels } from "../../../models/authModel";

export interface authInitialState {
  loading: boolean;
  isLoggedIn: boolean;
  user: userModels;
  error: null;
}

export const initialState: authInitialState = {
  isLoggedIn: false,
  loading: false,
  user: {
    name: "",
    username: "",
    email: "",
    avatar: "",
  },
  error: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    Authenticated: (state, action: PayloadAction<userModels>) => autenticationAction(state, action),
    NotAuthenticated: (state) => noAuthenticationAction(state),
    checkingAuthention: (state) => checkingAuthenticationAction(state)
  }
})


export const { Authenticated, NotAuthenticated,checkingAuthention } = authSlice.actions
export default authSlice.reducer