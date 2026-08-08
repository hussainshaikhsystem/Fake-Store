import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "carts",
  initialState: {
    items: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const product = action.payload;
      const existingitem = state.items.find((item) => item.id === product.id);
      if (existingitem) {
        existingitem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removefromcart: (state, action) => {
      const productid = action.payload;
      state.items = state.items.filter((item) => item.id !== productid);
    },
    increasequantity: (state, action) => {
      const productid = action.payload;
      const item = state.items.find((item) => item.id === productid);
      if (item) item.quantity += 1;
    },
    decreasequantity: (state, action) => {
      const productid = action.payload;
      const item = state.items.find((item) => item.id === productid);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== productid);
      }
    },
    clearcart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addtocart,
  removefromcart,
  increasequantity,
  decreasequantity,
  clearcart,
} = cartslice.actions;

export default cartslice.reducer;