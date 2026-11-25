import { useState } from "react";
import { useApp } from "../context/AppContext";

const categories = [
  ["🏖️", "Beach escapes", "Go somewhere sunny"],
  ["🏔️", "Mountain trips", "Fresh air & views"],
  ["🍜", "Culinary adventures", "Taste the city"],
  ["🛍️", "Shopping & outlets", "Shop till you drop"],
  ["🌿", "Nature & wellness", "Slow down & recharge"],
  ["🏛️", "Culture & history", "See something timeless"],
];

const ideasByCategory = {
  "Beach escapes": [
    { name: "Sunset beach walk", place: "Bali, Indonesia", type: "Beach experience", price: 1200, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85", description: "Golden sand, turquoise water and a peaceful sunset." },
    { name: "Snorkelling adventure", place: "Maldives", type: "Water activity", price: 2800, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85", description: "Discover colourful coral reefs and tropical fish." },
    { name: "Surfing lesson", place: "Canggu, Bali", type: "Adventure activity", price: 2200, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=85", description: "Learn the basics with a fun beach-side session." },
    { name: "Island boat cruise", place: "Phuket, Thailand", type: "Boat trip", price: 3500, image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85", description: "Spend the day exploring beautiful bays and islands." },
    { name: "Sea-kayaking along the coast", place: "Goa, India", type: "Water adventure", price: 1600, image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85", description: "Paddle through calm coastal waters and discover quiet coves with a local guide." },
    { name: "Beachside seafood evening", place: "Kovalam, India", type: "Food & sunset experience", price: 1350, image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85", description: "Enjoy a relaxed seaside evening with regional seafood, ocean views and a sunset walk." },
  ],
  "Mountain trips": [
    { name: "Mountain viewpoint trek", place: "Manali, India", type: "Guided trek", price: 1800, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85", description: "Walk scenic trails with breathtaking Himalayan views." },
    { name: "Alpine cable car ride", place: "Interlaken, Switzerland", type: "Scenic ride", price: 3200, image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85", description: "Take in snowy peaks and dramatic mountain scenery." },
    { name: "Cozy cabin escape", place: "Shimla, India", type: "Stay experience", price: 4200, image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=85", description: "Unwind in a cosy mountain cabin surrounded by pine trees." },
    { name: "Sunrise mountain camping", place: "Kasol, India", type: "Outdoor adventure", price: 2500, image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=85", description: "Camp under the stars and wake up to fresh mountain air." },
    { name: "Himalayan village trail", place: "Dharamshala, India", type: "Guided nature walk", price: 1450, image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=85", description: "Walk through pine forests and traditional villages while learning about local life." },
    { name: "Snow-view picnic day", place: "Gulmarg, India", type: "Scenic day trip", price: 2100, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85", description: "Take in sweeping mountain views, warm drinks and a peaceful outdoor picnic." },
  ],
  "Culinary adventures": [
    { name: "Street-food tasting walk", place: "Delhi, India", type: "Food tour", price: 999, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=85", description: "Taste local favourites from trusted street-food spots." },
    { name: "Traditional cooking class", place: "Jaipur, India", type: "Cooking class", price: 1600, image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85", description: "Learn to prepare regional dishes with a local host." },
    { name: "Local market food trail", place: "Bangkok, Thailand", type: "Market tour", price: 1400, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85", description: "Explore bustling markets and sample authentic flavours." },
    { name: "Cafe and dessert hopping", place: "Paris, France", type: "Cafe experience", price: 2100, image: "https://images.unsplash.com/photo-1551024506-0bc2e4b8b8c4?auto=format&fit=crop&w=900&q=85", description: "Discover charming cafes, pastries and local desserts." },
    { name: "Punjabi dhaba food trail", place: "Amritsar, India", type: "Local food tour", price: 850, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85", description: "Sample Amritsari kulcha, lassi and beloved local dishes with a food-loving guide." },
    { name: "Japanese ramen workshop", place: "Tokyo, Japan", type: "Cooking workshop", price: 2900, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85", description: "Learn how broth, noodles and toppings come together in a classic ramen bowl." },
  ],
  "Shopping & outlets": [
    { name: "Boutique shopping walk", place: "Paris, France", type: "Shopping tour", price: 900, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85", description: "Browse independent boutiques and fashion streets." },
    { name: "Luxury mall experience", place: "Dubai, UAE", type: "Mall visit", price: 1200, image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=900&q=85", description: "Explore flagship stores, dining and indoor attractions." },
    { name: "Handicraft market visit", place: "Jaipur, India", type: "Local market", price: 700, image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85", description: "Find textiles, jewellery and locally made souvenirs." },
    { name: "Outlet shopping day", place: "London, UK", type: "Outlet trip", price: 1500, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85", description: "Spend a relaxed day exploring popular shopping outlets." },
    { name: "Night bazaar discovery", place: "Chiang Mai, Thailand", type: "Night market tour", price: 1100, image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=85", description: "Browse handmade gifts, local crafts and street stalls in a lively evening market." },
    { name: "Artisan souvenir hunt", place: "Udaipur, India", type: "Craft shopping walk", price: 750, image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85", description: "Meet local makers and find miniature paintings, textiles and thoughtful keepsakes." },
  ],
  "Nature & wellness": [
    { name: "Forest nature walk", place: "Dharamshala, India", type: "Nature activity", price: 800, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85", description: "Reconnect with nature on a peaceful guided forest walk." },
    { name: "Sunrise yoga session", place: "Rishikesh, India", type: "Wellness activity", price: 650, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85", description: "Start your day with gentle yoga and mindful breathing." },
    { name: "Waterfall day trip", place: "Bali, Indonesia", type: "Nature excursion", price: 1900, image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=85", description: "Visit lush rainforest trails and refreshing waterfalls." },
    { name: "Spa and relaxation", place: "Ubud, Bali", type: "Wellness experience", price: 2400, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85", description: "Take a break with a calming spa and wellness experience." },
    { name: "Tea garden slow walk", place: "Munnar, India", type: "Nature experience", price: 950, image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=900&q=85", description: "Wander through rolling tea gardens and learn about the region's tea-growing heritage." },
    { name: "Lakeside mindfulness morning", place: "Udaipur, India", type: "Wellness session", price: 700, image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85", description: "Start the day with gentle stretching, breathing exercises and quiet lakeside views." },
  ],
  "Culture & history": [
    { name: "Historic fort guided tour", place: "Jaipur, India", type: "Heritage tour", price: 1100, image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=85", description: "Explore royal architecture, stories and courtyards." },
    { name: "Museum discovery pass", place: "Paris, France", type: "Museum visit", price: 1700, image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=900&q=85", description: "Discover famous artworks and fascinating collections." },
    { name: "Old town walking tour", place: "Rome, Italy", type: "Walking tour", price: 1300, image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=900&q=85", description: "Walk through historic streets and iconic landmarks." },
    { name: "Temple and heritage trail", place: "Varanasi, India", type: "Cultural experience", price: 1000, image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=85", description: "Learn about local traditions, architecture and history." },
    { name: "Golden Temple heritage visit", place: "Amritsar, India", type: "Cultural walking tour", price: 600, image: "https://images.unsplash.com/photo-1588096344356-6d9b1ea2c1a6?auto=format&fit=crop&w=900&q=85", description: "Learn about the history, architecture and community traditions of this landmark." },
    { name: "Ancient ruins guided walk", place: "Hampi, India", type: "Heritage exploration", price: 1250, image: "https://images.unsplash.com/photo-1600100397608-f0101c2e2c3e?auto=format&fit=crop&w=900&q=85", description: "Explore monumental stone architecture and stories from the Vijayanagara Empire." },
  ],
};

function Categories() {
  const [selected, setSelected] = useState("Beach escapes");
  const [notice, setNotice] = useState("");
  const { toggleWishlist, isWishlisted, addToCart } = useApp();
  const ideas = ideasByCategory[selected] || [];

  const handleAddToTrip = (idea) => {
    addToCart({ id: `activity-${idea.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, name: idea.name, destination: idea.place, type: idea.type, price: idea.price, image: idea.image, quantity: 1 });
    setNotice(`${idea.name} added to your trip cart.`);
    window.setTimeout(() => setNotice(""), 2600);
  };

  return (
    <section className="category-section" id="things-to-do">
      <div className="section-heading compact-heading">
        <div>
          <span className="eyebrow">TRAVEL YOUR WAY</span>
          <h2>Pick a vibe. <span>Find your trip.</span></h2>
        </div>
        <p>Tap a category to personalize your inspiration.</p>
      </div>

      <div className="category-scroll">
        {categories.map(([icon, title, text]) => (
          <button key={title} type="button" className={`category-pill ${selected === title ? "selected" : ""}`} onClick={() => { setSelected(title); setNotice(""); }} aria-pressed={selected === title}>
            <span className="category-icon">{icon}</span>
            <span><strong>{title}</strong><small>{text}</small></span>
          </button>
        ))}
      </div>

      <div className="vibe-message">
        <span>{categories.find((c) => c[1] === selected)?.[0]}</span>
        <div><strong>{selected}</strong><small>Great choice — explore handpicked TripNest ideas below.</small></div>
      </div>

      <div className="idea-heading">
        <div><span className="eyebrow">HANDPICKED FOR YOUR VIBE</span><h3>{selected} <span>to try</span></h3></div>
        <p>{ideas.length} experiences to inspire your next trip</p>
      </div>
      {notice && <div className="idea-notice" role="status">✓ {notice}</div>}
      <div className="idea-grid">
        {ideas.map((idea) => {
          const id = `activity-${idea.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          const saved = isWishlisted(id);
          return (
            <article className="idea-card" key={idea.name}>
              <div className="idea-image"><img src={idea.image} alt={idea.name} loading="lazy" /><span className="idea-type">{idea.type}</span>
                <button type="button" className={`idea-heart ${saved ? "saved" : ""}`} aria-label={saved ? `Remove ${idea.name} from wishlist` : `Add ${idea.name} to wishlist`} onClick={() => { toggleWishlist({ id, name: idea.name, destination: idea.place, type: idea.type, price: idea.price, image: idea.image }); setNotice(saved ? `${idea.name} removed from your wishlist.` : `${idea.name} saved to your wishlist.`); }}> {saved ? "♥" : "♡"} </button>
              </div>
              <div className="idea-content"><p className="idea-place">📍 {idea.place}</p><h4>{idea.name}</h4><p className="idea-description">{idea.description}</p>
                <div className="idea-card-bottom"><strong>₹{idea.price.toLocaleString("en-IN")} <small>/ person</small></strong><button type="button" onClick={() => handleAddToTrip(idea)}>＋ Add to trip</button></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
