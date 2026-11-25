import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
export default function Wishlist() {
 const { wishlist, toggleWishlist } = useApp();
 return <section className="feature-page"><div className="feature-hero"><span className="eyebrow">SAVED FOR LATER</span><h1>Your wishlist</h1><p>Keep your favourite travel ideas close at hand.</p></div>
 {wishlist.length ? <div className="wishlist-grid">{wishlist.map(item => <article className="wishlist-card" key={item.id}><img src={item.image} alt={item.name}/><div><h3>{item.name}</h3><p>{item.destination || item.country || "Saved travel idea"}</p><div className="wishlist-actions"><Link to={item.type === "Destination" ? `/destination/${item.id}` : item.type === "Hotel" ? "/hotels" : item.destinationId ? `/packages/${item.destinationId}/${encodeURIComponent(item.name)}` : "/destinations"}>Explore</Link><button onClick={() => toggleWishlist(item)}>Remove ♡</button></div></div></article>)}</div> : <div className="feature-empty"><span>♡</span><h2>Your wishlist is empty</h2><p>Save a destination or package and it will appear here.</p><Link className="primary-action" to="/destinations">Explore destinations</Link></div>}</section>;
}
