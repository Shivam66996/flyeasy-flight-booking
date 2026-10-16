import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  
  function handleSearch() {
    navigate("/flights", {
      state: {
        from,
        to,
        date,
        passengers
      }
    });
  }


  return (
    <div className="search-box">

      <div className="input-group">
        <label>From</label>
        <input
          type="text"
          placeholder="Delhi"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>To</label>
        <input
          type="text"
          placeholder="Mumbai"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Departure</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Passengers</label>
        <input
          type="number"
          min="1"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}>
        Search Flights
      </button>

    </div>
  );
}

export default SearchBox;