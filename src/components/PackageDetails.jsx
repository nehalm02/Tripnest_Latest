
import { useParams, useNavigate } from "react-router-dom";
import destinations from "../data/destination";

export default function PackageDetails() {
  const { destinationId, packageName } = useParams();
  const navigate = useNavigate();

  const destination = destinations.find(
    (d) => d.id === destinationId
  );

  const selectedPackage = destination?.packages?.find(
    (p) => p.name === packageName
  );

  if (!destination || !selectedPackage) {
    return (
      <section className="package-not-found">
        <h2>Package not found</h2>
        <p>Sorry, we could not find this travel package.</p>
        <button onClick={() => navigate("/packages")}>
          Browse Packages
        </button>
      </section>
    );
  }

  const places = destination.places || [];
  const activities = destination.activities || [];

  // Create a sample itinerary using existing destination data.
 
    
  const durationMatch = selectedPackage.duration.match(/(\d+)\s*Nights?\s*\/\s*(\d+)\s*Days?/i);
  const totalDays = durationMatch ? Number(durationMatch[2]) : 5;

  const itinerary = Array.from({ length: totalDays }, (_, index) => {
    const day = index + 1;

    if (day === 1) {
      return {
        title: "Arrival and Check-in",
        description: `Arrive at ${destination.name}, check in to your hotel and explore the nearby area.`,
        activity: activities[0] || "Explore the destination",
      };
    }

    if (day === totalDays) {
      return {
        title: "Departure Day",
        description: "Enjoy your remaining free time and prepare for departure.",
        activity: "Checkout and departure",
      };
    }

    const place = places[(day - 2) % Math.max(places.length, 1)];
    const activity = activities[(day - 1) % Math.max(activities.length, 1)];

    return {
      title: `Day ${day} - Sightseeing and Experiences`,
      description: `Discover more of ${destination.name} and enjoy your planned activities.`,
      activity: place?.name || activity || "Local sightseeing",
    };
  });

  

  const inclusions = [
    "Hotel accommodation as per the package plan",
    "Sightseeing at selected attractions",
    "Activities listed in the sample itinerary",
    "Trip planning assistance",
  ];

  const exclusions = [
    "Flights or train tickets unless specifically included",
    "Personal shopping and expenses",
    "Meals not specifically included",
    "Travel insurance and optional activities",
  ];

  const bookPackage = () => {
    const user = JSON.parse(
      localStorage.getItem("tripnest_current_user") || "null"
    );

    if (!user) {
      navigate("/login", {
        state: { from: `/packages/${destinationId}/${encodeURIComponent(
          selectedPackage.name
        )}` },
      });
      return;
    }

    const bookings = JSON.parse(
      localStorage.getItem("tripnest_bookings") || "[]"
    );

    const booking = {
      ...selectedPackage,
      destinationId: destination.id,
      destination: destination.name,
      country: destination.country,
      image: destination.image,
      user: user.email,
      type: "Package",
      bookingId: `PKG-${Date.now()}`,
      bookedAt: new Date().toISOString(),
      status: "Confirmed",
    };

    bookings.push(booking);

    localStorage.setItem(
      "tripnest_bookings",
      JSON.stringify(bookings)
    );
    window.dispatchEvent(new Event("tripnest-bookings"));

    alert("Package booked successfully!");
    navigate("/");
  };

  return (
    <div className="package-details-page">
      <section
        className="package-details-hero"
        style={{ backgroundImage: `url("${destination.image}")` }}
      >
        <div className="package-details-hero-overlay">
          <button
            className="package-back-button"
            onClick={() => navigate("/packages")}
          >
            ← Back to Packages
          </button>

          <span className="package-details-eyebrow">
            TRIPNEST EXCLUSIVE PACKAGE
          </span>

          <h1>{selectedPackage.name}</h1>

          <p className="package-hero-location">
            📍 {destination.name}, {destination.country}
          </p>

          <p className="package-hero-duration">
            🗓️ {selectedPackage.duration}
          </p>

          <div className="package-hero-price">
            <span>Starting from</span>
            <strong>{selectedPackage.price}</strong>
            <small>per person</small>
          </div>
        </div>
      </section>

      <section className="package-details-content">
        <div className="package-details-main">
          <div className="package-info-card">
            <span className="package-details-label">ABOUT THIS TRIP</span>
            <h2>Your {destination.name} Experience</h2>
            <p>
              {destination.history ||
                `Discover the highlights of ${destination.name} with this
                carefully planned travel package.`}
            </p>
            <p>
              Explore popular attractions, discover local food and enjoy
              memorable experiences during your trip.
            </p>

            <div className="package-facts">
              <div>
                <span>📍</span>
                <strong>Destination</strong>
                <p>{destination.name}</p>
              </div>
              <div>
                <span>🗓️</span>
                <strong>Duration</strong>
                <p>{selectedPackage.duration}</p>
              </div>
              <div>
                <span>🌤️</span>
                <strong>Best time to visit</strong>
                <p>{destination.bestMonth || "Check seasonal conditions"}</p>
              </div>
            </div>
          </div>

          <div className="package-info-card">
            <span className="package-details-label">YOUR TRAVEL PLAN</span>
            <h2>Day-by-Day Itinerary</h2>
            <p className="package-section-note">
              Sample itinerary for your trip. Final activities and timings
              can vary depending on the selected package.
            </p>

            <div className="package-itinerary">
              {itinerary.map((day, index) => (
                <div className="package-itinerary-item" key={day.title}>
                  <div className="package-day-number">
                    Day {index + 1}
                  </div>
                  <div>
                    <h3>{day.title}</h3>
                    <p>{day.description}</p>
                    <span>✦ {day.activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="package-info-card">
            <span className="package-details-label">PACKAGE DETAILS</span>
            <h2>What's Included?</h2>

            <div className="package-inclusion-grid">
              <div>
                <h3 className="package-inclusion-title">✓ Included</h3>
                {inclusions.map((item) => (
                  <p className="package-inclusion-item" key={item}>
                    <span>✓</span> {item}
                  </p>
                ))}
              </div>

              <div>
                <h3 className="package-exclusion-title">✕ Not Included</h3>
                {exclusions.map((item) => (
                  <p className="package-inclusion-item" key={item}>
                    <span>✕</span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="package-info-card">
            <span className="package-details-label">STAY & EXPLORE</span>
            <h2>Accommodation and Attractions</h2>

            {destination.hotels?.length > 0 && (
              <div className="package-stay-list">
                <h3>Accommodation options</h3>
                {destination.hotels.map((hotel) => (
                  <div className="package-stay-item" key={hotel.name}>
                    <span>🏨</span>
                    <div>
                      <strong>{hotel.name}</strong>
                      <p>{hotel.price}</p>
                    </div>
                  </div>
                ))}
                <small>
                  These are destination accommodation options, not
                  confirmed hotels included in this package.
                </small>
              </div>
            )}

            {places.length > 0 && (
              <div className="package-attractions">
                <h3>Popular places to visit</h3>
                <div className="package-attraction-grid">
                  {places.slice(0, 3).map((place) => (
                    <div className="package-attraction" key={place.name}>
                      <img
                        src={place.image || destination.image}
                        alt={place.name}
                      />
                      <strong>{place.name}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="package-booking-card">
          <span className="package-details-label">YOUR NEXT ADVENTURE</span>
          <h2>Ready to explore?</h2>
          <p>
            Your next memorable trip starts here. Review the package
            details and continue when you're ready.
          </p>

          <div className="package-price-summary">
            <span>Package price</span>
            <strong>{selectedPackage.price}</strong>
            <small>per person · starting price</small>
          </div>

          <button className="package-confirm-book" onClick={bookPackage}>
            Book This Package →
          </button>

          <button
            className="package-secondary-button"
            onClick={() => navigate(`/destination/${destination.id}`)}
          >
            Explore Destination
          </button>

          <div className="package-booking-note">
            <p>✓ Package details available for review</p>
            <p>✓ Booking saved in your TripNest account</p>
            <p>✓ No real payment is processed in this demo</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
