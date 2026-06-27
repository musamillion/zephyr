"use client";

import { useState } from "react";
import terminal from "@/data/terminal.json";

export default function NearMePage() {
  const [message, setMessage] = useState("Use your location to surface nearby terminal services.");

  const locate = () => {
    if (!navigator.geolocation) {
      setMessage("Geolocation is not available in this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => setMessage("Location received. Showing services nearest to your passenger journey."),
      () => setMessage("Location permission was not granted. You can still browse terminal services below.")
    );
  };

  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">Near Me</p>
        <h1>Find what you need at AER.</h1>
        <p>{message}</p>
        <div className="actions">
          <button className="button" type="button" onClick={locate}>
            Use My Location
          </button>
        </div>
      </section>
      <section className="page-body">
        <div className="map-panel">
          <p className="eyebrow">Terminal Map</p>
          <h2>Single terminal, simple wayfinding.</h2>
          <p>Mapbox-powered mapping is ready to connect with an airport access token.</p>
        </div>
        <div className="grid" style={{ marginTop: 24 }}>
          {terminal.facilities.map((facility) => (
            <article className="zone-card" key={facility.name}>
              <h3>{facility.name}</h3>
              <p>
                Zone: {facility.zone} · Hours: {facility.hours}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
