import { Monogram } from "../components/Ornaments";
import "./nav-bar.css";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#lounge", label: "Lounge" },
  { href: "#events", label: "Events" },
];

export function NavBar() {
  return (
    <header className="nav">
      <nav className="nav__inner" aria-label="Primary">
        <a className="nav__brand" href="#top">
          <Monogram className="nav__monogram" />
          <span className="u-visually-hidden">The Orpheum Room — back to top</span>
        </a>

        <ul className="nav__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a className="ulink" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__cta">
          <a className="btn btn--fill btn--sm" href="#reserve">
            Reserve<span className="nav__cta-rest">{" a Table"}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
