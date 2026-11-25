import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import destinationData from "../data/destination";

const destinations = destinationData.map((destination) => ({
  name: destination.name,
  id: destination.id,
  country: destination.country,
}));

function Hero() {
  const [activeTab, setActiveTab] = useState("Stays");
  const [search, setSearch] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const navigate = useNavigate();

  const filtered = useMemo(
    () => destinations.filter((d) => `${d.name} ${d.country}`.toLowerCase().includes(search.trim().toLowerCase())).slice(0, 7),
    [search]
  );

  const submitSearch = () => {
    const match = destinations.find((d) => d.name.toLowerCase() === search.trim().toLowerCase());
    if (activeTab === "Stays" && match) {
      navigate(`/destination/${match.id}`);
      return;
    }
    if (activeTab === "Stays") navigate("/hotels");
  };

  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <div className="hero-badge">✈️ YOUR NEXT ADVENTURE STARTS HERE</div>
        <h1>Find a place you'll <span>love.</span></h1>
        <p className="hero-description">
          Discover stays, destinations and experiences for your next unforgettable trip.
        </p>

        <div className="booking-panel">
          <div className="booking-tabs">
            {["Stays", "Flights", "Packages"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "tab active" : "tab"}
                onClick={() => setActiveTab(tab)}
              >
                <span>{tab === "Stays" ? "▣" : tab === "Flights" ? "✈" : "◈"}</span>
                {tab}
              </button>
            ))}
          </div>

          <div className="search-form">
            <div className="search-field destination-field">
              <span className="field-icon" aria-hidden="true">⌖</span>
              <div>
                <label htmlFor="tripnest-destination-search">Destination</label>
                <input
                  id="tripnest-destination-search"
                  autoComplete="off"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submitSearch()}
                  placeholder="City, country or destination"
                />
              </div>
            </div>

            <div className="search-field">
              <span className="field-icon">◷</span>
              <div>
                <label>Check-in</label>
                <input type="date" value={checkIn} onChange={(e) => { setCheckIn(e.target.value); if (checkOut && e.target.value >= checkOut) setCheckOut(""); }} />
              </div>
            </div>

            <div className="search-field">
              <span className="field-icon">◷</span>
              <div>
                <label>Check-out</label>
                <input type="date" value={checkOut} min={checkIn || undefined} onChange={(e) => setCheckOut(e.target.value)} />
              </div>
            </div>

            <div className="search-field guests-field">
              <span className="field-icon">♙</span>
              <div>
                <label>Guests & rooms</label>
                <div className="guest-control">
                  <div className="guest-counter" aria-label="Number of guests">
                    <button type="button" aria-label="Decrease guests" disabled={guests <= 1} onClick={() => setGuests((g) => Math.max(1, g - 1))}>−</button>
                    <span>{guests} <small>guests</small></span>
                    <button type="button" aria-label="Increase guests" disabled={guests >= 20} onClick={() => setGuests((g) => Math.min(20, g + 1))}>+</button>
                  </div>
                  <span className="guest-divider" aria-hidden="true" />
                  <div className="guest-counter" aria-label="Number of rooms">
                    <button type="button" aria-label="Decrease rooms" disabled={rooms <= 1} onClick={() => setRooms((r) => Math.max(1, r - 1))}>−</button>
                    <span>{rooms} <small>{rooms === 1 ? "room" : "rooms"}</small></span>
                    <button type="button" aria-label="Increase rooms" disabled={rooms >= 10} onClick={() => setRooms((r) => Math.min(10, r + 1))}>+</button>
                  </div>
                </div>
              </div>
            </div>

            <button className="search-button" onClick={submitSearch}>
              <span aria-hidden="true">⌕</span> Search
            </button>
          </div>

          {search.trim() && (
            <div className="search-results">
              {filtered.length ? filtered.map((destination) => (
                <button
                  className="search-result"
                  key={destination.id}
                  onClick={() => {
                    setSearch(destination.name);
                    navigate(`/destination/${destination.id}`);
                  }}
                >
                  <span className="result-icon">⌖</span>
                  <span><strong>{destination.name}</strong><small>{destination.country} · Explore stays & experiences</small></span>
                </button>
              )) : <div className="no-results">No destination found. Try another place.</div>}
            </div>
          )}
        </div>

        <div className="hero-trust">
          <span>✓ Easy booking</span>
          <span>✓ Best-value stays</span>
          <span>✓ Handpicked destinations</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
