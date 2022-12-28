import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeMode/themeSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
  },
});
