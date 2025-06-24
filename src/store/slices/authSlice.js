import { createSlice } from '@reduxjs/toolkit';
// import jwtDecode from "jwt-decode"

const initialState = {
  accessToken: '',
  isLoggedIn: false,
  user: {
    email: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const accessToken = action.payload.accessToken.replace('Bearer ', '');
      // const decodedToken = jwtDecode(accessToken);
      state.accessToken = accessToken;
      state.isLoggedIn = true;
      state.user = {
        // email: decodedToken.sub || '',
      };
    },
    logout: (state) => {
      state.accessToken = '';
      state.isLoggedIn = false;
      state.user = { ...initialState.user };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
