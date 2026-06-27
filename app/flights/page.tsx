"use client";

import { useEffect, useState } from "react";
import flights from "@/data/flights.json";

type Board = "departures" | "arrivals";

function statusClass(status: string) {
  if (status === "On Time") {
    return "status-pill status-on-time";
  }

  if (status === "Boarding") {
    return "status-pill status-boarding";
  }

  if (status.includes("Delayed")) {
    return "status-pill status-delayed";
  }

  return "status-pill status-landed";
}

export default function FlightsPage() {
  const [board, setBoard] = useState<Board>("departures");
  const [updatedAt, setUpdatedAt] = useState("--:--");

  useEffect(() => {
    setUpdatedAt(
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" }).format(new Date())
    );
  }, []);

  const rows = flights[board];
  const placeColumn = board === "departures" ? "Destination" : "Origin";

  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">Flight Information</p>
        <h1>Departures & Arrivals</h1>
        <p>Demo flight information for Zephyr International Airport.</p>
      </section>
      <section className="page-body">
        <div className="tabs" role="tablist" aria-label="Flight board">
          <button
            type="button"
            role="tab"
            aria-selected={board === "departures"}
            onClick={() => setBoard("departures")}
          >
            Departures
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={board === "arrivals"}
            onClick={() => setBoard("arrivals")}
          >
            Arrivals
          </button>
        </div>
        <div className="flight-table-wrap">
          <table className="flight-table">
            <thead>
              <tr>
                <th>Flight</th>
                <th>Airline</th>
                <th>{placeColumn}</th>
                <th>Scheduled</th>
                <th>Status</th>
                <th>Gate</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${board}-${row.flight}`}>
                  <td>
                    <strong>{row.flight}</strong>
                  </td>
                  <td>{row.airline}</td>
                  <td>{"destination" in row ? row.destination : row.origin}</td>
                  <td>{row.scheduled}</td>
                  <td>
                    <span className={statusClass(row.status)}>{row.status}</span>
                  </td>
                  <td>{row.gate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="refresh-note">
          Last updated: {updatedAt}. Flight information is for demonstration purposes.
        </p>
      </section>
    </main>
  );
}
