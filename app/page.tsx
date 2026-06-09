"use client";

import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    {
      name: "Gold Plated Chain",
      price: 499,
      image: "/products/gold-chain.jpeg",
    },
    {
      name: "Rose Gold Ring",
      price: 499,
      image: "/products/rose-gold-ring.jpeg",
    },
    {
      name: "Swan Gold Ring",
      price: 999,
      image: "/products/swan-gold-ring.jpeg",
    },
    {
      name: "Love Alphabet Rose Gold Ring",
      price: 699,
      image: "/products/love-ring.jpeg",
    },
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Top Bar */}
      <div
        style={{
          background: "#b76e79",
          color: "white",
          textAlign: "center",
          padding: "10px",
          fontWeight: "bold",
        }}
      >
        ✨ FREE SHIPPING ALL OVER INDIA ✨
      </div>

      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          borderBottom: "1px solid #eee",
        }}
      >
        <h1 style={{ color: "#b76e79" }}>ALBATROSS JEWELS</h1>

        <div
          style={{
            background: "#b76e79",
            color: "white",
            padding: "10px 15px",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          🛒 Cart ({cart.length})
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#fdf6f7",
        }}
      >
        <h1 style={{ fontSize: "50px", color: "#7a2330" }}>
          Luxury You Deserve
        </h1>

        <p style={{ fontSize: "20px" }}>
          Premium Artificial Jewellery Crafted For Every Moment
        </p>

        <button
          style={{
            background: "#b76e79",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </section>

      {/* Products */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Our Best Sellers</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{product.name}</h3>

                <p
                  style={{
                    color: "#b76e79",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  ₹{product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#b76e79",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section
        style={{
          padding: "40px",
          background: "#f8f8f8",
        }}
      >
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "15px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              >
                {item.name} - ₹{item.price}
              </div>
            ))}

            <h2>Total: ₹{total}</h2>
          </>
        )}
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918851304467"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          padding: "15px 20px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        WhatsApp Order
      </a>

      {/* Footer */}
      <footer
        style={{
          background: "#111",
          color: "white",
          textAlign: "center",
          padding: "40px",
          marginTop: "40px",
        }}
      >
        <h2>Albatross Jewels</h2>
        <p>Elegance For Every Occasion</p>
        <p>📱 WhatsApp: +91 8851304467</p>
      </footer>
    </main>
  );
}