import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.name === product.name);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  const increaseQty = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };
  const placeOrder = () => {
  setCart([]);
};
  return (
    <CartContext.Provider
  value={{
    cart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    placeOrder, // ✅ ADD THIS
  }}
>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);