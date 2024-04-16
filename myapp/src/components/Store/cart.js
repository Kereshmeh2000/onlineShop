import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState:[],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload); 
    },
    remove: (state, action) => {
      state.filter(product => product.id !== action.payload.id);
    },
  },
});

export const { addCart, remove } = cartSlice.actions;
export default cartSlice.reducer;
