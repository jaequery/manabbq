import { reveal } from "../lib/reveal";
import "./reserve-cta.css";

export function ReserveCta() {
  return (
    <section className="reserve" id="reserve" aria-labelledby="reserve-title">
      <div className="shell reserve__inner">
        <p className="label reserve__label" {...reveal(0)}>
          Reservations
        </p>
        <h2 className="section-title reserve__title" id="reserve-title" {...reveal(1)}>
          The night starts at six.
        </h2>
        <p className="reserve__copy" {...reveal(2)}>
          Tables open thirty days out. Parties of seven or more, call the room directly.
        </p>
        <a className="btn btn--ink reserve__cta" href="tel:+15550119270" {...reveal(3)}>
          Reserve Now
        </a>
      </div>
    </section>
  );
}
