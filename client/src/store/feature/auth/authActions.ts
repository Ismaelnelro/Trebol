import { PayloadAction } from "@reduxjs/toolkit"
import { authInitialState, initialState } from "./authSlice"
import { userModels } from "../../../models/authModel"


function autenticationAction(state: authInitialState, { payload }: PayloadAction<userModels>) {
    // state.loading = false
    // state.isLoggedIn = true;
    // state.user = payload;
}

function noAuthenticationAction(state: authInitialState) {
  // state.user = initialState.user;
  // state.isLoggedIn = false;
}

function checkingAuthenticationAction(state: authInitialState) {
  // state.loading = true
}

export {
  autenticationAction,
  noAuthenticationAction,
  checkingAuthenticationAction
}