import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// NOTE add item here is action which has a reducer function
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); //NOTE do not return anything from this function
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
