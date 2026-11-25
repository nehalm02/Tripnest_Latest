import { useState } from "react";

export default function Reviews({ destinationId, destinationName }) {
  const key = `tripnest_reviews_${destinationId || "general"}`;
  const [reviews, setReviews] = useState(() => {
    try { const saved = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(saved) ? saved : []; }
    catch { return []; }
  });
  const [name, setName] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tripnest_current_user") || "null")?.name || ""; }
    catch { return ""; }
  });
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [notice, setNotice] = useState("");

  function submitReview(event) {
    event.preventDefault();
    if (!name.trim() || comment.trim().length < 8) {
      setNotice("Enter your name and a comment of at least 8 characters.");
      return;
    }
    const next = [{ id: `${Date.now()}`, name: name.trim(), rating: Number(rating), comment: comment.trim(), date: new Date().toISOString() }, ...reviews];
    setReviews(next);
    localStorage.setItem(key, JSON.stringify(next));
    setComment("");
    setNotice("Thanks! Your review has been added.");
  }

  return <section className="reviews-section details-section" aria-labelledby="reviews-title">
    <div className="reviews-heading"><div><span className="eyebrow">TRAVELLER STORIES</span><h2 id="reviews-title">💬 Reviews & comments</h2><p>Share a helpful tip or tell other travellers about {destinationName || "your TripNest experience"}.</p></div><span className="review-count">{reviews.length} {reviews.length === 1 ? "review" : "reviews"}</span></div>
    <form className="review-form" onSubmit={submitReview}>
      <label>Your name<input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" maxLength={50} required /></label>
      <label>Rating<select value={rating} onChange={e => setRating(e.target.value)}><option value="5">★★★★★ — Loved it</option><option value="4">★★★★☆ — Great</option><option value="3">★★★☆☆ — Good</option><option value="2">★★☆☆☆ — Could be better</option><option value="1">★☆☆☆☆ — Disappointing</option></select></label>
      <label className="review-comment-field">Your comment<textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="What should other travellers know?" rows="4" minLength={8} maxLength={600} required /></label>
      <div className="review-submit-row"><small>{comment.length}/600 characters</small><button className="primary-action" type="submit">Post review</button></div>
      {notice && <p className="review-notice" role="status">{notice}</p>}
    </form>
    <div className="review-list">{reviews.length ? reviews.map(review => <article className="review-card" key={review.id}><div className="review-avatar">{review.name.charAt(0).toUpperCase()}</div><div className="review-body"><div className="review-meta"><strong>{review.name}</strong><time>{new Date(review.date).toLocaleDateString()}</time></div><div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(review.rating)}{"☆".repeat(5-review.rating)}</div><p>{review.comment}</p></div></article>) : <div className="review-empty"><span>✍️</span><strong>Be the first to review</strong><p>Your tips can help someone plan a better trip.</p></div>}</div>
  </section>;
}
