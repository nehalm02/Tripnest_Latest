import { useState } from "react";

const hotels = [
  {
    name: "Hotel Gold The Prime",
    city: "New Delhi",
    price: 2340,
    rating: 8.5,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Radisson Jaipur City Center",
    city: "Jaipur",
    price: 4680,
    rating: 8.5,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Goa Paradise Resort",
    city: "Goa",
    price: 5500,
    rating: 8.7,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kerala Backwater Resort",
    city: "Kerala",
    price: 6200,
    rating: 8.8,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bali Beach Resort",
    city: "Bali",
    price: 8500,
    rating: 9.0,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tokyo Grand",
    city: "Tokyo",
    price: 9800,
    rating: 8.7,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
  },
];

const activitiesList = [
  { name: "Beach Visit", price: 500 },
  { name: "Sightseeing", price: 800 },
  { name: "Adventure Activities", price: 1500 },
  { name: "Local Food Tour", price: 700 },
  { name: "Shopping", price: 500 },
];

function getToday() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
}

function addOneDay(dateString) {
  const date = new Date(`${dateString}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

function getNights(start, end) {
  if (!start || !end) return 0;

  const startDate = new Date(`${start}T00:00:00Z`);
  const endDate = new Date(`${end}T00:00:00Z`);

  const difference = endDate - startDate;

  if (!Number.isFinite(difference) || difference <= 0) {
    return 0;
  }

  return difference / (1000 * 60 * 60 * 24);
}

function TripPlanner() {
  const today = getToday();

  const [destination, setDestination] = useState("Goa");
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(() => addOneDay(today));
  const [travellers, setTravellers] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [budget, setBudget] = useState(20000);
  const [selectedHotel, setSelectedHotel] = useState(
    "Goa Paradise Resort"
  );
  const [activities, setActivities] = useState(["Beach Visit"]);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  // Match hotels to the destination, ignoring capitalization.
  const matchingHotels = hotels.filter(
    (item) =>
      item.city.trim().toLowerCase() ===
      destination.trim().toLowerCase()
  );

  // Get the selected hotel only if it belongs to this destination.
  const hotel = matchingHotels.find(
    (item) => item.name === selectedHotel
  );

  // Calculate the number of nights.
  const nights = getNights(checkIn, checkOut);

  // Calculate hotel cost.
  const hotelCost =
    hotel && nights > 0
      ? Number(hotel.price) * nights * Number(rooms)
      : 0;

  // Calculate activities cost.
  const activityCost = activities.reduce((sum, activityName) => {
    const activity = activitiesList.find(
      (item) => item.name === activityName
    );

    return (
      sum + (activity ? activity.price * Number(travellers) : 0)
    );
  }, 0);

  const total = hotelCost + activityCost;

  function changeDestination(newDestination) {
    setDestination(newDestination);

    const firstHotel = hotels.find(
      (item) =>
        item.city.trim().toLowerCase() ===
        newDestination.trim().toLowerCase()
    );

    setSelectedHotel(firstHotel ? firstHotel.name : "");
    setError("");
  }

  function toggleActivity(activityName) {
    setActivities((current) =>
      current.includes(activityName)
        ? current.filter((name) => name !== activityName)
        : [...current, activityName]
    );
  }

  function bookTrip(event) {
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

    if (!hotel) {
      setError("Please select a hotel for your destination.");
      return;
    }

    if (Number(budget) <= 0 || total > Number(budget)) {
      setError(
        "Your trip exceeds your budget. Increase your budget or choose a less expensive trip."
      );
      return;
    }

    const booking = {
      id: `TRIP-${Date.now()}`,
      bookingId: `TRIP-${Date.now()}`,
      type: "Personalized Trip",
      user: JSON.parse(localStorage.getItem("tripnest_current_user") || "null")?.email,
      destination,
      hotelName: hotel.name,
      city: hotel.city,
      image: hotel.image,
      pricePerNight: hotel.price,
      checkIn,
      checkOut,
      nights,
      adults: travellers,
      rooms,
      activities,
      hotelCost,
      activityCost,
      totalPrice: total,
      status: "Confirmed (Demo)",
      bookedAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem("tripnest_bookings") || "[]"
      );

      if (!Array.isArray(existing)) {
        throw new Error("Invalid bookings data");
      }

      localStorage.setItem(
        "tripnest_bookings",
        JSON.stringify([...existing, booking])
      );

      window.dispatchEvent(new Event("tripnest-bookings"));
      setConfirmation(booking);
    } catch {
      setError("Could not save your booking. Please try again.");
    }
  }

  if (confirmation) {
    return (
      <section className="trip-planner-page">
        <div className="trip-planner-container">
          <div className="planner-card">
            <div className="booking-success-icon">✓</div>

            <h1>Your Personalized Trip Is Booked!</h1>
            <p>Your demo booking has been saved successfully.</p>

            <img
              src={confirmation.image}
              alt={confirmation.hotelName}
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "220px",
                objectFit: "cover",
                borderRadius: "14px",
              }}
            />

            <h2>{confirmation.destination} Trip</h2>

            <p>
              <strong>Booking ID:</strong> {confirmation.id}
            </p>
            <p>
              <strong>Hotel:</strong> {confirmation.hotelName}
            </p>
            <p>
              <strong>Check-in:</strong> {confirmation.checkIn}
            </p>
            <p>
              <strong>Check-out:</strong> {confirmation.checkOut}
            </p>
            <p>
              <strong>Nights:</strong> {confirmation.nights}
            </p>
            <p>
              <strong>Travellers:</strong> {confirmation.adults}
            </p>
            <p>
              <strong>Rooms:</strong> {confirmation.rooms}
            </p>
            <p>
              <strong>Activities:</strong>{" "}
              {confirmation.activities.length
                ? confirmation.activities.join(", ")
                : "None selected"}
            </p>

            <div className="planner-budget-summary">
              <span>Total trip cost</span>
              <strong>
                ₹{confirmation.totalPrice.toLocaleString("en-IN")}
              </strong>
            </div>

            <p className="planner-note">
              Demo booking only. No real hotel reservation or payment
              has been made.
            </p>

            <button
              type="button"
              className="planner-save-button"
              onClick={() => {
                window.location.href = "/hotels";
              }}
            >
              Explore More Hotels
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="trip-planner-page">
      <div className="trip-planner-container">
        <div className="trip-planner-heading">
          <span className="eyebrow">YOUR TRIP, YOUR CHOICE</span>
          <h1>Build Your Personalized Trip ✈️</h1>
          <p>
            Choose your destination, hotel and activities, then book
            your customized trip in one place.
          </p>
        </div>

        <form className="planner-card" onSubmit={bookTrip}>
          <h2>1. Your Travel Details</h2>

          <div className="planner-grid">
            <div className="planner-field">
              <label htmlFor="destination">
                Where do you want to go?
              </label>

              <input
                id="destination"
                type="text"
                placeholder="Search a supported destination..."
                value={destination}
                onChange={(event) =>
                  changeDestination(event.target.value)
                }
                list="destination-suggestions"
                required
              />

              <datalist id="destination-suggestions">
                {[
                  "Goa",
                  "New Delhi",
                  "Jaipur",
                  "Kerala",
                  "Bali",
                  "Tokyo",
                  "Manali",
                  "Mumbai",
                  "London",
                  "Paris",
                  "Singapore",
                  "Dubai",
                  "Maldives",
                  "New York",
                  "Bangkok",
                ].map((place) => (
                  <option key={place} value={place} />
                ))}
              </datalist>
            </div>

            <div className="planner-field">
              <label htmlFor="budget">Your Budget (₹)</label>
              <input
                id="budget"
                type="number"
                min="1"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                required
              />
            </div>

            <div className="planner-field">
              <label htmlFor="checkin">Check-in</label>
              <input
                id="checkin"
                type="date"
                min={today}
                value={checkIn}
                onChange={(event) => {
                  const newCheckIn = event.target.value;
                  setCheckIn(newCheckIn);

                  if (!checkOut || newCheckIn >= checkOut) {
                    setCheckOut(addOneDay(newCheckIn));
                  }
                }}
                required
              />
            </div>

            <div className="planner-field">
              <label htmlFor="checkout">Check-out</label>
              <input
                id="checkout"
                type="date"
                min={checkIn ? addOneDay(checkIn) : addOneDay(today)}
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                required
              />
            </div>

            <div className="planner-field">
              <label htmlFor="travellers">Travellers</label>
              <select
                id="travellers"
                value={travellers}
                onChange={(event) =>
                  setTravellers(Number(event.target.value))
                }
              >
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <option key={number} value={number}>
                    {number} {number === 1 ? "person" : "people"}
                  </option>
                ))}
              </select>
            </div>

            <div className="planner-field">
              <label htmlFor="rooms">Rooms</label>
              <select
                id="rooms"
                value={rooms}
                onChange={(event) =>
                  setRooms(Number(event.target.value))
                }
              >
                {[1, 2, 3, 4, 5].map((number) => (
                  <option key={number} value={number}>
                    {number} {number === 1 ? "room" : "rooms"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <h2>2. Choose Your Hotel</h2>

          <div className="planner-grid">
            {matchingHotels.length === 0 ? (
              <p className="planner-message">
                No sample hotels are available for this destination yet.
                Choose Goa, New Delhi, Jaipur, Kerala, Bali, or Tokyo.
              </p>
            ) : (
              matchingHotels.map((item) => (
                <label
                  key={item.name}
                  className="planner-hotel-option"
                  style={{
                    border:
                      selectedHotel === item.name
                        ? "2px solid #ff6b35"
                        : "1px solid #e7e9f0",
                    borderRadius: "12px",
                    padding: "12px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <p>
                    <input
                      type="radio"
                      name="hotel"
                      checked={selectedHotel === item.name}
                      onChange={() => setSelectedHotel(item.name)}
                    />{" "}
                    <strong>{item.name}</strong>
                  </p>

                  <p>⭐ {item.rating} rating</p>
                  <p>
                    ₹{item.price.toLocaleString("en-IN")} per night
                  </p>
                </label>
              ))
            )}
          </div>

          <h2>3. Choose Activities</h2>

          <div className="planner-grid">
            {activitiesList.map((item) => (
              <label
                key={item.name}
                className="planner-activity-item"
              >
                <input
                  type="checkbox"
                  checked={activities.includes(item.name)}
                  onChange={() => toggleActivity(item.name)}
                />

                <div>
                  <strong>{item.name}</strong>
                  <p>
                    ₹{item.price.toLocaleString("en-IN")} per person
                  </p>
                </div>
              </label>
            ))}
          </div>

          <h2>4. Review Your Trip</h2>

          <div className="planner-budget-summary">
            <span>Hotel cost ({nights} nights × {rooms} rooms)</span>
            <strong>₹{hotelCost.toLocaleString("en-IN")}</strong>
          </div>

          <div className="planner-budget-summary">
            <span>Activities cost</span>
            <strong>₹{activityCost.toLocaleString("en-IN")}</strong>
          </div>

          <div className="planner-budget-summary">
            <span>Total estimated cost</span>
            <strong>₹{total.toLocaleString("en-IN")}</strong>
          </div>

          <p>
            Your budget: ₹{Number(budget || 0).toLocaleString("en-IN")}
          </p>

          {total > Number(budget) && (
            <p className="planner-message">
              Your trip is over budget. Adjust your selections before booking.
            </p>
          )}

          {error && (
            <p className="booking-error" role="alert">
              {error}
            </p>
          )}

          <button
            className="planner-save-button"
            type="submit"
            disabled={!hotel || nights <= 0}
          >
            Book My Personalized Trip
          </button>

          <p className="planner-note">
            Sample prices only. This demo does not process real payments
            or make actual hotel reservations.
          </p>
        </form>
      </div>
    </section>
  );
}

export default TripPlanner;