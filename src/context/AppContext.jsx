import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart as addCartItem, clearCart as clearReduxCart, removeFromCart as removeCartItem } from "../store/slices/cartSlice";

const AppContext = createContext(null);
const readJSON = (key, fallback) => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch { return fallback; }
};

export function AppProvider({ children }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [user, setUser] = useState(() => readJSON("tripnest_current_user", null));
  const [theme, setTheme] = useState(() => localStorage.getItem("tripnest_theme") || "light");
  const [wishlist, setWishlist] = useState(() => readJSON("tripnest_wishlist", []));

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("tripnest_theme", theme); }, [theme]);
  useEffect(() => { localStorage.setItem("tripnest_wishlist", JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => {
    const syncUser = () => setUser(readJSON("tripnest_current_user", null));
    window.addEventListener("tripnest-auth", syncUser);
    window.addEventListener("storage", syncUser);
    return () => { window.removeEventListener("tripnest-auth", syncUser); window.removeEventListener("storage", syncUser); };
  }, []);

  const toggleTheme = () => setTheme(current => current === "dark" ? "light" : "dark");
  const logout = () => { localStorage.removeItem("tripnest_current_user"); setUser(null); window.dispatchEvent(new Event("tripnest-auth")); };
  const toggleWishlist = item => setWishlist(current => current.some(x => String(x.id) === String(item.id)) ? current.filter(x => String(x.id) !== String(item.id)) : [...current, item]);
  const isWishlisted = id => wishlist.some(x => String(x.id) === String(id));
  const addToCart = item => dispatch(addCartItem(item));
  const removeFromCart = id => dispatch(removeCartItem(id));
  const clearCart = () => dispatch(clearReduxCart());

  const value = useMemo(() => ({ user, setUser, logout, theme, toggleTheme, wishlist, toggleWishlist, isWishlisted, cart, addToCart, removeFromCart, clearCart }), [user, theme, wishlist, cart]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}
