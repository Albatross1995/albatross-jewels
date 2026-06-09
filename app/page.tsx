import Link from "next/link";

export default function Home() {
const products = [
{
name: "Gold Plated Chain",
price: "₹499",
image: "/products/gold-chain.jpg",
},
{
name: "Rose Gold Ring",
price: "₹499",
image: "/products/rose-gold-ring.jpg",
},
{
name: "Swan Gold Ring",
price: "₹999",
image: "/products/swan-gold-ring.jpg",
},
{
name: "Love Alphabet Rose Gold Ring",
price: "₹699",
image: "/products/love-ring.jpg",
},
];

return (
<main style={{ fontFamily: "Arial, sans-serif" }}>
<div
style={{
background: "#b76e79",
color: "white",
textAlign: "center",
padding: "10px",
fontWeight: "bold",
}}
>
✨ FREE SHIPPING ALL OVER INDIA ✨ </div>

```
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      alignItems: "center",
      borderBottom: "1px solid #eee",
    }}
  >
    <h1 style={{ color: "#b76e79" }}>ALBATROSS JEWELS</h1>
    <nav style={{ display: "flex", gap: "20px" }}>
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section
    style={{
      textAlign: "center",
      padding: "80px 20px",
      background: "#fdf6f7",
    }}
  >
    <h1 style={{ fontSize: "48px", color: "#7a2330" }}>
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
              {product.price}
            </p>

            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#b76e79",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>

  <a
    href="https://wa.me/919999999999"
    target="_blank"
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
  </footer>
</main>
```

);
}
