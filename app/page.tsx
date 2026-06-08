export default function Home() {
  const products = [
    {
      name: "Royal Pearl Necklace",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600",
    },
    {
      name: "Rose Gold Earrings",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
    },
    {
      name: "Crystal Bridal Set",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600",
    },
  ];

  return (
    <main>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px",
          borderBottom: "1px solid #ddd",
          background: "#fff",
        }}
      >
        <h1 style={{ color: "#b76e79" }}>Albatross Jewels</h1>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        style={{
          height: "500px",
          background:
            "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div>
          <h1 style={{ fontSize: "60px" }}>Albatross Jewels</h1>

          <h2>Elegant Artificial Jewellery</h2>

          <p>हर अवसर के लिए खूबसूरत आर्टिफिशियल ज्वेलरी</p>

          <button
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "#b76e79",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: "60px 30px", textAlign: "center" }}>
        <h2>Shop By Category</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {[
            "Earrings",
            "Necklaces",
            "Rings",
            "Bangles",
            "Bridal Sets",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "12px",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section
        style={{
          padding: "60px 30px",
          background: "#f8f8f8",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Best Sellers</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,.1)",
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
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {product.price}
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#b76e79",
                    color: "#fff",
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

      {/* Features */}
      <section
        style={{
          padding: "60px 30px",
          textAlign: "center",
        }}
      >
        <h2>Why Choose Us?</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div>✅ Premium Quality</div>
          <div>🚚 Fast Delivery</div>
          <div>🔒 Secure Payment</div>
          <div>📞 WhatsApp Support</div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h2>Albatross Jewels</h2>
        <p>Elegance For Every Occasion</p>
        <p>support@albatrossjewels.com</p>
      </footer>
    </main>
  );
}