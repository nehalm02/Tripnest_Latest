import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const readBookings = () => {
  try {
    const saved = JSON.parse(localStorage.getItem("tripnest_bookings") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
};

// Async demo thunk: replace the localStorage read with a fetch() request when a backend exists.
export const loadBookings = createAsyncThunk("bookings/loadBookings", async () => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const saved = JSON.parse(localStorage.getItem("tripnest_bookings") || "[]");
  if (!Array.isArray(saved)) throw new Error("Booking data has an unexpected format.");
  return saved;
});

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: { items: readBookings(), status: "idle", error: null },
  reducers: {
    addBookings(state, action) {
      state.items.push(...action.payload);
      state.error = null;
    },
    cancelBooking(state, action) {
      const booking = state.items.find((item) => item.bookingId === action.payload);
      if (booking && booking.status !== "Cancelled") {
        booking.status = "Cancelled";
        booking.cancelledAt = new Date().toISOString();
      }
    },
    syncBookings(state, action) {
      state.items = Array.isArray(action.payload) ? action.payload : [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBookings.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadBookings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(loadBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "We couldn't load your bookings.";
      });
  },
});

export const { addBookings, cancelBooking, syncBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;
