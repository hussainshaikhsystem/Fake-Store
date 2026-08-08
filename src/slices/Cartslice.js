import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "carts",
  initialState: {
    items: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addtocart: (state, action) => {
      const product = action.payload;
      const existingitem = state.items.find((item) => item.id === product.id);
      if (!existingitem) {
        state.items.push({ ...product, quantity: 1 });
        localStorage.setItem("carts", JSON.stringify(state.items));
      } else {
        localStorage.setItem("carts", JSON.stringify(state.items));
        return;
      }
    },
    removefromcart: (state, action) => {
      const productid = action.payload;
      state.items = state.items.filter((item) => item.id !== productid);
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    increasequantity: (state, action) => {
      const productid = action.payload;
      const item = state.items.find((item) => item.id === productid);
      if (item) item.quantity += 1;
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    decreasequantity: (state, action) => {
      const productid = action.payload;
      const item = state.items.find((item) => item.id === productid);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("carts", JSON.stringify(state.items));
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== productid);
        localStorage.setItem("carts", JSON.stringify(state.items));
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
