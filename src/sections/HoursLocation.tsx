import { CityBlock } from "../components/Ornaments";
import { reveal } from "../lib/reveal";
import "./hours-location.css";

const HOURS = [
  { days: "Tuesday – Thursday", time: "6pm – 1am" },
  { days: "Friday – Saturday", time: "6pm – 2am" },
  { days: "Sunday", time: "5pm – midnight" },
  { days: "Monday", time: "Dark" },
];

export function HoursLocation() {
  return (
    <section className="section hours" aria-labelledby="hours-title">
      <div className="shell hours__grid">
        <div className="hours__col">
          <p className="label" {...reveal(0)}>
            Find Us
          </p>
          <h2 className="section-title hours__title" id="hours-title" {...reveal(1)}>
            Fifth floor, Marquee Row.
          </h2>

          <address className="hours__address" {...reveal(2)}>
            The Orpheum Room
            <br />
            1927 Marquee Row, Fifth Floor
            <br />
            Bellhaven
            <br />
            <a className="hours__tel" href="tel:+15550119270">
              (555) 011-9270
            </a>
          </address>

          <dl className="hours__list" {...reveal(3)}>
            {HOURS.map((row) => (
              <div key={row.days} className="hours__row">
                <dt>{row.days}</dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>

          <p className="hours__note" {...reveal(4)}>
            The lounge takes walk-ins from five. The dining room does not.
          </p>
        </div>

        <div className="hours__map" {...reveal(1)}>
          <CityBlock className="hours__block" />
        </div>
      </div>
    </section>
  );
}
