const experiences = [
  {
    name: "Arrivals Welcome Desk",
    text: "Plan your first afternoon on the island with licensed guides and trusted transfer partners."
  },
  {
    name: "Coastal Half-Day Routes",
    text: "Short scenic routes for arriving passengers with a few hours before hotel check-in."
  },
  {
    name: "Craft & Culture Stops",
    text: "Discover artisan markets, music, and local food experiences curated for visitors."
  }
];

export default function ThingsToDoPage() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">Things To Do</p>
        <h1>Start the island experience from arrivals.</h1>
        <p>Helpful ideas for passengers heading from AER into their stay.</p>
      </section>
      <section className="page-body">
        <div className="grid">
          {experiences.map((experience) => (
            <article className="card" key={experience.name}>
              <h3>{experience.name}</h3>
              <p>{experience.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
