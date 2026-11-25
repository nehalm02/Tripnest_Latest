import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Destinations from "./components/Destinations";
import Hotels from "./components/Hotels";
import HotelsPage from "./components/HotelsPage";
import DestinationDetails from "./components/DestinationDetails";
import Packages from "./components/Packages";
// new import
import PackageDetails from "./components/PackageDetails";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import HotelBooking from "./components/HotelBooking";
import TripPlanner from "./components/TripPlanner";
import { AppProvider } from "./context/AppContext";
import MyTrips from "./pages/MyTrips";
import CartPage from "./pages/CartPage";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

function Home() {
  return <><Navbar /><main><Hero /><Categories /><Destinations /><Hotels limit={6} /><Packages /></main><Footer /></>;
}
function Page({ children }) { return <><Navbar /><main>{children}</main><Footer /></>; }

export default function App() {
  return <AppProvider><BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-trips" element={<Page><MyTrips /></Page>} />
      <Route path="/cart" element={<Page><CartPage /></Page>} />
      <Route path="/wishlist" element={<Page><Wishlist /></Page>} />
      <Route path="/hotels" element={<Page><HotelsPage /></Page>} />
      <Route path="/destinations" element={<Page><Destinations fullPage /></Page>} />
      <Route path="/packages" element={<Page><Packages fullPage /></Page>} />
      <Route
          path="/trip-planner" element={
      <Page>
        <TripPlanner />
      </Page>
  }
/>
      <Route
      path="/packages/:destinationId/:packageName"
      element={<Page><PackageDetails /></Page>}
      />
      <Route path="/destination/:id" element={<Page><DestinationDetails /></Page>} />
      <Route path="/login" element={<Page><Auth mode="login" /></Page>} />
      <Route path="/signup" element={<Page><Auth mode="signup" /></Page>} />
      <Route
            path="/hotel-booking" element={
      <Page>
            <HotelBooking />
    </Page>
  }
/>
      <Route path="*" element={<Page><NotFound /></Page>} />
    </Routes>
  </BrowserRouter></AppProvider>;
}