import Link from "next/link";
import { ConciergeWidget } from "@/components/ConciergeWidget";
import terminal from "@/data/terminal.json";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Zephyr International Airport - AER</p>
          <h1>Premium passenger guidance for the island gateway.</h1>
          <p>
            Check flights, find airside facilities, explore nearby experiences, and preview
            pre-order collection for a calmer journey through AER.
          </p>
          <div className="actions">
            <Link className="button" href="/flights">
              View Flights
            </Link>
            <Link className="button-outline" href="/book-a-demo">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">Passenger essentials</p>
        <h2>Everything travellers need, tuned for a Caribbean airport.</h2>
        <div className="grid" style={{ marginTop: 28 }}>
          {terminal.zones.slice(0, 3).map((zone) => (
            <article className="card" key={zone.id}>
              <h3>{zone.name}</h3>
              <p>{zone.description}</p>
            </article>
          ))}
        </div>
      </section>
      <ConciergeWidget />
    </main>
  );
}
