import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const { wishlist } = useWishlist();

  const categories = ["Whey", "Creatine", "BCAA", "Mass Gainers"];

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#2874f0",
        color: "white",
        padding: "10px 20px",
        flexWrap: "wrap",
      }}
    >
      {/* LOGO */}
      <h2
        onClick={() => navigate("/")}
        style={{ cursor: "pointer", margin: 0 }}
      >
        Protein Shop
      </h2>

      {/* CATEGORY MENU */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Home
        </span>

        {categories.map((cat) => (
          <span
            key={cat}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/?category=${cat}`)}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {/* WISHLIST */}
        <span
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => navigate("/wishlist")}
        >
          ❤️
          {wishlist.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                background: "red",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                color: "white",
              }}
            >
              {wishlist.length}
            </span>
          )}
        </span>

        {/* USER */}
        {user ? (
          <>
            <span style={{ fontSize: "14px" }}>{user.email}</span>
            <span
              style={{ cursor: "pointer", fontWeight: "bold" }}
              onClick={logout}
            >
              Logout
            </span>
          </>
        ) : (
          <span
            style={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        )}

        {/* CART */}
        <span
          style={{ cursor: "pointer", position: "relative" }}
          onClick={() => navigate("/cart")}
        >
          🛒
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                background: "red",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                color: "white",
              }}
            >
              {cart.length}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
