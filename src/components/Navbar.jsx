import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout, theme, toggleTheme, cart, wishlist } = useApp();
  const location = useLocation(), navigate = useNavigate();
  const close = () => setMenuOpen(false);
  const active = path => location.pathname === path ? "active" : "";
  const signOut = () => { logout(); close(); navigate("/"); };
  return <header className="navbar">
    <Link to="/" className="logo" onClick={close}><span className="logo-mark">✦</span> TripNest</Link>
    <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
      <Link className={active("/")} to="/" onClick={close}>Home</Link>
      <Link className={active("/hotels")} to="/hotels" onClick={close}>Stays</Link>
      <Link className={location.pathname.startsWith("/destinations") || location.pathname.startsWith("/destination/") ? "active" : ""} to="/destinations" onClick={close}>Destinations</Link>
      <Link className={active("/packages")} to="/packages" onClick={close}>Packages</Link>
      <Link className={active("/trip-planner")} to="/trip-planner" onClick={close}>Trip Planner</Link>
      <Link className={active("/my-trips")} to="/my-trips" onClick={close}>My Trips</Link>
    </nav>
    <div className="nav-actions">
      <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">{theme === "dark" ? "☀️" : "🌙"}</button>
      <Link className="saved-nav" to="/wishlist" aria-label="Wishlist" title="Wishlist">♡<sup>{wishlist.length || ""}</sup></Link>
      <Link className="saved-nav cart-nav" to="/cart" aria-label="Trip cart" title="Trip cart">🧳<sup>{cart.length || ""}</sup></Link>
      {user ? <div className="user-menu"><span className="welcome">Hi, {user.name}</span><button className="login-btn" onClick={signOut}>Logout</button></div> : <><Link className="login-btn" to="/login" onClick={close}>Login</Link><Link className="signup-btn" to="/signup" onClick={close}>Sign up</Link></>}
      <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">{menuOpen ? "✕" : "☰"}</button>
    </div>
  </header>;
}
