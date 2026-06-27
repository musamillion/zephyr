import Link from "next/link";

const navLinks = [
  { href: "/flights", label: "Flights" },
  { href: "/eat-drink", label: "Eat & Drink" },
  { href: "/things-to-do", label: "Things To Do" },
  { href: "/near-me", label: "Near Me" },
  { href: "/pre-order", label: "Pre-Order" }
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Zephyr International Airport home">
        <span className="brand-mark">AER</span>
        <span>
          <strong>Zephyr International Airport</strong>
          <small>Passenger Experience</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/book-a-demo">
          Book a Demo
        </Link>
      </nav>
    </header>
  );
}
