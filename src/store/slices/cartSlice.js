import { createSlice } from "@reduxjs/toolkit";

const readCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem("tripnest_cart") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: readCart(),
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      if (!state.some((saved) => String(saved.id) === String(item.id))) {
        state.push(item);
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => String(item.id) !== String(action.payload));
    },
    clearCart() {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
