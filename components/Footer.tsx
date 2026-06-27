import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">Zephyr International Airport - AER</p>
        <h2>Your Zephyr Airport guide</h2>
        <p>Premium passenger tools for flights, terminal services, island arrivals, and airside retail.</p>
      </div>
      <div className="footer-links">
        <Link href="/flights">Flights</Link>
        <Link href="/pre-order">Pre-Order</Link>
        <Link href="/about">About AER</Link>
        <Link href="/book-a-demo">Book a Demo</Link>
      </div>
    </footer>
  );
}
