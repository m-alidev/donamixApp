import { createSlice } from '@reduxjs/toolkit';
import { chatHubs, chatMessages, inboxThreads } from '../../data/mockData';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    hubs: chatHubs,
    hubMessages: chatMessages,
    inboxThreads,
  },
  reducers: {
    sendMockMessage: (state, action) => {
      state.hubMessages.push(action.payload);
    },
  },
});

export const { sendMockMessage } = chatSlice.actions;
export default chatSlice.reducer;
