import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSideBar: false,
};

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.isSideBar = !state.isSideBar;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
