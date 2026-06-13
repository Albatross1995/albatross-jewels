"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
const [selectedCategory, setSelectedCategory] =useState("All");
  const [searchTerm, setSearchTerm] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [coupon, setCoupon] = useState("");
const [discount, setDiscount] = useState(0);

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
      category: "Chain",
description: "Premium Artificial Gold Plated Chain",
    },
    {
      name: "Rose Gold Ring",
      price: 499,
      image: "/products/rose-gold-ring.jpeg",
       category: "Ring",
       description: "Elegant Rose Gold Ring",
    },
    {
      name: "Swan Gold Ring",
      price: 999,
      image: "/products/swan-gold-ring.jpeg",
      category: "Ring",
      description: "Graceful Swan Gold Ring",
    },
    {
      name: "Love Alphabet Rose Gold Ring",
      price: 699,
      image: "/products/love-ring.jpeg",
      category: "Ring",
      description: "Romantic Love Alphabet Rose Gold Ring",
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

const totalItems = cart.reduce(
  (sum, item) => sum + item.quantity,
  0
);
 const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  const orderOnWhatsApp = () => {
    if (!name || !phone || !address) {
  alert("Please fill all customer details");
  return;
}
 if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10 digit phone number");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const items = cart
  .map(
    (item) =>
      `${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`
  )
  .join("%0A");

    const message =
  `Hello Albatross Jewels,%0A%0A` +
  `Name: ${name}%0A` +
  `Phone: ${phone}%0A` +
  `Address: ${address}%0A%0A` +
  `Order:%0A${items}%0A%0A` +
  `Total: ₹${total}`;

alert("✅ Redirecting to WhatsApp...");
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
          🛒 Cart ({totalItems})
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

<section
  style={{
    background: "#fff5f7",
    padding: "40px 20px",
    textAlign: "center",
  }}
>
  <h2 style={{ color: "#7a2330" }}>
    ⭐ Featured Collection
  </h2>

  <p style={{ fontSize: "18px" }}>
    Explore our most loved jewellery pieces.
  </p>
</section>

      {/* Products */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center" }}>Our Best Sellers</h2>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
  {["All", "Ring", "Chain"].map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        background:
          selectedCategory === category
            ? "#b76e79"
            : "#ddd",
        color:
          selectedCategory === category
            ? "white"
            : "black",
      }}
    >
      {category}
    </button>
  ))}
</div>
<input
  type="text"
  placeholder="Search jewellery..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    width: "100%",
    maxWidth: "400px",
    padding: "12px",
    margin: "20px auto",
    display: "block",
    border: "1px solid #ddd",
    borderRadius: "8px",
  }}
/>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {products
  .filter(
    (product) =>
      (selectedCategory === "All" ||
        product.category === selectedCategory) &&
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  )
  .map((product) => (
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

<p
  style={{
    color: "#666",
    fontSize: "14px",
    marginTop: "8px",
  }}
>
  {product.description}
</p>

<span
  style={{
    background: "#fdf0f3",
    color: "#b76e79",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    display: "inline-block",
    marginTop: "8px",
  }}
>
  {product.category}
</span>
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

            <button
  style={{
    background: "#7a2330",
    color: "white",
    border: "none",
    padding: "15px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
    marginLeft: "10px",
  }}
>
  Pay Online (Coming Soon)
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
<section
  style={{
    padding: "50px 20px",
    background: "#fdf6f7",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "#7a2330",
      marginBottom: "30px",
    }}
  >
    Customer Reviews
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(250px,1fr))",
      gap: "20px",
    }}
  >
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      ⭐⭐⭐⭐⭐
      <p>Beautiful quality jewellery.</p>
      <strong>- Priya</strong>
    </div>

    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      ⭐⭐⭐⭐⭐
      <p>Fast delivery and amazing design.</p>
      <strong>- Neha</strong>
    </div>

    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      ⭐⭐⭐⭐⭐
      <p>Looks exactly like real gold.</p>
      <strong>- Anjali</strong>
    </div>
  </div>
</section>

<section
  style={{
    padding: "50px 20px",
    textAlign: "center",
    background: "#ffffff",
  }}
>
  <h2
    style={{
      color: "#7a2330",
      marginBottom: "20px",
    }}
  >
    Why Choose Albatross Jewels?
  </h2>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      fontSize: "18px",
      color: "#333",
    }}
  >
    <p>✅   Premium Quality Jewellery     ✅    *Cash On Delivery Available</p>
    <p>✅   Fast Shipping Across India    ✅    *Trusted By Happy Customers</p>
  </div>
</section>

      </footer>
    </main>
  );
}