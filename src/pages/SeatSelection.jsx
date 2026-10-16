import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

function SeatSelection() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedClass, setSelectedClass] = useState("Economy");
  const [selectedSeat, setSelectedSeat] = useState(null);

  const seats = [
    { number: "1A", class: "Business", occupied: false },
    { number: "1B", class: "Business", occupied: true },
    { number: "1C", class: "Business", occupied: false },
    { number: "1D", class: "Business", occupied: false },

    { number: "2A", class: "Business", occupied: false },
    { number: "2B", class: "Business", occupied: false },
    { number: "2C", class: "Business", occupied: true },
    { number: "2D", class: "Business", occupied: false },

    { number: "3A", class: "Premium Economy", occupied: false },
    { number: "3B", class: "Premium Economy", occupied: false },
    { number: "3C", class: "Premium Economy", occupied: true },
    { number: "3D", class: "Premium Economy", occupied: false },

    { number: "4A", class: "Premium Economy", occupied: false },
    { number: "4B", class: "Premium Economy", occupied: false },
    { number: "4C", class: "Premium Economy", occupied: false },
    { number: "4D", class: "Premium Economy", occupied: true },

    { number: "5A", class: "Economy", occupied: false },
    { number: "5B", class: "Economy", occupied: false },
    { number: "5C", class: "Economy", occupied: true },
    { number: "5D", class: "Economy", occupied: false },

    { number: "6A", class: "Economy", occupied: false },
    { number: "6B", class: "Economy", occupied: true },
    { number: "6C", class: "Economy", occupied: false },
    { number: "6D", class: "Economy", occupied: false },

    { number: "7A", class: "Economy", occupied: false },
    { number: "7B", class: "Economy", occupied: false },
    { number: "7C", class: "Economy", occupied: false },
    { number: "7D", class: "Economy", occupied: false },

    { number: "8A", class: "Economy", occupied: true },
    { number: "8B", class: "Economy", occupied: false },
    { number: "8C", class: "Economy", occupied: false },
    { number: "8D", class: "Economy", occupied: false },

    { number: "9A", class: "Economy", occupied: true },
    { number: "9B", class: "Economy", occupied: false },
    { number: "9C", class: "Economy", occupied: false },
    { number: "9D", class: "Economy", occupied: false },

    { number: "10A", class: "Economy", occupied: true },
    { number: "10B", class: "Economy", occupied: false },
    { number: "10C", class: "Economy", occupied: false },
    { number: "10D", class: "Economy", occupied: false },

    { number: "11A", class: "Economy", occupied: true },
    { number: "11B", class: "Economy", occupied: false },
    { number: "11C", class: "Economy", occupied: false },
    { number: "11D", class: "Economy", occupied: false },

    { number: "12A", class: "Economy", occupied: true },
    { number: "12B", class: "Economy", occupied: false },
    { number: "12C", class: "Economy", occupied: false },
    { number: "12D", class: "Economy", occupied: false },
  ];

  const visibleSeats = seats.filter((seat) => seat.class === selectedClass);

  const seatPrices = {
    Economy: 500,
    "Premium Economy": 1000,
    Business: 2000,
  };

  function selectSeat(seat) {
    if (!seat.occupied) {
      setSelectedSeat(seat);
    }
  }

  function continueBooking() {
    if (!selectedSeat) {
      alert("Please select a seat first.");
      return;
    }

    navigate("/booking", {
      state: {
        
        flight: location.state?.flight,
        seat: selectedSeat.number,
        seatClass: selectedSeat.class,
        seatPrice: seatPrices[selectedSeat.class],
      },
    });
  }

  return (
    <main className="seat-page">
      <div className="seat-heading">
        <span>FLY EASY</span>
        <h1>Select Your Seat</h1>
        <p>Choose your preferred class and seat.</p>
      </div>

      <div className="class-selection">
        {Object.keys(seatPrices).map((className) => (
          <button
            key={className}
            className={selectedClass === className ? "active" : ""}
            onClick={() => {
              setSelectedClass(className);
              setSelectedSeat(null);
            }}
          >
            {className}
            <small>₹{seatPrices[className]}</small>
          </button>
        ))}
      </div>

      <div className="aircraft">
        <div className="cockpit">
          ✈️
          <span>COCKPIT</span>
        </div>

        <div className="seat-label">
          <span>A</span>
          <span>B</span>
          <span></span>
          <span>C</span>
          <span>D</span>
        </div>
        {Array.from(
          { length: Math.ceil(visibleSeats.length / 4) },
          (_, rowIndex) => {
            const rowSeats = visibleSeats.slice(rowIndex * 4, rowIndex * 4 + 4);

            return (
              <div className="seat-row" key={rowIndex}>
                {rowSeats.slice(0, 2).map((seat) => (
                  <button
                    key={seat.number}
                    className={`seat ${
                      seat.occupied
                        ? "occupied"
                        : selectedSeat?.number === seat.number
                          ? "selected"
                          : "available"
                    }`}
                    disabled={seat.occupied}
                    onClick={() => selectSeat(seat)}
                  >
                    {seat.number}
                  </button>
                ))}

                <div className="aisle"></div>

                {rowSeats.slice(2, 4).map((seat) => (
                  <button
                    key={seat.number}
                    className={`seat ${
                      seat.occupied
                        ? "occupied"
                        : selectedSeat?.number === seat.number
                          ? "selected"
                          : "available"
                    }`}
                    disabled={seat.occupied}
                    onClick={() => selectSeat(seat)}
                  >
                    {seat.number}
                  </button>
                ))}
              </div>
            );
          },
        )}
      </div>

      <div className="seat-info">
        <div className="legend">
          <span>
            <i className="available-box"></i>
            Available
          </span>

          <span>
            <i className="selected-box"></i>
            Selected
          </span>

          <span>
            <i className="occupied-box"></i>
            Occupied
          </span>
        </div>

        <div className="selected-info">
          <h2>
            {selectedSeat ? `Seat ${selectedSeat.number}` : "No Seat Selected"}
          </h2>

          <p>
            {selectedSeat
              ? `${selectedSeat.class} • ₹${seatPrices[selectedSeat.class]}`
              : "Please select a seat to continue."}
          </p>

          <button onClick={continueBooking}>
            Continue to Passenger Details
          </button>
        </div>
      </div>
    </main>
  );
}

export default SeatSelection;
