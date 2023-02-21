import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeMode/themeSlice';
import userSlice from './user/userSlice';
import sideBarSlice from './burger/sideBarSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
    sideBar: sideBarSlice,
  },
});
