
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function getLocalDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;

  const start = new Date(`${checkIn}T00:00:00Z`);
  const end = new Date(`${checkOut}T00:00:00Z`);

  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}

function HotelBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  const hotel = location.state?.hotel;
  const today = getLocalDate();

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState("");

  if (!hotel) {
    return (
      <section className="hotel-booking-page">
        <div className="booking-message">
          <h2>No hotel selected</h2>
          <p>Please return to the Hotels page and choose a hotel first.</p>
          <button
            className="deal-button"
            onClick={() => navigate("/hotels")}
          >
            Browse hotels
          </button>
        </div>
      </section>
    );
  }

  const nights = calculateNights(checkIn, checkOut);
  const total = hotel.price * nights * rooms;

  function handleBooking(event) {
    event.preventDefault();
    setError("");

    if (checkIn < today) {
      setError("Check-in cannot be in the past.");
      return;
    }

    if (nights <= 0) {
      setError("Check-out must be after check-in.");
      return;
    }

    const booking = {
      id: `HOTEL-${Date.now()}`,
      bookingId: `HOTEL-${Date.now()}`,
      type: "Hotel",
      user: JSON.parse(localStorage.getItem("tripnest_current_user") || "null")?.email,
      hotelName: hotel.name,
      city: hotel.city,
      image: hotel.image,
      pricePerNight: hotel.price,
      checkIn,
      checkOut,
      nights,
      adults,
      rooms,
      totalPrice: total,
      status: "Confirmed (Demo)",
      bookedAt: new Date().toISOString(),
    };

    try {
      const savedBookings = JSON.parse(
        localStorage.getItem("tripnest_bookings") || "[]"
      );

      if (!Array.isArray(savedBookings)) {
        throw new Error("Saved bookings are not in the expected format.");
      }

      savedBookings.push(booking);

      localStorage.setItem(
        "tripnest_bookings",
        JSON.stringify(savedBookings)
      );

      window.dispatchEvent(new Event("tripnest-bookings"));
      setConfirmation(booking);
    } catch (err) {
      setError(
        "Could not save your booking. Please check your browser storage and try again."
      );
    }
  }

  if (confirmation) {
    return (
      <section className="hotel-booking-page">
        <div className="booking-message">
          <div className="booking-success-icon">✓</div>
          <h1>Booking Confirmed!</h1>
          <p>Your TripNest demo hotel booking has been saved.</p>

          <div className="booking-confirmation-details">
            <h2>{confirmation.hotelName}</h2>
            <p>📍 {confirmation.city}</p>
            <p>Booking ID: {confirmation.id}</p>
            <p>Check-in: {confirmation.checkIn}</p>
            <p>Check-out: {confirmation.checkOut}</p>
            <p>Duration: {confirmation.nights} nights</p>
            <p>Guests: {confirmation.adults} adults</p>
            <p>Rooms: {confirmation.rooms}</p>
            <h3>
              Total: ₹{confirmation.totalPrice.toLocaleString("en-IN")}
            </h3>
            <p className="booking-demo-note">
              This is a demo booking. No payment or real hotel reservation
              has been made.
            </p>
          </div>

          <button
            className="deal-button"
            onClick={() => navigate("/hotels")}
          >
            Explore more hotels
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="hotel-booking-page">
      <div className="hotel-booking-container">
        <div className="booking-heading">
          <span className="eyebrow">YOUR STAY, YOUR WAY</span>
          <h1>Complete Your Hotel Booking</h1>
          <p>Choose your dates and review your stay details.</p>
        </div>

        <div className="hotel-booking-layout">
          <div className="booking-form-card">
            <h2>Your Stay Details</h2>

            <form onSubmit={handleBooking}>
              <div className="booking-date-grid">
                <div className="booking-field">
                  <label htmlFor="check-in">Check-in</label>
                  <input
                    id="check-in"
                    type="date"
                    min={today}
                    value={checkIn}
                    onChange={(event) => {
                      setCheckIn(event.target.value);
                      if (
                        checkOut &&
                        event.target.value >= checkOut
                      ) {
                        setCheckOut("");
                      }
                    }}
                    required
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="check-out">Check-out</label>
                  <input
                    id="check-out"
                    type="date"
                    min={checkIn || today}
                    value={checkOut}
                    onChange={(event) => setCheckOut(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="booking-date-grid">
                <div className="booking-field">
                  <label htmlFor="adults">Adults</label>
                  <select
                    id="adults"
                    value={adults}
                    onChange={(event) => setAdults(Number(event.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                      <option key={number} value={number}>
                        {number} {number === 1 ? "adult" : "adults"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="booking-field">
                  <label htmlFor="rooms">Rooms</label>
                  <select
                    id="rooms"
                    value={rooms}
                    onChange={(event) => setRooms(Number(event.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map((number) => (
                      <option key={number} value={number}>
                        {number} {number === 1 ? "room" : "rooms"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {error && (
                <p className="booking-error" role="alert">
                  {error}
                </p>
              )}

              <button className="deal-button booking-submit" type="submit">
                Confirm Demo Booking
              </button>

              <p className="booking-demo-note">
                No payment is required. This booking is stored in your browser
                for demonstration purposes.
              </p>
            </form>
          </div>

          <aside className="booking-hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <div className="booking-hotel-content">
              <span className="eyebrow">YOUR SELECTED HOTEL</span>
              <h2>{hotel.name}</h2>
              <p>📍 {hotel.city}</p>
              <p>⭐ {Number(hotel.rating).toFixed(1)} rating</p>

              <div className="booking-price-row">
                <span>Price per night</span>
                <strong>
                  ₹{hotel.price.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="booking-price-row">
                <span>Number of nights</span>
                <strong>{nights}</strong>
              </div>

              <div className="booking-price-row">
                <span>Rooms</span>
                <strong>{rooms}</strong>
              </div>

              <div className="booking-total-row">
                <span>Total price</span>
                <strong>
                  ₹{total.toLocaleString("en-IN")}
                </strong>
              </div>

              <p className="booking-demo-note">
                Estimated total = nightly price × nights × rooms.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default HotelBooking;
