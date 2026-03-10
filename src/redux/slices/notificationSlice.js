import { createSlice } from '@reduxjs/toolkit';
import { notifications } from '../../data/mockData';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    items: notifications,
  },
  reducers: {
    markAllSeen: state => {
      state.items = state.items.map(item => ({ ...item, seen: true }));
    },
  },
});

export const { markAllSeen } = notificationSlice.actions;
export default notificationSlice.reducer;
