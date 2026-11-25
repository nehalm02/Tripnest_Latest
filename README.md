# TripNest — React Travel & Hotel Booking SPA

TripNest is a Vite + React JavaScript single-page application for exploring destinations, hotels, and travel packages. It demonstrates React Router, Context API, Redux Toolkit, local/global state, and asynchronous loading/error states.

## Run locally

1. Install Node.js (LTS).
2. Extract this project and open the `tripnest_work` folder in VS Code.
3. Open Terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (normally `http://localhost:5173`).

Run `npm install` rather than `npm ci` the first time so npm can refresh the lockfile with the Redux dependencies.

## Features

- React Router multi-page SPA navigation and a catch-all 404 page.
- Existing TripNest home page, destination and hotel browsing, package details, authentication demo, and trip planner.
- Context API for current user, theme, and wishlist.
- Redux Toolkit for shared package-cart state and booking state.
- Redux slices for cart actions (`addToCart`, `removeFromCart`, `clearCart`) and booking actions (`addBookings`, `cancelBooking`).
- Redux Toolkit `createAsyncThunk` for loading bookings with loading, success, and error states.
- Local component state for search/filter inputs and form controls.
- Cart and bookings persisted in `localStorage` for the demo.
- My Trips dashboard with booking totals, status filtering, and cancellation.
- Cart checkout creates demo bookings that appear in My Trips.
- Responsive styles and light/dark theme.

## Syllabus mapping

- **Navigation layout / multi-page SPA:** `src/App.jsx` and React Router routes.
- **Context API:** `src/context/AppContext.jsx`.
- **Global vs local state:** Context manages user/theme/wishlist; Redux manages cart/bookings; component `useState` manages temporary form and filter values.
- **Redux Toolkit:** `src/store/store.js` and `src/store/slices/`.
- **Async state and error handling:** `loadBookings` in `src/store/slices/bookingsSlice.js` and the My Trips page.
- **Mini-project dashboard:** `src/pages/MyTrips.jsx`.
- **Mini-project shopping cart:** `src/pages/CartPage.jsx` and package actions in `src/components/Packages.jsx`.

## Important demo note

This is a front-end educational project. It does not use a backend or real payment provider. Do not use real passwords or payment information. The asynchronous booking load simulates a short delay and reads browser storage; replace it with an API request when a backend is added. Production authentication, authorization, booking persistence, and password security must be implemented securely on a backend.

## Latest category-based enhancements
- Six travel inspiration categories now each include six experience cards, with descriptions, photos, prices, wishlist actions and add-to-trip actions.
- Added Amritsar, Munnar, Kyoto and Queenstown with places, food, shopping, activities, hotels and package itineraries.
- Destination pages include richer descriptions and a traveller reviews/comments section stored in local browser storage.
- My Trips is intended to show only booking records with a booking date for the signed-in user's email; cart and wishlist ideas are not bookings.
- Guest and room counts can be adjusted separately, with accessible plus/minus controls and sensible limits.
- Dark theme styling has been extended to the navigation, category inspiration cards, review forms, destination content and guest/room picker.

Prices and sample reviews/content in this student project are illustrative; no live booking provider or backend is connected.
