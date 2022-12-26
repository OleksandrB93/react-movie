import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import  isLoadingReducer from './isLoadingSlice/isLoadingSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    isLoading: isLoadingReducer,
  },
});
