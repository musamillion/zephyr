const venues = [
  {
    name: "The Trade Winds Bar & Kitchen",
    text: "Airside dining with Caribbean regional dishes, premium cocktails, and quick boarding-friendly service."
  },
  {
    name: "Zephyr Coffee Co.",
    text: "Fresh pastries, espresso, and grab-and-go breakfast before the morning departures bank."
  },
  {
    name: "Runway Market",
    text: "Snacks, bottled drinks, and travel essentials close to Gates A1-A4."
  }
];

export default function EatDrinkPage() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">Eat & Drink</p>
        <h1>Airside flavour before you fly.</h1>
        <p>Warm island hospitality, quick service, and premium spaces across the terminal.</p>
      </section>
      <section className="page-body">
        <div className="grid">
          {venues.map((venue) => (
            <article className="card" key={venue.name}>
              <h3>{venue.name}</h3>
              <p>{venue.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
