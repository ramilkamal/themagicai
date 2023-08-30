import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLoading: boolean;
  isAuthenticated: boolean;
  access: string | null;
  refresh: string | null;
  info: {
    name: string | null;
    email: string | null;
    password: string | null;
  };
}

const initialState: UserState = {
  isLoading: true,
  isAuthenticated: false,
  access: null,
  refresh: null,
  info: {
    name: null,
    email: null,
    password: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state: UserState) => {
      state.isLoading = true;
    },
    loginSuccess: (state: UserState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
    },
    loginFailed: (state: UserState) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
    signUpRequest: (state: UserState) => {
      state.isLoading = true;
    },
    signUpSuccess: (state: UserState) => {
      state.isLoading = false;
    },
    signUpFailed: (state: UserState) => {
      state.isLoading = false;
    },
    signOut: (state: UserState) => {
      state.isAuthenticated = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
