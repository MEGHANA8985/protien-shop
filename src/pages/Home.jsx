import { useState, useEffect } from "react";
import ProductCard from "../components/product/ProductCard";
import { useCart } from "../context/CartContext";

const categories = [
  "All",
  "Whey",
  "Creatine",
  "BCAA",
  "PreWorkout",
  "Fish Oil",
  "Multivitamins",
  "Mass Gainers",
  "Others",
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  const { search = "" } = useCart();

  // ✅ FIXED FETCH (PORT 5000)
  useEffect(() => {
    fetch("https://protien-shop-backend.onrender.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("DATA FROM BACKEND:", data);
        setProducts(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("FETCH ERROR:", err));
  }, []);

  // 🔍 FILTER
  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) =>
            p.category?.toLowerCase().trim() ===
            selectedCategory.toLowerCase().trim()
        );

  // 🔍 SEARCH FILTER
  filteredProducts = filteredProducts.filter((p) =>
    (p.name || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(to right, #000000, #222222)",
          height: "220px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "40px",
          color: "white",
          marginBottom: "30px",
          borderRadius: "8px",
        }}
      >
        <h1>Fuel Your Fitness Journey</h1>
        <p>Premium Supplements • Best Prices • Fast Delivery</p>
      </div>

      {/* CATEGORIES */}
      <div className="category-bar">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              fontWeight: selectedCategory === cat ? "bold" : "normal",
              color: selectedCategory === cat ? "#2874f0" : "black",
              cursor: "pointer",
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      <h2 style={{ marginBottom: "15px", color: "white" }}>
        {selectedCategory} Products
      </h2>

      {/* PRODUCTS */}
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p, index) => (
            <ProductCard key={index} product={p} />
          ))
        ) : (
          <p style={{ color: "white" }}>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Home;