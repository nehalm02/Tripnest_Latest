import { useParams, useNavigate } from "react-router-dom";
import destinations from "../data/destination";
import Reviews from "./Reviews";

// Consistent image fallbacks ensure every destination section has a visual,
// even when older destination records only contain text.
const sectionImages = {
 food: [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
 ],
 shopping: [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80"
 ],
 activity: [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
 ],
 place: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"]
};
const detailCopy = (item, destination, kind) => {
 const name = typeof item === "string" ? item : item?.name || "this experience";
 if (kind === "food") return `${name} is a flavour to look for while exploring ${destination}. Ask for a locally recommended place, check the house speciality, and enjoy it as part of the destination's food culture.`;
 if (kind === "shopping") return `Explore ${name} for local finds, useful travel essentials and souvenirs. Compare a few shops, look for regional crafts, and leave time to browse at an easy pace.`;
 return `Make time for ${name} during your stay in ${destination}. It is a great way to discover the area's scenery, culture and everyday character; check local timings and conditions before you go.`;
};

export default function DestinationDetails(){
 const {id}=useParams(), navigate=useNavigate(), d=destinations.find(x=>x.id===id);
 if(!d) return <div className="not-found"><h1>Destination Not Found 😕</h1><button onClick={()=>navigate("/destinations")}>← All destinations</button></div>;
 return <div className="destination-details">
  <section className="destination-detail-hero" style={{backgroundImage:`url(${d.image})`}}>
   <div className="destination-detail-overlay"><button className="back-button" onClick={()=>navigate("/destinations")}>← All destinations</button><h1>{d.name}</h1><p>📍 {d.country} · Best time: {d.bestMonth}</p></div>
  </section>
  <section className="details-section"><h2>📍 Places to Visit</h2><p className="section-intro">Explore memorable landmarks, local favourites and scenic stops in {d.name}. Each place offers a different way to experience the destination.</p><div className="detail-grid">{d.places.map((p,i)=><article className="detail-card place-card" key={i}><img src={p.image || d.image || sectionImages.place[0]} alt={`${p.name || p} in ${d.name}`} loading="lazy" onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src=sectionImages.place[0];}}/><h3>{p.name||p}</h3><p>{p.description || `Discover ${p.name || p}, one of ${d.name}'s noteworthy stops. Take time to enjoy the surroundings, learn about its local story and capture the moments that make this place special.`}</p></article>)}</div></section>
  <section className="details-section"><h2>🍜 Local Food</h2><p className="section-intro">Taste the flavours that make {d.name} distinctive, from everyday favourites to dishes worth seeking out.</p><div className="detail-grid">{d.food.map((x,i)=><article className="detail-card image-detail-card" key={x}><img src={sectionImages.food[i % sectionImages.food.length]} alt={`${x} food in ${d.name}`} loading="lazy" onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src=sectionImages.food[0];}}/><div className="detail-card-copy"><h3>{x}</h3><p>{detailCopy(x,d.name,"food")}</p></div></article>)}</div></section>
  <section className="details-section"><h2>🛍️ Shopping</h2><div className="detail-grid">{d.shopping.map(x=><article className="detail-card image-detail-card shopping-detail-card" key={x}><img src={sectionImages.shopping[d.shopping.indexOf(x) % sectionImages.shopping.length]} alt={`${x}, shopping in ${d.name}`} loading="lazy" onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src=sectionImages.shopping[0];}}/><div className="detail-card-copy"><h3>{x}</h3><p>{detailCopy(x,d.name,"shopping")}</p></div></article>)}</div></section>
  <section className="details-section"><h2>📖 About {d.name}</h2><p className="history-text">{d.history}</p></section>
  <section className="details-section"><h2>🌴 Things to Do</h2><p className="section-intro">Mix sightseeing with local experiences so your itinerary has a little adventure, culture and time to relax.</p><div className="detail-grid">{d.activities.map(x=><article className="detail-card image-detail-card activity-detail-card" key={x}><img src={sectionImages.activity[d.activities.indexOf(x) % sectionImages.activity.length]} alt={`${x} activity in ${d.name}`} loading="lazy" onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src=sectionImages.activity[0];}}/><div className="detail-card-copy"><h3>{x}</h3><p>{detailCopy(x,d.name,"activity")}</p></div></article>)}</div></section>
  <section className="details-section"><h2>🏨 Hotels</h2><p className="section-intro">Compare a few stay ideas for different travel styles and budgets. Prices are illustrative and can vary by date and availability.</p><div className="hotel-grid">{d.hotels.map((h,i)=><article className="hotel-card" key={h.name}><div className="hotel-placeholder-image"><img src={h.image || d.image || sectionImages.place[0]} alt={`${h.name} in ${d.name}`} loading="lazy" onError={(e)=>{e.currentTarget.onerror=null;e.currentTarget.src=sectionImages.place[0];}} /></div><h3>{h.name}</h3><p>{h.description || `A stay option to consider while exploring ${d.name}, with convenient access to nearby attractions.`}</p><strong>{h.price}</strong><button onClick={()=>navigate("/hotels")}>Explore stays</button></article>)}</div></section>
  <section className="details-section"><h2>✈️ Packages in {d.name}</h2><p className="section-intro">Choose a sample itinerary based on the time you have available. Package prices are indicative for this student demo and should be confirmed before real travel.</p><div className="package-grid">{d.packages.map(p=><article className="package-card" key={p.name}><h3>{p.name}</h3><p className="package-description">{p.description || `A thoughtfully paced ${p.duration.toLowerCase()} itinerary with time to explore ${d.name}, enjoy local food and visit popular highlights.`}</p><p>🗓️ {p.duration}</p><h2>{p.price}</h2><button onClick={()=>{const u=JSON.parse(localStorage.getItem("tripnest_current_user")||"null"); if(!u){navigate("/login");return;} const b=JSON.parse(localStorage.getItem("tripnest_bookings")||"[]"); b.push({...p,destination:d.name,type:"Package",bookingId:`PKG-${Date.now()}`,status:"Confirmed",user:u.email,bookedAt:new Date().toISOString()}); localStorage.setItem("tripnest_bookings",JSON.stringify(b)); window.dispatchEvent(new Event("tripnest-bookings")); alert("Package booking confirmed! Find it in My Trips.");}}>Book Package</button></article>)}</div></section>
  <Reviews destinationId={d.id} destinationName={d.name} />
 </div>;
}