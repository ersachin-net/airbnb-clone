import { useState } from "react";
import "./App.css";

function App() {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa",
      location: "Goa",
      price: "₹8,000/night",
      rating: "⭐ 4.9",
      image: "https://picsum.photos/500/300?random=1",
    },
    {
      id: 2,
      title: "Beach House",
      location: "Kerala",
      price: "₹6,500/night",
      rating: "⭐ 4.8",
      image: "https://picsum.photos/500/300?random=2",
    },
    {
      id: 3,
      title: "Mountain Cabin",
      location: "Manali",
      price: "₹5,000/night",
      rating: "⭐ 4.7",
      image: "https://picsum.photos/500/300?random=3",
    },
    {
      id: 4,
      title: "Lake View Resort",
      location: "Udaipur",
      price: "₹7,200/night",
      rating: "⭐ 4.8",
      image: "https://picsum.photos/500/300?random=4",
    },
  ];

  const [search, setSearch] = useState("");

  const filtered = properties.filter((item) =>
    item.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <h2>🏠 Airbnb Clone</h2>

        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      <div className="cards">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <div className="wishlist">❤️</div>

            <img src={item.image} alt={item.title} />

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <p>{item.rating}</p>
              <h4>{item.price}</h4>

              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© 2026 Airbnb Clone | Made by Sachin</p>
      </footer>
    </>
  );
}

export default App;