import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  if (!booking) {
    return (
      <main className="confirmation-page">
        <h1>No Booking Found</h1>
    
        <button class="btnm" onClick={() => navigate("/")}>
          Go Home
        </button>
      </main>
    );
  }

  return (
    <main className="confirmation-page">

      <div className="confirmation-container">

        <div className="confirmation-header">
          <div className="success-icon">✓</div>

          <h1>Booking Confirmed!</h1>

          <p>
            Your flight has been successfully booked.
          </p>
        </div>

        <div className="booking-details">

          <h2>Booking Details</h2>

          {booking.flight && (
            <>
              <div className="detail-row">
                <span>Airline</span>
                <strong>{booking.flight.airline}</strong>
              </div>

              <div className="detail-row">
                <span>Flight Number</span>
                <strong>{booking.flight.flightNumber}</strong>
              </div>

              <div className="detail-row">
                <span>Route</span>
                <strong>
                  {booking.flight.from} → {booking.flight.to}
                </strong>
              </div>

              <div className="detail-row">
                <span>Departure</span>
                <strong>{booking.flight.departure}</strong>
              </div>

              <div className="detail-row">
                <span>Arrival</span>
                <strong>{booking.flight.arrival}</strong>
              </div>
            </>
          )}

          <div className="detail-row">
            <span>Seat</span>
            <strong>{booking.seat}</strong>
          </div>

          <div className="detail-row">
            <span>Class</span>
            <strong>{booking.seatClass}</strong>
          </div>

          <div className="detail-row">
            <span>Payment Method</span>
            <strong>{booking.method}</strong>
          </div>

          <hr />

          <div className="detail-row">
            <span>Flight Fare</span>
            <strong>₹{booking.flightPrice}</strong>
          </div>

          <div className="detail-row">
            <span>Seat Fee</span>
            <strong>₹{booking.seatPrice}</strong>
          </div>

          <div className="detail-row total">
            <span>Total Paid</span>
            <strong>₹{booking.totalPrice}</strong>
          </div>

        </div>

        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>

      </div>

    </main>
  );
}

export default Confirmation;