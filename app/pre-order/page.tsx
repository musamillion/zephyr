import Link from "next/link";

const concepts = [
  {
    title: "Duty Free",
    text: "Browse spirits, fragrances, and luxury goods. Collect airside before boarding."
  },
  {
    title: "Island Provisions",
    text: "Local rum, hot sauce, and artisan goods. Pre-packed and ready to collect."
  },
  {
    title: "The Trade Winds Kitchen",
    text: "Order your meal ahead. Ready when you clear security."
  }
];

export default function PreOrderPage() {
  return (
    <main>
      <section className="page-header">
        <p className="eyebrow">Pre-Order Preview</p>
        <h1>Shop Before You Fly</h1>
        <p>Order from airside retailers and collect at your gate. No queues, no rushing.</p>
      </section>
      <section className="page-body">
        <div className="grid">
          {concepts.map((concept) => (
            <article className="card" key={concept.title}>
              <h3>{concept.title}</h3>
              <p>{concept.text}</p>
            </article>
          ))}
        </div>
        <div className="actions">
          <Link className="button" href="/book-a-demo">
            COMING SOON - REGISTER YOUR INTEREST
          </Link>
        </div>
      </section>
    </main>
  );
}
