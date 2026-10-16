import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;
  const [method, setMethod] = useState("card");

  const flightPrice = booking?.price || 4500;
  const seatPrice = booking?.seatPrice || 0;
  const totalPrice = flightPrice + seatPrice;

  function handlePayment(e) {
  e.preventDefault();

  navigate("/confirmation", {
    state: {
      ...booking,
      flightPrice,
      seatPrice,
      totalPrice,
      method
    }
  });
}

  return (
    <main className="payment-page">
      <div className="payment-container">
        <div className="payment-left">
          <h1>Payment</h1>
          <p>Choose your preferred payment method.</p>

          <div className="payment-methods">
            <button
              type="button"
              onClick={() => setMethod("card")}
              className={method === "card" ? "active" : ""}
            >
              💳 Card
            </button>

            <button
              type="button"
              onClick={() => setMethod("upi")}
              className={method === "upi" ? "active" : ""}
            >
              📱 UPI
            </button>

            <button
              type="button"
              onClick={() => setMethod("netbanking")}
              className={method === "netbanking" ? "active" : ""}
            >
              🏦 Net Banking
            </button>
          </div>

          <form onSubmit={handlePayment}>
            {method === "card" && (
              <>
                <label>Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" required />

                <label>Card Holder Name</label>
                <input type="text" placeholder="Name on card" required />

                <div className="form-row">
                  <div>
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" required />
                  </div>

                  <div>
                    <label>CVV</label>
                    <input type="password" placeholder="CVV" required />
                  </div>
                </div>
              </>
            )}

            {method === "upi" && (
              <>
                <label>UPI ID</label>
                <input type="text" placeholder="example@upi" required />
              </>
            )}

            {method === "netbanking" && (
              <>
                <label>Select Bank</label>
                <select required>
                  <option value="">Select your bank</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                </select>
              </>
            )}

            <button type="submit" className="pay-btn">
              Pay ₹{totalPrice}
            </button>
          </form>
        </div>
        <div className="payment-summary">
          <h2>Booking Summary</h2>

          <div>
            <span>Flight Fare</span>
            <span>₹{flightPrice}</span>
          </div>

          <div>
            <span>{booking?.seatClass || "Seat"} Seat</span>
            <span>₹{seatPrice}</span>
          </div>

          <hr />

          <div className="total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Payment;
