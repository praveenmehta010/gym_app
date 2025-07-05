// 🗺️ TrainerPage.jsx — Trainer Discovery Map + Cards
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const trainers = [
  {
    id: 1,
    name: "Ravi Patel",
    specialty: "Weight Loss",
    location: [28.6139, 77.209],
  },
  {
    id: 2,
    name: "Ananya Sharma",
    specialty: "Strength Training",
    location: [28.5355, 77.391],
  },
];

const TrainerPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📍 Find Trainers Nearby</h2>

      <div className="h-64 w-full rounded-xl overflow-hidden shadow mb-6">
        <MapContainer center={[28.6, 77.2]} zoom={10} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {trainers.map((trainer) => (
            <Marker position={trainer.location} key={trainer.id}>
              <Popup>
                <strong>{trainer.name}</strong>
                <br />{trainer.specialty}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{trainer.name}</h3>
            <p className="text-sm text-gray-500">{trainer.specialty}</p>
            <p className="text-xs text-gray-400 mt-1">Within 10km of your location</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerPage;
