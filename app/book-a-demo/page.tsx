const valuePoints = [
  {
    icon: "PX",
    label: "Passenger Experience",
    text: "A modern PWA your passengers can install and use offline."
  },
  {
    icon: "RO",
    label: "Revenue Opportunities",
    text: "Pre-order and collect drives concession revenue without operational complexity."
  },
  {
    icon: "BD",
    label: "Your Brand, Your Data",
    text: "White-label platform. Your airport's identity, your passenger insights."
  }
];

export default function BookDemoPage() {
  return (
    <main>
      <section className="demo-header">
        <p className="eyebrow">Zephyr International Airport - AER</p>
        <h1>See what this could look like for your airport</h1>
        <p>
          This is a working demo of a passenger experience platform built for Caribbean
          airports. Book a 30-minute call to see a version tailored to your airport.
        </p>
      </section>
      <section className="page-body">
        <div className="grid">
          {valuePoints.map((point) => (
            <article className="value-point" key={point.label}>
              <span className="brand-mark" aria-hidden="true">
                {point.icon}
              </span>
              <h3 style={{ marginTop: 18 }}>{point.label}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 34 }}>
          <iframe
            className="demo-frame"
            src="https://calendly.com/leahmbrowne/discover-call"
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a discovery call"
          />
        </div>
      </section>
    </main>
  );
}
