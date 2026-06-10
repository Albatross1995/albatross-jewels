"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
  const existingProduct = cart.find(
    (item) => item.name === product.name
  );

  if (existingProduct) {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

  const removeFromCart = (indexToRemove: number) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };
const increaseQuantity = (productName: string) => {
  setCart(
    cart.map((item) =>
      item.name === productName
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (productName: string) => {
  setCart(
    cart
      .map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};


 const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  const orderOnWhatsApp = () => {
    if (!name || !phone || !address) {
  alert("Please fill all customer details");
  return;
}
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const items = cart
      .map((item) => `${item.name} - ₹${item.price}`)
      .join("%0A");

    const message =
  `Hello Albatross Jewels,%0A%0A` +
  `Name: ${name}%0A` +
  `Phone: ${phone}%0A` +
  `Address: ${address}%0A%0A` +
  `Order:%0A${items}%0A%0A` +
  `Total: ₹${total}`;

    window.open(
      `https://wa.me/918851304467?text=${message}`,
      "_blank"
    );
  };

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

      {/* Cart */}
      <section
        style={{
          padding: "40px",
          background: "#f8f8f8",
        }}
      >
        <h2>Your Cart</h2>
        <div style={{ marginBottom: "20px" }}>
  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
    }}
  />

  <input
    type="text"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
    }}
  />

  <textarea
    placeholder="Delivery Address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      minHeight: "80px",
    }}
  />
</div>
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
  {item.name} × {item.quantity} - ₹
  {item.price * item.quantity}
</span>

<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  <button onClick={() => decreaseQuantity(item.name)}>
    -
  </button>

  <span>{item.quantity}</span>

  <button onClick={() => increaseQuantity(item.name)}>
    +
  </button>

  <button
    onClick={() => removeFromCart(index)}
    style={{
      background: "red",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    Remove
  </button>
</div>
            ))}

            <h2>Total: ₹{total}</h2>

            <button
              onClick={orderOnWhatsApp}
              style={{
                background: "#25D366",
                color: "white",
                border: "none",
                padding: "15px 25px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Buy Now On WhatsApp
            </button>
          </>
        )}
      </section>

      {/* WhatsApp Floating Button */}
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