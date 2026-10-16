import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const airports = {
  delhi: [28.6139, 77.2090],
  mumbai: [19.0760, 72.8777],
  bangalore: [12.9716, 77.5946],
  bengaluru: [12.9716, 77.5946],
  kolkata: [22.5726, 88.3639],
  chennai: [13.0827, 80.2707],
  hyderabad: [17.3850, 78.4867],
  goa: [15.4909, 73.8278],
  pune: [18.5204, 73.8567]
};

function FlightMap({ from, to }) {
  const fromKey = from?.trim().toLowerCase();
  const toKey = to?.trim().toLowerCase();

  const fromPosition = airports[fromKey];
  const toPosition = airports[toKey];

  if (!fromPosition || !toPosition) {
    return (
      <div className="flight-map">
        <p style={{ padding: "30px", textAlign: "center" }}>
          Enter a supported city to view the flight route.
        </p>
      </div>
    );
  }

  return (
    <div className="flight-map">

      <MapContainer
        bounds={[fromPosition, toPosition]}
        scrollWheelZoom={true}
      >

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={fromPosition}>
          <Popup>
            <strong>{from}</strong>
            <br />
            Departure Airport
          </Popup>
        </Marker>

        <Marker position={toPosition}>
          <Popup>
            <strong>{to}</strong>
            <br />
            Arrival Airport
          </Popup>
        </Marker>

        <Polyline positions={[fromPosition, toPosition]} />

      </MapContainer>

    </div>
  );
}

export default FlightMap;