import { useState } from "react";
import { useNavigate } from "react-router-dom";
import destinations from "../data/destination";
import { useApp } from "../context/AppContext";

export default function Destinations({fullPage=false}) {
 const [showAll,setShowAll]=useState(fullPage), [query,setQuery]=useState("");
 const navigate=useNavigate();
 const { toggleWishlist, isWishlisted } = useApp();
 const filtered=destinations.filter(d=>(d.name+" "+d.country).toLowerCase().includes(query.toLowerCase()));
 const visible=showAll?filtered:filtered.slice(0,8);
 return <section className={`destinations ${fullPage?"all-destinations":""}`} id="destinations">
   <div className="section-heading"><div><span className="eyebrow">EXPLORE THE WORLD</span><h2>All destinations</h2><p>Discover every destination available on TripNest.</p></div>
   {!fullPage&&<button className="text-button" onClick={()=>navigate("/destinations")}>View all →</button>}</div>
   {fullPage&&<div className="destination-search"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="🔎 Search destinations..." /></div>}
   <div className="destination-strip destination-full-grid">
    {visible.map(d=><article className="destination-card" key={d.id} role="button" tabIndex={0} onClick={()=>navigate(`/destination/${d.id}`)} onKeyDown={e=>{if(e.key === "Enter" || e.key === " "){e.preventDefault();navigate(`/destination/${d.id}`);}}}>
      <div className="destination-image-wrap"><img src={d.image} alt={d.name}/><button type="button" className={`destination-heart ${isWishlisted(d.id) ? "saved" : ""}`} aria-label={isWishlisted(d.id) ? `Remove ${d.name} from wishlist` : `Add ${d.name} to wishlist`} title={isWishlisted(d.id) ? "Remove from wishlist" : "Add to wishlist"} onClick={e=>{e.stopPropagation();toggleWishlist({...d, type:"Destination", destination:d.name});}}>{isWishlisted(d.id) ? "♥" : "♡"}</button><span className="explore-chip">Explore →</span></div>
      <div className="destination-info"><h3>{d.name}</h3><p>{d.country}</p><small>Best time: {d.bestMonth}</small><p className="destination-card-description">{d.history ? `${d.history.slice(0, 145)}${d.history.length > 145 ? "…" : ""}` : `Explore the highlights, local food, activities and memorable places of ${d.name}.`}</p></div>
    </article>)}
   </div>
   {fullPage&&filtered.length===0&&<div className="no-results">No destinations found.</div>}
   {!fullPage&&<button className="mobile-view-all" onClick={()=>setShowAll(v=>!v)}>{showAll?"Show less ↑":"Show all destinations →"}</button>}
 </section>;
}