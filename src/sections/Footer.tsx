import { type FormEvent, useId, useState } from "react";
import { ChevronPattern, Monogram } from "../components/Ornaments";
import { reveal } from "../lib/reveal";
import "./footer.css";

const QUICK_LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#lounge", label: "The Lounge" },
  { href: "#events", label: "Private Events" },
  { href: "#reserve", label: "Reservations" },
];

export function Footer() {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSignedUp(true);
    setEmail("");
  }

  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__brand" {...reveal(0)}>
          <Monogram className="footer__monogram" />
          <p className="footer__tagline">
            The Orpheum Room. Supper and cocktails, five floors above Marquee Row since 1927.
          </p>
        </div>

        <nav className="footer__col" aria-labelledby="footer-links-title">
          <p className="label label--muted" id="footer-links-title" {...reveal(1)}>
            The Room
          </p>
          <ul className="footer__links" {...reveal(2)}>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a className="footer__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col" {...reveal(3)}>
          <p className="label label--muted" id="footer-news-title">
            The Programme
          </p>
          <p className="footer__note">
            One note a month. Openings, guest shifts, the odd unlisted evening.
          </p>

          <form
            className="footer__form"
            onSubmit={handleSubmit}
            aria-labelledby="footer-news-title"
          >
            <label className="u-visually-hidden" htmlFor={emailId}>
              Email address
            </label>
            <input
              className="field"
              id={emailId}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className="btn btn--ghost btn--sm" type="submit">
              Subscribe
            </button>
          </form>

          <p className="footer__status" role="status">
            {signedUp ? "Noted. Watch for the next programme." : ""}
          </p>
        </div>
      </div>

      <div className="footer__strip">
        <ChevronPattern className="footer__chevrons" />
        <div className="shell footer__strip-inner">
          <p>© 1927–2026 The Orpheum Room</p>
          <p>1927 Marquee Row · Bellhaven</p>
        </div>
      </div>
    </footer>
  );
}
