const stays = [
  "Beachfront resorts with licensed airport transfers",
  "Boutique hotels close to the capital",
  "Family villas with pre-arrival concierge support"
];

export default function StayPage() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">Stay</p>
        <h1>Where to stay after landing.</h1>
        <p>Passenger-friendly accommodation ideas for your time on the island.</p>
      </section>
      <section className="page-body">
        <div className="grid">
          {stays.map((stay) => (
            <article className="card" key={stay}>
              <h3>{stay}</h3>
              <p>Speak to the arrivals desk for current transport guidance and trusted local operators.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
