import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type MapDataProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

function MapComponent({ latitude, longitude, zoom }: MapDataProps) {
  return (
    <section id="map" className="w-full">
      <h2 className="font-bold text-2xl text-primary my-5 ">City Map</h2>
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom || 25}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "99%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default MapComponent;
