import { BannerOrnament } from "../components/Ornaments";
import { reveal } from "../lib/reveal";
import "./private-events.css";

export function PrivateEvents() {
  return (
    <section className="section section--tight events" id="events" aria-labelledby="events-title">
      <div className="shell">
        <div className="events__band" {...reveal(0)}>
          <BannerOrnament className="events__ornament" />

          <div className="events__body">
            <p className="label" {...reveal(1)}>
              Private Events
            </p>
            <h2 className="section-title events__title" id="events-title" {...reveal(2)}>
              Take the whole room.
            </h2>
            <p className="lead events__copy" {...reveal(3)}>
              Eighty seated, one hundred and forty standing, and a piano that comes with the floor.
            </p>
            <a className="btn btn--ghost events__cta" href="#reserve" {...reveal(4)}>
              Inquire for Private Events
            </a>
          </div>

          <BannerOrnament className="events__ornament events__ornament--flip" />
        </div>
      </div>
    </section>
  );
}
