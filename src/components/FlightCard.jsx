import { useNavigate } from "react-router-dom";

function FlightCard({ flight }) {
  const navigate = useNavigate();

  return (
    <div className="flight-card">
      <div className="airline">
        <h3>✈️ {flight.airline}</h3>
        <span>{flight.flightNumber}</span>
      </div>

      <div className="flight-route">
        <div>
          <strong>{flight.departure}</strong>
          <p>{flight.from}</p>
        </div>

        <div className="route-line">─────────✈─────────</div>

        <div>
          <strong>{flight.arrival}</strong>
          <p>{flight.to}</p>
        </div>
      </div>

      <div className="flight-price">
        <span>Starting from</span>
        <strong>₹{flight.price}</strong>
        <button
          onClick={() =>
            navigate("/SeatSelection", {
              state: {
                flight,
              },
            })
          }
        >
          Select Seats
        </button>
      </div>
    </div>
  );
}

export default FlightCard;
