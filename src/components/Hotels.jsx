


import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

const hotels = [
  {
    id: "hotel-gold-prime",
    name: "Hotel Gold The Prime",
    city: "New Delhi",
    rating: 8.5,
    reviews: "234",
    price: 2340,
    discount: 15,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
  },
  {
    id: "radisson-jaipur-city-center",
    name: "Radisson Jaipur City Center",
    city: "Jaipur",
    rating: 8.5,
    reviews: "1,013",
    price: 4680,
    discount: 10,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Pool", "Breakfast"],
  },
  {
    id: "goa-paradise-resort",
    name: "Goa Paradise Resort",
    city: "Goa",
    rating: 8.7,
    reviews: "2,460",
    price: 5500,
    discount: 20,
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Pool", "Breakfast"],
  },
  {
    id: "kerala-backwater-resort",
    name: "Kerala Backwater Resort",
    city: "Alappuzha",
    rating: 8.8,
    reviews: "980",
    price: 6200,
    discount: 18,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
  },
  {
    id: "bali-beach-resort",
    name: "Bali Beach Resort",
    city: "Bali",
    rating: 9.0,
    reviews: "2,180",
    price: 8500,
    discount: 12,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Pool", "Breakfast"],
  },
  {
    id: "tokyo-grand",
    name: "Tokyo Grand",
    city: "Tokyo",
    rating: 8.7,
    reviews: "2,740",
    price: 9800,
    discount: 10,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
  },
  {
    id: "amritsar-heritage-stay",
    name: "Heritage Stay Amritsar",
    city: "Amritsar",
    rating: 8.6,
    reviews: "418",
    price: 3200,
    discount: 12,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
  },
  {
    id: "munnar-misty-hills",
    name: "Misty Hills Retreat",
    city: "Munnar",
    rating: 8.9,
    reviews: "672",
    price: 4500,
    discount: 15,
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
  },
  {
    id: "kyoto-garden-hotel",
    name: "Kyoto Garden Hotel",
    city: "Kyoto",
    rating: 9.1,
    reviews: "1,106",
    price: 9500,
    discount: 10,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
  },
  {
    id: "manali-pine-retreat",
    name: "Pine View Mountain Retreat",
    city: "Manali", rating: 8.9, reviews: "746", price: 4200, discount: 15,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
    description: "A cosy mountain-side stay for travellers exploring Old Manali, riverside walks and nearby Himalayan viewpoints."
  },
  {
    id: "jaipur-pink-city-hotel",
    name: "Pink City Heritage Hotel",
    city: "Jaipur", rating: 8.6, reviews: "892", price: 3900, discount: 12,
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast", "Pool"],
    description: "A heritage-inspired base for visiting Amber Fort, City Palace, local bazaars and Jaipur's celebrated food spots."
  },
  {
    id: "udaipur-lake-palace-view",
    name: "Lake Pichola View Stay",
    city: "Udaipur", rating: 9.0, reviews: "1,284", price: 6800, discount: 14,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
    description: "A romantic city stay for lake views, sunset boat rides and the historic lanes around Udaipur's old town."
  },
  {
    id: "rishikesh-river-retreat",
    name: "Ganga Riverside Retreat",
    city: "Rishikesh", rating: 8.7, reviews: "563", price: 3600, discount: 10,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
    description: "A relaxed base for riverside sunsets, yoga sessions, cafe hopping and guided outdoor activities around Rishikesh."
  },
  {
    id: "ladakh-highland-lodge",
    name: "Highland Ladakh Lodge",
    city: "Ladakh", rating: 8.8, reviews: "417", price: 5200, discount: 11,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
    description: "A simple, scenic stay option for acclimatisation days, monastery visits and excursions across Ladakh's high-altitude landscapes."
  },
  {
    id: "mumbai-harbour-hotel",
    name: "Harbour Lights Hotel",
    city: "Mumbai", rating: 8.5, reviews: "1,730", price: 5900, discount: 13,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
    description: "A convenient city base for exploring the Gateway of India, waterfront promenades, museums and Mumbai's food scene."
  },
  {
    id: "agra-taj-gateway",
    name: "Taj Gateway Residency",
    city: "Agra", rating: 8.6, reviews: "958", price: 3400, discount: 12,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast", "Pool"],
    description: "A comfortable stop for early Taj Mahal visits, Agra Fort and sampling the city's famous petha sweets."
  },
  {
    id: "varanasi-ghat-view",
    name: "Ghat View Boutique Stay",
    city: "Varanasi", rating: 8.7, reviews: "684", price: 3100, discount: 10,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
    description: "A boutique-style stay for sunrise boat rides, old-city walks and experiencing the ghats and food traditions of Varanasi."
  },
  {
    id: "phuket-coast-resort",
    name: "Andaman Coast Resort",
    city: "Phuket", rating: 8.9, reviews: "1,452", price: 7900, discount: 16,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Pool", "Breakfast"],
    description: "A tropical resort-style option for beach days, island-hopping excursions and evenings around Phuket's lively dining areas."
  },
  {
    id: "singapore-garden-hotel",
    name: "Garden City Hotel Singapore",
    city: "Singapore", rating: 9.0, reviews: "2,105", price: 11200, discount: 10,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Pool", "Breakfast"],
    description: "A polished urban base for Gardens by the Bay, waterfront walks, public transport and Singapore's hawker food centres."
  },
  {
    id: "cape-town-seaside-lodge",
    name: "Cape Coast Seaside Lodge",
    city: "Cape Town", rating: 8.8, reviews: "873", price: 9800, discount: 12,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
    description: "A scenic stay idea for coastal drives, Table Mountain excursions, neighbourhood cafes and Cape Town's waterfront."
  },
  {
    id: "london-riverside-inn",
    name: "Thames Riverside Inn",
    city: "London", rating: 8.6, reviews: "1,622", price: 11800, discount: 9,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
    description: "A city-break option for museum visits, riverside walks, theatre evenings and exploring London's historic neighbourhoods."
  },
  {
    id: "queenstown-lakeview",
    name: "Lakeview Queenstown Stay",
    city: "Queenstown",
    rating: 8.8,
    reviews: "809",
    price: 11800,
    discount: 14,
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Pool", "Breakfast"],
  },
  {
    id: "delhi-capital-avenue", name: "Capital Avenue Hotel", city: "New Delhi",
    rating: 8.7, reviews: "1,087", price: 4800, discount: 12,
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast"],
    description: "A convenient city stay for sightseeing, shopping and access to major transport links across the capital."
  },
  {
    id: "bengaluru-garden-city", name: "Garden City Boutique Hotel", city: "Bengaluru",
    rating: 8.6, reviews: "794", price: 4600, discount: 10,
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast", "Pool"],
    description: "A comfortable base for Bengaluru's gardens, heritage sights, restaurants and cafe-filled neighbourhoods."
  },
  {
    id: "chandigarh-garden-view", name: "Garden View Chandigarh", city: "Chandigarh",
    rating: 8.8, reviews: "526", price: 5600, discount: 13,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    amenities: ["Wi-Fi", "Breakfast", "Pool"],
    description: "A relaxed city stay for exploring Sukhna Lake, the Rock Garden, landscaped parks and local Punjabi dining."
  }
];

const hotelCountries = {
  Bali: "Indonesia",
  Tokyo: "Japan",
  Kyoto: "Japan",
  Queenstown: "New Zealand",
  Amritsar: "India",
  Munnar: "India",
  Manali: "India", Jaipur: "India", Udaipur: "India", Rishikesh: "India", Ladakh: "India",
  Mumbai: "India", Agra: "India", Varanasi: "India", Phuket: "Thailand", Singapore: "Singapore",
  "Cape Town": "South Africa", London: "United Kingdom", Bengaluru: "India", Chandigarh: "India", "New Delhi": "India",
};

const availableAmenities = ["Wi-Fi", "Breakfast", "Pool"];

function HotelCard({ hotel }) {
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useApp();
  const saved = isWishlisted(hotel.id);

  const country = hotelCountries[hotel.city] || "India";
  const original = Math.round(hotel.price / (1 - hotel.discount / 100));

  return (
    <article className="deal-card">
      <div className="deal-image">
        <img src={hotel.image} alt={hotel.name} />
        <span className="deal-badge">-{hotel.discount}%</span>

        <button
          className={`heart-button ${saved ? "saved" : ""}`}
          onClick={() => toggleWishlist({ ...hotel, type: "Hotel", name: hotel.name, destination: hotel.city, country, image: hotel.image })}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          {saved ? "♥" : "♡"}
        </button>

        <span className="genius-badge">TripNest Pick</span>
      </div>

      <div className="deal-content">
        <p className="deal-location">
          📍 {hotel.city}, {country}
        </p>

        <h3>{hotel.name}</h3>
        <p className="hotel-description">{hotel.description || `A convenient base for exploring ${hotel.city}, with access to local attractions, dining and shopping.`}</p>

        <div className="deal-rating">
          <strong>{hotel.rating.toFixed(1)}</strong>
          <span>Very good</span>
          <small>{hotel.reviews} reviews</small>
        </div>

        <div className="deal-price">
          <span>2 nights</span>
          <del>₹{(original * 2).toLocaleString("en-IN")}</del>
          <strong>₹{(hotel.price * 2).toLocaleString("en-IN")}</strong>
        </div>

        <p className="hotel-card-amenities">
          {hotel.amenities.join(" · ")}
        </p>

        
        <button
  className="deal-button"
  onClick={() =>
    navigate("/hotel-booking", {
      state: { hotel },
    })
  }
>
  Book this hotel
</button>
      </div>
    </article>
  );
}

function Hotels({ limit = 6, fullPage = false }) {
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(12000);
  const [minRating, setMinRating] = useState("0");
  const [sortBy, setSortBy] = useState("recommended");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const filteredHotels = useMemo(() => {
    let result = hotels.filter((hotel) => {
      const matchesSearch =
        `${hotel.name} ${hotel.city}`
          .toLowerCase()
          .includes(query.trim().toLowerCase());

      const matchesPrice = hotel.price <= maxPrice;
      const matchesRating = hotel.rating >= Number(minRating);

      const matchesAmenities = selectedAmenities.every((amenity) =>
        hotel.amenities.includes(amenity)
      );

      return (
        matchesSearch &&
        matchesPrice &&
        matchesRating &&
        matchesAmenities
      );
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [query, maxPrice, minRating, sortBy, selectedAmenities]);

  const visibleHotels = fullPage
    ? filteredHotels
    : filteredHotels.slice(0, limit);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((current) =>
      current.includes(amenity)
        ? current.filter((item) => item !== amenity)
        : [...current, amenity]
    );
  };

  const clearFilters = () => {
    setQuery("");
    setMaxPrice(12000);
    setMinRating("0");
    setSortBy("recommended");
    setSelectedAmenities([]);
  };

  return (
    <section
      className={`deals-section ${fullPage ? "hotels-full-page" : ""}`}
      id="hotels"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            {fullPage ? "EXPLORE YOUR OPTIONS" : "DEALS FOR THE WEEKEND"}
          </span>
          <h2>{fullPage ? "Find Your Perfect Stay" : "Stay somewhere special"}</h2>
          <p>
            {fullPage
              ? "Search and filter hotels to find a stay that suits you."
              : "Save on stays with handpicked TripNest deals."}
          </p>
        </div>

        {!fullPage && (
          <button
            className="text-button"
            onClick={() => window.location.assign("/hotels")}
          >
            See all stays →
          </button>
        )}
      </div>

      {fullPage && (
        <div className="hotel-filter-panel">
          <div className="hotel-search-field">
            <label htmlFor="hotel-search">Search hotels or destinations</label>
            <input
              id="hotel-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try Goa, Bali, Tokyo..."
            />
          </div>

          <div className="hotel-filter-row">
            <div className="hotel-filter-field">
              <label htmlFor="hotel-max-price">
                Maximum price per night: ₹{maxPrice.toLocaleString("en-IN")}
              </label>
              <input
                id="hotel-max-price"
                type="range"
                min="2000"
                max="12000"
                step="500"
                value={maxPrice}
                onChange={(event) => setMaxPrice(Number(event.target.value))}
              />
              <div className="hotel-range-labels">
                <span>₹2,000</span>
                <span>₹12,000</span>
              </div>
            </div>

            <div className="hotel-filter-field">
              <label htmlFor="hotel-rating">Minimum rating</label>
              <select
                id="hotel-rating"
                value={minRating}
                onChange={(event) => setMinRating(event.target.value)}
              >
                <option value="0">All ratings</option>
                <option value="8.5">8.5 and above</option>
                <option value="8.7">8.7 and above</option>
                <option value="9">9.0 and above</option>
              </select>
            </div>

            <div className="hotel-filter-field">
              <label htmlFor="hotel-sort">Sort results by</label>
              <select
                id="hotel-sort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>

          <div className="hotel-amenity-filters">
            <span className="hotel-amenity-heading">Amenities</span>

            {availableAmenities.map((amenity) => (
              <label className="hotel-amenity-option" key={amenity}>
                <input
                  type="checkbox"
                  checked={selectedAmenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                />
                {amenity === "Wi-Fi" ? "📶" : amenity === "Pool" ? "🏊" : "🍳"}
                {" "}{amenity}
              </label>
            ))}
          </div>

          <div className="hotel-filter-footer">
            <p>
              <strong>{filteredHotels.length}</strong>{" "}
              {filteredHotels.length === 1 ? "hotel" : "hotels"} found
            </p>
            <button
              type="button"
              className="hotel-clear-filters"
              onClick={clearFilters}
            >
              Clear all filters
            </button>
          </div>
        </div>
      )}

      <div className="deal-grid">
        {visibleHotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.name} />
        ))}
      </div>

      {fullPage && filteredHotels.length === 0 && (
        <div className="hotel-no-results">
          <span>🔎</span>
          <h3>No hotels match your filters</h3>
          <p>Try a different destination, budget, rating or amenity.</p>
          <button
            type="button"
            className="deal-button"
            onClick={clearFilters}
          >
            Clear filters and try again
          </button>
        </div>
      )}
    </section>
  );
}

export default Hotels;
