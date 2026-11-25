import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { useDispatch } from "react-redux";
import { addBookings } from "../store/slices/bookingsSlice";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, user } = useApp();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const priceOf = item => { const match = String(item.price ?? "").replace(/,/g, "").match(/[0-9]+(?:\.[0-9]+)?/); return match ? Number(match[0]) : 0; };
  const total = cart.reduce((sum, item) => sum + priceOf(item), 0);

  const checkout = () => {
    if (!user) { navigate("/login", { state: { from: "/cart" } }); return; }
    const newBookings = cart.map(item => ({
      ...item,
      type: "Package",
      bookingId: `PKG-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      status: "Confirmed",
      user: user.email,
      bookedAt: new Date().toISOString(),
    }));
    dispatch(addBookings(newBookings));
    clearCart();
    navigate("/my-trips", { state: { booked: true } });
  };

  return <section className="feature-page"><div className="feature-hero"><span className="eyebrow">YOUR SHORTLIST</span><h1>Trip cart</h1><p>Collect the packages you love and book them when you are ready.</p></div>
  {!cart.length ? <div className="feature-empty"><span>🧭</span><h2>Your cart is waiting for an adventure</h2><p>Add travel packages to compare your plans here.</p><Link className="primary-action" to="/packages">Explore packages</Link></div> : <div className="cart-layout"><div className="cart-items">{cart.map(item => <article className="cart-item" key={item.id}><img src={item.image} alt={item.name} /><div className="cart-item-info"><h3>{item.name}</h3><p>{item.destination || item.country || "Travel package"} · {item.duration || "Flexible duration"}</p><strong>{item.price || "Price on request"}</strong><button className="plain-danger" onClick={() => removeFromCart(item.id)}>Remove</button></div></article>)}</div><aside className="cart-summary"><h2>Trip summary</h2><div><span>Packages</span><strong>{cart.length}</strong></div><div><span>Estimated total</span><strong>{total ? `₹${total.toLocaleString("en-IN")}` : "See package prices"}</strong></div><p>Prices are illustrative for this demo. Final booking details can be reviewed in My Trips.</p><button className="primary-action full-width" onClick={checkout}>Proceed to booking</button><button className="text-button" onClick={clearCart}>Clear cart</button></aside></div>}</section>;
}
