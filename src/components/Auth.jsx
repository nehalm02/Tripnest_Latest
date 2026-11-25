import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Auth({mode="login"}){
 const login=mode==="login"; const [name,setName]=useState(""),[email,setEmail]=useState(""),[password,setPassword]=useState(""),[error,setError]=useState(""); const navigate=useNavigate(); const location=useLocation();
 const submit=e=>{e.preventDefault();setError("");const users=JSON.parse(localStorage.getItem("tripnest_users")||"[]");
  if(login){const u=users.find(x=>x.email.toLowerCase()===email.toLowerCase()&&x.password===password);if(!u){setError("Invalid email or password.");return;}localStorage.setItem("tripnest_current_user",JSON.stringify(u));window.dispatchEvent(new Event("tripnest-auth"));navigate(location.state?.from||"/");}
  else {if(users.some(x=>x.email.toLowerCase()===email.toLowerCase())){setError("An account with this email already exists.");return;}const u={id:Date.now(),name:name.trim()||"Traveller",email:email.trim(),password};users.push(u);localStorage.setItem("tripnest_users",JSON.stringify(users));localStorage.setItem("tripnest_current_user",JSON.stringify(u));window.dispatchEvent(new Event("tripnest-auth"));navigate("/");}
 };
 return <section className="auth-page"><div className="auth-card"><div className="auth-icon">✦</div><span className="eyebrow">WELCOME TO TRIPNEST</span><h1>{login?"Welcome back":"Create your account"}</h1><p>{login?"Sign in to manage your trips and bookings.":"Join TripNest and start planning your next adventure."}</p>
 <form onSubmit={submit}>{!login&&<label>Full name<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></label>}<label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Password<input required minLength="4" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••"/></label>{error&&<div className="auth-error">{error}</div>}<button className="auth-submit">{login?"Login":"Sign up"}</button></form>
 <p className="auth-switch">{login?"New to TripNest? ":"Already have an account? "}<Link to={login?"/signup":"/login"}>{login?"Create an account":"Login"}</Link></p></div></section>;
}