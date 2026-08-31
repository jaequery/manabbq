import { Rings, Sunburst } from "../components/Ornaments";
import { reveal } from "../lib/reveal";
import "./hero.css";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__ornament" aria-hidden="true">
        <Sunburst className="hero__sunburst spin" rays={48} duty={0.38} rInner={18} />
        <Rings className="hero__rings spin spin--reverse" />
      </div>

      <div className="shell hero__shell">
        <p className="label hero__eyebrow" {...reveal(0)}>
          Est. 1927 · Bellhaven
        </p>

        <hr className="rule hero__rule" {...reveal(1)} />

        <h1 className="display hero__title" {...reveal(2)}>
          Supper Under Gold
        </h1>

        <p className="lead hero__lead" {...reveal(3)}>
          Dinner, cocktails and quiet music, five floors above Marquee Row.
        </p>

        <hr className="rule hero__rule" {...reveal(4)} />

        <div className="hero__actions" {...reveal(5)}>
          <a className="btn btn--fill" href="#reserve">
            Reserve a Table
          </a>
          <a className="btn btn--ghost" href="#menu">
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}
