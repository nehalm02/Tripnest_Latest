import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import bookingsReducer from "./slices/bookingsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    bookings: bookingsReducer,
  },
});

// Keep the demo cart and bookings available after a browser refresh.
let previousCart = JSON.stringify(store.getState().cart);
let previousBookings = JSON.stringify(store.getState().bookings.items);
store.subscribe(() => {
  const state = store.getState();
  const cart = JSON.stringify(state.cart);
  const bookings = JSON.stringify(state.bookings.items);
  try {
    if (cart !== previousCart) {
      localStorage.setItem("tripnest_cart", cart);
      previousCart = cart;
    }
    if (bookings !== previousBookings) {
      localStorage.setItem("tripnest_bookings", bookings);
      previousBookings = bookings;
      window.dispatchEvent(new Event("tripnest-bookings"));
    }
  } catch {
    // The app still works for the current session if browser storage is unavailable.
  }
});
