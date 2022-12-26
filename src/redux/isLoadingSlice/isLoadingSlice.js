import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
};

export const isLoadingReducer = createSlice({
  name: 'isLoading',
  initialState,
  redusers: {
    isLoading: state => {
      state.isLoading = false;
    },
  },
});

export const {isLoading} = isLoadingReducer.actions;

export default isLoadingReducer.reducer