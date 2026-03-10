import { createSlice } from '@reduxjs/toolkit';
import { wallet } from '../../data/mockData';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: wallet,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { setBalance } = walletSlice.actions;
export default walletSlice.reducer;
