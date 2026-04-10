import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const liked = wishlist.find((p) => p.id === product.id);

  return (
    <div className="card" style={{ position: "relative" }}>
      {/* ❤️ HEART */}
      <span
        onClick={() => toggleWishlist(product)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        {liked ? "❤️" : "🤍"}
      </span>

      <img
        src={product.image}
        alt={product.name}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{
          width: "100%",
          height: "140px",
          objectFit: "contain",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      />

      <h4>{product.name}</h4>

      <span
        style={{
          background: "green",
          color: "white",
          fontSize: "12px",
          padding: "2px 6px",
          borderRadius: "4px",
        }}
      >
        {product.rating} ★
      </span>

      <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
const { addToCart } = useCart();

<button
  onClick={(e) => {
    e.stopPropagation();
    addToCart(product);
  }}
  style={{
    background: "#ff9f00",
    border: "none",
    padding: "8px",
    color: "white",
    cursor: "pointer",
    marginTop: "10px",
  }}
>
  Add to Cart
</button>
    </div>
  );
};

export default ProductCard;
