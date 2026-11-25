


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import destinations from "../data/destination";
import { useApp } from "../context/AppContext";

export default function Packages({ fullPage = false }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted } = useApp();

  const packages = destinations.flatMap((d) =>
    (d.packages || []).map((p) => ({
      ...p,
      id: `${d.id}-${p.name}` ,
      destinationId: d.id,
      destination: d.name,
      country: d.country,
      image: d.image,
    }))
  );

  const filtered = packages.filter((p) =>
    (p.name + " " + p.destination)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const visible = fullPage ? filtered : filtered.slice(0, 6);

  const book = (p) => {
    const user = JSON.parse(
      localStorage.getItem("tripnest_current_user") || "null"
    );

    if (!user) {
      navigate("/login", {
        state: { from: "/packages" },
      });
      return;
    }

    const bookings = JSON.parse(
      localStorage.getItem("tripnest_bookings") || "[]"
    );

    bookings.push({
      ...p,
      type: "Package",
      bookingId: `PKG-${Date.now()}`,
      status: "Confirmed",
      user: user.email,
      bookedAt: new Date().toISOString(),
    });

    localStorage.setItem(
      "tripnest_bookings",
      JSON.stringify(bookings)
    );
    window.dispatchEvent(new Event("tripnest-bookings"));

    alert("Package saved to My Bookings!");
  };

  const openPackage = (p) => {
    navigate(
      `/packages/${p.destinationId}/${encodeURIComponent(p.name)}`
    );
  };

  return (
    <section
      className={`packages-section ${fullPage ? "all-packages" : ""}`}
      id="packages"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">TRIPNEST PACKAGES</span>
          <h2>Travel packages</h2>
          <p>Curated itineraries for every kind of traveller.</p>
        </div>

        {!fullPage && (
          <button
            className="text-button"
            onClick={() => navigate("/packages")}
          >
            View all →
          </button>
        )}
      </div>

      {fullPage && (
        <div className="destination-search">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="🔎 Search packages or destinations..."
          />
        </div>
      )}

      <div className="package-grid-modern">
        {visible.map((p, i) => (
          <article
            className="package-modern"
            key={p.destinationId + p.name + i}
          >
            <img src={p.image} alt={p.name} />
            <div className="package-overlay" />

            <div className="package-content">
              <span className="package-icon">✈️</span>

              <h3>{p.name}</h3>

              <p>
                {p.destination} · {p.duration}
              </p>

              <strong>
                {p.price}
                <small> / person</small>
              </strong>

              <div className="package-actions">
                <button
                  className="package-link"
                  onClick={() => openPackage(p)}
                >
                  View Package Details →
                </button>

                <button className="package-save" aria-label="Save package" title={isWishlisted(p.id) ? "Remove from wishlist" : "Save to wishlist"} onClick={() => toggleWishlist(p)}>{isWishlisted(p.id) ? "♥" : "♡"}</button>
                <button className="package-save" title="Add to trip cart" onClick={() => { addToCart(p); }}>＋ Cart</button>
                <button
                  className="package-book"
                  onClick={() => book(p)}
                >
                  Book
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {fullPage && filtered.length === 0 && (
        <div className="no-results">
          No packages found. Try another destination or package name.
        </div>
      )}
    </section>
  );
}
