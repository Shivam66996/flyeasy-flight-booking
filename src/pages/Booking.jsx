import { useLocation, useNavigate } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const seatData = location.state;

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/payment", {
      state: seatData
    });
  }

  return (
    <main className="form-page">
      <div className="form-container">
        <h1>Passenger Details</h1>
        <p>Enter your details to complete your booking.</p>

        {seatData && (
          <div className="selected-flight">
            <h2>Selected Seat</h2>
            <p>Seat: {seatData.seat}</p>
            <p>Class: {seatData.seatClass}</p>
            <h3>Seat Fee: ₹{seatData.seatPrice}</h3>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" required />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" required />
            </div>
          </div>

          <label>Email</label>
          <input type="email" placeholder="Email Address" required />

          <label>Phone</label>
          <input type="tel" placeholder="Phone Number" required />

          <label>Passport / ID</label>
          <input type="text" placeholder="ID Number" required />

          <button type="submit">Continue to Payment</button>
        </form>
      </div>
    </main>
  );
}

export default Booking;