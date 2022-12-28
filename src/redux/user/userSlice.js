import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {
    setUser(state, actions) {
      state.email = actions.payload.email;
      state.token = actions.payload.token;
      state.id = actions.payload.id;
    },

    removeUer(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const {setUser, removeUer}= userSlice.actions;

export default userSlice.reducer;
