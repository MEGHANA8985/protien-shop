import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//const navigate = useNavigate();
const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
              background: "#fff",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>

            <div>
              <button onClick={() => decreaseQty(item.name)}>-</button>
              <span style={{ margin: "0 10px" }}>{item.qty}</span>
              <button onClick={() => increaseQty(item.name)}>+</button>
            </div>

            <div>
              <button onClick={() => removeFromCart(item.name)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
};
<button
  onClick={() => navigate("/checkout")}
  style={{
    background: "#2874f0",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  }}
>
  Proceed to Checkout
</button>

export default Cart;