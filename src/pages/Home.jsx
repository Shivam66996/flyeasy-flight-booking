import SearchBox from "../components/SearchBox";

function Home() {
  return (
    <main>

      <section className="hero">

        <div className="hero-content">
          <span>EXPLORE THE WORLD</span>

          <h1>
            Your Journey
            <br />
            Starts Here ✈️
          </h1>

          <p>
            Discover amazing destinations and book your perfect flight
            with FlyEasy.
          </p>
        </div>

        <SearchBox />

      </section>

      <section className="destinations">

        <h2>Popular Destinations</h2>

        <div className="destination-grid">

          <div className="destination-card">
            <div>🏖️</div>
            <h3>Goa</h3>
            <p>Starting ₹2,999</p>
          </div>

          <div className="destination-card">
            <div>🏔️</div>
            <h3>Manali</h3>
            <p>Starting ₹4,299</p>
          </div>

          <div className="destination-card">
            <div>🌆</div>
            <h3>Mumbai</h3>
            <p>Starting ₹3,499</p>
          </div>

          
          <div className="destination-card">
            <div>🌆</div>
            <h3>Gorakhpur</h3>
            <p>Starting ₹3,499</p>
          </div>

          <div className="destination-card">
            <div>🌴</div>
            <h3>Bangalore</h3>
            <p>Starting ₹4,199</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;