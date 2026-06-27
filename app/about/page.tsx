const stats = [
  "1.2M passengers annually",
  "14 international routes",
  "Rated #1 for passenger experience in the Eastern Caribbean (fictional award)"
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">About AER</p>
        <h1>Zephyr International Airport</h1>
        <p>Gateway to the island since 1974. Serving the Caribbean and the world.</p>
      </section>
      <section className="page-body">
        <div className="grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat}>
              <h3>{stat}</h3>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 34, maxWidth: 860, fontSize: "1.12rem", lineHeight: 1.8 }}>
          Zephyr International Airport (AER) is the island&apos;s primary international
          gateway, connecting visitors from London, New York, Miami, Toronto, and across
          the Caribbean. A new generation of passenger experience technology is
          transforming how travellers move through AER - from arrival to departure and
          everything in between.
        </p>
      </section>
    </main>
  );
}
