import { useLocation } from "react-router-dom";
import flights from "../Data/flights.js";
import FlightCard from "../components/FlightCard";
import FlightMap from "../components/FlightMap";

function Flights() {
  const location = useLocation();

  const search = location.state;

  let filteredFlights = flights;

  if (search?.from && search?.to) {
    filteredFlights = flights.filter(
      (flight) =>
        flight.from.toLowerCase() === search.from.toLowerCase() &&
        flight.to.toLowerCase() === search.to.toLowerCase(),
    );
  }

  return (
    <main className="flights-page">
      <div className="page-heading">
        <span>FLIGHT SEARCH</span>
        <h1>Available Flights</h1>

        {search?.from && search?.to ? (
          <p>
            Flights from {search.from} to {search.to}
          </p>
        ) : (
          <p>Choose the perfect flight for your journey.</p>
        )}
      </div>

      <div className="flight-list">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        ) : (
          <div className="no-flights">
            <h2>No flights found</h2>
            <p>We couldn't find a flight for this route.</p>
          </div>
        )}
      </div>
      <div className="page-heading">
        <span>FLIGHT SEARCH</span>
        <h1>Available Flights</h1>

        {search?.from && search?.to ? (
          <p>
            Flights from {search.from} to {search.to}
          </p>
        ) : (
          <p>Choose the perfect flight for your journey.</p>
        )}
      </div>

      <FlightMap
  from={search?.from}
  to={search?.to}
/>

      <div className="flight-list"></div>
    </main>
  );
}

export default Flights;
