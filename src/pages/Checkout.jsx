// import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, placeOrder } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleOrder = () => {
    alert("🎉 Order Placed Successfully!");
    placeOrder(); // clear cart
    navigate("/"); // go to home
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.name} style={{ marginBottom: "10px" }}>
              {item.name} × {item.qty} = ₹{item.price * item.qty}
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button
            onClick={handleOrder}
            style={{
              background: "green",
              color: "white",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;