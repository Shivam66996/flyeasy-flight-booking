import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ✈️ FlyEasy
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/seatSelection">SeatSelection</Link>
        <Link to="/booking">Details</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/confirmation">My Bookings</Link>
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;