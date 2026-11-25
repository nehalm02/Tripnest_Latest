import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { cancelBooking, loadBookings } from "../store/slices/bookingsSlice";

export default function MyTrips() {
  const { user } = useApp();
  const dispatch = useDispatch();
  const { items: bookings, status, error } = useSelector((state) => state.bookings);
  const [filter, setFilter] = useState("All");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    dispatch(loadBookings());
    const refresh = () => dispatch(loadBookings());
    window.addEventListener("tripnest-bookings", refresh);
    window.addEventListener("storage", refresh);
    return () => { window.removeEventListener("tripnest-bookings", refresh); window.removeEventListener("storage", refresh); };
  }, [dispatch]);

  const mine = useMemo(() => bookings.filter(b => {
    // Only completed booking records belong in My Trips; cart/wishlist ideas are not bookings.
    const isRealBooking = Boolean(b.bookingId || b.id) && Boolean(b.bookedAt);
    const belongsToUser = Boolean(user?.email) && b.user === user.email;
    return isRealBooking && belongsToUser;
  }), [bookings, user]);
  const filtered = mine.filter(b => filter === "All" || (filter === "Confirmed"
    ? !String(b.status || "Confirmed").toLowerCase().includes("cancelled")
    : String(b.status || "Confirmed").toLowerCase().includes("cancelled")));
  const cancel = booking => {
    const bookingId = booking.bookingId || booking.id;
    dispatch(cancelBooking(bookingId));
    try {
      const saved = JSON.parse(localStorage.getItem("tripnest_bookings") || "[]");
      localStorage.setItem("tripnest_bookings", JSON.stringify(saved.map(item =>
        (item.bookingId || item.id) === bookingId ? { ...item, status: "Cancelled", cancelledAt: new Date().toISOString() } : item
      )));
    } catch { /* Keep the page usable if local storage is unavailable. */ }
    setNotice(`Booking ${bookingId || ""} cancelled.`);
  };
  const activeCount = mine.filter(b => !String(b.status || "Confirmed").toLowerCase().includes("cancelled")).length;

  return <section className="feature-page">
    <div className="feature-hero"><span className="eyebrow">YOUR TRAVEL SPACE</span><h1>My Trips</h1><p>Only trips you have actually booked appear here. Wishlist and cart ideas are not bookings.</p></div>
    <div className="dashboard-stats"><div><span>Total bookings</span><strong>{mine.length}</strong></div><div><span>Active bookings</span><strong>{activeCount}</strong></div><div><span>Cancelled</span><strong>{mine.filter(b => b.status === "Cancelled").length}</strong></div></div>
    {notice && <div className="feature-notice">✓ {notice}</div>}
    {status === "loading" ? <div className="feature-empty"><span>⏳</span><h2>Loading your trips...</h2><p>Please wait while we get your booking details.</p></div> : status === "failed" ? <div className="feature-empty"><span>⚠️</span><h2>Unable to load trips</h2><p>{error || "We couldn't load your bookings. Please try again."}</p><button className="primary-action" onClick={() => dispatch(loadBookings())}>Try again</button></div> : <>
    <div className="feature-toolbar"><h2>Your bookings</h2><select value={filter} onChange={e => setFilter(e.target.value)} aria-label="Filter bookings"><option>All</option><option>Confirmed</option><option>Cancelled</option></select></div>
    {filtered.length ? <div className="booking-list">{filtered.map((b, i) => <article className="booking-item" key={b.bookingId || b.id || `${b.name}-${i}`}><div className="booking-symbol">{b.type === "Hotel" ? "🏨" : "✈️"}</div><div className="booking-main"><div className="booking-title-row"><h3>{b.name || b.destination || b.hotelName || "Trip booking"}</h3><span className={`status-pill ${(b.status || "Confirmed").toLowerCase()}`}>{b.status || "Confirmed"}</span></div><p>{b.destination ? `${b.destination} · ` : ""}{b.duration || b.type || "Travel booking"}</p><small>Booking ID: {b.bookingId || b.id || `TRIP-${String(i + 1).padStart(4, "0")}`}</small>{b.bookedAt && <small>Booked on {new Date(b.bookedAt).toLocaleDateString()}</small>}</div><div className="booking-end"><strong>{typeof b.price === "number" ? `₹${b.price.toLocaleString("en-IN")}` : (b.price || "Price not listed")}</strong>{(b.status || "Confirmed") !== "Cancelled" && <button className="danger-button" onClick={() => cancel(b)}>Cancel booking</button>}</div></article>)}</div> : <div className="feature-empty"><span>🧳</span><h2>No bookings here yet</h2><p>Your next adventure is waiting. Explore destinations and travel packages to get started.</p><Link className="primary-action" to="/packages">Explore packages</Link></div>}
    </>}
  </section>;
}
