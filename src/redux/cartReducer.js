import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, desc, price, img, count } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.count += count;
      } else {
        state.products.push({ id, title, desc, price, img, count });
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
    updateItem: (state, action) => {
      const { productId, count } = action.payload;
      const product = state.products.find((product) => product.id === productId);
      if (product) {
        product.count = count;
      }
    },
  },
});

export const { addToCart, removeItem, resetCart, updateItem } = cartSlice.actions;

export default cartSlice.reducer;
