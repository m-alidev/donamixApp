import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import chatReducer from './slices/chatSlice';
import walletReducer from './slices/walletSlice';
import themeReducer from './slices/themeSlice';
import notificationReducer from './slices/notificationSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    wallet: walletReducer,
    theme: themeReducer,
    notifications: notificationReducer,
  },
});

export default store;
