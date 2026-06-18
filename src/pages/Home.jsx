import { useState } from "react";
import properties from "../data";

function Home() {
  const [search, setSearch] = useState("");

  const filtered = properties.filter((item) =>
    item.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="navbar">
        <h2>🏠 Airbnb</h2>

        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="cards">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.location}</p>
            <h4>{item.price}</h4>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;