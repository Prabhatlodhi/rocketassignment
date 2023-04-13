import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "Slicenamecart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeProduct: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
  },
}
});

export const { additem, removeItem, clearCart,removeProduct } = cartSlice.actions;
export default cartSlice.reducer;