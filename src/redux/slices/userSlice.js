import { createSlice } from '@reduxjs/toolkit';
import { suggestedMembers, user } from '../../data/mockData';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: user,
    suggestedMembers,
  },
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;
