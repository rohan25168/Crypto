import { createSlice } from '@reduxjs/toolkit';
import { sampleData } from './sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleData,
  reducers: {
    updateCrypto: (state, action) => {
      const { id, data } = action.payload;
      const index = state.findIndex((crypto) => crypto.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...data };
      }
    },
  },
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
